#!/bin/bash
set -e

# Re-encode public/assets/chefemind-quantum.mp4 with -g 1 (every frame is an I-frame)
ffmpeg -y -i public/assets/chefemind-quantum.mp4 \
  -c:v libx264 -preset fast -crf 18 -g 1 -keyint_min 1 -sc_threshold 0 \
  -pix_fmt yuv420p -movflags +faststart \
  public/assets/chefemind-quantum-intra.mp4

# Check file size and streams
ls -lh public/assets/chefemind-quantum-intra.mp4

# Replace chefemind-quantum.mp4 with the intra version
cp public/assets/chefemind-quantum-intra.mp4 public/assets/chefemind-quantum.mp4
cp public/assets/chefemind-quantum-intra.mp4 public/assets/chefemind-mascot.mp4
mkdir -p dist/assets
cp public/assets/chefemind-quantum-intra.mp4 dist/assets/chefemind-quantum.mp4
cp public/assets/chefemind-quantum-intra.mp4 dist/assets/chefemind-mascot.mp4

echo "Ultra smooth intra video ready!"
