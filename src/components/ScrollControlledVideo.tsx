import React, { useRef, useEffect, useState, useCallback } from 'react';
import { Cpu, Play, Pause, RotateCcw, Maximize2, Volume2, VolumeX, CheckCircle2 } from 'lucide-react';

interface ScrollControlledVideoProps {
  progress?: number; // 0.0 to 1.0 from parent scroll or slider
  onStageChange?: (stage: number) => void;
  forceAutoPlay?: boolean;
}

export const ScrollControlledVideo: React.FC<ScrollControlledVideoProps> = ({
  progress = 0,
  onStageChange,
  forceAutoPlay = true,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoDuration, setVideoDuration] = useState(7.5);
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isUserScrubbing, setIsUserScrubbing] = useState(false);
  const [activeChapterIndex, setActiveChapterIndex] = useState(0);

  // Chapter milestones in seconds
  const chapters = [
    { id: 'singularity', title: '01. Singularidade', time: 0.0, desc: 'Entrada no ciberespaço gastronômico' },
    { id: 'mascot', title: '02. Mascote 3D', time: 1.8, desc: 'O assistente inteligente ChefeMind' },
    { id: 'synapses', title: '03. Sinapses', time: 3.8, desc: 'Conexão instantânea com WhatsApp e Cozinha' },
    { id: 'brand', title: '04. ChefeMind', time: 5.5, desc: 'IA que atende, vende e faz crescer' },
  ];

  // Auto-play safely on mount
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          // Autoplay blocked by browser policy without user gesture
          setIsPlaying(false);
        });
    }
  }, []);

  // Update current time display and chapter tracking
  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video) return;

    const t = video.currentTime;
    setCurrentTime(t);

    // Determine current chapter
    if (t < 1.8) {
      setActiveChapterIndex(0);
      onStageChange?.(0);
    } else if (t < 3.8) {
      setActiveChapterIndex(1);
      onStageChange?.(1);
    } else if (t < 5.5) {
      setActiveChapterIndex(2);
      onStageChange?.(2);
    } else {
      setActiveChapterIndex(3);
      onStageChange?.(3);
    }
  };

  // Video loaded metadata
  const handleLoadedMetadata = () => {
    const video = videoRef.current;
    if (video) {
      const dur = video.duration || 7.5;
      setVideoDuration(dur);
      setVideoLoaded(true);
      if (forceAutoPlay) {
        video.play().catch(() => {});
      }
    }
  };

  // Play / Pause toggle
  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play().then(() => setIsPlaying(true)).catch(() => {});
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  // Restart video
  const handleRestart = () => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = 0;
    video.play().then(() => setIsPlaying(true)).catch(() => {});
  };

  // Seek to specific chapter
  const seekToChapter = (timeSec: number, index: number) => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = timeSec;
    setActiveChapterIndex(index);
    if (video.paused) {
      video.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  // Scrub handler for the timeline slider
  const handleScrubChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    setCurrentTime(newTime);
    const video = videoRef.current;
    if (video) {
      video.currentTime = newTime;
    }
  };

  // Toggle Mute
  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  // Toggle Fullscreen
  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen?.().then(() => setIsFullscreen(true)).catch(() => {});
    } else {
      document.exitFullscreen?.().then(() => setIsFullscreen(false)).catch(() => {});
    }
  };

  // Ambient Canvas Particles in Background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.offsetWidth || 1280);
    let height = (canvas.height = canvas.offsetHeight || 720);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth || 1280;
      height = canvas.height = canvas.offsetHeight || 720;
    };
    window.addEventListener('resize', handleResize);

    const particles = Array.from({ length: 45 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.8 + 0.8,
      speedX: (Math.random() - 0.5) * 0.3,
      speedY: (Math.random() - 0.5) * 0.3,
      alpha: Math.random() * 0.6 + 0.2,
      isRed: Math.random() > 0.45,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.isRed
          ? `rgba(239, 68, 68, ${p.alpha * 0.7})`
          : `rgba(255, 255, 255, ${p.alpha * 0.5})`;
        ctx.fill();
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animId);
    };
  }, []);

  const progressPercent = videoDuration > 0 ? (currentTime / videoDuration) * 100 : 0;

  return (
    <div
      ref={containerRef}
      id="chefemind-quantum-player"
      className="relative w-full aspect-video max-w-5xl mx-auto rounded-2xl sm:rounded-3xl overflow-hidden bg-black border border-white/10 shadow-[0_0_80px_rgba(239,68,68,0.2)] group"
    >
      {/* Background Hologram Glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-red-600/30 via-rose-500/20 to-cyan-500/20 rounded-3xl blur-2xl opacity-60 group-hover:opacity-90 transition-opacity pointer-events-none" />

      {/* HTML5 Video Element with Full Autoplay and Loop */}
      <video
        ref={videoRef}
        id="chefemind-quantum-video"
        src="/assets/chefemind-quantum.mp4"
        poster="/assets/chefemind-poster.jpg"
        preload="auto"
        autoPlay
        muted
        loop
        playsInline
        onLoadedMetadata={handleLoadedMetadata}
        onTimeUpdate={handleTimeUpdate}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        className="relative z-10 w-full h-full object-cover object-center transition-transform duration-700"
      />

      {/* Canvas for Quantum Dust */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-20 w-full h-full pointer-events-none opacity-60"
      />

      {/* Top Floating Status Bar */}
      <div className="absolute top-4 left-4 right-4 z-30 flex items-center justify-between pointer-events-none">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-xs text-zinc-200 shadow-lg pointer-events-auto">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="font-semibold text-white">ChefeMind 3D</span>
          <span className="text-zinc-500">|</span>
          <span className="text-red-400 font-mono text-[11px]">{chapters[activeChapterIndex]?.title}</span>
        </div>

        <div className="flex items-center gap-2 pointer-events-auto">
          <button
            onClick={toggleMute}
            className="p-2 rounded-full bg-black/60 hover:bg-black/90 backdrop-blur-md border border-white/10 text-zinc-300 hover:text-white transition-all shadow-md"
            title={isMuted ? 'Áudio mudo (padrão web)' : 'Áudio ativado'}
            aria-label="Controle de áudio"
          >
            {isMuted ? <VolumeX className="w-4 h-4 text-zinc-400" /> : <Volume2 className="w-4 h-4 text-emerald-400" />}
          </button>
          <button
            onClick={toggleFullscreen}
            className="p-2 rounded-full bg-black/60 hover:bg-black/90 backdrop-blur-md border border-white/10 text-zinc-300 hover:text-white transition-all shadow-md"
            title="Assistir em tela cheia"
            aria-label="Tela cheia"
          >
            <Maximize2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Center Play/Pause Watermark on Pause */}
      {!isPlaying && (
        <button
          onClick={togglePlay}
          className="absolute inset-0 z-30 flex items-center justify-center bg-black/40 backdrop-blur-xs group/play cursor-pointer transition-all"
          aria-label="Reproduzir vídeo"
        >
          <div className="w-20 h-20 rounded-full bg-red-600/90 hover:bg-red-500 flex items-center justify-center text-white shadow-[0_0_50px_rgba(239,68,68,0.8)] transform group-hover/play:scale-110 transition-all">
            <Play className="w-9 h-9 ml-1 fill-white" />
          </div>
        </button>
      )}

      {/* Bottom Interactive HUD & Timeline Controls */}
      <div className="absolute bottom-0 inset-x-0 z-30 p-4 sm:p-5 bg-gradient-to-t from-black/90 via-black/60 to-transparent flex flex-col gap-3">
        {/* Interactive Scrub Timeline */}
        <div className="relative w-full flex items-center group/timeline">
          <input
            type="range"
            min={0}
            max={videoDuration || 7.5}
            step={0.05}
            value={currentTime}
            onChange={handleScrubChange}
            onMouseDown={() => setIsUserScrubbing(true)}
            onMouseUp={() => setIsUserScrubbing(false)}
            onTouchStart={() => setIsUserScrubbing(true)}
            onTouchEnd={() => setIsUserScrubbing(false)}
            className="w-full h-1.5 bg-zinc-700/60 rounded-lg appearance-none cursor-pointer accent-red-500 hover:h-2 transition-all relative z-10"
            aria-label="Barra de progresso do vídeo"
          />
        </div>

        {/* Lower Row: Play Controls, Chapter Chips, and Timestamp */}
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
          {/* Controls: Play, Restart */}
          <div className="flex items-center gap-2">
            <button
              onClick={togglePlay}
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-colors"
              title={isPlaying ? 'Pausar' : 'Reproduzir'}
              aria-label={isPlaying ? 'Pausar' : 'Reproduzir'}
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-white text-white" />}
            </button>
            <button
              onClick={handleRestart}
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-zinc-300 hover:text-white backdrop-blur-md transition-colors"
              title="Reiniciar vídeo"
              aria-label="Reiniciar vídeo"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
            <span className="font-mono text-zinc-400 pl-1">
              00:0{Math.floor(currentTime)} / 00:0{Math.floor(videoDuration)}
            </span>
          </div>

          {/* Chapter Quick Jump Chips */}
          <div className="hidden md:flex items-center gap-1.5">
            {chapters.map((ch, idx) => {
              const isActive = activeChapterIndex === idx;
              return (
                <button
                  key={ch.id}
                  onClick={() => seekToChapter(ch.time, idx)}
                  className={`px-3 py-1 rounded-lg text-[11px] font-medium transition-all ${
                    isActive
                      ? 'bg-red-600 text-white shadow-[0_0_12px_rgba(239,68,68,0.5)]'
                      : 'bg-white/5 hover:bg-white/15 text-zinc-400 hover:text-zinc-200 border border-white/5'
                  }`}
                  title={ch.desc}
                >
                  {ch.title}
                </button>
              );
            })}
          </div>

          {/* Live indicator tag */}
          <div className="flex items-center gap-2 text-[11px] text-zinc-400 font-mono">
            <span className="hidden sm:inline">QUALIDADE 1080P // 60FPS</span>
            <span className="px-2 py-0.5 rounded bg-red-950/80 border border-red-500/40 text-red-400 font-semibold">
              HD
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
