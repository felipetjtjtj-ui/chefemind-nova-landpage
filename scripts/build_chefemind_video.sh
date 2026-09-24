#!/bin/bash
set -e

mkdir -p /tmp/chefemind_video
IMG_INTRO="src/assets/images/chefemind_grid_intro_1788992478770.jpg"
IMG_MASCOT="src/assets/images/chefemind_mascot_3d_1788992452733.jpg"
IMG_SYNAPSES="src/assets/images/chefemind_synapses_1788992466655.jpg"
IMG_OUTRO="src/assets/images/chefemind_outro.jpg"

# Clip 1: Intro (0 to 1.8s) with slight zoom in
ffmpeg -y -loop 1 -t 2.0 -i "$IMG_INTRO" \
  -vf "scale=1920:1080,zoompan=z='min(zoom+0.002,1.15)':d=50:x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':s=1280x720:fps=30" \
  -c:v libx264 -pix_fmt yuv420p /tmp/chefemind_video/clip1.mp4

# Clip 2: Mascot (0 to 2.8s) floating center
ffmpeg -y -loop 1 -t 2.8 -i "$IMG_MASCOT" \
  -vf "scale=1920:1080,zoompan=z='min(zoom+0.001,1.06)':d=84:x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':s=1280x720:fps=30" \
  -c:v libx264 -pix_fmt yuv420p /tmp/chefemind_video/clip2.mp4

# Clip 3: Synapses multiconnect (0 to 2.2s)
ffmpeg -y -loop 1 -t 2.2 -i "$IMG_SYNAPSES" \
  -vf "scale=1920:1080,zoompan=z='min(zoom+0.0015,1.08)':d=66:x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':s=1280x720:fps=30" \
  -c:v libx264 -pix_fmt yuv420p /tmp/chefemind_video/clip3.mp4

# Clip 4: Outro white card (0 to 2.0s)
ffmpeg -y -loop 1 -t 2.0 -i "$IMG_OUTRO" \
  -vf "scale=1280:720,fps=30" \
  -c:v libx264 -pix_fmt yuv420p /tmp/chefemind_video/clip4.mp4

# Now combine using xfade transitions:
# clip1 (2.0s) -> clip2 (2.8s) with fade at 1.5s (offset 1.5, dur 0.5) -> dur = 2.0 + 2.8 - 0.5 = 4.3s
# -> clip3 (2.2s) with fade at 3.8s (offset 3.8, dur 0.5) -> dur = 4.3 + 2.2 - 0.5 = 6.0s
# -> clip4 (2.0s) with fadewhite at 5.5s (offset 5.5, dur 0.5) -> dur = 6.0 + 2.0 - 0.5 = 7.5s

ffmpeg -y \
  -i /tmp/chefemind_video/clip1.mp4 \
  -i /tmp/chefemind_video/clip2.mp4 \
  -i /tmp/chefemind_video/clip3.mp4 \
  -i /tmp/chefemind_video/clip4.mp4 \
  -filter_complex \
  "[0:v][1:v]xfade=transition=fade:duration=0.5:offset=1.5[v01]; \
   [v01][2:v]xfade=transition=smoothleft:duration=0.5:offset=3.8[v02]; \
   [v02][3:v]xfade=transition=fadewhite:duration=0.6:offset=5.5[vfinal]" \
  -map "[vfinal]" \
  -c:v libx264 -preset fast -crf 18 -pix_fmt yuv420p -movflags +faststart \
  public/assets/chefemind-quantum.mp4

# Also copy to dist and backup
mkdir -p dist/assets
cp public/assets/chefemind-quantum.mp4 dist/assets/chefemind-quantum.mp4
cp public/assets/chefemind-quantum.mp4 public/assets/chefemind-mascot.mp4

echo "Video successfully built!"
ls -lh public/assets/chefemind-quantum.mp4
