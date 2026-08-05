import { useReveal } from '@/lib/useReveal';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Salone from '@/components/Salone';
import Servizi from '@/components/Servizi';
import Filosofia from '@/components/Filosofia';
import Recensioni from '@/components/Recensioni';
import Orari from '@/components/Orari';
import Contatti from '@/components/Contatti';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

function App() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <div ref={ref} className="min-h-screen bg-ivory-50">
      <Header />
      <main>
        <Hero />
        <Salone />
        <Servizi />
        <Filosofia />
        <Recensioni />
        <Orari />
        <Contatti />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
