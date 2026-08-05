import { ArrowRight } from 'lucide-react';
import { SERVICES, SALON } from '@/lib/site';

export default function Servizi() {
  return (
    <section id="servizi" className="relative bg-ivory-100 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="reveal eyebrow">Servizi</p>
          <h2 className="reveal reveal-delay-1 mt-4 font-serif text-3xl font-semibold leading-tight text-sage-900 sm:text-4xl lg:text-5xl">
            Cura per ogni tipo di capello
          </h2>
          <div className="gold-rule reveal reveal-delay-2 mt-6" />
          <p className="reveal reveal-delay-2 mt-5 text-base leading-relaxed text-sage-700/85">
            Ogni servizio parte dall’ascolto. Insieme scegliamo il percorso più
            adatto a te, ai tuoi tempi e alla naturale texture dei tuoi capelli.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <article
              key={s.title}
              className={`reveal reveal-delay-${(i % 3) + 1} group relative flex flex-col overflow-hidden rounded-3xl border border-sage-200/50 bg-ivory-50 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-glow`}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={s.image}
                  alt={s.alt}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sage-900/40 via-transparent to-transparent" />
                <div className="absolute left-4 top-4 rounded-full bg-ivory-50/90 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-sage-700 backdrop-blur">
                  0{i + 1}
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-serif text-xl font-semibold text-sage-900">
                  {s.title}
                </h3>
                <p className="mt-2.5 flex-1 text-sm leading-relaxed text-sage-700/85">
                  {s.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="reveal mt-12 flex flex-col items-center gap-4 text-center">
          <p className="max-w-xl text-sm text-sage-700/80">
            Per informazioni sui trattamenti e per trovare insieme la soluzione
            più adatta a te, contattaci direttamente.
          </p>
          <a
            href={`https://wa.me/${SALON.whatsapp}?text=${encodeURIComponent(
              'Ciao Linda, vorrei un’informazione sui servizi del salone.',
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-sm font-medium text-sage-700 hover:text-sage-900"
          >
            Chiedi informazioni su WhatsApp
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
