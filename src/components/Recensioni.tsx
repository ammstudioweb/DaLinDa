import { Star, Quote } from 'lucide-react';
import { REVIEWS, SALON } from '@/lib/site';

export default function Recensioni() {
  return (
    <section id="recensioni" className="relative bg-ivory-50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="reveal eyebrow">Recensioni</p>
          <h2 className="reveal reveal-delay-1 mt-4 font-serif text-3xl font-semibold leading-tight text-sage-900 sm:text-4xl lg:text-5xl">
            Le parole di chi è già passato di qui
          </h2>
          <div className="reveal reveal-delay-2 mt-6 flex items-center justify-center gap-3">
            <div className="flex text-gold-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-current" />
              ))}
            </div>
            <span className="text-sm font-medium text-sage-800">
              {SALON.rating} su Google · {SALON.reviewsCount} recensioni
            </span>
          </div>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((r, i) => (
            <figure
              key={r.author}
              className={`reveal reveal-delay-${(i % 3) + 1} relative flex flex-col rounded-3xl border border-sage-200/60 bg-ivory-100/40 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-sage-300 hover:bg-ivory-50 hover:shadow-soft`}
            >
              <Quote className="h-7 w-7 text-blush-300" />
              <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-sage-800/90">
                {r.text}
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-sage-200 font-serif text-sm font-semibold text-sage-800">
                  {r.initials}
                </span>
                <div>
                  <p className="text-sm font-medium text-sage-900">{r.author}</p>
                  <div className="mt-0.5 flex text-gold-400">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} className="h-3 w-3 fill-current" />
                    ))}
                  </div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="reveal mt-12 text-center">
          <a
            href={SALON.mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            Leggi tutte le recensioni su Google
          </a>
        </div>
      </div>
    </section>
  );
}
