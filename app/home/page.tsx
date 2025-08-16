"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Home, Briefcase, Mail, Sun, Moon, Globe } from "lucide-react";
import { useState } from "react";

// Mock components for the work page preview
function WorkPagePreview() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 dark:from-black dark:via-gray-950 dark:to-slate-950 transition-colors duration-300 relative overflow-hidden">
      {/* Bubbles Background - Like lights behind */}
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
        {/* Main Content */}
        <div className="flex-1 pr-20 relative z-20">
          <div className="px-4 py-2">
            <div className="mb-4">
              <h1 className="relative text-4xl md:text-5xl lg:text-6xl font-black text-center mb-5 mt-2">
                {/* Glow background layer */}
                <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-blue-600 to-cyan-500 bg-clip-text text-transparent blur-md opacity-50"></span>
                {/* Main readable text */}
                <span className="relative bg-blue-500 dark:bg-white bg-clip-text text-transparent font-black" style={{
                  textShadow: '0 0 40px rgba(59, 130, 246, 0.3), 0 0 80px rgba(147, 51, 234, 0.2)'
                }}>
                  WORKS
                </span>
              </h1>
            </div>
            
            {/* Portfolio Grid Placeholder */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-lg h-64 flex items-center justify-center border border-white/20">
                  <div className="text-gray-400 dark:text-gray-600 text-lg font-medium">Project {item}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SidebarPreview({ isVisible }) {
  const menuItems = [
    { icon: Home, label: 'Home', key: 'home' },
    { icon: Briefcase, label: 'Works', key: 'work' },
    { icon: Mail, label: 'Contact', key: 'contact' },
  ];

  return (
    <div className={`fixed right-0 top-0 h-full w-20 bg-white/95 dark:bg-black/20 backdrop-blur-lg z-[50] flex flex-col justify-between align-items-center transition-transform duration-800 ease-in-out ${
      isVisible ? 'transform translate-x-0' : 'transform translate-x-full'
    }`}>
      {/* Vertical glowing line on the left side */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent opacity-70 shadow-lg shadow-blue-500/50"></div>
      
      {/* Logo */}
      <div className="p-4 relative">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-400/90 to-blue-600/90 rounded-xl flex items-center justify-center shadow-lg backdrop-blur-sm">
          <span className="text-white font-bold text-xl drop-shadow-sm">JB</span>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-70 shadow-lg shadow-blue-500/50"></div>
      </div>

      {/* Navigation */}
      <nav className="py-8 m-auto">
        <div className="space-y-4">
          {menuItems.map((item, index) => (
            <div key={item.key} className="relative group">
              <div className={`
                w-12 h-12 flex items-center justify-center rounded-3xl mx-2 transition-all duration-300 cursor-pointer
                ${item.key === 'work'
                  ? 'bg-gradient-to-r from-blue-400 to-blue-600 text-white shadow-lg'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100/50 dark:hover:bg-white/10 hover:scale-105'
                }
              `}>
                <item.icon size={20} />
              </div>
              {/* Tooltip */}
              <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900/90 dark:bg-white/80 text-white dark:text-black px-2 py-1 rounded text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap backdrop-blur-sm">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </nav>

      {/* Bottom Controls */}
      <div className="p-4 space-y-4 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-70 shadow-lg shadow-blue-500/50"></div>
        
        {/* Language Toggle */}
        <button className="w-full h-12 flex items-center justify-center rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100/50 dark:hover:bg-white/10 transition-all duration-300 hover:scale-105">
          <div className="flex flex-col items-center">
            <Globe size={16} />
            <span className="text-xs mt-1 font-medium">EN</span>
          </div>
        </button>

        {/* Theme Toggle */}
        <button className="w-full h-12 flex items-center justify-center rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100/50 dark:hover:bg-white/10 transition-all duration-300 hover:scale-105">
          <Sun size={20} />
        </button>
      </div>
    </div>
  );
}

export default function HomePage() {
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleWorkClick = (e) => {
    e.preventDefault();
    setIsTransitioning(true);
    
    // Navigate after animation completes
    setTimeout(() => {
      window.location.href = "/work";
    }, 1000); // Slightly longer to let sidebar animation complete
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Work Page Preview (Behind) */}
      <div className="absolute inset-0">
        <WorkPagePreview />
      </div>

      {/* Sidebar (Slides in from right) */}
      <SidebarPreview isVisible={isTransitioning} />

      {/* Home Page (Foreground - Slides Out) */}
      <div 
        className={`absolute inset-0 min-h-screen flex flex-col justify-center items-center transition-all duration-800 ease-in-out z-20 ${
          isTransitioning ? 'transform translate-x-full' : 'transform translate-x-0'
        }`}
        style={{ backgroundColor: '#02050F' }}
      >
        <div className="min-h-screen flex col justify-center items-center relative left-[15%] w-[500px] flex flex-col items-center justify-center flex-1 z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-blue-900 dark:text-blue-300  ">
            Designer with over 10 years of experience in motion graphics
          </h1>
          <Image
          src="/assets/arrow.png"
          alt="Arrow"
          width={100}
          height={100}
            objectFit="contain"
            className="arrow-point rounded-full shadow-2xl"
            priority
          />

        
          <button
            onClick={handleWorkClick}
            className="mt-2 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-lg font-semibold flex items-center gap-2 transition shadow-lg cursor-pointer"
            disabled={isTransitioning}
          >
            Explore
            <ArrowRight size={22} className="ml-1 animate-bounce-right" />
          </button>
          
          {/* <div className="mt-4 flex flex-col items-center">
            <ArrowRight size={36} className="text-blue-500 animate-bounce-right" style={{ transform: 'rotate(90deg)' }} />
            <span className="text-gray-500 dark:text-gray-400 text-sm mt-2">Go to Works</span>
          </div> */}
        </div>
        
        <div className="absolute bottom-0 left-[10%] w-[700px] h-[700px]">
          <Image
            src="/assets/me.png"
            alt="Me"
            layout="fill"
            objectFit="contain"
       
            priority
          />
        </div>
      </div>
    </div>
  );
}