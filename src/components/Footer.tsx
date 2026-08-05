import { Scissors, MapPin, Phone } from 'lucide-react';
import { SALON, HOURS } from '@/lib/site';

export default function Footer() {
  return (
    <footer className="bg-sage-900 py-12 text-ivory-100/70">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full border border-ivory-50/30 text-ivory-50">
                <Scissors className="h-5 w-5" strokeWidth={1.5} />
              </span>
              <div>
                <p className="font-serif text-lg font-semibold text-ivory-50">
                  {SALON.name}
                </p>
                <p className="text-[11px] uppercase tracking-[0.24em] text-ivory-100/60">
                  {SALON.tagline}
                </p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed">
              Salone di parrucchiere accogliente e inclusivo a Caldonazzo.
              Cura per ogni tipo di capello, ascolto e prodotti sostenibili.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold-300">
                Contatti
              </p>
              <ul className="mt-4 space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-sage-300" />
                  <span>{SALON.address}</span>
                </li>
                <li>
                  <a
                    href={`tel:${SALON.phoneIntl}`}
                    className="flex items-start gap-2 hover:text-ivory-50"
                  >
                    <Phone className="mt-0.5 h-4 w-4 shrink-0 text-sage-300" />
                    <span>{SALON.phoneDisplay}</span>
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold-300">
                Orari
              </p>
              <ul className="mt-4 space-y-1.5 text-sm">
                {HOURS.map((h) => (
                  <li key={h.day} className="flex justify-between gap-4">
                    <span>{h.day}</span>
                    <span className={h.closed ? 'text-blush-300' : 'text-ivory-100/80'}>
                      {h.hours}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-ivory-50/10 pt-6 text-xs text-ivory-100/50">
          <p>
            © {new Date().getFullYear()} {SALON.legalName} · Via Vegri 13/A,
            38052 Caldonazzo TN · P.IVA disponibile su richiesta
          </p>
        </div>
      </div>
    </footer>
  );
}
