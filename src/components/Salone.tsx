import { Heart, Sparkles, Leaf, Users } from 'lucide-react';
import { SALON } from '@/lib/site';

const VALUES = [
  {
    icon: Heart,
    title: 'Accoglienza vera',
    text: 'Un ambiente dove ogni persona è accolta per quello che è, senza etichette e senza fretta.',
  },
  {
    icon: Users,
    title: 'Inclusivo & LGBTQ+ friendly',
    text: 'Un salone gestito da donne e aperto a tutti, dove la libertà di espressione è rispetto.',
  },
  {
    icon: Sparkles,
    title: 'Senza giudizio',
    text: 'Nessuna aspettativa predefinita: ascoltiamo i tuoi desideri e li traduciamo in un risultato su misura.',
  },
  {
    icon: Leaf,
    title: 'Sostenibile',
    text: 'Prodotti vegan e attenti all’ambiente, per la cura dei tuoi capelli e del pianeta.',
  },
];

export default function Salone() {
  return (
    <section id="salone" className="relative bg-ivory-50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Oval image */}
          <div className="reveal order-2 lg:order-1">
            <div className="relative mx-auto max-w-md">
              <div className="absolute -inset-3 rounded-oval border border-gold-300/40" />
              <div className="absolute -inset-6 rounded-oval border border-sage-200/50" />
              <div className="oval-mask aspect-[4/5] shadow-soft">
                <img
                  src="https://images.pexels.com/photos/35844833/pexels-photo-35844833.png?auto=compress&cs=tinysrgb&w=900"
                  alt="Interno accogliente del salone Hairstyle DA.LIN.DA"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-2 rounded-2xl border border-sage-200/70 bg-ivory-50/90 px-5 py-3 shadow-soft backdrop-blur sm:-right-6">
                <p className="font-serif text-2xl font-semibold text-sage-800">DA.LIN.DA</p>
                <p className="text-[11px] uppercase tracking-[0.24em] text-sage-500">
                  di Linda Loss
                </p>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2">
            <p className="reveal eyebrow">Il salone</p>
            <h2 className="reveal reveal-delay-1 mt-4 font-serif text-3xl font-semibold leading-tight text-sage-900 sm:text-4xl lg:text-5xl">
              Uno spazio pensato per far sentire <span className="italic text-blush-400">a casa</span> ogni persona.
            </h2>
            <div className="reveal reveal-delay-2 mt-6 max-w-xl space-y-5 text-base leading-relaxed text-sage-800/90">
              <p>
                A pochi passi dal centro di Caldonazzo, Hairstyle DA.LIN.DA è un
                piccolo salone curato in ogni dettaglio: tonalità verde salvia,
                legno naturale, dettagli in ottone e specchi ovali che
                restituiscono uno sguardo sereno.
              </p>
              <p>
                È un luogo dove puoi staccare dal ritmo quotidiano, parlare di
                te e dei tuoi capelli senza timore di essere giudicata. Ogni
                trattamento nasce da un ascolto attento e dalla volontà di
                valorizzare la naturale bellezza di ogni tipo di capello.
              </p>
            </div>

            <div className="reveal reveal-delay-3 mt-9 grid grid-cols-2 gap-4 sm:gap-5">
              {VALUES.map((v) => (
                <div
                  key={v.title}
                  className="group rounded-2xl border border-sage-200/60 bg-ivory-100/50 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-sage-300 hover:bg-ivory-50 hover:shadow-soft"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-sage-100 text-sage-700 transition-colors duration-300 group-hover:bg-sage-600 group-hover:text-ivory-50">
                    <v.icon className="h-5 w-5" strokeWidth={1.5} />
                  </span>
                  <h3 className="mt-4 font-serif text-lg font-semibold text-sage-900">
                    {v.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-sage-700/80">
                    {v.text}
                  </p>
                </div>
              ))}
            </div>

            <p className="reveal reveal-delay-4 mt-8 text-sm text-sage-600">
              {SALON.address}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
