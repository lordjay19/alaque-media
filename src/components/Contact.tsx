import { useState, type FormEvent } from 'react';
import { ArrowRight } from 'lucide-react';
import { CONTACT_EMAIL, NEEDS, PAYPAL_URL, VOLUMES, WISE_URL } from '../content';

const field =
  'w-full rounded-xl border border-white/15 bg-white/[0.03] px-4 py-3 text-sm text-cream placeholder:text-muted/70 focus:border-accent focus:outline-none';

/** No backend: the form composes a prefilled email in the visitor's mail app. */
export default function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const get = (k: string) => String(d.get(k) ?? '').trim();
    const subject = `New project: ${get('brand') || get('name')}`;
    const body = [
      `Name: ${get('name')}`,
      `Brand / website: ${get('brand')}`,
      `Need: ${get('need')}`,
      `Volume: ${get('volume')}`,
      '',
      get('message'),
    ].join('\n');
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <section id="contact" className="px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 rounded-3xl border border-white/10 bg-white/[0.02] p-6 md:p-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="text-xs uppercase tracking-[0.2em] text-accent">Start a project</p>
          <h2 className="mt-3 text-3xl font-medium tracking-tight text-cream md:text-5xl">
            Tell us what you're testing.
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-cream/70">
            Share your brand and what you need. We reply within one business day with a plan, turnaround and a
            test slot.
          </p>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="mt-6 inline-block break-all text-sm text-cream underline underline-offset-4 hover:text-accent"
          >
            {CONTACT_EMAIL}
          </a>
          <p className="mt-6 text-sm text-muted">
            Paying an invoice?{' '}
            <a href={PAYPAL_URL} target="_blank" rel="noopener noreferrer" className="text-cream underline underline-offset-4 hover:text-accent">
              PayPal
            </a>{' '}
            or{' '}
            <a href={WISE_URL} target="_blank" rel="noopener noreferrer" className="text-cream underline underline-offset-4 hover:text-accent">
              Wise
            </a>
            .
          </p>
        </div>

        <form onSubmit={onSubmit} className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:col-span-7">
          <label className="sr-only" htmlFor="name">Name</label>
          <input id="name" name="name" required placeholder="Your name" className={field} />
          <label className="sr-only" htmlFor="brand">Brand or website</label>
          <input id="brand" name="brand" required placeholder="Brand or website" className={field} />
          <label className="sr-only" htmlFor="need">What you need</label>
          <select id="need" name="need" className={field} defaultValue={NEEDS[0]}>
            {NEEDS.map((n) => (
              <option key={n} className="bg-black">{n}</option>
            ))}
          </select>
          <label className="sr-only" htmlFor="volume">Monthly volume</label>
          <select id="volume" name="volume" className={field} defaultValue={VOLUMES[1]}>
            {VOLUMES.map((v) => (
              <option key={v} className="bg-black">{v}</option>
            ))}
          </select>
          <label className="sr-only" htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Product, current ad spend, links to footage or past ads…"
            className={`${field} sm:col-span-2`}
          />
          <button
            type="submit"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-cream py-3 text-sm font-medium text-black transition-all hover:gap-3 sm:col-span-2"
          >
            Send brief
            <ArrowRight className="h-4 w-4" />
          </button>
          {sent && (
            <p className="text-xs text-muted sm:col-span-2" role="status">
              Your email app should have opened with the brief filled in. If it didn't, email {CONTACT_EMAIL}.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
