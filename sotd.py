import re
import matplotlib.pyplot as plt

import spotipy
from spotipy.oauth2 import SpotifyClientCredentials

spotify_id = "291d06ca49ce40f4a71b9f479a8b5628"
spotify_secret = ""

spotify_re = r"https://open\.spotify\.com/track/[A-Za-z0-9]+"
song_data = []

# -------------------------
# data visualisation
# -------------------------
def get_topbottom_stats():
    hi_dance  = [None, 0]
    lo_dance  = [None, 9999999999]
    hi_energy = [None, 0]
    lo_energy = [None, 9999999999]
    hi_happy  = [None, 0]
    lo_happy  = [None, 9999999999]
    hi_speach = [None, 0]
    lo_speach = [None, 9999999999]

    for entry in song_data:
        song = f"{entry['songname']} - {entry['songartist']}"
        details = entry["details"]

        try:
            dance = details["danceability"]
            energy= details["energy"]
            happy = details["valence"]
            speach= details["speechiness"]
        except:
            print(f"error with song {song}")
            continue

        if dance > hi_dance[1]:
            hi_dance[0] = song
            hi_dance[1] = dance
        if dance < lo_dance[1]:
            lo_dance[0] = song
            lo_dance[1] = dance
        
        if energy > hi_energy[1]:
            hi_energy[0] = song
            hi_energy[1] = energy
        if energy < lo_energy[1]:
            lo_energy[0] = song
            lo_energy[1] = energy

        if happy > hi_happy[1]:
            hi_happy[0] = song
            hi_happy[1] = happy
        if happy < lo_happy[1]:
            lo_happy[0] = song
            lo_happy[1] = happy
        
        if speach > hi_speach[1]:
            hi_speach[0] = song
            hi_speach[1] = speach
        if speach < lo_speach[1]:
            lo_speach[0] = song
            lo_speach[1] = speach

    print(f"highest energy song : {hi_energy[0]} with a rating of {hi_energy[1]}")
    print(f"least energetic song : {lo_energy[0]} with a rating of {lo_energy[1]}")
    print(f"happiest song : {hi_happy[0]} with a rating of {hi_happy[1]} :)")
    print(f"saddest : {lo_happy[0]} with a rating of {lo_happy[1]} :(")
    print(f"most speech-y song : {hi_speach[0]} with a rating of {hi_speach[1]}")
    print(f"least speech-y song : {lo_speach[0]} with a rating of {lo_speach[1]}")
    print(f"most danceable song : {hi_dance[0]} with a rating of {hi_dance[1]}")
    print(f"least danceable song : {lo_dance[0]} with a rating of {lo_dance[1]}")


def draw_topartists():
    artist_count_dict = {}
    
    # get artist count 
    for entry in song_data:
        artist = entry["songartist"]
        if artist in artist_count_dict:
            artist_count_dict[artist] += 1
        else:
            artist_count_dict[artist] = 1

    # prune artists that appear < 4 times
    misc_count = 0
    artists_to_remove = []
    for artist, count in artist_count_dict.items():
        if count < 4:
            misc_count += count
            artists_to_remove.append(artist)

    for artist in artists_to_remove:
        del artist_count_dict[artist]

    artist_count_dict["other"] = misc_count

    artist_count_dict = {k: v for k, v in sorted(artist_count_dict.items(), key=lambda item: item[1])}
    print(artist_count_dict)

    song_names = list(artist_count_dict.keys())             
    song_count = list(artist_count_dict.values())             

    plt.style.use("ggplot")
    plt.pie(song_count, labels=song_names, startangle=90)
    plt.axis("equal")
    plt.tight_layout()
    plt.show()

# -------------------------
# data extraction
# -------------------------
def parse_line(line, sp):
    global song_data

    seg_str = line.split(">")

    # get song name
    song_name = seg_str[1].split("<")[0] 

    # get artist name
    artist_name = seg_str[2].split("<")[0][3:]

    # get spotify link & details
    match = re.search(spotify_re, line)
    link = match.group()

    song_id = link.split("/track/")[1]
    details = sp.audio_features([song_id])[0]

    line_dict = {"songname":song_name, "songartist":artist_name, "details":details}

    song_data.append(line_dict)

if __name__ == "__main__":
    print("starting sotd visualiser")

    client_credentials_manager = SpotifyClientCredentials(client_id=spotify_id, client_secret=spotify_secret)
    sp = spotipy.Spotify(client_credentials_manager=client_credentials_manager)

    is_song_line = False
    start_phrase = 'id="pastsongs"'

    c_count = 0
    with open("pastsongs.html", "r", encoding="utf-8") as file:
        for line in file:
            # end parser
            if re.sub(r"\s", "", line) == "<br>":
                is_song_line = False

            # do parser
            if is_song_line:
                parse_line(line, sp)

            # start parser
            if start_phrase in line:
                is_song_line = True

    # print(song_data)
    draw_topartists()
    get_topbottom_stats()