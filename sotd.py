import re
import matplotlib.pyplot as plt

spotify_re = r"https://open\.spotify\.com/track/[A-Za-z0-9]+"
song_data = []

# -------------------------
# data visualisation
# -------------------------
def draw_topartists():
    artist_count = {}
    for entry in song_data:
        song_name = entry["songartist"]
        if song_name in artist_count:
            artist_count[song_name] += 1
        else:
            artist_count[song_name] = 1

    song_names = list(artist_count.keys())             
    song_count = list(artist_count.values())             

    plt.pie(song_count, labels=song_names)

    plt.axis('equal')
    plt.show()

# -------------------------
# data extraction
# -------------------------
def parse_line(line):
    global song_data

    seg_str = line.split(">")

    # get song name
    song_name = seg_str[1].split("<")[0] 

    # get artist name
    artist_name = seg_str[2].split("<")[0][3:]

    # get spotify link
    match = re.search(spotify_re, line)
    if match:
        link = match.group()

    line_dict = {"songname":song_name, "songartist":artist_name, "spotifylink":link}
    song_data.append(line_dict)

if __name__ == "__main__":
    print("starting sotd visualiser")

    is_song_line = False
    start_phrase = 'id="pastsongs"'

    with open("pastsongs.html", "r", encoding="utf-8") as file:
        for line in file:
            # end parser
            if re.sub(r"\s", "", line) == "<br>":
                is_song_line = False

            # do parser
            if is_song_line:
                parse_line(line)

            # start parser
            if start_phrase in line:
                is_song_line = True

    print(song_data)
    draw_topartists()