/** Copy, price and links for the Final Pass product page. Edit here to change the page. */
import { CONTACT_EMAIL } from './content';

export const FP_VERSION = '1.0.3';
export const FP_PRICE = '$25';

/** Free version download. Points at the GitHub release once it is published. */
export const FP_DOWNLOAD_URL =
  'https://github.com/lordjay19/alaque-media/releases/download/final-pass-v1.0.3/FinalPass-1.0.3-win64.zip';

/** No payment platform yet: buying starts an email; the licence key is sent back by hand. */
export const FP_BUY_URL = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
  'Final Pass licence',
)}&body=${encodeURIComponent(
  'Hi Jay,\n\nI would like a Final Pass licence ($25).\n\nName to show on the licence: \n\nThanks!',
)}`;

export const FP_HERO = {
  eyebrow: 'Final Pass for Windows',
  headline: 'Catch export mistakes before your client does.',
  body: 'Final Pass scans your finished videos for black frames, flash frames, frozen shots, audio gaps, loudness and typos burned into your captions. Click any flag to jump straight to it.',
};

export interface FpCheck {
  title: string;
  body: string;
}

export const FP_CHECKS: FpCheck[] = [
  { title: 'Typos in captions', body: 'Reads the text burned into your video and checks it against a dictionary, with a boxed close-up of every flagged word. Few QC tools read captions on the picture itself.' },
  { title: 'Flash frames', body: 'The one stray black frame left by a trim or a timeline gap. Too quick to see while scrubbing, obvious on playback.' },
  { title: 'Black screens', body: 'Fully black stretches, usually an export or render glitch.' },
  { title: 'Frozen frames', body: 'Shots where the picture stopped moving, labelled with whether the audio kept going, so held hooks are easy to tell from real freezes.' },
  { title: 'Audio gaps', body: 'Every silence over 0.3 seconds, longest first. Short-form defaults are tight; raise them for long-form.' },
  { title: 'Loudness', body: 'Integrated loudness and true peak against the -14 LUFS social standard, so ads do not play quiet in the feed.' },
];

export const FP_POINTS = [
  { title: 'Offline', body: 'No upload, no account, no internet. Footage under NDA never leaves your machine.' },
  { title: 'Batch scans', body: 'Pick one video or a whole delivery folder. Results appear as each one finishes.' },
  { title: 'Reports', body: 'A Markdown report per video plus a summary, saved next to your exports.' },
  { title: 'Built by an editor', body: 'Made for my own weekly ad deliveries before every hand-off to clients.' },
];

export const FP_STEPS = [
  'Download the zip below.',
  'Before extracting: right-click the zip → Properties → tick "Unblock" → OK. This stops the Windows warning.',
  'Extract it and open "Final Pass.exe". Nothing to install.',
  'If Windows still says "Windows protected your PC", click "More info" → "Run anyway". The app is new and not code-signed yet.',
];

export const FP_FAQ = [
  { q: "What's the difference between free and paid?", a: 'The free version scans 3 videos at a time; everything else works. A licence removes the limit and shows your name in the app and on reports.' },
  { q: 'Does it work on Mac?', a: 'No, Windows 10 and 11 only.' },
  { q: 'Does it fix problems?', a: "No. It flags, you decide. Some flags are intentional (a held still on screen), so each one shows you exactly where to look." },
  { q: 'Which languages does the typo check support?', a: 'English only for now. Brand names and slang can be added to an allow-list in Settings so they are never flagged.' },
  { q: 'How do I get my licence?', a: 'Click Buy, send the email, and pay by the method I reply with. Your licence key arrives by email, usually within 24 hours.' },
];
