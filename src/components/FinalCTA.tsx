import { Phone, MessageCircle } from 'lucide-react';
import { SALON } from '@/lib/site';

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-sage-800 py-20 text-ivory-50 sm:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(189,156,78,0.2),transparent_60%)]" />
      <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
        <p className="reveal eyebrow !text-gold-300">Prenota il tuo appuntamento</p>
        <h2 className="reveal reveal-delay-1 mt-5 font-serif text-3xl font-semibold leading-tight sm:text-5xl">
          Pronta a ritrovare il tuo spazio?
        </h2>
        <p className="reveal reveal-delay-2 mx-auto mt-6 max-w-xl text-base leading-relaxed text-ivory-100/85">
          Chiama o scrivi su WhatsApp per fissare il tuo momento al salone.
          Linda ti risponderà per trovare insieme l’orario più adatto a te.
        </p>
        <div className="reveal reveal-delay-3 mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href={`tel:${SALON.phoneIntl}`} className="btn-solid !bg-gold-400 !text-sage-900 hover:!bg-gold-300">
            <Phone className="h-4 w-4" /> Prenota il tuo appuntamento
          </a>
          <a
            href={`https://wa.me/${SALON.whatsapp}?text=${encodeURIComponent(
              `Ciao Linda, vorrei prenotare un appuntamento presso ${SALON.name}.`,
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
          >
            <MessageCircle className="h-4 w-4" /> Scrivi su WhatsApp
          </a>
        </div>
        <p className="reveal reveal-delay-4 mt-8 text-sm text-ivory-100/70">
          {SALON.address} · {SALON.phoneDisplay}
        </p>
      </div>
    </section>
  );
}
