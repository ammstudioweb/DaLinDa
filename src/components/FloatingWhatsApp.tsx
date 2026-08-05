import { MessageCircle } from 'lucide-react';
import { SALON } from '@/lib/site';

export default function FloatingWhatsApp() {
  return (
    <a
      href={`https://wa.me/${SALON.whatsapp}?text=${encodeURIComponent(
        `Ciao Linda, vorrei prenotare un appuntamento presso ${SALON.name}.`,
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Scrivi su WhatsApp a Hairstyle DA.LIN.DA"
      className="group fixed bottom-5 right-5 z-40 flex items-center gap-2.5 rounded-full bg-[#25D366] py-3.5 pl-3.5 pr-4 text-white shadow-glow transition-all duration-300 hover:brightness-105 animate-floatPulse sm:bottom-6 sm:right-6"
    >
      <MessageCircle className="h-6 w-6" strokeWidth={1.8} />
      <span className="hidden max-w-0 overflow-hidden whitespace-nowrap text-sm font-medium opacity-0 transition-all duration-500 group-hover:max-w-[10rem] group-hover:opacity-100 sm:inline">
        Prenota su WhatsApp
      </span>
    </a>
  );
}
