import React, { useRef, useEffect, useState } from 'react';
import { UploadCloud, Check } from 'lucide-react';

const DB_NAME = 'chefemind_media_db';
const STORE_NAME = 'videos';

function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, 1);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

async function loadVideoFromDB(): Promise<Blob | null> {
  try {
    const db = await openDB();
    const tx = db.transaction(STORE_NAME, 'readonly');
    const req = tx.objectStore(STORE_NAME).get('bg_video');
    return new Promise((resolve) => {
      req.onsuccess = () => resolve(req.result || null);
      req.onerror = () => resolve(null);
    });
  } catch {
    return null;
  }
}

async function saveVideoToDB(blob: Blob): Promise<void> {
  try {
    const db = await openDB();
    const tx = db.transaction(STORE_NAME, 'readwrite');
    tx.objectStore(STORE_NAME).put(blob, 'bg_video');
  } catch (err) {
    console.error('Failed to save video in DB:', err);
  }
}

export const BackgroundScrollVideo: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const DEFAULT_VIDEO_URL = '/assets/chefemind-loop-v3.mp4?v=3';
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoSrc, setVideoSrc] = useState<string>(DEFAULT_VIDEO_URL);
  const [isDragging, setIsDragging] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Check if a custom video was previously stored in IndexedDB
  useEffect(() => {
    let activeUrl: string | null = null;
    loadVideoFromDB().then((blob) => {
      if (blob) {
        activeUrl = URL.createObjectURL(blob);
        setVideoSrc(activeUrl);
      }
    });

    return () => {
      if (activeUrl) {
        URL.revokeObjectURL(activeUrl);
      }
    };
  }, []);

  const handleApplyNewVideo = async (file: File) => {
    if (!file.type.startsWith('video/') && !file.name.endsWith('.mp4')) {
      showToast('Por favor selecione um arquivo de vídeo (.mp4)');
      return;
    }

    const blobUrl = URL.createObjectURL(file);
    setVideoSrc(blobUrl);
    showToast('Novo vídeo aplicado com sucesso!');

    await saveVideoToDB(file);

    // Sync with backend so it persists in /assets/
    try {
      await fetch('/api/upload-video', {
        method: 'POST',
        headers: { 'Content-Type': 'video/mp4' },
        body: file,
      });
    } catch {
      // IndexedDB handles client persistence
    }
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  // Drag and drop events on entire window
  useEffect(() => {
    let dragCounter = 0;

    const handleDragEnter = (e: DragEvent) => {
      e.preventDefault();
      dragCounter++;
      if (e.dataTransfer && e.dataTransfer.types.includes('Files')) {
        setIsDragging(true);
      }
    };

    const handleDragLeave = (e: DragEvent) => {
      e.preventDefault();
      dragCounter--;
      if (dragCounter <= 0) {
        setIsDragging(false);
        dragCounter = 0;
      }
    };

    const handleDragOver = (e: DragEvent) => {
      e.preventDefault();
    };

    const handleDrop = (e: DragEvent) => {
      e.preventDefault();
      setIsDragging(false);
      dragCounter = 0;
      if (e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files.length > 0) {
        const file = e.dataTransfer.files[0];
        handleApplyNewVideo(file);
      }
    };

    window.addEventListener('dragenter', handleDragEnter);
    window.addEventListener('dragleave', handleDragLeave);
    window.addEventListener('dragover', handleDragOver);
    window.addEventListener('drop', handleDrop);

    return () => {
      window.removeEventListener('dragenter', handleDragEnter);
      window.removeEventListener('dragleave', handleDragLeave);
      window.removeEventListener('dragover', handleDragOver);
      window.removeEventListener('drop', handleDrop);
    };
  }, []);

  // Continuous auto-play loop initialization without intrusive controls
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    video.playbackRate = 1.0;

    const playVideo = () => {
      video.play().catch(() => {});
    };

    playVideo();

    const handleFirstInteraction = () => {
      if (video.paused) {
        playVideo();
      }
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('scroll', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
    };

    window.addEventListener('click', handleFirstInteraction, { passive: true, once: true });
    window.addEventListener('scroll', handleFirstInteraction, { passive: true, once: true });
    window.addEventListener('touchstart', handleFirstInteraction, { passive: true, once: true });

    return () => {
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('scroll', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
    };
  }, [videoSrc]);

  return (
    <>
      <div
        id="chefemind-background-video-wrapper"
        className="fixed inset-0 w-full h-full z-0 overflow-hidden pointer-events-none select-none bg-[#050608]"
        aria-hidden="true"
      >
        <video
          ref={videoRef}
          key={videoSrc}
          id="chefemind-loop-video"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          onLoadedData={() => setVideoLoaded(true)}
          className={`w-full h-full object-cover object-center transition-opacity duration-700 ${
            videoLoaded ? 'opacity-100' : 'opacity-85'
          }`}
          style={{ willChange: 'transform' }}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>

        {/* Atmospheric lighting glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-red-600/15 blur-[140px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-rose-600/10 blur-[140px] pointer-events-none" />

        {/* Balanced dark tint overlay preserving high video vibrancy and crisp readability */}
        <div className="absolute inset-0 bg-[#06080d]/40 backdrop-blur-[0.5px] pointer-events-none" />

        {/* Subtle Radial Vignette around outer screen borders */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_50%,#06080d_95%)] opacity-55 pointer-events-none" />

        {/* Gradient fades at very top and bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#06080d]/50 via-transparent to-[#06080d]/80 pointer-events-none" />
      </div>

      {/* Drag and drop overlay visual feedback */}
      {isDragging && (
        <div
          id="drag-drop-video-overlay"
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050608]/90 backdrop-blur-md border-2 border-dashed border-red-500/80 pointer-events-none transition-all animate-in fade-in duration-200"
        >
          <div className="w-20 h-20 rounded-3xl bg-red-600/20 border border-red-500/40 flex items-center justify-center text-red-400 mb-5 shadow-[0_0_50px_rgba(239,68,68,0.4)] animate-bounce">
            <UploadCloud className="w-10 h-10" />
          </div>
          <h3 className="text-2xl font-bold text-white tracking-tight mb-2">
            Solte o arquivo de vídeo aqui
          </h3>
          <p className="text-sm text-zinc-400 max-w-md text-center">
            O ChefeMind atualizará imediatamente o vídeo de fundo em alta resolução.
          </p>
        </div>
      )}

      {/* Toast Notification */}
      {toastMessage && (
        <div
          id="bg-video-toast"
          className="fixed top-20 right-6 z-50 flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-[#0e131f] border border-emerald-500/30 text-emerald-400 text-xs font-medium shadow-[0_10px_30px_rgba(0,0,0,0.8)] backdrop-blur-xl animate-in slide-in-from-top-2 duration-300 pointer-events-none"
        >
          <Check className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}
    </>
  );
};
