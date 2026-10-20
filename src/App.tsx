import Hero from './components/Hero';
import Work from './components/Work';
import Contact from './components/Contact';
import { Faq, HookLab, Pricing, Process, Services, Stats, Studio } from './components/Sections';

export default function App() {
  return (
    <div id="top" className="min-h-screen bg-black text-cream">
      <Hero />
      <Stats />
      <Work />
      <HookLab />
      <Process />
      <Services />
      <Pricing />
      <Studio />
      <Faq />
      <Contact />
      <footer className="px-4 pb-10 pt-4 text-center text-xs text-muted md:px-6">
        ALAQUE MEDIA · Performance creative for DTC brands · © {new Date().getFullYear()}
      </footer>
    </div>
  );
}
