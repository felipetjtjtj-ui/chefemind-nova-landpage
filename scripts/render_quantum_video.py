#!/usr/bin/env python3
import os
import math
import subprocess
import shutil

frames_dir = "/tmp/quantum_frames"
if os.path.exists(frames_dir):
    shutil.rmtree(frames_dir)
os.makedirs(frames_dir, exist_ok=True)

width = 1280
height = 720
fps = 24
duration = 6.0  # 6 seconds gives 144 crisp frames, ideal for smooth responsive scroll scrubbing
total_frames = int(fps * duration)

output_mp4 = "public/assets/chefemind-quantum.mp4"
os.makedirs("public/assets", exist_ok=True)

import random
rng = random.Random(1337)

# Pre-generate floating particles
num_particles = 90
particles = []
for _ in range(num_particles):
    particles.append({
        'x': rng.uniform(40, width - 40),
        'y': rng.uniform(40, height - 40),
        'r': rng.uniform(2, 6.5),
        'vx': rng.uniform(-18, 18),
        'vy': rng.uniform(-15, 15),
        'color': rng.choice(["#ffffff", "#ef4444", "#fca5a5", "#38bdf8", "#fbbf24", "#e2e8f0"]),
        'glow': rng.choice([True, False, True])
    })

nodes = [
    {"name": "WhatsApp", "ang": -2.35, "dist": 310, "color": "#22c55e", "icon": "WA"},
    {"name": "Pedidos", "ang": -1.57, "dist": 270, "color": "#ef4444", "icon": "PED"},
    {"name": "Cozinha KDS", "ang": -0.78, "dist": 320, "color": "#f59e0b", "icon": "KDS"},
    {"name": "Delivery", "ang": 0.0, "dist": 350, "color": "#3b82f6", "icon": "MOT"},
    {"name": "CRM Inteligente", "ang": 0.78, "dist": 320, "color": "#a855f7", "icon": "CRM"},
    {"name": "Clientes VIP", "ang": 1.57, "dist": 280, "color": "#ec4899", "icon": "VIP"},
    {"name": "Campanhas", "ang": 2.35, "dist": 310, "color": "#f97316", "icon": "CMP"},
    {"name": "Cardápio Digital", "ang": 3.14, "dist": 350, "color": "#06b6d4", "icon": "MNU"},
]

print(f"Generating {total_frames} SVG frames...")

for i in range(total_frames):
    t = i / fps
    prog = i / total_frames
    cx = width / 2
    cy = height / 2

    # Background color interpolation: dark quantum -> pure elegant white convergence
    if prog < 0.75:
        bg_col = "#06080d"
        canvas_class = "dark"
    else:
        blend = (prog - 0.75) / 0.25
        b_val = int(6 + (250 - 6) * (blend ** 1.5))
        bg_col = f"rgb({b_val},{b_val},{int(b_val*1.01)})"
        canvas_class = "light"

    svg_parts = []
    svg_parts.append(f'<svg xmlns="http://www.w3.org/2000/svg" width="{width}" height="{height}" viewBox="0 0 {width} {height}">')
    svg_parts.append('<defs>')
    # Glow filter
    svg_parts.append('''
      <filter id="glow" x="-40%" y="-40%" width="180%" height="180%">
        <feGaussianBlur stdDeviation="6" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
      <filter id="softglow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="3" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
      <radialGradient id="quantumCore" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#ef4444" stop-opacity="0.4"/>
        <stop offset="50%" stop-color="#ef4444" stop-opacity="0.08"/>
        <stop offset="100%" stop-color="#06080d" stop-opacity="0"/>
      </radialGradient>
      <linearGradient id="laserGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#ef4444" stop-opacity="0.9"/>
        <stop offset="50%" stop-color="#fca5a5" stop-opacity="1"/>
        <stop offset="100%" stop-color="#ef4444" stop-opacity="0.7"/>
      </linearGradient>
    ''')
    svg_parts.append('</defs>')

    # Background rect
    svg_parts.append(f'<rect width="{width}" height="{height}" fill="{bg_col}"/>')

    # Ambient Core Aura
    if prog < 0.85:
        core_scale = 1.0 + 0.3 * math.sin(t * 3)
        core_rad = int(260 * core_scale)
        core_op = max(0.0, 1.0 - (prog - 0.6) / 0.25) if prog > 0.6 else 0.85
        svg_parts.append(f'<circle cx="{cx}" cy="{cy}" r="{core_rad}" fill="url(#quantumCore)" opacity="{core_op:.2f}"/>')

    # Cyber Perspective Grid Lines
    if prog < 0.80:
        grid_op = max(0.0, 1.0 - prog / 0.80) * 0.4
        for r_i in range(16):
            ang = (r_i / 16) * 2 * math.pi + t * 0.05
            gx2 = cx + math.cos(ang) * 750
            gy2 = cy + math.sin(ang) * 450
            svg_parts.append(f'<line x1="{cx}" y1="{cy}" x2="{gx2}" y2="{gy2}" stroke="#334155" stroke-width="1" stroke-dasharray="3,8" opacity="{grid_op:.2f}"/>')

    # Particles floating
    if prog < 0.85:
        p_op = max(0.0, 1.0 - (prog - 0.65) / 0.20) if prog > 0.65 else 0.95
        for p in particles:
            px = (p['x'] + p['vx'] * t) % (width - 60) + 30
            py = (p['y'] + p['vy'] * t) % (height - 60) + 30
            filt_attr = 'filter="url(#softglow)"' if p['glow'] else ''
            svg_parts.append(f'<circle cx="{px:.1f}" cy="{py:.1f}" r="{p["r"]}" fill="{p["color"]}" opacity="{p_op*0.8:.2f}" {filt_attr}/>')

    # 20% - 85%: Robot Chef Mascot
    if 0.18 < prog < 0.88:
        if prog < 0.32:
            rob_alpha = (prog - 0.18) / 0.14
        elif prog > 0.72:
            rob_alpha = max(0.0, (0.88 - prog) / 0.16)
        else:
            rob_alpha = 1.0

        bob_y = math.sin(t * 3.0) * 9
        rcx = cx
        rcy = cy + bob_y - 20

        # Quantum Golden/Amber Orbital Rings
        r1_ang = t * 2.2
        r2_ang = -t * 1.8 + 1.2
        svg_parts.append(f'''
          <g opacity="{rob_alpha:.2f}" filter="url(#softglow)">
            <ellipse cx="{rcx}" cy="{rcy + 25}" rx="180" ry="42" fill="none" stroke="#f59e0b" stroke-width="2.5" stroke-dasharray="14,8" transform="rotate({math.degrees(0.35)}, {rcx}, {rcy+25})"/>
            <ellipse cx="{rcx}" cy="{rcy + 25}" rx="205" ry="48" fill="none" stroke="#ef4444" stroke-width="2" stroke-dasharray="8,16" transform="rotate({math.degrees(-0.25)}, {rcx}, {rcy+25})"/>
          </g>
        ''')

        # Robot Mascot Body Group
        svg_parts.append(f'<g opacity="{rob_alpha:.2f}" transform="translate(0, {bob_y})">')

        # Torso (Glossy white robot body)
        svg_parts.append(f'''
          <rect x="{rcx - 48}" y="{cy + 25}" width="96" height="84" rx="28" fill="#f8fafc" stroke="#e2e8f0" stroke-width="3"/>
          <rect x="{rcx - 28}" y="{cy + 38}" width="56" height="58" rx="14" fill="#ef4444"/>
          <circle cx="{rcx}" cy="{cy + 67}" r="14" fill="#ffffff"/>
          <path d="M {rcx-7} {cy+69} L {rcx+7} {cy+69} M {rcx-6} {cy+65} L {rcx+6} {cy+65} Q {rcx+6} {cy+60} {rcx} {cy+60} Q {rcx-6} {cy+60} {rcx-6} {cy+65} Z" fill="#ef4444"/>
        ''')

        # Arms & hands
        arm_spread = 15 if prog > 0.38 else 0
        svg_parts.append(f'''
          <path d="M {rcx - 46} {cy + 42} Q {rcx - 80 - arm_spread} {cy + 45} {rcx - 85 - arm_spread} {cy + 65}" fill="none" stroke="#f1f5f9" stroke-width="14" stroke-linecap="round"/>
          <circle cx="{rcx - 85 - arm_spread}" cy="{cy + 65}" r="11" fill="#e2e8f0"/>

          <path d="M {rcx + 46} {cy + 42} Q {rcx + 80 + arm_spread} {cy + 45} {rcx + 85 + arm_spread} {cy + 65}" fill="none" stroke="#f1f5f9" stroke-width="14" stroke-linecap="round"/>
          <circle cx="{rcx + 85 + arm_spread}" cy="{cy + 65}" r="11" fill="#e2e8f0"/>
        ''')

        # Legs
        svg_parts.append(f'''
          <rect x="{rcx - 30}" y="{cy + 102}" width="20" height="34" rx="10" fill="#e2e8f0"/>
          <rect x="{rcx + 10}" y="{cy + 102}" width="20" height="34" rx="10" fill="#e2e8f0"/>
        ''')

        # Head / Helmet
        svg_parts.append(f'''
          <rect x="{rcx - 68}" y="{cy - 85}" width="136" height="106" rx="46" fill="#ffffff" stroke="#e2e8f0" stroke-width="3"/>
          <rect x="{rcx - 52}" y="{cy - 72}" width="104" height="80" rx="34" fill="#090d16"/>
        ''')

        # Smiling Cyan LED Eyes (^   ^)
        svg_parts.append(f'''
          <g filter="url(#glow)">
            <path d="M {rcx - 38} {cy - 30} Q {rcx - 26} {cy - 48} {rcx - 14} {cy - 30}" fill="none" stroke="#38bdf8" stroke-width="4.5" stroke-linecap="round"/>
            <path d="M {rcx + 14} {cy - 30} Q {rcx + 26} {cy - 48} {rcx + 38} {cy - 30}" fill="none" stroke="#38bdf8" stroke-width="4.5" stroke-linecap="round"/>
          </g>
        ''')

        # Chef Hat
        svg_parts.append(f'''
          <g>
            <circle cx="{rcx - 38}" cy="{cy - 96}" r="28" fill="#ffffff"/>
            <circle cx="{rcx}" cy="{cy - 110}" r="34" fill="#ffffff"/>
            <circle cx="{rcx + 38}" cy="{cy - 96}" r="28" fill="#ffffff"/>
            <rect x="{rcx - 52}" y="{cy - 95}" width="104" height="25" rx="6" fill="#f8fafc"/>
            <circle cx="{rcx}" cy="{cy - 86}" r="13" fill="#ef4444"/>
            <path d="M {rcx-6} {cy-84} L {rcx+6} {cy-84} M {rcx-5} {cy-88} L {rcx+5} {cy-88} Q {rcx+5} {cy-92} {rcx} {cy-92} Q {rcx-5} {cy-92} {rcx-5} {cy-88} Z" fill="#ffffff"/>
          </g>
        ''')

        svg_parts.append('</g>')

    # 40% - 82%: Quantum Synapses / Laser Beams & Floating Restaurant Nodes
    if 0.38 < prog < 0.84:
        if prog < 0.48:
            net_op = (prog - 0.38) / 0.10
        elif prog > 0.72:
            net_op = max(0.0, (0.84 - prog) / 0.12)
        else:
            net_op = 1.0

        for n_i, node in enumerate(nodes):
            n_ang = node['ang'] + math.sin(t * 0.8 + n_i) * 0.05
            dist = node['dist'] * (0.92 + 0.08 * math.sin(t * 2 + n_i))
            nx = cx + math.cos(n_ang) * dist
            ny = cy + math.sin(n_ang) * (dist * 0.72)

            hx = cx - 100 if nx < cx else cx + 100
            hy = cy + 45

            # Curved Laser Synapse Beam
            ctrl_y = hy - 30 + math.sin(t * 4 + n_i) * 15
            pulse_offset = (t * 2.5 + n_i * 0.2) % 1.0
            svg_parts.append(f'''
              <path d="M {hx} {hy} Q {cx} {ctrl_y} {nx} {ny}" fill="none" stroke="{node['color']}" stroke-width="2.5" opacity="{net_op * 0.75:.2f}" stroke-dasharray="6,4"/>
              <path d="M {hx} {hy} Q {cx} {ctrl_y} {nx} {ny}" fill="none" stroke="#ffffff" stroke-width="1.2" opacity="{net_op * 0.9:.2f}"/>
            ''')

            # Node Capsule
            svg_parts.append(f'''
              <g opacity="{net_op:.2f}" transform="translate({nx}, {ny})">
                <circle cx="0" cy="0" r="28" fill="#0b1120" stroke="{node['color']}" stroke-width="2.5" filter="url(#softglow)"/>
                <circle cx="0" cy="0" r="22" fill="#0f172a" opacity="0.9"/>
                <text x="0" y="5" fill="#ffffff" font-size="12" font-weight="700" font-family="Outfit, sans-serif" text-anchor="middle">{node['icon']}</text>
                <text x="0" y="44" fill="#e2e8f0" font-size="13" font-weight="600" font-family="Outfit, sans-serif" text-anchor="middle" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.8))">{node['name']}</text>
              </g>
            ''')

    # 75% - 100%: Convergence to ChefeMind Clean Brand Hero outro
    if prog >= 0.75:
        brand_op = (prog - 0.75) / 0.25
        brand_op_smooth = brand_op * brand_op * (3 - 2 * brand_op)
        scale_brand = 0.85 + 0.15 * brand_op_smooth

        svg_parts.append(f'''
          <g opacity="{brand_op_smooth:.2f}" transform="translate({cx}, {cy - 20}) scale({scale_brand}) translate({-cx}, {-cy + 20})">
            <!-- Brand Icon Emblem -->
            <circle cx="{cx}" cy="{cy - 60}" r="38" fill="#dc2626" filter="url(#softglow)"/>
            <circle cx="{cx}" cy="{cy - 60}" r="34" fill="#ef4444"/>
            <g transform="translate({cx}, {cy - 60}) scale(1.4)">
              <circle cx="-9" cy="-3" r="6" fill="#ffffff"/>
              <circle cx="0" cy="-6" r="8" fill="#ffffff"/>
              <circle cx="9" cy="-3" r="6" fill="#ffffff"/>
              <rect x="-11" y="-3" width="22" height="6" rx="2" fill="#f8fafc"/>
              <rect x="-7" y="3" width="14" height="2" fill="#dc2626"/>
            </g>

            <!-- ChefeMind Logotype -->
            <text x="{cx}" y="{cy + 25}" fill="#0f172a" font-size="52" font-weight="800" font-family="Outfit, sans-serif" text-anchor="middle" letter-spacing="-1.5">
              Chefe<tspan fill="#dc2626">Mind</tspan>
            </text>

            <!-- Tagline -->
            <text x="{cx}" y="{cy + 65}" fill="#475569" font-size="19" font-weight="500" font-family="Outfit, sans-serif" text-anchor="middle" letter-spacing="0.2">
              IA que atende. Vende. E faz seu restaurante crescer.
            </text>
          </g>
        ''')

    svg_parts.append('</svg>')

    frame_file = os.path.join(frames_dir, f"frame_{i:04d}.svg")
    with open(frame_file, "w", encoding="utf-8") as f:
        f.write("".join(svg_parts))

print("All SVG frames created! Compiling with ffmpeg...")

ffmpeg_cmd = [
    "ffmpeg", "-y",
    "-framerate", str(fps),
    "-i", f"{frames_dir}/frame_%04d.svg",
    "-c:v", "libx264",
    "-preset", "fast",
    "-crf", "18",
    "-pix_fmt", "yuv420p",
    "-movflags", "+faststart",
    output_mp4
]

res = subprocess.run(ffmpeg_cmd, capture_output=True, text=True)
if res.returncode == 0:
    print(f"Successfully generated {output_mp4} ({os.path.getsize(output_mp4)} bytes)")
else:
    print("FFmpeg error:", res.stderr)
    exit(1)

# Clean up temporary SVG frames
shutil.rmtree(frames_dir)
print("Temporary frames cleaned up.")
