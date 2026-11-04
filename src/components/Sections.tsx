import { useState } from 'react';
import { Check, Plus } from 'lucide-react';
import LoopVideo from './LoopVideo';
import {
  ABOUT,
  FAQ,
  HOOK_LAB,
  PAYPAL_URL,
  PLANS,
  PRICING_NOTE,
  PROCESS,
  SERVICES,
  STATS,
  TOOLS,
  WISE_URL,
} from '../content';

function SectionTitle({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div>
      <p className="text-xs uppercase tracking-[0.2em] text-accent">{kicker}</p>
      <h2 className="mt-3 max-w-2xl text-3xl font-medium tracking-tight text-cream md:text-5xl">{title}</h2>
    </div>
  );
}

export function Stats() {
  return (
    <section aria-label="Results" className="border-y border-white/10 px-4 py-10 md:px-6">
      <dl className="mx-auto grid max-w-7xl grid-cols-2 gap-8 lg:grid-cols-4">
        {STATS.map((s) => (
          <div key={s.label}>
            <dt className="sr-only">{s.label}</dt>
            <dd className="text-4xl font-medium tracking-tight text-cream md:text-5xl">{s.value}</dd>
            <dd className="mt-2 max-w-[16rem] text-xs leading-relaxed text-muted sm:text-sm">{s.label}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

export function HookLab() {
  return (
    <section id="hooks" className="px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionTitle kicker="Hook lab" title={HOOK_LAB.title} />
          <p className="mt-6 max-w-md text-base leading-relaxed text-cream/70">{HOOK_LAB.body}</p>
        </div>
        <div className="grid grid-cols-3 gap-3 lg:col-span-7">
          {HOOK_LAB.hooks.map((h) => (
            <figure key={h.label}>
              <div className="overflow-hidden rounded-xl border border-white/10 bg-[#111]" style={{ aspectRatio: '4/5' }}>
                <LoopVideo src={h.loop} className="h-full w-full object-cover" />
              </div>
              <figcaption className="mt-2">
                <p className="text-sm font-medium text-cream">{h.label}</p>
                <p className="text-xs text-muted">{h.angle}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Process() {
  return (
    <section className="px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionTitle kicker="How it works" title="From brief to winning ad, every week." />
        <ol className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS.map((s) => (
            <li key={s.n} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <span className="font-serif text-3xl italic text-accent">{s.n}</span>
              <h3 className="mt-4 text-lg font-medium text-cream">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section id="services" className="px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionTitle kicker="Services" title="Everything a paid social team needs from an editor." />
        <div className="mt-10 grid grid-cols-1 border-t border-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <div key={s.title} className="border-b border-white/10 py-6 sm:pr-8">
              <h3 className="text-lg font-medium text-cream">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Pricing() {
  return (
    <section id="pricing" className="px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionTitle kicker="Pricing" title="Simple packages. Start small, scale what works." />
        <div className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-3">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`flex flex-col rounded-2xl border p-6 md:p-8 ${
                plan.highlight ? 'border-accent bg-accent/[0.06]' : 'border-white/10 bg-white/[0.02]'
              }`}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium text-cream">{plan.name}</h3>
                {plan.highlight && (
                  <span className="rounded-full bg-accent px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-black">
                    Most popular
                  </span>
                )}
              </div>
              <p className="mt-6">
                <span className="text-5xl font-medium tracking-tight text-cream">{plan.price}</span>
                <span className="ml-1 text-sm text-muted">{plan.cadence}</span>
              </p>
              <p className="mt-3 text-sm text-cream/70">{plan.pitch}</p>
              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-cream/85">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`mt-8 rounded-full py-3 text-center text-sm font-medium transition-colors ${
                  plan.highlight ? 'bg-cream text-black hover:bg-white' : 'border border-white/20 text-cream hover:bg-white/10'
                }`}
              >
                Get started
              </a>
              {plan.payAmountUsd && (
                <p className="mt-3 text-center text-xs text-muted">
                  or pay ${plan.payAmountUsd} now:{' '}
                  <a href={`${PAYPAL_URL}/${plan.payAmountUsd}USD`} target="_blank" rel="noopener noreferrer" className="text-cream underline underline-offset-2 hover:text-accent">
                    PayPal
                  </a>{' '}
                  ·{' '}
                  <a href={WISE_URL} target="_blank" rel="noopener noreferrer" className="text-cream underline underline-offset-2 hover:text-accent">
                    Wise
                  </a>
                </p>
              )}
            </div>
          ))}
        </div>
        <p className="mt-6 text-xs text-muted">{PRICING_NOTE}</p>
      </div>
    </section>
  );
}

export function Studio() {
  return (
    <section id="studio" className="px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <SectionTitle kicker="The studio" title="Editors who read the ad account." />
          <p className="mt-6 max-w-lg text-base leading-relaxed text-cream/70">{ABOUT}</p>
        </div>
        <div className="space-y-8 lg:col-span-6">
          {(
            [
              ['Edit stack', TOOLS.edit],
              ['AI stack', TOOLS.ai],
            ] as const
          ).map(([label, list]) => (
            <div key={label}>
              <p className="text-xs uppercase tracking-[0.2em] text-muted">{label}</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {list.map((t) => (
                  <li key={t} className="rounded-full border border-white/15 px-3 py-1.5 text-sm text-cream/85">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-3xl">
        <SectionTitle kicker="FAQ" title="Questions brands ask first." />
        <div className="mt-10 border-t border-white/10">
          {FAQ.map((item, i) => (
            <div key={item.q} className="border-b border-white/10">
              <button
                className="flex w-full items-center justify-between gap-4 py-5 text-left"
                aria-expanded={open === i}
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="text-base font-medium text-cream">{item.q}</span>
                <Plus
                  className={`h-5 w-5 shrink-0 text-muted transition-transform duration-300 ${open === i ? 'rotate-45' : ''}`}
                />
              </button>
              {open === i && <p className="pb-5 text-sm leading-relaxed text-muted">{item.a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
