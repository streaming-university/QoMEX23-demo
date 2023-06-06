#!/bin/bash
name="no-event"
duration=30

mkdir -p frames/"$name"_20
for j in $(seq 0.1 1 $duration); do
  ffmpeg -ss "$j" -i "$name"*20.mp4 -vframes 1 frames/"$name"_20/"$j".png
done

for h in $(seq 30 10 50); do
  mkdir -p frames/"$name"_"$h"_spliced
  mkdir -p frames/"$name"_"$h"
  for j in $(seq 0.1 1 $duration); do
    ffmpeg -ss "$j" -i "$name"*"$h"_spliced.mp4 -vframes 1 frames/"$name"_"$h"_spliced/"$j".png
  done
  for j in $(seq 0.1 1 $duration); do
    ffmpeg -ss "$j" -i "$name"*"$h".mp4 -vframes 1 frames/"$name"_"$h"/"$j".png
  done
done

