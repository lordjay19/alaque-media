import { useState } from 'react';
import { ArrowLeft, Check, Download, Plus, ShieldCheck } from 'lucide-react';
import { asset } from './content';
import {
  FP_CHECKS,
  FP_DOWNLOAD_URL,
  FP_FAQ,
  FP_HERO,
  FP_LICENCE_EMAIL_URL,
  FP_PAYPAL_URL,
  FP_POINTS,
  FP_PRICE,
  FP_STEPS,
  FP_VERSION,
  FP_WISE_URL,
} from './finalPassContent';

/** Asset paths are relative to the site root; this page lives one folder down. */
const up = (p: string) => asset(`../${p}`);

function Kicker({ children }: { children: string }) {
  return <p className="text-xs uppercase tracking-[0.2em] text-accent">{children}</p>;
}

export default function FinalPass() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-black text-cream">
      <header className="px-4 pt-6 md:px-6">
        <nav className="mx-auto flex max-w-7xl items-center justify-between">
          <a href={up('')} className="inline-flex items-center gap-2 text-sm text-cream/70 hover:text-cream">
            <ArrowLeft className="h-4 w-4" /> ALAQUE<span className="text-accent">*</span>
          </a>
          <a
            href="#get"
            className="rounded-full border border-cream/25 px-4 py-2 text-xs text-cream transition-colors hover:bg-cream hover:text-black sm:text-sm"
          >
            Get Final Pass
          </a>
        </nav>
      </header>

      <main>
        <section className="px-4 pb-12 pt-12 md:px-6 md:pt-20">
          <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Kicker>{FP_HERO.eyebrow}</Kicker>
              <h1 className="mt-4 text-4xl font-medium leading-[1] tracking-[-0.03em] sm:text-5xl md:text-6xl">
                {FP_HERO.headline}
              </h1>
              <p className="mt-6 max-w-md text-base leading-relaxed text-cream/70 md:text-lg">{FP_HERO.body}</p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href={FP_DOWNLOAD_URL}
                  className="inline-flex items-center gap-2 rounded-full bg-cream px-5 py-3 text-sm font-medium text-black transition-colors hover:bg-white"
                >
                  <Download className="h-4 w-4" /> Download free
                </a>
                <a
                  href="#get"
                  className="rounded-full border border-white/20 px-5 py-3 text-sm text-cream transition-colors hover:bg-white/10"
                >
                  Buy licence · {FP_PRICE}
                </a>
              </div>
              <p className="mt-4 text-xs text-muted">
                Windows 10 / 11 · v{FP_VERSION} · free version scans 3 videos at a time
              </p>
            </div>
            <figure className="lg:col-span-7">
              <img
                src={up('final-pass/app-results.jpg')}
                alt="Final Pass showing three scanned videos, with a loudness flag and a caption typo on the selected one"
                className="w-full rounded-xl border border-white/10"
                width={1000}
                height={745}
              />
              <figcaption className="mt-2 text-xs text-muted">
                A real scan of three demo ads: 3, 2 and 1 issues found.
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="border-y border-white/10 px-4 py-14 md:px-6 md:py-20">
          <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Kicker>Why it exists</Kicker>
              <h2 className="mt-3 text-3xl font-medium tracking-tight md:text-4xl">
                The typo you stopped seeing after the tenth watch.
              </h2>
              <p className="mt-4 max-w-md text-cream/70">
                After hours on a cut, your eyes skip right over it. Final Pass doesn't: it reads every caption on the
                picture and boxes the word that looks wrong, with a suggestion.
              </p>
            </div>
            <figure className="lg:col-span-7">
              <img
                src={up('final-pass/app-typo.png')}
                alt="Close-up of a caption reading 'Shop the new colection today' with the misspelled word boxed in red"
                className="w-full rounded-xl border border-white/10"
                width={1080}
                height={137}
              />
              <figcaption className="mt-2 text-xs text-muted">
                Flagged: "colection", did you mean "collection"?
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="px-4 py-14 md:px-6 md:py-20">
          <div className="mx-auto max-w-7xl">
            <Kicker>What it checks</Kicker>
            <h2 className="mt-3 max-w-2xl text-3xl font-medium tracking-tight md:text-4xl">
              Six checks on every export.
            </h2>
            <div className="mt-10 grid grid-cols-1 border-t border-white/10 sm:grid-cols-2 lg:grid-cols-3">
              {FP_CHECKS.map((c) => (
                <div key={c.title} className="border-b border-white/10 py-6 sm:pr-8">
                  <h3 className="text-lg font-medium">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{c.body}</p>
                </div>
              ))}
            </div>
            <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {FP_POINTS.map((p) => (
                <li key={p.title} className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                  <p className="font-medium">{p.title}</p>
                  <p className="mt-1 text-sm text-muted">{p.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="get" className="px-4 py-14 md:px-6 md:py-20">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8">
              <h2 className="text-lg font-medium">Free</h2>
              <p className="mt-4 text-5xl font-medium tracking-tight">$0</p>
              <ul className="mt-6 space-y-3 text-sm text-cream/85">
                {['All six checks', '3 videos per scan', 'Reports + flagged frames'].map((f) => (
                  <li key={f} className="flex gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" /> {f}
                  </li>
                ))}
              </ul>
              <a
                href={FP_DOWNLOAD_URL}
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/20 py-3 text-sm transition-colors hover:bg-white/10"
              >
                <Download className="h-4 w-4" /> Download v{FP_VERSION} (226 MB)
              </a>
            </div>
            <div className="rounded-2xl border border-accent bg-accent/[0.06] p-6 md:p-8">
              <h2 className="text-lg font-medium">Licence</h2>
              <p className="mt-4">
                <span className="text-5xl font-medium tracking-tight">{FP_PRICE}</span>
                <span className="ml-1 text-sm text-muted">one-time</span>
              </p>
              <ul className="mt-6 space-y-3 text-sm text-cream/85">
                {['Unlimited videos per scan', 'Your name in the app and on reports', 'Free 1.x updates'].map((f) => (
                  <li key={f} className="flex gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" /> {f}
                  </li>
                ))}
              </ul>
              <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                <a
                  href={FP_PAYPAL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-full bg-cream py-3 text-center text-sm font-medium text-black transition-colors hover:bg-white"
                >
                  Pay $25 with PayPal
                </a>
                <a
                  href={FP_WISE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-full border border-white/20 py-3 text-center text-sm font-medium text-cream transition-colors hover:bg-white/10"
                >
                  Pay $25 with Wise
                </a>
              </div>
              <p className="mt-4 text-xs leading-relaxed text-muted">
                After paying,{' '}
                <a href={FP_LICENCE_EMAIL_URL} className="text-cream underline underline-offset-2 hover:text-accent">
                  email me
                </a>{' '}
                the name you want on the licence. Your key arrives by email, usually within 24 hours.
              </p>
            </div>
          </div>

          <div className="mx-auto mt-10 max-w-7xl rounded-2xl border border-white/10 p-6 md:p-8">
            <p className="flex items-center gap-2 font-medium">
              <ShieldCheck className="h-5 w-5 text-accent" /> Installing on Windows
            </p>
            <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm text-cream/80">
              {FP_STEPS.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ol>
          </div>
        </section>

        <section className="px-4 py-14 md:px-6 md:py-20">
          <div className="mx-auto max-w-3xl">
            <Kicker>FAQ</Kicker>
            <div className="mt-6 border-t border-white/10">
              {FP_FAQ.map((item, i) => (
                <div key={item.q} className="border-b border-white/10">
                  <button
                    className="flex w-full items-center justify-between gap-4 py-5 text-left"
                    aria-expanded={open === i}
                    onClick={() => setOpen(open === i ? null : i)}
                  >
                    <span className="font-medium">{item.q}</span>
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
      </main>

      <footer className="px-4 pb-10 pt-4 text-center text-xs text-muted md:px-6">
        Final Pass by ALAQUE MEDIA · Uses FFmpeg (LGPL) and Tesseract OCR
      </footer>
    </div>
  );
}
