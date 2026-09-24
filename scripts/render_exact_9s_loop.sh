#!/bin/bash
set -e

mkdir -p /tmp/chef_fast
IMG_INTRO="src/assets/images/chefemind_grid_intro_1788992478770.jpg"
IMG_MASCOT="src/assets/images/chefemind_mascot_3d_1788992452733.jpg"
IMG_SYNAPSES="src/assets/images/chefemind_synapses_1788992466655.jpg"
IMG_OUTRO="src/assets/images/chefemind_outro.jpg"

ffmpeg -y -loop 1 -i "$IMG_INTRO" -vf "scale=1280:720,zoompan=z='min(zoom+0.0012,1.08)':d=78:x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':s=1280x720:fps=30" -t 2.6 -c:v libx264 -preset fast -pix_fmt yuv420p /tmp/chef_fast/c1.mp4

ffmpeg -y -loop 1 -i "$IMG_MASCOT" -vf "scale=1280:720,zoompan=z='min(zoom+0.0008,1.05)':d=84:x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':s=1280x720:fps=30" -t 2.8 -c:v libx264 -preset fast -pix_fmt yuv420p /tmp/chef_fast/c2.mp4

ffmpeg -y -loop 1 -i "$IMG_SYNAPSES" -vf "scale=1280:720,zoompan=z='min(zoom+0.001,1.06)':d=84:x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':s=1280x720:fps=30" -t 2.8 -c:v libx264 -preset fast -pix_fmt yuv420p /tmp/chef_fast/c3.mp4

ffmpeg -y -loop 1 -i "$IMG_OUTRO" -vf "scale=1280:720,zoompan=z='min(zoom+0.0008,1.04)':d=78:x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':s=1280x720:fps=30" -t 2.6 -c:v libx264 -preset fast -pix_fmt yuv420p /tmp/chef_fast/c4.mp4

ffmpeg -y \
  -i /tmp/chef_fast/c1.mp4 \
  -i /tmp/chef_fast/c2.mp4 \
  -i /tmp/chef_fast/c3.mp4 \
  -i /tmp/chef_fast/c4.mp4 \
  -filter_complex \
  "[0:v][1:v]xfade=transition=fade:duration=0.4:offset=2.2[v01]; \
   [v01][2:v]xfade=transition=fade:duration=0.4:offset=4.6[v02]; \
   [v02][3:v]xfade=transition=fade:duration=0.4:offset=7.0[vfinal]" \
  -map "[vfinal]" \
  -c:v libx264 -preset fast -crf 20 -pix_fmt yuv420p -movflags +faststart \
  public/assets/chefemind-loop-v3.mp4

mkdir -p dist/assets
cp public/assets/chefemind-loop-v3.mp4 public/assets/chefemind-bg-loop.mp4
cp public/assets/chefemind-loop-v3.mp4 public/assets/chefemind-quantum.mp4
cp public/assets/chefemind-loop-v3.mp4 public/assets/chefemind-mascot.mp4
cp public/assets/chefemind-loop-v3.mp4 dist/assets/chefemind-loop-v3.mp4
cp public/assets/chefemind-loop-v3.mp4 dist/assets/chefemind-bg-loop.mp4

echo "9.2s loop generated successfully!"
ffprobe -show_entries format=duration,size public/assets/chefemind-loop-v3.mp4
