import { Clock } from 'lucide-react';
import { HOURS } from '@/lib/site';

const DAY_INDEX = new Date().getDay(); // 0 = Sun
const TODAY_MAP = [6, 0, 1, 2, 3, 4, 5]; // JS Sun=0 -> our Sun=6
const TODAY = TODAY_MAP[DAY_INDEX];

export default function Orari() {
  return (
    <section id="orari" className="relative bg-ivory-100 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="reveal eyebrow">Orari di apertura</p>
            <h2 className="reveal reveal-delay-1 mt-4 font-serif text-3xl font-semibold leading-tight text-sage-900 sm:text-4xl lg:text-5xl">
              Quando ci trovi a Caldonazzo
            </h2>
            <p className="reveal reveal-delay-2 mt-5 max-w-md text-base leading-relaxed text-sage-700/85">
              Si lavora su appuntamento, per dedicare a ogni persona il tempo
              necessario. Ti consigliamo di prenotare con un po’ di anticipo.
            </p>
          </div>

          <div className="reveal reveal-delay-2 rounded-3xl border border-sage-200/60 bg-ivory-50 p-6 shadow-soft sm:p-8">
            <div className="flex items-center gap-2 text-sage-700">
              <Clock className="h-5 w-5" />
              <span className="text-sm font-medium uppercase tracking-[0.18em]">
                Apertura settimanale
              </span>
            </div>
            <ul className="mt-6 divide-y divide-ivory-200">
              {HOURS.map((h, i) => {
                const isToday = i === TODAY;
                return (
                  <li
                    key={h.day}
                    className={`flex items-center justify-between py-3.5 ${
                      isToday ? 'rounded-xl bg-sage-100/70 px-3 -mx-3' : ''
                    }`}
                  >
                    <span
                      className={`flex items-center gap-2 text-sm font-medium ${
                        isToday ? 'text-sage-900' : 'text-sage-800'
                      }`}
                    >
                      {h.day}
                      {isToday && (
                        <span className="rounded-full bg-sage-600 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-ivory-50">
                          Oggi
                        </span>
                      )}
                    </span>
                    <span
                      className={`text-sm ${
                        h.closed
                          ? 'text-blush-500'
                          : isToday
                            ? 'font-semibold text-sage-900'
                            : 'text-sage-700/85'
                      }`}
                    >
                      {h.hours}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
