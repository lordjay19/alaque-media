/**
 * All site copy, prices and media in one place. Edit this file to change the site.
 * Media lives in /public: full cuts in work/ and portfolio/, 6-second silent
 * preview loops in loops/. Client names are withheld; categories and results are real.
 */

/** Resolves a /public path against the deploy base (works on GitHub Pages sub-paths). */
export const asset = (p: string) => `${import.meta.env.BASE_URL}${p}`;

export const CONTACT_EMAIL = 'lordjayplatero19@gmail.com';

export const NAV_ITEMS = [
  { label: 'Work', href: '#work' },
  { label: 'Hooks', href: '#hooks' },
  { label: 'Services', href: '#services' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Final Pass', href: 'final-pass/' },
];

export const HERO = {
  eyebrow: 'Performance creative studio',
  headline: 'Ads that earn their spend.',
  body: 'ALAQUE MEDIA edits UGC, AI-avatar and hook-variant ads for DTC brands, and iterates on what your numbers say. You send the footage, we send back winners to test.',
  loops: ['jewelry-reply-hook', 'health-avatar', 'ai-ugc-1'],
};

export interface Stat {
  value: string;
  label: string;
}

export const STATS: Stat[] = [
  { value: '3.48×', label: 'new-customer ROAS on a top UGC reply-hook ad' },
  { value: '200+', label: 'ad edits shipped for one DTC brand in 16 weeks' },
  { value: '3', label: 'hook variants on every concept, as standard' },
  { value: '48h', label: 'standard turnaround on a new concept' },
];

export type Category = 'Performance ads' | 'AI avatar & AI UGC' | 'UGC & social' | 'VSL' | 'Long-form';

export const CATEGORIES: Category[] = [
  'Performance ads',
  'AI avatar & AI UGC',
  'UGC & social',
  'VSL',
  'Long-form',
];

export interface Project {
  id: string;
  title: string;
  client: string;
  category: Category;
  description: string;
  /** Full cut with sound, opened in the lightbox. */
  video: string;
  poster: string;
  /** CSS aspect-ratio of the cut. */
  aspect: '9/16' | '4/5' | '1/1' | '16/9';
  result?: string;
  featured?: boolean;
}

const w = (id: string) => ({ video: `work/${id}.mp4`, poster: `work/${id}.jpg` });
const p = (id: string) => ({ video: `portfolio/${id}.mp4`, poster: `portfolio/${id}.jpg` });

export const PROJECTS: Project[] = [
  {
    id: 'jewelry-reply-hook',
    ...w('jewelry-reply-hook'),
    title: 'Comment-Reply UGC Ad',
    client: 'Jewelry DTC brand',
    category: 'Performance ads',
    description: 'Creator answers a skeptical comment on camera. Native TikTok reply hook, tight jump cuts, product proof in the first 5 seconds.',
    aspect: '9/16',
    result: '3.48× new-customer ROAS',
    featured: true,
  },
  {
    id: 'health-avatar',
    ...w('health-avatar'),
    title: 'AI Neurologist Avatar Ad',
    client: 'Health supplement brand',
    category: 'AI avatar & AI UGC',
    description: 'Myth-busting authority ad built on an AI avatar, with AI-generated B-roll for every claim. One body, three tested hooks.',
    aspect: '4/5',
    featured: true,
  },
  {
    id: 'jewelry-drop-1',
    ...w('jewelry-drop-1'),
    title: 'Product Drop Ad',
    client: 'Jewelry DTC brand',
    category: 'Performance ads',
    description: '10-second lifestyle drop ad with an urgency line, cut on the beat for a restock launch.',
    aspect: '9/16',
    result: 'Top performer of its week',
    featured: true,
  },
  {
    id: 'petcare-avatar',
    ...w('petcare-avatar'),
    title: 'AI Vet Avatar Ad',
    client: 'Pet health brand',
    category: 'AI avatar & AI UGC',
    description: 'Problem-agitate-solve ad with an AI veterinarian avatar and AI B-roll matched to each line of the script.',
    aspect: '4/5',
    featured: true,
  },
  {
    id: 'ai-ugc-1',
    ...w('ai-ugc-1'),
    title: 'AI UGC Creator Clip',
    client: 'Jewelry DTC brand',
    category: 'AI avatar & AI UGC',
    description: 'Fully AI-generated UGC creator wearing the real product, checked frame-by-frame against the packshot.',
    aspect: '9/16',
    featured: true,
  },
  {
    id: 'ads-meta',
    video: 'work/ads-meta.mp4',
    poster: 'work/ads-meta.jpg',
    title: 'Meta Feed Ad',
    client: 'DTC brand',
    category: 'Performance ads',
    description: 'Direct-response cut built for Meta feed, paced for a scroll-stopping first three seconds.',
    aspect: '9/16',
    featured: true,
  },
  {
    id: 'jewelry-drop-2',
    ...w('jewelry-drop-2'),
    title: 'Lifestyle Drop Ad',
    client: 'Jewelry DTC brand',
    category: 'Performance ads',
    description: 'Seasonal product-drop variant, testing a different opening line against the same visuals.',
    aspect: '9/16',
  },
  {
    id: 'ai-ugc-2',
    ...w('ai-ugc-2'),
    title: 'AI UGC Variant',
    client: 'Jewelry DTC brand',
    category: 'AI avatar & AI UGC',
    description: 'Second AI creator for the same concept, so one script can be tested across faces.',
    aspect: '9/16',
  },
  {
    id: 'ads-ivdd',
    ...p('ads-ivdd'),
    title: 'Problem-Solution Ad',
    client: 'Pet health brand',
    category: 'Performance ads',
    description: 'Direct-response ad built around a problem-solution hook.',
    aspect: '9/16',
  },
  {
    id: 'ads-lum14',
    ...p('ads-lum14'),
    title: 'Hook Variant',
    client: 'DTC brand',
    category: 'Performance ads',
    description: 'Meta ad variant testing a different opening hook and pacing.',
    aspect: '9/16',
  },
  {
    id: 'ads-gojo',
    ...p('ads-gojo'),
    title: 'Product Ad',
    client: 'Jewelry brand',
    category: 'Performance ads',
    description: 'Product ad cut for Meta feed and Stories placement.',
    aspect: '9/16',
  },
  {
    id: 'ads-pp73',
    ...p('ads-pp73'),
    title: 'Performance Ad Variant',
    client: 'DTC brand',
    category: 'Performance ads',
    description: 'Short variant from an ongoing weekly testing series.',
    aspect: '9/16',
  },
  {
    id: 'ads-influencer',
    ...p('ads-influencer'),
    title: 'Influencer-Style Ad',
    client: 'DTC brand',
    category: 'UGC & social',
    description: 'Influencer-style promotional cut for paid social.',
    aspect: '9/16',
  },
  {
    id: 'ads-peerbase',
    ...p('ads-peerbase'),
    title: 'Brand Awareness Ad',
    client: 'SaaS brand',
    category: 'Performance ads',
    description: 'Awareness ad cut for a SaaS product launch.',
    aspect: '4/5',
  },
  {
    id: 'social-ugc',
    video: 'work/social-ugc.mp4',
    poster: 'work/social-ugc.jpg',
    title: 'UGC Social Cut',
    client: 'Ecommerce brand',
    category: 'UGC & social',
    description: 'Vertical UGC edit for organic and paid social, captioned and delivered same week.',
    aspect: '9/16',
  },
  {
    id: 'social-ugc312',
    ...p('social-ugc312'),
    title: 'UGC Cut, Variant A',
    client: 'Ecommerce brand',
    category: 'UGC & social',
    description: 'UGC vertical cut for organic and paid social.',
    aspect: '9/16',
  },
  {
    id: 'social-ugc321',
    ...p('social-ugc321'),
    title: 'UGC Cut, Variant B',
    client: 'Ecommerce brand',
    category: 'UGC & social',
    description: 'Same footage, alternate angle and hook.',
    aspect: '9/16',
  },
  {
    id: 'vsl-merchantmastery',
    ...p('vsl-merchantmastery'),
    title: 'Course Sales Video',
    client: 'Ecommerce education brand',
    category: 'VSL',
    description: 'Course sales video cut for retention through the pitch.',
    aspect: '9/16',
  },
  {
    id: 'vsl',
    video: 'work/vsl.mp4',
    poster: 'work/vsl.jpg',
    title: 'Short-Form VSL',
    client: 'Coaching brand',
    category: 'VSL',
    description: 'Short-form sales letter with proof beats and a tested hook.',
    aspect: '1/1',
  },
  {
    id: 'vsl-od1223',
    ...p('vsl-od1223'),
    title: 'VSL Hook Test',
    client: 'Coaching brand',
    category: 'VSL',
    description: 'Short-form VSL variant tested against alternate hooks.',
    aspect: '1/1',
  },
  {
    id: 'vsl-silverbullet',
    ...p('vsl-silverbullet'),
    title: 'Core Mechanism VSL',
    client: 'Coaching brand',
    category: 'VSL',
    description: "Sales video built around a single core mechanism, or 'silver bullet' pitch.",
    aspect: '16/9',
  },
  {
    id: 'vsl-debt1',
    ...p('vsl-debt1'),
    title: 'Finance VSL',
    client: 'Finance brand',
    category: 'VSL',
    description: 'Finance-niche sales video cut for retention through a longer pitch.',
    aspect: '16/9',
  },
  {
    id: 'podcast',
    video: 'work/podcast.mp4',
    poster: 'work/podcast.jpg',
    title: 'Podcast Episode',
    client: 'Podcast client',
    category: 'Long-form',
    description: 'Single-camera interview episode, cleaned up and paced for weekly release.',
    aspect: '16/9',
  },
  {
    id: 'podcast-justinwenzel',
    ...p('podcast-justinwenzel'),
    title: 'Guest Interview',
    client: 'Podcast client',
    category: 'Long-form',
    description: 'Podcast interview, cleaned up and paced for release.',
    aspect: '16/9',
  },
  {
    id: 'documentary',
    video: 'work/documentary.mp4',
    poster: 'work/documentary.jpg',
    title: 'Feature Interview Cut',
    client: 'Documentary client',
    category: 'Long-form',
    description: 'Long-form interview structured from raw sit-down footage into one narrative thread.',
    aspect: '16/9',
  },
  {
    id: 'documentary-helen',
    ...p('documentary-helen'),
    title: 'Interview Segment',
    client: 'Documentary client',
    category: 'Long-form',
    description: 'Interview-driven segment, edited for pacing and emotional beats.',
    aspect: '16/9',
  },
  {
    id: 'documentary-trauma',
    ...p('documentary-trauma'),
    title: 'Sensitive Subject Cut',
    client: 'Documentary client',
    category: 'Long-form',
    description: 'Sensitive-subject cut, paced for a slow, deliberate reveal.',
    aspect: '9/16',
  },
];

export const HOOK_LAB = {
  title: 'One body. Three hooks. Let the data pick.',
  body: 'Every concept ships with hook variants on the same body, so your ad account finds the winner instead of you guessing. These are the first five seconds of three live variants from one health-brand concept.',
  hooks: [
    { loop: 'loops/hook-1.mp4', label: 'Hook 1', angle: 'Warning call-out' },
    { loop: 'loops/hook-2.mp4', label: 'Hook 2', angle: 'Curiosity gap' },
    { loop: 'loops/hook-3.mp4', label: 'Hook 3', angle: 'Myth-bust opener' },
  ],
};

export const PROCESS = [
  { n: '01', title: 'Brief & footage', body: 'Send the brief, creator footage or a script. No footage? We build it with AI avatars, AI UGC and AI B-roll.' },
  { n: '02', title: 'Body + hooks', body: 'We cut the body, then three hook variants on top. Captions, safe zones and exports to spec for Meta and TikTok.' },
  { n: '03', title: 'Review & revise', body: 'Every cut is self-reviewed against a QC checklist before you see it. Revisions turned around within 24 hours.' },
  { n: '04', title: 'Scale the winners', body: 'Share your weekly ad ranking. We study what won and build the next round from it.' },
];

export interface Service {
  title: string;
  body: string;
}

export const SERVICES: Service[] = [
  { title: 'UGC ad editing', body: 'Creator footage into native, scroll-stopping ads. Tight jump cuts, captions, B-roll over every cut.' },
  { title: 'Hook variants', body: 'Three openers per concept on a shared body, built for structured creative testing.' },
  { title: 'AI avatar ads', body: 'Doctor, vet and expert avatars with matched AI B-roll for health and wellness brands.' },
  { title: 'AI UGC & AI B-roll', body: 'AI creators and product shots generated in-house, checked against your real product.' },
  { title: 'VSLs', body: 'Short and long sales videos cut for retention, with proof beats and tested hooks.' },
  { title: 'Localisation', body: 'The same winning ad in new languages with AI voiceover, lipsync and translated captions.' },
];

export interface Plan {
  name: string;
  price: string;
  cadence: string;
  pitch: string;
  features: string[];
  highlight?: boolean;
}

export const PLANS: Plan[] = [
  {
    name: 'Test Drive',
    price: '$150',
    cadence: 'one-off',
    pitch: 'See the work on your own footage before committing.',
    features: ['1 ad concept + 3 hook variants', '72h turnaround', '1 revision round', 'Meta + TikTok exports'],
  },
  {
    name: 'Growth',
    price: '$1,500',
    cadence: '/ month',
    pitch: 'A steady creative pipeline for brands testing every week.',
    features: ['30 videos per month (10 concepts × 3 hooks)', '48h turnaround', '2 revision rounds per video', 'Weekly performance review', '+$25 per winning ad'],
    highlight: true,
  },
  {
    name: 'Scale',
    price: '$2,800',
    cadence: '/ month',
    pitch: 'High-volume testing with AI creative built in.',
    features: ['60 videos per month (20 concepts × 3 hooks)', 'AI avatars, AI UGC & AI B-roll', 'Priority 24–48h turnaround', '3 revision rounds per video', 'Iteration on your ad data', '+$25 per winning ad'],
  },
];

export const PRICING_NOTE =
  'A video is one finished export; each hook variant counts as one. A winning ad is one you scale after testing, judged by your own ad data. AI generation credits are billed at cost. Custom volumes available.';

export const TOOLS = {
  edit: ['Premiere Pro', 'After Effects', 'DaVinci Resolve', 'CapCut', 'Audition', 'Frame.io'],
  ai: ['Higgsfield', 'Kling', 'Seedance', 'Veo', 'Nano Banana', 'ElevenLabs', 'HeyGen', 'Sync lipsync'],
};

export const ABOUT =
  'ALAQUE MEDIA is led by editor Jay Lord. Six years of cutting ads, VSLs, podcasts and documentaries, now focused on performance creative: the edit decisions that move ROAS, made fast and backed by an AI production stack.';

export const FAQ = [
  { q: 'Do you need our footage?', a: 'Creator or brand footage works best. If you have none, we can produce the ad with AI avatars, AI UGC and AI B-roll from a script.' },
  { q: 'How fast is delivery?', a: 'A new concept with hook variants lands within 48 hours on monthly plans, and revisions within 24 hours.' },
  { q: 'What formats do you deliver?', a: '9:16 and 4:5 by default, captioned and inside platform safe zones. 1:1 and 16:9 on request.' },
  { q: 'Will you sign an NDA?', a: 'Yes. Client names on this site are withheld for that reason.' },
  { q: 'Who owns the final files?', a: 'You do. Final exports and project files are yours once the invoice is paid.' },
];

export const NEEDS = ['UGC ad edits', 'Hook variants', 'AI avatar ads', 'AI UGC / AI B-roll', 'VSL', 'Something else'];
export const VOLUMES = ['1–5 ads / month', '5–20 ads / month', '20–40 ads / month', '40+ ads / month'];
