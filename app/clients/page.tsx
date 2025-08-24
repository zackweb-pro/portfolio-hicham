"use client";

import Sidebar from '@/components/Sidebar';
import { ThemeProvider } from '@/components/ThemeProvider';
import { ModalProvider } from '@/components/ModalProvider';
import { useLanguage } from '@/components/LanguageProvider';
import { Users, Star } from 'lucide-react';
import Image from 'next/image';

// Client data with test images from Unsplash
const clients = [
  {
    id: 1,
    name: "Alec Troniq",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&h=500&fit=crop&crop=face",
    category: "Live-Act",
    type: "Artist"
  },
  {
    id: 2,
    name: "Anda Morts",
    image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=500&h=500&fit=crop&crop=face",
    category: "Band",
    type: "Artist"
  },
  {
    id: 3,
    name: "Annett Gapstream",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&h=500&fit=crop&crop=face",
    category: "DJ",
    type: "Artist"
  },
  {
    id: 4,
    name: "Brezel Göring & Psychoanalyse",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop&crop=face",
    category: "Band",
    type: "Artist"
  },
  {
    id: 5,
    name: "Britta Arnold",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&h=500&fit=crop&crop=face",
    category: "DJ",
    type: "Artist"
  },
  {
    id: 6,
    name: "Caleesi & Kreis",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&h=500&fit=crop&crop=face",
    category: "DJ",
    type: "Artist"
  },
  {
    id: 7,
    name: "Danca",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&h=500&fit=crop&crop=face",
    category: "DJ",
    type: "Artist"
  },
  {
    id: 8,
    name: "Extrawelt",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&h=500&fit=crop&crop=face",
    category: "Live-Act",
    type: "Artist"
  },
  {
    id: 9,
    name: "Huong Federkeil",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&h=500&fit=crop&crop=face",
    category: "Live-Act",
    type: "Artist"
  },
  {
    id: 10,
    name: "Ignez",
    image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=500&h=500&fit=crop&crop=face",
    category: "DJ",
    type: "Artist"
  },
  {
    id: 11,
    name: "Kaufmann",
    image: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=500&h=500&fit=crop&crop=face",
    category: "DJ",
    type: "Artist"
  },
  {
    id: 12,
    name: "Komfortrauschen",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=500&h=500&fit=crop&crop=face",
    category: "Band",
    type: "Artist"
  }
];

function ClientCard({ client }: { client: typeof clients[0] }) {
  return (
    <div className="marquee-item flex-shrink-0 w-[280px] mx-3">
      <div className="relative overflow-hidden transition-all duration-300 rounded-xl cursor-pointer select-none aspect-square group  hover:shadow-2xl">
        {/* Client image */}
        <div className="w-full h-full relative">
          <Image
            src={client.image}
            alt={client.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
            sizes="280px"
          />
        </div>
        
        {/* Faint green overlay on hover */}
        <div className="absolute inset-0 z-10 transition duration-300 rounded-xl opacity-0 bg-purple-500/20 group-hover:opacity-100"></div>
        
        {/* Client name overlay */}
        <div className="absolute bottom-0 left-0 z-20 w-full p-4 rounded-xl bg-gradient-to-t from-black/90 via-black/60 to-transparent">
          <div className="font-bold text-left text-white text-lg leading-tight">{client.name}</div>
        </div>
        
        {/* Category badge - moved to top-left with green styling */}
        <div className="absolute top-0 left-0 z-20 flex items-center justify-center gap-2 px-2 py-[2px] text-[11px] font-semibold uppercase rounded-lg shadow-lg bg-green-500/90 backdrop-blur-sm text-white border border-green-200/30 text-black">
          <Star className="w-3 h-3 fill-current" />
          {client.category}
        </div>
      </div>
    </div>
  );
}

function ClientsCarousel() {
  return (
    <div className="w-[90vw] max-w-[1580px] mx-auto flex flex-col gap-4 px-4">
      {/* Main carousel - properly centered and avoiding navbar */}
      <div className="marquee-wrapper overflow-hidden relative rounded">
        {/* Gradient fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-10 bg-gradient-to-r from-gray-50/10 to-transparent dark:from-[#02050D] dark:from-[#02050D] dark:to-transparent   z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-l from-gray-50 via-gray-50/80 to-transparent dark:from-[#02050D] dark:to-transparent z-10 pointer-events-none"></div>

        <div className="marquee flex animate-marquee">
          {/* First set of clients */}
          <div className="marquee-group flex">
            {clients.map((client) => (
              <ClientCard key={client.id} client={client} />
            ))}
          </div>
          {/* Exact duplicate for seamless loop */}
          <div className="marquee-group flex">
            {clients.map((client) => (
              <ClientCard key={`duplicate-${client.id}`} client={client} />
            ))}
          </div>
        </div>
      </div>
      
      {/* Stats counter */}
      <div className="text-center mt-6">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Trusted by {clients.length}+ amazing clients worldwide
        </p>
      </div>
    </div>
  );
}

function PageContent() {
  const { language } = useLanguage();
  
  const translations = {
    title: {
      en: 'Our Clients',
      fr: 'Nos Clients'
    },
    subtitle: {
      en: 'Trusted by leading artists and brands from around the world. Here are some of the amazing clients I\'ve had the pleasure to work with.',
      fr: 'Fait confiance par des artistes et marques de premier plan du monde entier. Voici quelques-uns des clients extraordinaires avec lesquels j\'ai eu le plaisir de travailler.'
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 dark:from-black dark:via-gray-950 dark:to-slate-950 transition-colors duration-300 relative overflow-hidden">
      {/* Bubbles Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-br from-white/8 to-gray-300/6 dark:from-blue-400/12 dark:to-purple-400/8 rounded-full blur-3xl"></div>
        <div className="absolute top-20 right-20 w-[250px] h-[250px] bg-gradient-to-br from-gray-200/6 to-white/8 dark:from-cyan-400/10 dark:to-blue-400/12 rounded-full blur-2xl"></div>
        <div className="absolute top-20 left-20 w-[280px] h-[280px] bg-gradient-to-br from-gray-200/5 to-white/7 dark:from-indigo-400/8 dark:to-blue-400/10 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 right-1/3 w-[200px] h-[200px] bg-gradient-to-br from-white/10 to-gray-100/8 dark:from-purple-400/12 dark:to-pink-400/8 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-1/4 w-[220px] h-[220px] bg-gradient-to-br from-gray-300/6 to-white/5 dark:from-blue-400/10 dark:to-cyan-400/8 rounded-full blur-2xl"></div>
        <div className="absolute bottom-40 right-20 w-[160px] h-[160px] bg-gradient-to-br from-white/12 to-gray-200/8 dark:from-teal-400/10 dark:to-blue-400/12 rounded-full blur-xl"></div>
        <div className="absolute top-1/3 left-1/2 w-[120px] h-[120px] bg-gradient-to-br from-gray-100/8 to-white/10 dark:from-violet-400/8 dark:to-indigo-400/10 rounded-full blur-lg"></div>
      </div>
      
      {/* Light Glassy Foreground Overlay */}
      <div className="absolute inset-0 z-5 bg-white/2 dark:bg-black/3 backdrop-blur-[0.2px]"></div>
      
      <div className="flex relative z-10">
        {/* Left Side - Title with Cyan Quarter Circle */}
        <div className="w-100 absolute flex items-start justify-start pl-8 pt-5 no-wrap">
          {/* Cyan Blurry Quarter Circle Background */}
          <div className="absolute top-[-40px] left-[-40px] w-60 h-60 bg-gradient-to-br from-cyan-400/90 to-cyan-600/900 dark:from-cyan-400/900 dark:to-cyan-600/90 rounded-br-full blur-xl"></div>
          
          {/* Title */}
          <div className="relative top-0 z-10">
            <h1 className="relative text-4xl md:text-5xl lg:text-6xl font-black mb-5 mt-2">
              {/* Glow background layer */}
              <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-blue-600 to-cyan-500 bg-clip-text text-transparent blur-md opacity-50"></span>
              {/* Main readable text */}
              <span className="relative bg-blue-500 dark:bg-white bg-clip-text text-transparent font-black" style={{
                textShadow: '0 0 40px rgba(59, 130, 246, 0.3), 0 0 80px rgba(147, 51, 234, 0.2)'
              }}>
                {translations.title[language]}
              </span>
            </h1>
          </div>
        </div>

        {/* Main Content - properly spaced from sidebar */}
        <div className="flex-1 pr-24 relative z-20 min-h-screen flex justify-center items-center">
          <div className="px-6 py-8">
            <div className="mb-12">
              <p className="text-center text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                {translations.subtitle[language]}
              </p>
            </div>

            {/* Clients Carousel */}
            <div className="mt-16">
              <ClientsCarousel />
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <Sidebar />
      </div>
    </div>
  );
}

export default function ClientsPage() {
  return (
    <ThemeProvider>
      <ModalProvider>
        <PageContent />
      </ModalProvider>
    </ThemeProvider>
  );
}
