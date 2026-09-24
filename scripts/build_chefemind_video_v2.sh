#!/bin/bash
set -e

mkdir -p /tmp/chef_render
IMG_INTRO="src/assets/images/chefemind_grid_intro_1788992478770.jpg"
IMG_MASCOT="src/assets/images/chefemind_mascot_3d_1788992452733.jpg"
IMG_SYNAPSES="src/assets/images/chefemind_synapses_1788992466655.jpg"
IMG_OUTRO="src/assets/images/chefemind_outro.jpg"

# Clip 1: Intro (2.4s)
ffmpeg -y -loop 1 -t 2.4 -i "$IMG_INTRO" \
  -vf "scale=1920:1080,zoompan=z='min(zoom+0.0012,1.08)':d=72:x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':s=1280x720:fps=30" \
  -c:v libx264 -preset ultrafast -pix_fmt yuv420p /tmp/chef_render/c1.mp4

# Clip 2: 3D Robot Mascot (2.8s)
ffmpeg -y -loop 1 -t 2.8 -i "$IMG_MASCOT" \
  -vf "scale=1920:1080,zoompan=z='min(zoom+0.0008,1.05)':d=84:x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':s=1280x720:fps=30" \
  -c:v libx264 -preset ultrafast -pix_fmt yuv420p /tmp/chef_render/c2.mp4

# Clip 3: Synaptic Multiconnect Web (2.8s)
ffmpeg -y -loop 1 -t 2.8 -i "$IMG_SYNAPSES" \
  -vf "scale=1920:1080,zoompan=z='min(zoom+0.001,1.06)':d=84:x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':s=1280x720:fps=30" \
  -c:v libx264 -preset ultrafast -pix_fmt yuv420p /tmp/chef_render/c3.mp4

# Clip 4: Outro dark logo & mascot (2.4s)
ffmpeg -y -loop 1 -t 2.4 -i "$IMG_OUTRO" \
  -vf "scale=1920:1080,zoompan=z='min(zoom+0.0008,1.04)':d=72:x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':s=1280x720:fps=30" \
  -c:v libx264 -preset ultrafast -pix_fmt yuv420p /tmp/chef_render/c4.mp4

# Crossfade them all:
# c1: 2.4s
# c2: 2.8s, crossfade at 1.9s (offset 1.9, dur 0.5) -> dur = 4.7s
# c3: 2.8s, crossfade at 4.2s (offset 4.2, dur 0.5) -> dur = 7.0s
# c4: 2.4s, crossfade at 6.5s (offset 6.5, dur 0.5) -> dur = 8.9s
ffmpeg -y \
  -i /tmp/chef_render/c1.mp4 \
  -i /tmp/chef_render/c2.mp4 \
  -i /tmp/chef_render/c3.mp4 \
  -i /tmp/chef_render/c4.mp4 \
  -filter_complex \
  "[0:v][1:v]xfade=transition=fade:duration=0.5:offset=1.9[v01]; \
   [v01][2:v]xfade=transition=fade:duration=0.5:offset=4.2[v02]; \
   [v02][3:v]xfade=transition=fade:duration=0.5:offset=6.5[vfinal]" \
  -map "[vfinal]" \
  -c:v libx264 -preset medium -crf 20 -pix_fmt yuv420p -movflags +faststart \
  public/assets/chefemind-quantum-v2.mp4

# Copy to all target names and dist
mkdir -p dist/assets
cp public/assets/chefemind-quantum-v2.mp4 public/assets/chefemind-bg-loop.mp4
cp public/assets/chefemind-quantum-v2.mp4 public/assets/chefemind-quantum.mp4
cp public/assets/chefemind-quantum-v2.mp4 public/assets/chefemind-mascot.mp4
cp public/assets/chefemind-quantum-v2.mp4 dist/assets/chefemind-quantum-v2.mp4
cp public/assets/chefemind-quantum-v2.mp4 dist/assets/chefemind-bg-loop.mp4

echo "New ChefeMind 9s Video successfully generated!"
ls -lh public/assets/chefemind-quantum-v2.mp4
