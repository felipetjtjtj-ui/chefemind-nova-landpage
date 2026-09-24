#!/usr/bin/env python3
import sys
import math
import subprocess
import os

width = 1280
height = 720
fps = 30
duration = 8.0
total_frames = int(fps * duration)

output_path = "public/assets/chefemind-quantum.mp4"
os.makedirs("public/assets", exist_ok=True)

# Start ffmpeg process listening to raw PPM stream
ffmpeg_cmd = [
    "ffmpeg", "-y",
    "-f", "image2pipe",
    "-vcodec", "ppm",
    "-r", str(fps),
    "-i", "-",
    "-c:v", "libx264",
    "-preset", "fast",
    "-crf", "18",
    "-pix_fmt", "yuv420p",
    "-movflags", "+faststart",
    output_path
]

proc = subprocess.Popen(ffmpeg_cmd, stdin=subprocess.PIPE)

header = f"P6\n{width} {height}\n255\n".encode("ascii")

# Seed reproducible random particles
import random
rng = random.Random(42)

particles = []
for _ in range(160):
    particles.append({
        'x': rng.uniform(-1.0, 1.0),
        'y': rng.uniform(-0.8, 0.8),
        'z': rng.uniform(0.2, 2.5),
        'size': rng.uniform(2, 7),
        'speed': rng.uniform(0.1, 0.4),
        'color': rng.choice([(255, 255, 255), (230, 240, 255), (239, 68, 68), (220, 38, 38), (254, 202, 202)])
    })

# Restaurant icon nodes
nodes = [
    {'name': 'WhatsApp', 'angle': -0.75 * math.pi, 'dist': 320, 'col': (37, 211, 102)},
    {'name': 'Pedidos', 'angle': -0.45 * math.pi, 'dist': 350, 'col': (239, 68, 68)},
    {'name': 'Cozinha', 'angle': -0.15 * math.pi, 'dist': 330, 'col': (245, 158, 11)},
    {'name': 'Delivery', 'angle': 0.15 * math.pi, 'dist': 340, 'col': (59, 130, 246)},
    {'name': 'CRM', 'angle': 0.45 * math.pi, 'dist': 360, 'col': (168, 85, 247)},
    {'name': 'Clientes', 'angle': 0.75 * math.pi, 'dist': 320, 'col': (236, 72, 153)},
    {'name': 'Cardápio', 'angle': math.pi, 'dist': 380, 'col': (16, 185, 129)},
    {'name': 'Campanhas', 'angle': 0.0, 'dist': 390, 'col': (249, 115, 22)},
]

print(f"Generating {total_frames} quantum frames to {output_path}...")

for frame_idx in range(total_frames):
    t = frame_idx / fps
    progress = frame_idx / total_frames  # 0.0 to 1.0

    # Buffer for image
    buf = bytearray(width * height * 3)

    # Background color calculation
    # 0.0 - 0.75: Deep dark void (rgb ~ 6, 8, 12)
    # 0.75 - 1.0: Transition smoothly to crisp luminous white / light silver outro
    if progress < 0.75:
        bg_r = 6
        bg_g = 8
        bg_b = 13
    else:
        blend = (progress - 0.75) / 0.25
        # smooth cubic ease
        blend_e = blend * blend * (3 - 2 * blend)
        bg_r = int(6 + (248 - 6) * blend_e)
        bg_g = int(8 + (249 - 8) * blend_e)
        bg_b = int(13 + (252 - 13) * blend_e)

    # Fill base background
    for i in range(0, len(buf), 3):
        buf[i] = bg_r
        buf[i+1] = bg_g
        buf[i+2] = bg_b

    cx = width // 2
    cy = height // 2

    # Draw 3D Perspective Cyber Grid (converging to center) during dark phase
    if progress < 0.85:
        grid_alpha = 1.0 if progress < 0.65 else max(0.0, (0.85 - progress) / 0.2)
        if grid_alpha > 0.01:
            line_col = (int(35 * grid_alpha), int(45 * grid_alpha), int(60 * grid_alpha))
            # Radial vanishing lines
            num_radials = 16
            for r_i in range(num_radials):
                ang = (r_i / num_radials) * 2 * math.pi + t * 0.03
                cos_a, sin_a = math.cos(ang), math.sin(ang)
                # draw stepped dots along radial ray
                for step in range(12, 45):
                    d = step * 16
                    px = int(cx + cos_a * d)
                    py = int(cy + sin_a * d * 0.65)
                    if 0 <= px < width and 0 <= py < height:
                        idx = (py * width + px) * 3
                        # add glowing pixel
                        buf[idx] = min(255, buf[idx] + line_col[0])
                        buf[idx+1] = min(255, buf[idx+1] + line_col[1])
                        buf[idx+2] = min(255, buf[idx+2] + line_col[2])

    # Draw Floating Quantum Particles
    if progress < 0.90:
        p_fade = 1.0 if progress < 0.70 else max(0.0, (0.90 - progress) / 0.20)
        for p in particles:
            # Move particle along z and slightly drift
            z = (p['z'] - t * p['speed']) % 2.3 + 0.2
            px = int(cx + (p['x'] / z) * 600)
            py = int(cy + (p['y'] / z) * 450)
            rad = max(1, int(p['size'] / z))

            col = p['color']
            # Draw fuzzy dot
            for dy in range(-rad, rad + 1):
                for dx in range(-rad, rad + 1):
                    dist_sq = dx*dx + dy*dy
                    if dist_sq <= rad*rad:
                        gx = px + dx
                        gy = py + dy
                        if 0 <= gx < width and 0 <= gy < height:
                            factor = (1.0 - math.sqrt(dist_sq) / rad) * p_fade
                            idx = (gy * width + gx) * 3
                            buf[idx] = min(255, int(buf[idx] + col[0] * factor))
                            buf[idx+1] = min(255, int(buf[idx+1] + col[1] * factor))
                            buf[idx+2] = min(255, int(buf[idx+2] + col[2] * factor))

    # Phase 2 (0.20 - 0.85): Robot Chef Mascot Appearance & Floating Presence
    if 0.18 < progress < 0.88:
        # Mascot scale and opacity
        if progress < 0.32:
            robot_fade = (progress - 0.18) / 0.14
        elif progress > 0.75:
            robot_fade = max(0.0, (0.88 - progress) / 0.13)
        else:
            robot_fade = 1.0

        # Robot center with subtle levitation bob
        rcx = cx
        rcy = cy + int(math.sin(t * 2.5) * 8)

        # Draw Orbiting Quantum Energy Rings around Chef
        ring_col = (255, 180, 100)
        for ring_idx, ring_tilt in enumerate([-0.35, 0.4]):
            ring_rot = t * 1.8 + ring_idx * math.pi
            rx_rad = 180 + ring_idx * 30
            ry_rad = 45 + ring_idx * 15
            for dot_i in range(80):
                d_ang = (dot_i / 80) * 2 * math.pi + ring_rot
                base_x = math.cos(d_ang) * rx_rad
                base_y = math.sin(d_ang) * ry_rad
                # rotate by tilt
                rot_x = base_x * math.cos(ring_tilt) - base_y * math.sin(ring_tilt)
                rot_y = base_x * math.sin(ring_tilt) + base_y * math.cos(ring_tilt)
                ptx = int(rcx + rot_x)
                pty = int(rcy + rot_y + 10)
                if 0 <= ptx < width and 0 <= pty < height:
                    intensity = (0.5 + 0.5 * math.sin(d_ang * 3 + t * 4)) * robot_fade
                    idx = (pty * width + ptx) * 3
                    buf[idx] = min(255, int(buf[idx] + ring_col[0] * intensity))
                    buf[idx+1] = min(255, int(buf[idx+1] + ring_col[1] * intensity))
                    buf[idx+2] = min(255, int(buf[idx+2] + ring_col[2] * intensity))

        # Mascot Head (Sleek Rounded White Helmet)
        head_w = 85
        head_h = 70
        head_cy = rcy - 50

        # Chef Hat on top
        hat_cy = head_cy - 65
        hat_w = 75
        hat_h = 45

        # Render Robot silhouette and highlights
        for dy in range(-120, 130):
            for dx in range(-100, 101):
                gx = rcx + dx
                gy = rcy + dy
                if not (0 <= gx < width and 0 <= gy < height):
                    continue

                pixel_rendered = False
                pix_r, pix_g, pix_b = 0, 0, 0

                # 1. Chef Hat
                h_dy = gy - hat_cy
                h_dx = dx
                if -hat_h <= h_dy <= hat_h and abs(h_dx) <= hat_w:
                    # Rounded puffs on hat
                    in_hat = False
                    for puff_x in [-45, 0, 45]:
                        if (h_dx - puff_x)**2 + (h_dy + 15)**2 <= 34**2:
                            in_hat = True
                            break
                    if abs(h_dx) < 55 and -15 < h_dy < 30:
                        in_hat = True

                    if in_hat:
                        # Chef hat red badge in center
                        if (h_dx)**2 + (h_dy + 5)**2 <= 14**2:
                            pix_r, pix_g, pix_b = 230, 45, 45
                        else:
                            # White chef hat with shaded contours
                            shade = 0.85 + 0.15 * math.cos(h_dx * 0.03)
                            pix_r, pix_g, pix_b = int(245 * shade), int(245 * shade), int(248 * shade)
                        pixel_rendered = True

                # 2. Robot Head & Screen
                if not pixel_rendered:
                    head_dy = gy - head_cy
                    head_dist = (dx / head_w)**2 + (head_dy / head_h)**2
                    if head_dist <= 1.0:
                        # Inside head: Inner black glass visor screen
                        screen_dist = (dx / (head_w * 0.72))**2 + (head_dy / (head_h * 0.68))**2
                        if screen_dist <= 1.0:
                            # Black visor screen
                            pix_r, pix_g, pix_b = 15, 20, 28
                            # Smiling cyan LED eyes (^  ^)
                            eye_left_dist = ((dx + 25)**2 + (head_dy + 5)**2)
                            eye_right_dist = ((dx - 25)**2 + (head_dy + 5)**2)
                            # Cyan arc eyes
                            in_eye = False
                            for ex in [-26, 26]:
                                if abs(dx - ex) < 14 and abs(head_dy - (-4 - 0.25 * (dx - ex)**2)) < 3:
                                    in_eye = True
                            if in_eye:
                                pix_r, pix_g, pix_b = 64, 230, 255
                        else:
                            # Outer white gloss helmet
                            shade = 0.9 + 0.1 * math.sin(dx * 0.05 + head_dy * 0.05)
                            pix_r, pix_g, pix_b = int(240 * shade), int(242 * shade), int(248 * shade)
                        pixel_rendered = True

                # 3. Robot Torso & Red Apron / Chest Emblem
                if not pixel_rendered:
                    torso_cy = rcy + 40
                    torso_dy = gy - torso_cy
                    if -20 < torso_dy < 65 and abs(dx) < 60 - torso_dy * 0.2:
                        # Apron / chest emblem
                        if abs(dx) < 28 and -8 < torso_dy < 42:
                            # Red chef emblem on chest
                            pix_r, pix_g, pix_b = 230, 45, 45
                            if dx*dx + (torso_dy - 16)**2 < 10**2:
                                pix_r, pix_g, pix_b = 255, 255, 255
                        else:
                            # White robotic body
                            shade = 0.85 + 0.15 * math.cos(dx * 0.05)
                            pix_r, pix_g, pix_b = int(235 * shade), int(238 * shade), int(244 * shade)
                        pixel_rendered = True

                # 4. Arms & Legs
                if not pixel_rendered:
                    # Shoulders and arms extending outwards
                    if 15 < gy - rcy < 60:
                        for side in [-1, 1]:
                            arm_x = side * (65 + (gy - rcy) * 0.45)
                            if (gx - (rcx + arm_x))**2 < 12**2:
                                pix_r, pix_g, pix_b = 225, 228, 235
                                pixel_rendered = True
                    # Legs
                    if 90 < gy - rcy < 120 and abs(abs(dx) - 25) < 12:
                        pix_r, pix_g, pix_b = 220, 224, 232
                        pixel_rendered = True

                if pixel_rendered:
                    idx = (gy * width + gx) * 3
                    buf[idx] = int(buf[idx] * (1 - robot_fade) + pix_r * robot_fade)
                    buf[idx+1] = int(buf[idx+1] * (1 - robot_fade) + pix_g * robot_fade)
                    buf[idx+2] = int(buf[idx+2] * (1 - robot_fade) + pix_b * robot_fade)

    # Phase 3 & 4 (0.38 - 0.82): Quantum Neural Connections & Restaurant Nodes
    if 0.38 < progress < 0.82:
        if progress < 0.50:
            net_fade = (progress - 0.38) / 0.12
        elif progress > 0.72:
            net_fade = max(0.0, (0.82 - progress) / 0.10)
        else:
            net_fade = 1.0

        for n_i, node in enumerate(nodes):
            n_ang = node['angle']
            n_dist = node['dist'] * (0.85 + 0.15 * math.sin(t * 1.5 + n_i))
            nx = int(cx + math.cos(n_ang) * n_dist)
            ny = int(cy + math.sin(n_ang) * n_dist * 0.75)

            # Draw laser beam line from Robot hands to Node
            # Hand origin
            h_side = 1 if nx > cx else -1
            hx = cx + h_side * 70
            hy = cy + 30

            # Line stepping
            steps = 70
            pulse_phase = (t * 4 + n_i * 0.5) % 1.0
            for st in range(steps):
                frac = st / steps
                lx = int(hx + (nx - hx) * frac)
                ly = int(hy + (ny - hy) * frac)
                # Curved droop
                ly += int(math.sin(frac * math.pi) * 20)

                # Laser core brightness with moving pulse
                pulse_dist = abs(frac - pulse_phase)
                pulse_mult = 1.8 if pulse_dist < 0.1 else 0.7
                line_bright = net_fade * pulse_mult

                if 0 <= lx < width and 0 <= ly < height:
                    idx = (ly * width + lx) * 3
                    buf[idx] = min(255, int(buf[idx] + 239 * line_bright * 0.8))
                    buf[idx+1] = min(255, int(buf[idx+1] + 68 * line_bright * 0.4))
                    buf[idx+2] = min(255, int(buf[idx+2] + 68 * line_bright * 0.4))

            # Draw Node circle
            node_r = 20
            col = node['col']
            for dy in range(-node_r, node_r + 1):
                for dx in range(-node_r, node_r + 1):
                    d_sq = dx*dx + dy*dy
                    if d_sq <= node_r*node_r:
                        gx = nx + dx
                        gy = ny + dy
                        if 0 <= gx < width and 0 <= gy < height:
                            idx = (gy * width + gx) * 3
                            edge = 1.0 if d_sq > (node_r - 2)**2 else 0.75
                            buf[idx] = min(255, int(buf[idx] * (1 - net_fade) + col[0] * edge * net_fade))
                            buf[idx+1] = min(255, int(buf[idx+1] * (1 - net_fade) + col[1] * edge * net_fade))
                            buf[idx+2] = min(255, int(buf[idx+2] * (1 - net_fade) + col[2] * edge * net_fade))

    # Phase 5 (0.75 - 1.0): Convergence to ChefeMind Brand Logo & Clean Light Aesthetic
    if progress >= 0.75:
        outro_fade = (progress - 0.75) / 0.25
        outro_fade_smooth = outro_fade * outro_fade * (3 - 2 * outro_fade)

        # Draw Clean Minimalist ChefeMind Brand Badge in center
        logo_y = cy - 30
        badge_r = int(32 * outro_fade_smooth)

        # Red Chef Logo Emblem
        for dy in range(-badge_r, badge_r + 1):
            for dx in range(-badge_r, badge_r + 1):
                if dx*dx + dy*dy <= badge_r*badge_r:
                    gx = cx + dx
                    gy = logo_y + dy
                    if 0 <= gx < width and 0 <= gy < height:
                        idx = (gy * width + gx) * 3
                        # Red circle with subtle gradient
                        buf[idx] = int(buf[idx] * (1 - outro_fade_smooth) + 225 * outro_fade_smooth)
                        buf[idx+1] = int(buf[idx+1] * (1 - outro_fade_smooth) + 29 * outro_fade_smooth)
                        buf[idx+2] = int(buf[idx+2] * (1 - outro_fade_smooth) + 29 * outro_fade_smooth)

        # Render stylized typography bar below logo
        bar_w = int(240 * outro_fade_smooth)
        bar_y = cy + 40
        for by in range(bar_y, bar_y + 4):
            for bx in range(cx - bar_w // 2, cx + bar_w // 2):
                if 0 <= bx < width and 0 <= by < height:
                    idx = (by * width + bx) * 3
                    buf[idx] = int(buf[idx] * (1 - outro_fade_smooth) + 220 * outro_fade_smooth)
                    buf[idx+1] = int(buf[idx+1] * (1 - outro_fade_smooth) + 38 * outro_fade_smooth)
                    buf[idx+2] = int(buf[idx+2] * (1 - outro_fade_smooth) + 38 * outro_fade_smooth)

    # Write frame to ffmpeg
    try:
        proc.stdin.write(header)
        proc.stdin.write(buf)
    except Exception as e:
        print(f"Error writing frame {frame_idx}: {e}", file=sys.stderr)
        break

proc.stdin.close()
proc.wait()
print("Quantum video rendering completed successfully!")
