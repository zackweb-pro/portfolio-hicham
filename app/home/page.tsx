"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Home, Briefcase, Mail, Users, Sun, Moon, Globe } from "lucide-react";
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
            
            {/* Portfolio Grid Placeholder - Matching PortfolioCard styling */}
            <div className="w-[75vw] mx-auto m-[90px] relative">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
                  <div key={item} className="portfolio-card group relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-500">
                    {/* Content matching PortfolioCard structure */}
                    <div className="relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-xl">
                      {/* Image/Thumbnail skeleton */}
                      <div className="aspect-video overflow-hidden relative">
                        <div className="w-full h-full bg-gradient-to-r from-gray-200/60 via-gray-300/80 to-gray-200/60 dark:from-gray-700/60 dark:via-gray-600/80 dark:to-gray-700/60 animate-pulse">
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 dark:via-white/10 to-transparent animate-shimmer"></div>
                        </div>
                      </div>

                      {/* Video Play Button skeleton for some cards */}
                      {(item === 2 || item === 5 || item === 8) && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="w-10 h-10 bg-white/90 dark:bg-gray-800/90 rounded-full flex items-center justify-center backdrop-blur-sm animate-pulse">
                            <div className="w-5 h-5 bg-blue-900/20 dark:bg-blue-400/20 rounded animate-pulse"></div>
                          </div>
                        </div>
                      )}

                      {/* Title Overlay skeleton */}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 transform transition-transform duration-300 group-hover:translate-y-0 translate-y-full">
                        {/* Title skeleton */}
                        <div className="h-5 bg-white/20 rounded mb-2 animate-pulse w-3/4">
                          <div className="h-full bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer rounded"></div>
                        </div>
                        {/* Description skeleton */}
                        <div className="h-4 bg-white/15 rounded animate-pulse w-full">
                          <div className="h-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer rounded"></div>
                        </div>
                      </div>

                      {/* Type indicator skeleton */}
                      <div className="absolute top-4 right-4">
                        <div className="w-8 h-8 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg animate-pulse">
                          <div className={`w-4 h-4 rounded ${
                            item === 2 || item === 5 || item === 8 
                              ? 'bg-red-500/30' 
                              : item === 3 || item === 6 || item === 9
                                ? 'bg-green-500/30'
                                : 'bg-blue-500/30'
                          } animate-pulse`}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Mock components for the contact page preview
function ContactPagePreview() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 dark:from-black dark:via-gray-950 dark:to-slate-950 transition-colors duration-300 relative overflow-hidden flex">
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
      {/* Light Glassy Foreground Overlay - Very subtle */}
      <div className="absolute inset-0 z-5 bg-white/2 dark:bg-black/3 backdrop-blur-[0.2px]"></div>
      <div className="flex-1 flex flex-col items-center justify-center relative z-10 px-4 py-10">
        <div className="w-full max-w-lg bg-white/80 dark:bg-gray-900/80 rounded-2xl shadow-xl p-8 relative z-10">
          {/* Title skeleton */}
          <h1 className="relative text-4xl md:text-5xl lg:text-6xl font-black text-center mb-5 mt-2">
            <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-blue-600 to-cyan-500 bg-clip-text text-transparent blur-md opacity-50"></span>
            <span className="relative bg-blue-500 dark:bg-white bg-clip-text text-transparent font-black" style={{
              textShadow: '0 0 40px rgba(59, 130, 246, 0.3), 0 0 80px rgba(147, 51, 234, 0.2)'
            }}>
              CONTACT
            </span>
          </h1>
          {/* Subtitle skeleton */}
          <div className="text-center mb-6">
            <div className="h-4 bg-gray-300/60 dark:bg-gray-600/60 rounded mb-2 mx-auto w-4/5 animate-pulse">
              <div className="h-full bg-gradient-to-r from-transparent via-white/30 dark:via-white/10 to-transparent animate-shimmer rounded"></div>
            </div>
            <div className="h-4 bg-gray-300/60 dark:bg-gray-600/60 rounded mx-auto w-3/5 animate-pulse">
              <div className="h-full bg-gradient-to-r from-transparent via-white/30 dark:via-white/10 to-transparent animate-shimmer rounded"></div>
            </div>
          </div>

          {/* Form skeleton */}
          <div className="space-y-8">
            {/* Name field skeleton */}
            <div className="relative group">
              <div className="w-full pl-10 pr-4 py-3 border-b-2 border-gray-300 dark:border-gray-600">
                <div className="h-5 bg-gray-200/60 dark:bg-gray-700/60 rounded w-16 animate-pulse">
                  <div className="h-full bg-gradient-to-r from-transparent via-white/20 dark:via-white/10 to-transparent animate-shimmer rounded"></div>
                </div>
              </div>
              {/* Icon skeleton */}
              <div className="absolute left-0 top-3 w-5 h-5 bg-gray-400/60 dark:bg-gray-500/60 rounded animate-pulse"></div>
              {/* Animated underline skeleton */}
              <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-400/60 to-cyan-400/60 w-1/3 animate-pulse"></div>
            </div>

            {/* Email field skeleton */}
            <div className="relative group">
              <div className="w-full pl-10 pr-4 py-3 border-b-2 border-gray-300 dark:border-gray-600">
                <div className="h-5 bg-gray-200/60 dark:bg-gray-700/60 rounded w-20 animate-pulse">
                  <div className="h-full bg-gradient-to-r from-transparent via-white/20 dark:via-white/10 to-transparent animate-shimmer rounded"></div>
                </div>
              </div>
              {/* Icon skeleton */}
              <div className="absolute left-0 top-3 w-5 h-5 bg-gray-400/60 dark:bg-gray-500/60 rounded animate-pulse"></div>
              {/* Animated underline skeleton */}
              <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-400/60 to-cyan-400/60 w-2/5 animate-pulse"></div>
            </div>

            {/* Message field skeleton */}
            <div className="relative group">
              <div className="w-full pl-10 pr-4 py-3 border-b-2 border-gray-300 dark:border-gray-600 min-h-[120px]">
                <div className="space-y-2">
                  <div className="h-4 bg-gray-200/60 dark:bg-gray-700/60 rounded w-full animate-pulse">
                    <div className="h-full bg-gradient-to-r from-transparent via-white/20 dark:via-white/10 to-transparent animate-shimmer rounded"></div>
                  </div>
                  <div className="h-4 bg-gray-200/60 dark:bg-gray-700/60 rounded w-5/6 animate-pulse">
                    <div className="h-full bg-gradient-to-r from-transparent via-white/20 dark:via-white/10 to-transparent animate-shimmer rounded"></div>
                  </div>
                  <div className="h-4 bg-gray-200/60 dark:bg-gray-700/60 rounded w-3/4 animate-pulse">
                    <div className="h-full bg-gradient-to-r from-transparent via-white/20 dark:via-white/10 to-transparent animate-shimmer rounded"></div>
                  </div>
                </div>
              </div>
              {/* Icon skeleton */}
              <div className="absolute left-0 top-3 w-5 h-5 bg-gray-400/60 dark:bg-gray-500/60 rounded animate-pulse"></div>
              {/* Animated underline skeleton */}
              <div className="absolute bottom-[6px] left-0 h-0.5 bg-gradient-to-r from-blue-400/60 to-cyan-400/60 w-3/5 animate-pulse"></div>
            </div>

            {/* Submit button skeleton */}
            <div className="w-full py-3 mt-8 rounded-lg bg-gradient-to-r from-blue-600/60 to-cyan-600/60 flex items-center justify-center animate-pulse">
              <div className="h-6 bg-white/20 rounded w-32">
                <div className="h-full bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface SidebarPreviewProps {
  isVisible: boolean;
}

function SidebarPreview({ isVisible }: SidebarPreviewProps) {
  const menuItems = [
    { icon: Home, label: 'Home', key: 'home' },
    { icon: Briefcase, label: 'Works', key: 'work' },
        { icon: Users, label: 'Clients', href: '/clients', key: 'clients' },
    { icon: Mail, label: 'Contact', href: '/contact', key: 'contact' },
  ];

  return (
    <div className={`fixed right-0 top-0 h-full w-20 bg-white/95 dark:bg-black/20 backdrop-blur-lg z-[50] flex flex-col justify-between align-items-center transition-transform duration-1500 ease-in-out ${
      isVisible ? 'transform translate-x-0' : 'transform translate-x-full'
    }`}
    style={{
      transition: "transform 1s ease-in-out",
    }}>
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
  const [previewPage, setPreviewPage] = useState<'work' | 'contact' | null>(null);

  const handleWorkClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsTransitioning(true);
    setPreviewPage('work');
    
    // Navigate after animation completes
    setTimeout(() => {
      window.location.href = "/work";
    }, 1600); // Slightly longer to let sidebar animation complete
  };

  const handleContactClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsTransitioning(true);
    setPreviewPage('contact');
    
    // Navigate after animation completes
    setTimeout(() => {
      window.location.href = "/contact";
    }, 1600); // Same timing as work button
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Page Preview (Behind) */}
      <div className="absolute inset-0">
        {previewPage === 'work' && <WorkPagePreview />}
        {previewPage === 'contact' && <ContactPagePreview />}
        {!previewPage && <WorkPagePreview />} {/* Default preview */}
      </div>

      {/* Sidebar (Slides in from right) */}
      <SidebarPreview isVisible={isTransitioning}
      
      />

      {/* Home Page (Foreground - Slides Out) */}
      <div 
        className={`absolute inset-0 min-h-screen transition-transform duration-[1.5s] ease-in-out z-20 ${
          isTransitioning ? 'translate-x-full' : 'translate-x-0'
        }`}
        // style={{ backgroundColor: '#02050F' }}
                    style={{ 
                      transition: "800ms all ease-in-out",
                     backgroundColor: "#02050F",
  backgroundImage:`
    radial-gradient(circle at 10% 20%, rgba(50, 50, 50, 0.3) 0%, transparent 50%),
    radial-gradient(circle at 70% 80%, rgba(40, 40, 40, 0.4) 0%, transparent 60%),
    radial-gradient(circle at 30% 60%, rgba(60, 60, 60, 0.2) 0%, transparent 40%)"`,
  backgroundSize: "cover", /* Ensures the background covers the entire element */
  backgroundAttachment: "fixed", /* Keeps the background fixed when scrolling */
        }}
      >
        {/* Background Text Effect Behind Image */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute bottom-32 left-0 text-[150px] font-black text-blue-500/20 whitespace-nowrap transform -rotate-12">
            MOTION GRAPHICS
          </div>
          <div className="absolute bottom-64 left-0 text-[120px] font-black text-purple-500/15 whitespace-nowrap transform rotate-6">
            3D ANIMATION
          </div>
        </div>

        {/* Professional Background Text - Top and Right */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
          {/* Top area floating text */}
          <div className="absolute top-20 right-10 text-8xl font-black text-gray-800 transform rotate-12">
            MOTION
          </div>
          <div className="absolute top-32 right-40 text-6xl font-bold text-gray-700 transform -rotate-6">
            GRAPHICS
          </div>
          <div className="absolute top-60 right-20 text-4xl font-semibold text-gray-800 transform rotate-3">
            DESIGNER
          </div>
          
          {/* Right side floating text */}
          <div className="absolute top-1/3 right-5 text-7xl font-black text-gray-800 transform rotate-45">
            3D
          </div>
          <div className="absolute top-2/3 right-32 text-5xl font-bold text-gray-700 transform -rotate-12">
            ANIMATION
          </div>
          <div className="absolute bottom-40 right-8 text-9xl font-black text-gray-800 transform rotate-6">
            CREATIVE
          </div>
          
          {/* Additional scattered text for depth */}
          <div className="absolute top-96 right-64 text-3xl font-medium text-gray-700 transform rotate-45">
            RENDER
          </div>
          <div className="absolute top-80 right-12 text-2xl font-light text-gray-700 transform -rotate-30">
            VISUAL
          </div>
          <div className="absolute bottom-60 right-48 text-6xl font-bold text-gray-700 transform rotate-15">
            EFFECTS
          </div>
        </div>

        {/* Main Content Area */}
        <div className="min-h-screen flex relative z-10">
          {/* Left Section - CTA and Skills */}
          <div className="flex flex-col justify-center items-center px-8 w-96 ml-[100px]">
            {/* Professional Skills Tags - Above CTA */}
            <div className="mb-8 w-80">
              {/* Skills as floating tag elements */}
              <div className="flex flex-wrap gap-4 justify-center">
                <div className="px-5 py-3 bg-gradient-to-r from-blue-500/30 to-blue-400/30 border border-blue-400/40 rounded-full backdrop-blur-lg hover:scale-110 transition-all duration-300 group shadow-lg hover:shadow-blue-400/25">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                    <span className="text-blue-300 text-sm font-semibold">Time Expert</span>
                  </div>
                </div>
                
                <div className="px-5 py-3 bg-gradient-to-r from-purple-500/30 to-purple-400/30 border border-purple-400/40 rounded-full backdrop-blur-lg hover:scale-110 transition-all duration-300 group shadow-lg hover:shadow-purple-400/25">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }}></div>
                    <span className="text-purple-300 text-sm font-semibold">Client Pro</span>
                  </div>
                </div>
                
                <div className="px-5 py-3 bg-gradient-to-r from-cyan-500/30 to-cyan-400/30 border border-cyan-400/40 rounded-full backdrop-blur-lg hover:scale-110 transition-all duration-300 group shadow-lg hover:shadow-cyan-400/25">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '0.6s' }}></div>
                    <span className="text-cyan-300 text-sm font-semibold">3D Master</span>
                  </div>
                </div>
                
                <div className="px-5 py-3 bg-gradient-to-r from-indigo-500/30 to-indigo-400/30 border border-indigo-400/40 rounded-full backdrop-blur-lg hover:scale-110 transition-all duration-300 group shadow-lg hover:shadow-indigo-400/25">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse" style={{ animationDelay: '0.9s' }}></div>
                    <span className="text-indigo-300 text-sm font-semibold">Strategist</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-4">
              {/* Text above arrow */}
              <div className="text-center mb-2">
                <p className="text-blue-300 text-lg font-semibold animate-pulse">
                  Click to Explore
                </p>
                <div className="flex justify-center mt-1">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-1 animate-bounce"></div>
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-1 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>

              <Image
                src="/assets/arrow.png"
                alt="Arrow"
                width={100}
                height={100}
                className="arrow-point"
                priority
              />
              
              <button
                onClick={handleWorkClick}
                className="group relative px-10 py-4 bg-gradient-to-r from-blue-600 via-blue-600 to-cyan-600 hover:from-blue-700 hover:via-blue-700 hover:to-cyan-700 text-white rounded-full text-xl font-bold flex items-center gap-3 transition-all duration-300 shadow-2xl hover:shadow-blue-500/25 hover:scale-105"
                disabled={isTransitioning}
              >
                <span className="relative z-10"> My Work</span>
                <ArrowRight size={24} className="ml-1 animate-bounce-right group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
              </button>

              <button
                onClick={handleContactClick}
                className="group relative px-10 py-4 bg-gradient-to-r from-green-600 via-green-600 to-emerald-600 hover:from-green-700 hover:via-green-700 hover:to-emerald-700 text-white rounded-full text-xl font-bold flex items-center gap-3 transition-all duration-300 shadow-2xl hover:shadow-green-500/25 hover:scale-105"
                disabled={isTransitioning}
              >
                <span className="relative z-10">Contact Me</span>
                <ArrowRight size={24} className="ml-1 animate-bounce-right group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
              </button>
              
              <p className="text-gray-400 text-sm italic mt-2">
                &ldquo;Detail-oriented • Creative • Team Player&rdquo;
              </p>
            </div>
          </div>

          {/* Right Section - Name and Title in Center */}
          <div className="flex-1 flex flex-col justify-center items-end px-8 lg:px-16 mr-[200px]">
            <div className="max-w-2xl text-center">
              {/* Name with glowing effect - centered */}
              <h1 className="relative text-5xl md:text-6xl lg:text-7xl font-black mb-4">
                <span className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent blur-md opacity-70"></span>
                <span className="relative bg-gradient-to-r from-blue-400 via-cyan-200 to-cyan-400 bg-clip-text text-transparent font-black">
                  HICHAM
                </span>
              </h1>
              <h2 className="relative text-4xl md:text-5xl lg:text-6xl font-black mb-8">
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-400 bg-clip-text text-transparent blur-md opacity-70"></span>
                <span className="relative bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-100 bg-clip-text text-transparent font-black">
                  ELJABBARY
                </span>
              </h2>

              {/* Professional Title */}
              <div className="mb-8">
                <p className="text-2xl md:text-3xl font-bold text-blue-300 mb-2">
                  Motion Graphics Designer
                </p>
                <p className="text-lg text-gray-300 font-medium">
                  10+ Years of Industry Excellence
                </p>
              </div>

              {/* Key Skills */}
              <div className="mb-8 space-y-3">
                <div className="flex items-center justify-center space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                  <p className="text-gray-300 text-lg">2D & 3D Animation Specialist</p>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  <p className="text-gray-300 text-lg">Original Motion Graphics Concepts</p>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                  <p className="text-gray-300 text-lg">Color Rendering & Correction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Keep the original image position and size */}
        <div className="absolute bottom-0 left-[20%] w-[800px] h-[800px]">
          <Image
            src="/assets/me.png"
            alt="Hicham Eljabbary"
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>
      </div>
    </div>
  );
}