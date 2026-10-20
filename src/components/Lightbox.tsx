import { useEffect, useRef } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { X } from 'lucide-react';
import { asset, type Project } from '../content';

interface LightboxProps {
  project: Project | null;
  onClose: () => void;
}

/** Plays a full cut with sound. Vertical cuts are capped by height so they fit any screen. */
export default function Lightbox({ project, onClose }: LightboxProps) {
  const reduceMotion = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!project) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';
    videoRef.current?.play().catch(() => {
      // Autoplay can be blocked; the visible controls let the visitor start it.
    });
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [project, onClose]);

  const wide = project?.aspect === '16/9';

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 md:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={project.title}
        >
          <motion.div
            className={`relative ${wide ? 'w-full max-w-4xl' : 'w-auto'}`}
            initial={reduceMotion ? false : { scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.97, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute -top-11 right-0 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-cream transition-colors hover:bg-white/20"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="overflow-hidden rounded-xl bg-[#101010]">
              <video
                ref={videoRef}
                key={project.video}
                src={asset(project.video)}
                poster={asset(project.poster)}
                controls
                playsInline
                className={wide ? 'max-h-[75vh] w-full' : 'mx-auto max-h-[75vh] w-auto max-w-[90vw]'}
                style={{ aspectRatio: project.aspect }}
              />
            </div>
            <div className="mt-3 flex items-baseline justify-between gap-4 px-1">
              <div>
                <p className="text-[11px] uppercase tracking-wider text-muted">{project.client}</p>
                <h3 className="text-base font-medium text-cream">{project.title}</h3>
              </div>
              {project.result && (
                <span className="shrink-0 rounded-full bg-accent/15 px-3 py-1 text-xs text-accent">
                  {project.result}
                </span>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
