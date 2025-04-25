import os

jpg_files = sorted(
    [f for f in os.listdir('.') if f.lower().endswith('.jpg')],
    key=lambda x: int(os.path.splitext(x)[0]) if os.path.splitext(x)[0].isdigit() else x
)

full_paths = [f'"photographs/{f}"' for f in jpg_files]
js_array = "const picz_arr = [\n    " + ",\n    ".join(full_paths) + "\n];"

with open('output.txt', 'w', encoding='utf-8') as f:
    f.write(js_array)