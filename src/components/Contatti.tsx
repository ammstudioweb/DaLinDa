import { Phone, MessageCircle, MapPin, Navigation } from 'lucide-react';
import { SALON } from '@/lib/site';

export default function Contatti() {
  return (
    <section id="contatti" className="relative bg-ivory-50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="reveal eyebrow">Contatti & Mappa</p>
          <h2 className="reveal reveal-delay-1 mt-4 font-serif text-3xl font-semibold leading-tight text-sage-900 sm:text-4xl lg:text-5xl">
            Vieni a trovarci
          </h2>
          <div className="gold-rule reveal reveal-delay-2 mt-6" />
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {/* Info card */}
          <div className="reveal flex flex-col gap-5">
            <div className="rounded-3xl border border-sage-200/60 bg-ivory-100/50 p-7 shadow-soft">
              <h3 className="font-serif text-2xl font-semibold text-sage-900">
                {SALON.legalName}
              </h3>
              <p className="mt-1 text-sm text-sage-600">Parrucchiere a Caldonazzo</p>

              <div className="mt-6 space-y-4">
                <a
                  href={SALON.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3 text-sage-800"
                >
                  <span className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-full bg-sage-100 text-sage-700 transition-colors duration-300 group-hover:bg-sage-600 group-hover:text-ivory-50">
                    <MapPin className="h-5 w-5" strokeWidth={1.5} />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-[0.2em] text-sage-500">
                      Indirizzo
                    </span>
                    <span className="mt-1 block text-[15px] group-hover:text-sage-900">
                      {SALON.address}
                    </span>
                  </span>
                </a>

                <a href={`tel:${SALON.phoneIntl}`} className="group flex items-start gap-3 text-sage-800">
                  <span className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-full bg-sage-100 text-sage-700 transition-colors duration-300 group-hover:bg-sage-600 group-hover:text-ivory-50">
                    <Phone className="h-5 w-5" strokeWidth={1.5} />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-[0.2em] text-sage-500">
                      Telefono
                    </span>
                    <span className="mt-1 block text-[15px] group-hover:text-sage-900">
                      {SALON.phoneDisplay}
                    </span>
                  </span>
                </a>

                <a
                  href={`https://wa.me/${SALON.whatsapp}?text=${encodeURIComponent(
                    `Ciao Linda, vorrei prenotare un appuntamento presso ${SALON.name}.`,
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3 text-sage-800"
                >
                  <span className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#25D366]/15 text-[#1faa55] transition-colors duration-300 group-hover:bg-[#25D366] group-hover:text-white">
                    <MessageCircle className="h-5 w-5" strokeWidth={1.5} />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-[0.2em] text-sage-500">
                      WhatsApp
                    </span>
                    <span className="mt-1 block text-[15px] group-hover:text-sage-900">
                      {SALON.phoneDisplay}
                    </span>
                  </span>
                </a>
              </div>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a href={`tel:${SALON.phoneIntl}`} className="btn-solid flex-1">
                  <Phone className="h-4 w-4" /> Chiama ora
                </a>
                <a
                  href={`https://wa.me/${SALON.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp flex-1"
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp
                </a>
              </div>
              <a
                href={SALON.mapsDirections}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline mt-3 w-full"
              >
                <Navigation className="h-4 w-4" /> Indicazioni stradali
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="reveal reveal-delay-2 overflow-hidden rounded-3xl border border-sage-200/60 shadow-soft">
            <iframe
              title="Mappa di Hairstyle DA.LIN.DA a Caldonazzo"
              src="https://www.google.com/maps?q=Via%20Vegri%2013%2FA%2C%2038052%20Caldonazzo%20TN&output=embed"
              className="h-full min-h-[340px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
