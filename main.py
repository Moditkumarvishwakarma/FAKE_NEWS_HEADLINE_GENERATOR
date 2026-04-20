import pandas as pd
import json

data = pd.read_csv("data.csv").dropna()

names = data["Famous_Celebrities"].tolist()
places = data["Places"].tolist()
actions = data["Funny_Actions"].tolist()

with open("data.js", "w") as f:
    f.write(f"const names = {json.dumps(names)};\n")
    f.write(f"const places = {json.dumps(places)};\n")
    f.write(f"const actions = {json.dumps(actions)};\n")

print("Website data successfully compiled into data.js!")
