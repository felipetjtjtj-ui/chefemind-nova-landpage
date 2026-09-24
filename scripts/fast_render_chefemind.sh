#!/bin/bash
set -e
mkdir -p /tmp/cm_vid

IMG1="src/assets/images/chefemind_grid_intro_1788992478770.jpg"
IMG2="src/assets/images/chefemind_mascot_3d_1788992452733.jpg"
IMG3="src/assets/images/chefemind_synapses_1788992466655.jpg"
IMG4="src/assets/images/chefemind_outro.jpg"

# Render each segment at 1280x720 30fps
ffmpeg -y -loop 1 -framerate 30 -t 2.0 -i "$IMG1" \
  -vf "scale=1280:720:force_original_aspect_ratio=increase,crop=1280:720" \
  -c:v libx264 -preset ultrafast -pix_fmt yuv420p /tmp/cm_vid/c1.mp4

ffmpeg -y -loop 1 -framerate 30 -t 2.8 -i "$IMG2" \
  -vf "scale=1280:720:force_original_aspect_ratio=increase,crop=1280:720" \
  -c:v libx264 -preset ultrafast -pix_fmt yuv420p /tmp/cm_vid/c2.mp4

ffmpeg -y -loop 1 -framerate 30 -t 2.2 -i "$IMG3" \
  -vf "scale=1280:720:force_original_aspect_ratio=increase,crop=1280:720" \
  -c:v libx264 -preset ultrafast -pix_fmt yuv420p /tmp/cm_vid/c3.mp4

ffmpeg -y -loop 1 -framerate 30 -t 2.0 -i "$IMG4" \
  -vf "scale=1280:720:force_original_aspect_ratio=increase,crop=1280:720" \
  -c:v libx264 -preset ultrafast -pix_fmt yuv420p /tmp/cm_vid/c4.mp4

# Crossfade them together:
# c1 (2.0s) -> c2 (2.8s) offset 1.5 dur 0.5 -> 4.3s
# -> c3 (2.2s) offset 3.8 dur 0.5 -> 6.0s
# -> c4 (2.0s) offset 5.5 dur 0.5 (fadewhite) -> 7.0s
ffmpeg -y \
  -i /tmp/cm_vid/c1.mp4 \
  -i /tmp/cm_vid/c2.mp4 \
  -i /tmp/cm_vid/c3.mp4 \
  -i /tmp/cm_vid/c4.mp4 \
  -filter_complex \
  "[0:v][1:v]xfade=transition=fade:duration=0.5:offset=1.5[v01]; \
   [v01][2:v]xfade=transition=fade:duration=0.5:offset=3.8[v02]; \
   [v02][3:v]xfade=transition=fadewhite:duration=0.6:offset=5.5[vout]" \
  -map "[vout]" \
  -c:v libx264 -preset fast -crf 20 -pix_fmt yuv420p -movflags +faststart \
  public/assets/chefemind-quantum.mp4

cp public/assets/chefemind-quantum.mp4 public/assets/chefemind-mascot.mp4
mkdir -p dist/assets
cp public/assets/chefemind-quantum.mp4 dist/assets/chefemind-quantum.mp4

echo "VIDEO COMPLETED!"
ls -lh public/assets/chefemind-quantum.mp4
ffprobe -v error -show_entries format=duration,size:stream=width,height,r_frame_rate public/assets/chefemind-quantum.mp4
