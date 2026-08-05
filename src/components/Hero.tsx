import { Phone, MessageCircle, Star, MapPin } from 'lucide-react';
import { SALON } from '@/lib/site';

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-sage-700 text-ivory-50">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/7483527/pexels-photo-7483527.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Interno del salone Hairstyle DA.LIN.DA a Caldonazzo"
          className="h-full w-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-sage-900/70 via-sage-800/55 to-sage-900/85" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(189,156,78,0.18),transparent_55%)]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 pb-20 pt-32 sm:px-8 sm:pt-40 lg:pb-28">
        <div className="max-w-2xl">
          <p className="reveal eyebrow !text-gold-300">
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5" /> Caldonazzo · Trentino
            </span>
          </p>

          <h1 className="reveal reveal-delay-1 mt-5 font-serif text-[2.7rem] font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Il tuo stile,
            <br />
            <span className="italic text-gold-300">il tuo spazio.</span>
          </h1>

          <p className="reveal reveal-delay-2 mt-6 max-w-xl text-base leading-relaxed text-ivory-100/90 sm:text-lg">
            Un salone accogliente e inclusivo a Caldonazzo, dove ascolto, cura e
            professionalità valorizzano ogni persona e ogni tipo di capello.
          </p>

          {/* Rating */}
          <div className="reveal reveal-delay-3 mt-7 flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-1.5 rounded-full border border-ivory-50/20 bg-ivory-50/10 px-4 py-2 backdrop-blur">
              <div className="flex text-gold-300">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <span className="text-sm font-medium text-ivory-50">
                {SALON.rating} su Google
              </span>
              <span className="text-sm text-ivory-100/70">
                · {SALON.reviewsCount} recensioni
              </span>
            </div>
          </div>

          {/* CTAs */}
          <div className="reveal reveal-delay-4 mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href={`tel:${SALON.phoneIntl}`} className="btn-solid">
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
              <MessageCircle className="h-4 w-4" /> Chiama ora
            </a>
          </div>

          <p className="reveal reveal-delay-4 mt-6 text-sm text-ivory-100/70">
            {SALON.address}
          </p>
        </div>
      </div>

      {/* Decorative bottom wave */}
      <div className="pointer-events-none absolute -bottom-px left-0 right-0">
        <svg viewBox="0 0 1440 90" className="h-12 w-full sm:h-20" preserveAspectRatio="none">
          <path
            d="M0,64 C240,96 480,16 720,32 C960,48 1200,96 1440,56 L1440,90 L0,90 Z"
            fill="#fdfcf9"
          />
        </svg>
      </div>
    </section>
  );
}
