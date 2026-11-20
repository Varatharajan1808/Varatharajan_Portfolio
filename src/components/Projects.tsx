import React, { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { PROJECTS, type Project, type ProjectImage } from '../data/portfolioData';
import { GithubIcon } from './Icons';
import {
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Play,
  X,
  Images,
  Video,
  ArrowLeft
} from 'lucide-react';

export const Projects: React.FC = () => {
  // Active screenshot index for each project card: { projectId: index }
  const [activeImageIndices, setActiveImageIndices] = useState<Record<string, number>>({});

  // Lightbox Modal state
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    project: Project | null;
    currentIndex: number;
    isVideo: boolean;
  }>({
    isOpen: false,
    project: null,
    currentIndex: 0,
    isVideo: false
  });

  const getActiveIndex = (projectId: string) => activeImageIndices[projectId] || 0;

  const setActiveIndex = (projectId: string, index: number) => {
    setActiveImageIndices((prev) => ({ ...prev, [projectId]: index }));
  };

  const handleNextImage = (e: React.MouseEvent, project: Project) => {
    e.stopPropagation();
    const current = getActiveIndex(project.id);
    const next = (current + 1) % project.gallery.length;
    setActiveIndex(project.id, next);
  };

  const handlePrevImage = (e: React.MouseEvent, project: Project) => {
    e.stopPropagation();
    const current = getActiveIndex(project.id);
    const prev = (current - 1 + project.gallery.length) % project.gallery.length;
    setActiveIndex(project.id, prev);
  };

  const openLightbox = (project: Project, index = 0, isVideo = false) => {
    setModalState({
      isOpen: true,
      project,
      currentIndex: index,
      isVideo
    });
  };

  const closeLightbox = useCallback(() => {
    setModalState((prev) => ({ ...prev, isOpen: false }));
  }, []);

  const nextModalItem = useCallback(() => {
    if (!modalState.project) return;
    const count = modalState.project.gallery.length;
    setModalState((prev) => ({
      ...prev,
      currentIndex: (prev.currentIndex + 1) % count,
      isVideo: false
    }));
  }, [modalState.project]);

  const prevModalItem = useCallback(() => {
    if (!modalState.project) return;
    const count = modalState.project.gallery.length;
    setModalState((prev) => ({
      ...prev,
      currentIndex: (prev.currentIndex - 1 + count) % count,
      isVideo: false
    }));
  }, [modalState.project]);

  // Lock body scroll when modal is active
  useEffect(() => {
    if (modalState.isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [modalState.isOpen]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (!modalState.isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextModalItem();
      if (e.key === 'ArrowLeft') prevModalItem();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [modalState.isOpen, closeLightbox, nextModalItem, prevModalItem]);

  return (
    <section id="projects" className="py-20 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto border-t border-slate-800/60">
      <div className="mb-12">
        <div className="text-xs font-semibold text-cyan-400 tracking-wider uppercase mb-1">
          {'// Featured Projects'}
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Featured 3D Engine & Shader Works
        </h2>
        <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
          Core real-time graphics applications and custom engines built with TypeScript, WebGL, and custom shaders. Click any screenshot or video to inspect in full resolution.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS.map((project) => {
          const currentIndex = getActiveIndex(project.id);
          const currentImage: ProjectImage = project.gallery[currentIndex] || {
            src: project.image,
            caption: project.title
          };

          return (
            <div
              key={project.id}
              className="rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/40 transition-all overflow-hidden flex flex-col justify-between group shadow-xl"
            >
              <div>
                {/* Interactive Media Viewport */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-950 border-b border-slate-800 select-none">
                  <img
                    src={currentImage.src}
                    alt={currentImage.caption}
                    className="w-full h-full object-cover transition-all duration-300 cursor-pointer group-hover:scale-[1.02]"
                    onClick={() => openLightbox(project, currentIndex, false)}
                  />

                  {/* Top-left "Back to Cover" button when an inner screenshot is selected */}
                  {currentIndex > 0 && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveIndex(project.id, 0);
                      }}
                      className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-slate-950/90 backdrop-blur-md border border-cyan-500/60 text-[11px] font-semibold text-cyan-300 hover:text-white hover:bg-cyan-500/30 transition-all flex items-center gap-1.5 cursor-pointer shadow-lg z-10"
                      title="Back to first screenshot / cover"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>Back to Cover</span>
                    </button>
                  )}

                  {/* Top-right Status / Video Pill */}
                  <div className="absolute top-3 right-3 flex items-center gap-2 z-10">
                    {project.videoUrl && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          openLightbox(project, 0, true);
                        }}
                        className="px-2.5 py-1 rounded-md bg-slate-950/85 backdrop-blur-md border border-cyan-500/40 text-[11px] font-semibold text-cyan-400 hover:text-white hover:bg-cyan-500/20 transition-all flex items-center gap-1.5 cursor-pointer shadow-md"
                        title="Watch Video Demo"
                      >
                        <Play className="w-3 h-3 fill-current" />
                        <span>Demo Video</span>
                      </button>
                    )}
                    <span className="px-2.5 py-1 rounded-md bg-slate-950/80 backdrop-blur-md border border-slate-700 text-[11px] font-semibold text-slate-300 flex items-center gap-1">
                      <Images className="w-3 h-3 text-cyan-400" />
                      <span>{currentIndex + 1}/{project.gallery.length}</span>
                    </span>
                  </div>

                  {/* Next / Prev Navigation Arrows */}
                  {project.gallery.length > 1 && (
                    <>
                      <button
                        onClick={(e) => handlePrevImage(e, project)}
                        className="absolute left-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-slate-950/85 hover:bg-cyan-500 hover:text-slate-950 text-white flex items-center justify-center transition-all opacity-90 group-hover:opacity-100 border border-slate-700 shadow-lg cursor-pointer z-10"
                        title="Previous screenshot"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <button
                        onClick={(e) => handleNextImage(e, project)}
                        className="absolute right-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-slate-950/85 hover:bg-cyan-500 hover:text-slate-950 text-white flex items-center justify-center transition-all opacity-90 group-hover:opacity-100 border border-slate-700 shadow-lg cursor-pointer z-10"
                        title="Next screenshot"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </>
                  )}

                  {/* Bottom Caption Overlay */}
                  <div
                    onClick={() => openLightbox(project, currentIndex, false)}
                    className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent p-3 pt-6 flex items-center justify-between text-xs cursor-pointer"
                  >
                    <p className="text-slate-200 text-xs font-medium truncate pr-2">
                      {currentImage.caption}
                    </p>
                    <span className="text-cyan-400 opacity-75 hover:opacity-100 flex items-center gap-1 shrink-0 text-[11px]">
                      <Maximize2 className="w-3 h-3" />
                      <span className="hidden sm:inline">Inspect</span>
                    </span>
                  </div>
                </div>

                {/* Screenshot Thumbnails Strip */}
                {project.gallery.length > 1 && (
                  <div className="flex items-center gap-2 px-6 pt-3 overflow-x-auto scrollbar-none">
                    {project.gallery.map((img, idx) => (
                      <button
                        key={img.src}
                        onClick={() => setActiveIndex(project.id, idx)}
                        className={`relative w-14 h-9 sm:w-16 sm:h-10 rounded-lg overflow-hidden border transition-all shrink-0 cursor-pointer ${
                          idx === currentIndex
                            ? 'border-cyan-400 ring-2 ring-cyan-500/40 scale-105'
                            : 'border-slate-800 opacity-60 hover:opacity-100 hover:border-slate-600'
                        }`}
                        title={img.caption}
                      >
                        <img
                          src={img.src}
                          alt={img.caption}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}

                    {project.videoUrl && (
                      <button
                        onClick={() => openLightbox(project, 0, true)}
                        className="relative w-14 h-9 sm:w-16 sm:h-10 rounded-lg overflow-hidden border border-slate-800 bg-slate-950/90 text-cyan-400 hover:border-cyan-400 hover:text-white flex flex-col items-center justify-center transition-all shrink-0 cursor-pointer text-[10px] gap-0.5"
                        title="Play Video Demo"
                      >
                        <Video className="w-3.5 h-3.5" />
                        <span className="font-semibold text-[9px]">Video</span>
                      </button>
                    )}
                  </div>
                )}

                {/* Content */}
                <div className="p-6 sm:p-7 space-y-3">
                  <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <div className="text-xs text-cyan-400 font-semibold tracking-wide">
                    {project.tagline}
                  </div>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed pt-1">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-3">
                    {project.tags.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-md bg-slate-800/80 text-[11px] font-medium text-slate-300 border border-slate-700/60"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Links */}
              <div className="p-6 sm:p-7 pt-0 flex flex-wrap items-center gap-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 min-w-[130px] py-2.5 px-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-md shadow-cyan-500/20 hover:scale-[1.02]"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </a>
                )}

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors border border-slate-700 hover:border-slate-600"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>View Code</span>
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {/* Fullscreen Lightbox / Video Modal (Mounted directly on document.body above everything) */}
      {modalState.isOpen && modalState.project && typeof document !== 'undefined' &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-[9999] bg-slate-950/95 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-6 animate-in fade-in duration-200"
            onClick={closeLightbox}
          >
            {/* Modal Header: Clear "Back to Projects" button + Info + "Close" */}
            <div
              className="flex items-center justify-between max-w-6xl w-full mx-auto pb-3 border-b border-slate-800/80 gap-3"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Prominent Back Button */}
              <button
                onClick={closeLightbox}
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/90 hover:bg-cyan-500 hover:text-slate-950 text-white font-semibold text-xs sm:text-sm border border-slate-700 hover:border-cyan-400 transition-all shadow-lg cursor-pointer group"
                title="Go back to portfolio (Esc)"
              >
                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />
                <span>Back to Projects</span>
              </button>

              {/* Title & Caption */}
              <div className="text-center truncate px-2 hidden sm:block">
                <h3 className="text-base sm:text-lg font-bold text-white truncate">
                  {modalState.project.title}
                </h3>
                <p className="text-xs text-cyan-400 font-medium truncate">
                  {modalState.isVideo
                    ? 'Video Recording Demonstration'
                    : modalState.project.gallery[modalState.currentIndex]?.caption || 'Reference Screenshot'}
                </p>
              </div>

              {/* Top-Right Close Button */}
              <button
                onClick={closeLightbox}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-900/90 hover:bg-rose-500/20 text-slate-300 hover:text-rose-300 hover:border-rose-500/40 text-xs sm:text-sm font-semibold transition-all border border-slate-700 cursor-pointer"
                title="Close modal (Esc)"
              >
                <span className="hidden sm:inline">Close</span>
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Center Viewport */}
            <div
              className="relative flex-1 flex items-center justify-center max-w-6xl w-full mx-auto my-3 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {modalState.isVideo && modalState.project.videoUrl ? (
                <video
                  src={modalState.project.videoUrl}
                  controls
                  autoPlay
                  className="max-h-[68vh] w-auto max-w-full rounded-xl border border-slate-800 shadow-2xl bg-black"
                />
              ) : (
                <img
                  src={modalState.project.gallery[modalState.currentIndex]?.src}
                  alt={modalState.project.gallery[modalState.currentIndex]?.caption}
                  className="max-h-[70vh] w-auto max-w-full object-contain rounded-xl border border-slate-800 shadow-2xl"
                />
              )}

              {/* Left / Right Nav inside Modal (for screenshots) */}
              {!modalState.isVideo && modalState.project.gallery.length > 1 && (
                <>
                  <button
                    onClick={prevModalItem}
                    className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-slate-900/90 hover:bg-cyan-500 hover:text-slate-950 text-white flex items-center justify-center transition-all border border-slate-700 shadow-xl cursor-pointer"
                    title="Previous image (Left Arrow)"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={nextModalItem}
                    className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-slate-900/90 hover:bg-cyan-500 hover:text-slate-950 text-white flex items-center justify-center transition-all border border-slate-700 shadow-xl cursor-pointer"
                    title="Next image (Right Arrow)"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}
            </div>

            {/* Modal Bottom Thumbnail Bar + Mobile Back Action */}
            <div
              className="flex flex-col items-center gap-2.5 max-w-6xl w-full mx-auto pt-1"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-center gap-2 overflow-x-auto w-full py-1">
                {modalState.project.gallery.map((img, idx) => (
                  <button
                    key={img.src}
                    onClick={() =>
                      setModalState((prev) => ({
                        ...prev,
                        currentIndex: idx,
                        isVideo: false
                      }))
                    }
                    className={`w-14 h-9 sm:w-20 sm:h-12 rounded-lg overflow-hidden border transition-all shrink-0 cursor-pointer ${
                      !modalState.isVideo && idx === modalState.currentIndex
                        ? 'border-cyan-400 ring-2 ring-cyan-500/40 scale-105'
                        : 'border-slate-800 opacity-60 hover:opacity-100 hover:border-slate-600'
                    }`}
                  >
                    <img
                      src={img.src}
                      alt={img.caption}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}

                {modalState.project.videoUrl && (
                  <button
                    onClick={() =>
                      setModalState((prev) => ({
                        ...prev,
                        isVideo: true
                      }))
                    }
                    className={`w-14 h-9 sm:w-20 sm:h-12 rounded-lg overflow-hidden border bg-slate-900 flex flex-col items-center justify-center gap-1 transition-all shrink-0 cursor-pointer ${
                      modalState.isVideo
                        ? 'border-cyan-400 ring-2 ring-cyan-500/40 scale-105 text-cyan-400'
                        : 'border-slate-800 text-slate-400 opacity-60 hover:opacity-100 hover:border-slate-600'
                    }`}
                  >
                    <Play className="w-4 h-4 fill-current" />
                    <span className="text-[10px] font-bold">Video</span>
                  </button>
                )}
              </div>

              {/* Bottom Quick Return Button (extra helpful on mobile) */}
              <button
                onClick={closeLightbox}
                className="sm:hidden px-4 py-1.5 rounded-full bg-slate-800 text-cyan-300 border border-cyan-500/30 text-xs font-semibold flex items-center gap-1.5 cursor-pointer shadow-md"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back to Portfolio</span>
              </button>
            </div>
          </div>,
          document.body
        )}
    </section>
  );
};
