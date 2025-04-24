import os

# Gather and sort .jpg files
jpg_files = sorted(
    [f for f in os.listdir('.') if f.lower().endswith('.jpg')],
    key=lambda x: int(os.path.splitext(x)[0]) if os.path.splitext(x)[0].isdigit() else x
)

# Prepend path
full_paths = [f'"photographs/{f}"' for f in jpg_files]

# Join as JavaScript array
js_array = "let picz_arr = [\n    " + ",\n    ".join(full_paths) + "\n];"

print(js_array)