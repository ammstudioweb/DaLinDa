import { Leaf, Ear, Feather, Recycle } from 'lucide-react';

const PILLARS = [
  {
    icon: Ear,
    title: 'Ascolto',
    text: 'Ogni consulto inizia da una conversazione vera. Capelli, abitudini, desideri: niente è dato per scontato.',
  },
  {
    icon: Leaf,
    title: 'Prodotti vegan',
    text: 'Linee cruelty-free e attente all’ambiente, scelte per rispettare il capello e la pelle.',
  },
  {
    icon: Feather,
    title: 'Rispetto & libertà',
    text: 'Ogni persona è libera di esprimersi. Il salone è uno spazio sicuro, senza stereotipi di genere.',
  },
  {
    icon: Recycle,
    title: 'Sostenibilità',
    text: 'Attenzione agli sprechi, alla scelta delle confezioni e ai piccoli gesti quotidiani che fanno la differenza.',
  },
];

export default function Filosofia() {
  return (
    <section id="filosofia" className="relative overflow-hidden bg-sage-700 py-20 text-ivory-50 sm:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_10%,rgba(189,156,78,0.16),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_10%_90%,rgba(223,169,160,0.14),transparent_50%)]" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="reveal eyebrow !text-gold-300">Filosofia</p>
            <h2 className="reveal reveal-delay-1 mt-4 font-serif text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
              Bellezza gentile, <span className="italic text-blush-200">rispetto</span> e tempo per te.
            </h2>
            <div className="reveal reveal-delay-2 mt-6 h-px w-16 bg-gold-300/70" />
            <div className="reveal reveal-delay-2 mt-6 max-w-xl space-y-5 text-base leading-relaxed text-ivory-100/90">
              <p>
                Crediamo che un salone sia prima di tutto uno spazio di
                relazione. Per questo lavoriamo su prenotazione, con il tempo
                giusto per ogni persona: niente corsa, niente giudizio, solo
                attenzione.
              </p>
              <p>
                I prodotti che scegliamo sono vegan e sostenibili, perché la
                cura dei capelli non può separarsi dalla cura dell’ambiente che
                ci circonda.
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {PILLARS.map((p, i) => (
              <div
                key={p.title}
                className={`reveal reveal-delay-${(i % 4) + 1} rounded-3xl border border-ivory-50/15 bg-ivory-50/5 p-6 backdrop-blur transition-all duration-300 hover:border-gold-300/40 hover:bg-ivory-50/10`}
              >
                <span className="grid h-12 w-12 place-items-center rounded-full bg-gold-300/15 text-gold-300">
                  <p.icon className="h-5 w-5" strokeWidth={1.5} />
                </span>
                <h3 className="mt-5 font-serif text-xl font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ivory-100/80">
                  {p.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
