import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import WordsPullUp from './WordsPullUp';
import LoopVideo from './LoopVideo';
import { HERO, NAV_ITEMS } from '../content';

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pb-12 pt-6 md:px-6 md:pb-20">
      <div className="bg-noise pointer-events-none absolute inset-0 opacity-[0.12]" />

      <nav className="relative z-20 mx-auto flex max-w-7xl items-center justify-between">
        <a href="#top" className="text-lg font-bold tracking-tight text-cream">
          ALAQUE<span className="text-accent">*</span>
        </a>
        <ul className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.label}>
              <a href={item.href} className="text-sm text-cream/70 transition-colors hover:text-cream">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="rounded-full border border-cream/25 px-4 py-2 text-xs text-cream transition-colors hover:bg-cream hover:text-black sm:text-sm"
        >
          Book a test
        </a>
      </nav>

      <div className="relative mx-auto mt-12 grid max-w-7xl grid-cols-1 items-center gap-12 md:mt-20 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="text-xs uppercase tracking-[0.2em] text-accent"
          >
            {HERO.eyebrow}
          </motion.p>
          <WordsPullUp
            text={HERO.headline}
            className="mt-4 text-5xl font-medium leading-[0.95] tracking-[-0.04em] text-cream sm:text-6xl md:text-7xl"
          />
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: EASE }}
            className="mt-6 max-w-lg text-base leading-relaxed text-cream/70 md:text-lg"
          >
            {HERO.body}
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: EASE }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-cream py-1.5 pl-6 pr-1.5 text-sm font-medium text-black transition-all hover:gap-3 sm:text-base"
            >
              Start with a $150 test
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black transition-transform group-hover:scale-110">
                <ArrowRight className="h-4 w-4 text-cream" />
              </span>
            </a>
            <a href="#work" className="text-sm text-cream/70 underline-offset-4 hover:text-cream hover:underline">
              See the work
            </a>
          </motion.div>
        </div>

        <div className="lg:col-span-6">
          <div className="mx-auto grid max-w-md grid-cols-3 gap-3 sm:max-w-lg lg:max-w-none">
            {HERO.loops.map((id, i) => (
              <motion.div
                key={id}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: i === 1 ? -24 : 0, opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.2 + i * 0.12, ease: EASE }}
                className="overflow-hidden rounded-2xl border border-white/10 bg-[#111]"
                style={{ aspectRatio: '9/16' }}
              >
                <LoopVideo
                  src={`loops/${id}.mp4`}
                  poster={`work/${id}.jpg`}
                  className="h-full w-full object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
