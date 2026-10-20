import { useState } from 'react';
import { Play } from 'lucide-react';
import LoopVideo from './LoopVideo';
import Lightbox from './Lightbox';
import { CATEGORIES, PROJECTS, type Category, type Project } from '../content';

type Filter = 'Featured' | Category;
const FILTERS: Filter[] = ['Featured', ...CATEGORIES];

export default function Work() {
  const [filter, setFilter] = useState<Filter>('Featured');
  const [active, setActive] = useState<Project | null>(null);

  const items = PROJECTS.filter((p) => (filter === 'Featured' ? p.featured : p.category === filter));

  return (
    <section id="work" className="relative px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h2 className="text-3xl font-medium tracking-tight text-cream md:text-5xl">
            Selected work.
            <span className="block font-serif italic text-muted">Real ads, client names withheld.</span>
          </h2>
          <p className="max-w-xs text-sm text-muted">Tap any cut to watch it with sound.</p>
        </div>

        <div className="-mx-4 mt-8 overflow-x-auto px-4 md:mx-0 md:px-0" role="tablist" aria-label="Filter work">
          <div className="flex w-max gap-2">
            {FILTERS.map((f) => (
              <button
                key={f}
                role="tab"
                aria-selected={filter === f}
                onClick={() => setFilter(f)}
                className={`whitespace-nowrap rounded-full border px-4 py-2 text-xs transition-colors sm:text-sm ${
                  filter === f
                    ? 'border-cream bg-cream text-black'
                    : 'border-white/15 text-cream/70 hover:border-white/40 hover:text-cream'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 columns-2 gap-3 md:columns-3 md:gap-4 lg:columns-4">
          {items.map((project) => (
            <button
              key={project.id}
              type="button"
              onClick={() => setActive(project)}
              className="group mb-3 block w-full break-inside-avoid text-left md:mb-4"
            >
              <div
                className="relative overflow-hidden rounded-xl border border-white/10 bg-[#111]"
                style={{ aspectRatio: project.aspect }}
              >
                <LoopVideo
                  src={`loops/${project.id}.mp4`}
                  poster={project.poster}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
                <span className="absolute left-3 top-3 rounded-full bg-black/50 px-2 py-1 text-[10px] uppercase tracking-wider text-cream/90 backdrop-blur">
                  {project.category}
                </span>
                <Play
                  className="absolute bottom-3 right-3 h-8 w-8 text-cream/90 transition-transform group-hover:scale-110"
                  strokeWidth={1.25}
                  fill="rgba(225,224,204,0.15)"
                />
                {project.result && (
                  <span className="absolute bottom-3 left-3 max-w-[70%] rounded-full bg-accent px-2.5 py-1 text-[10px] font-bold text-black sm:text-xs">
                    {project.result}
                  </span>
                )}
              </div>
              <div className="mt-2 px-0.5">
                <p className="text-[10px] uppercase tracking-wider text-muted sm:text-[11px]">{project.client}</p>
                <h3 className="text-sm font-medium text-cream sm:text-base">{project.title}</h3>
                <p className="mt-1 hidden text-xs leading-relaxed text-muted sm:block">{project.description}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      <Lightbox project={active} onClose={() => setActive(null)} />
    </section>
  );
}
