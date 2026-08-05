export const SALON = {
  name: 'Hairstyle DA.LIN.DA',
  legalName: 'Hairstyle DA.LIN.DA di Linda Loss',
  tagline: 'di Linda Loss',
  address: 'Via Vegri 13/A, 38052 Caldonazzo TN',
  addressStreet: 'Via Vegri 13/A',
  addressCity: '38052 Caldonazzo TN',
  phoneDisplay: '+39 389 097 1066',
  phoneIntl: '+39038971066',
  whatsapp: '39038971066',
  rating: '4,8',
  reviewsCount: 33,
  mapsLink: 'https://www.google.com/maps/search/?api=1&query=Hairstyle+DA.LIN.DA+Via+Vegri+13+A+Caldonazzo',
  mapsDirections: 'https://www.google.com/maps/dir/?api=1&destination=Via+Vegri+13+A+38052+Caldonazzo+TN',
  mapsEmbed:
    'https://www.google.com/maps?q=Via%20Vegri%2013%2FA%2C%2038052%20Caldonzzo%20TN&output=embed',
};

export const HOURS: { day: string; hours: string; closed?: boolean }[] = [
  { day: 'Lunedì', hours: '09:00 – 17:30' },
  { day: 'Martedì', hours: '08:00 – 12:00 · 14:00 – 18:00' },
  { day: 'Mercoledì', hours: 'Chiuso', closed: true },
  { day: 'Giovedì', hours: '08:00 – 16:30' },
  { day: 'Venerdì', hours: '08:00 – 12:00 · 14:00 – 18:00' },
  { day: 'Sabato', hours: '08:00 – 16:30' },
  { day: 'Domenica', hours: 'Chiuso', closed: true },
];

export type Service = {
  title: string;
  description: string;
  image: string;
  alt: string;
};

export const SERVICES: Service[] = [
  {
    title: 'Taglio & Styling',
    description:
      'Tagli su misura, modellamento e finiture pensati per esaltare la forma del viso e la texture naturale dei tuoi capelli.',
    image:
      'https://images.pexels.com/photos/10593034/pexels-photo-10593034.jpeg?auto=compress&cs=tinysrgb&w=900',
    alt: 'Parrucchiere che taglia i capelli con precisione nel salone',
  },
  {
    title: 'Colore & Trattamenti',
    description:
      'Colore, meches, bilanciatura e trattamenti profonda ricostruzione per un risultato armonioso e luminoso, rispettoso del capello.',
    image:
      'https://images.pexels.com/photos/8468125/pexels-photo-8468125.jpeg?auto=compress&cs=tinysrgb&w=900',
    alt: 'Applicazione di colore sui capelli nel salone',
  },
  {
    title: 'Capelli Ricci',
    description:
      ' Metodo dedicato ai capelli ricci e mossi: taglio dry-cut, definizione e consulenza per valorizzare ogni singolo riccio.',
    image:
      'https://images.pexels.com/photos/7755215/pexels-photo-7755215.jpeg?auto=compress&cs=tinysrgb&w=900',
    alt: 'Donna con capelli ricci nel salone',
  },
  {
    title: 'Transizione Grey',
    description:
      'Accompagnamento delicato nella transizione verso il bianco naturale, con strategie di crescita e riflessi per coprire o valorizzare.',
    image:
      'https://images.pexels.com/photos/7450279/pexels-photo-7450279.jpeg?auto=compress&cs=tinysrgb&w=900',
    alt: 'Donna con capelli grigi eleganti',
  },
  {
    title: 'Hair Spa',
    description:
      'Rituali di benessere per cuoio capelluto e capello: massaggi, maschere e trattamenti rigeneranti per una pausa di vera relax.',
    image:
      'https://images.pexels.com/photos/36292486/pexels-photo-36292486.jpeg?auto=compress&cs=tinysrgb&w=900',
    alt: 'Trattamento hair spa e lavaggio rilassante nel salone',
  },
  {
    title: 'Consulenza Personalizzata',
    description:
      'Un confronto attento e senza fretta per capire insieme abitudini, desideri e il percorso più adatto a te e ai tuoi capelli.',
    image:
      'https://images.pexels.com/photos/9545499/pexels-photo-9545499.jpeg?auto=compress&cs=tinysrgb&w=900',
    alt: 'Consulenza capelli davanti allo specchio ovale del salone',
  },
];

export type Review = {
  author: string;
  text: string;
  initials: string;
};

export const REVIEWS: Review[] = [
  {
    author: 'Sara M.',
    initials: 'SM',
    text: 'Mi sono sentita ascoltata davvero per la prima volta. Linda ha capito subito cosa volevo e il risultato ha superato le aspettative. Posto accogliente e senza giudizio.',
  },
  {
    author: 'Giulia R.',
    initials: 'GR',
    text: 'Finalmente una persona che sa trattare i miei ricci. Taglio dry-cut perfetto e consigli utili per casa. Tornerò sicuramente.',
  },
  {
    author: 'Elena B.',
    initials: 'EB',
    text: 'Ambiente curato, pulito e tranquillo. Ho fatto la transizione verso il bianco naturale con dolcezza, senza fretta. Esperienza bellissima.',
  },
  {
    author: 'Martina T.',
    initials: 'MT',
    text: 'Colore naturale e luminoso, capello sano. Si vede la passione e la professionalità. Consigliatissimo per chi cerca un salone inclusivo.',
  },
  {
    author: 'Federica L.',
    initials: 'FL',
    text: 'Un salone dove puoi essere semplicemente te stessa. Atmosfera rilassata, prodotti vegan e grande attenzione ai dettagli.',
  },
  {
    author: 'Chiara D.',
    initials: 'CD',
    text: 'Puntualità, cura e tanto ascolto. La hair spa è un momento di puro relax. Un riferimento a Caldonazzo per me.',
  },
];
