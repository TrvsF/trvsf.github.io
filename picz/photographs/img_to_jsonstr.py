#!/usr/bin/env python3

import json
import os
import re
import sys

from PIL import Image, ImageOps

MAX_SIZE = (800, 800)
JPEG_QUALITY = 85
EXTENSIONS = (".jpg", ".jpeg")
WEB_PREFIX = "photographs"
DATA_FILE = "picz-data.js"

FORCE = "--force" in sys.argv


def base(filename):
    return os.path.splitext(filename)[0]


def is_downsized(filename):
    """Skip existing -down files so re-running doesn't make name-down-down.jpg."""
    return base(filename).lower().endswith("-down")


def sort_key(filename):
    return tuple(
        (1, int(part)) if part.isdigit() else (0, part)
        for part in re.split(r"(\d+)", base(filename))
    )


def is_stale(source, thumb):
    if FORCE or not os.path.exists(thumb):
        return True
    return os.path.getmtime(thumb) < os.path.getmtime(source)


def downsize(source, thumb):
    with Image.open(source) as img:
        img = ImageOps.exif_transpose(img)

        if img.mode not in ("RGB", "L", "CMYK"):
            img = img.convert("RGB")

        img.thumbnail(MAX_SIZE, Image.LANCZOS)
        img.save(
            thumb,
            format="JPEG",
            quality=JPEG_QUALITY,
            optimize=True,
            icc_profile=img.info.get("icc_profile"),
        )


def js_array(name, files):
    if not files:
        return f"const {name} = [];"
    entries = ",\n    ".join(json.dumps(f"{WEB_PREFIX}/{f}") for f in files)
    return f"const {name} = [\n    {entries}\n];"


def main():
    jpg_files = sorted(
        (
            f
            for f in os.listdir(".")
            if f.lower().endswith(EXTENSIONS)
            and not is_downsized(f)
            and os.path.isfile(f)
        ),
        key=sort_key,
    )

    full_files = []
    small_files = []
    built = 0

    for f in jpg_files:
        name, ext = os.path.splitext(f)
        small_name = f"{name}-down{ext}"

        try:
            if is_stale(f, small_name):
                downsize(f, small_name)
                built += 1
        except Exception as exc:
            print(f"skipping {f}: {exc}", file=sys.stderr)
            continue

        full_files.append(f)
        small_files.append(small_name)

    with open(DATA_FILE, "w", encoding="utf-8") as out:
        out.write(js_array("picz_arr", full_files) + "\n\n")
        out.write(js_array("picz_small_arr", small_files) + "\n")

    print(f"{len(full_files)} photos, {built} thumbnails built, wrote {DATA_FILE}")


if __name__ == "__main__":
    main()