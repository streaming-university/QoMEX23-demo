#!/bin/bash
name="no-event"
path=videos/"$name"
duration=900

selected=""
for j in $(seq 10 30 $duration); do
  selected+="eq(n\,$j)+"
done

# following line is to remove the last plus sign
selected=${selected%?}

# reference video
mkdir -p frames/"$name"_20
ffmpeg -i "$path"*20.mp4 -vf select="$selected" -vsync 0 frames/"$name"_20/%0d.png

for h in $(seq 30 10 50); do
  mkdir -p frames/"$name"_"$h"_spliced
  mkdir -p frames/"$name"_"$h"

  ffmpeg -i "$path"*"$h"_spliced.mp4 -vf select="$selected" -vsync 0 frames/"$name"_"$h"_spliced/%0d.png
  ffmpeg -i "$path"*"$h".mp4 -vf select="$selected" -vsync 0 frames/"$name"_"$h"/%0d.png
done
