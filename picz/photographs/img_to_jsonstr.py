import os
from PIL import Image

MAX_SIZE = (800, 800)   # max width/height of the downsized copies, tweak as needed
JPEG_QUALITY = 85

def base(f):
    return os.path.splitext(f)[0]

# skip any existing "-down" files so re-running doesn't create name-down-down.jpg
jpg_files = sorted(
    [
        f for f in os.listdir('.')
        if f.lower().endswith('.jpg') and not base(f).lower().endswith('-down')
    ],
    key=lambda x: int(base(x)) if base(x).isdigit() else x
)

small_files = []
for f in jpg_files:
    name, ext = os.path.splitext(f)
    small_name = f"{name}-down{ext}"
    with Image.open(f) as img:
        img.thumbnail(MAX_SIZE, Image.LANCZOS)  # keeps aspect ratio, only shrinks
        img.save(small_name, quality=JPEG_QUALITY, optimize=True)
    small_files.append(small_name)

full_paths = [f'"photographs/{f}"' for f in jpg_files]
small_paths = [f'"photographs/{f}"' for f in small_files]

js_array = "const picz_arr = [\n    " + ",\n    ".join(full_paths) + "\n];"
js_small_array = "const picz_small_arr = [\n    " + ",\n    ".join(small_paths) + "\n];"

with open('output.txt', 'w', encoding='utf-8') as f:
    f.write(js_array + "\n\n" + js_small_array + "\n")
