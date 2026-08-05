import { useEffect, useState } from 'react';
import { Menu, X, Scissors } from 'lucide-react';
import { SALON } from '@/lib/site';

const NAV = [
  { href: '#salone', label: 'Il salone' },
  { href: '#servizi', label: 'Servizi' },
  { href: '#filosofia', label: 'Filosofia' },
  { href: '#recensioni', label: 'Recensioni' },
  { href: '#orari', label: 'Orari' },
  { href: '#contatti', label: 'Contatti' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-ivory-50/85 backdrop-blur-md shadow-[0_1px_0_0_rgba(189,156,78,0.18)]'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#top" className="group flex items-center gap-3" aria-label={SALON.legalName}>
          <span
            className={`grid h-10 w-10 place-items-center rounded-full border transition-colors duration-500 ${
              scrolled ? 'border-sage-600/40 text-sage-700' : 'border-ivory-50/60 text-ivory-50'
            }`}
          >
            <Scissors className="h-5 w-5" strokeWidth={1.5} />
          </span>
          <span className="leading-tight">
            <span
              className={`block font-serif text-lg font-semibold tracking-wide transition-colors duration-500 ${
                scrolled ? 'text-sage-800' : 'text-ivory-50'
              }`}
            >
              DA.LIN.DA
            </span>
            <span
              className={`block text-[10px] font-sans uppercase tracking-[0.28em] transition-colors duration-500 ${
                scrolled ? 'text-sage-500' : 'text-ivory-100/80'
              }`}
            >
              Hairstyle · Caldonazzo
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`group relative text-sm font-medium tracking-wide transition-colors duration-300 ${
                scrolled
                  ? 'text-sage-700 hover:text-sage-900'
                  : 'text-ivory-100/90 hover:text-ivory-50'
              }`}
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold-400 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a href="#contatti" className="btn-solid !px-5 !py-2.5 !text-xs">
            Prenota
          </a>
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          className={`grid h-11 w-11 place-items-center rounded-full border transition-colors duration-300 md:hidden ${
            scrolled
              ? 'border-sage-600/30 text-sage-800'
              : 'border-ivory-50/40 text-ivory-50'
          }`}
          aria-label={open ? 'Chiudi menu' : 'Apri menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-500 ease-out ${
          open ? 'max-h-[28rem] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="mx-4 mb-4 rounded-3xl border border-sage-200/70 bg-ivory-50/95 p-5 shadow-soft backdrop-blur-md">
          <nav className="flex flex-col">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between border-b border-ivory-200/80 py-3 text-sage-800 last:border-0"
              >
                <span className="font-serif text-lg">{item.label}</span>
                <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
              </a>
            ))}
            <a
              href="#contatti"
              onClick={() => setOpen(false)}
              className="btn-solid mt-4 w-full"
            >
              Prenota il tuo appuntamento
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
