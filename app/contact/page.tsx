"use client";

import { useState } from "react";
import Image from "next/image";
import { User, Mail, MessageSquare, Phone, Linkedin, ExternalLink, Instagram, Facebook } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import Sidebar from "@/components/Sidebar";
import { ModalProvider } from "@/components/ModalProvider";
import { ThemeProvider } from "@/components/ThemeProvider";

export default function ContactPage() {
  const { language } = useLanguage();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const translations = {
    title: {
      en: "Contact",
      fr: "Contact"
    },
    subtitle: {
      en: "Let's get in touch! Fill out the form below to send me a message.",
      fr: "Entrons en contact ! Remplissez le formulaire ci-dessous pour m'envoyer un message."
    },
    name: {
      en: "Name",
      fr: "Nom"
    },
    email: {
      en: "Email",
      fr: "Email"
    },
    message: {
      en: "Message",
      fr: "Message"
    },
    send: {
      en: "Send Message",
      fr: "Envoyer le message"
    },
    success: {
      en: "Thank you! Your message has been sent.",
      fr: "Merci ! Votre message a été envoyé."
    },
    // Contact Info Section Translations
    jobTitle: {
      en: "Motion Graphics Designer",
      fr: "Designer Graphique en Mouvement"
    },
    emailLabel: {
      en: "Email",
      fr: "Email"
    },
    behanceLabel: {
      en: "Behance",
      fr: "Behance"
    },
    linkedinLabel: {
      en: "LinkedIn",
      fr: "LinkedIn"
    },
    fiverrLabel: {
      en: "Fiverr",
      fr: "Fiverr"
    },
    availability: {
      en: "Make a deal on WhatsApp",
      fr: "Faire un deal sur WhatsApp"
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would handle sending the message (API, email, etc.)
  };

  return (
    <ThemeProvider>
      <ModalProvider>
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
          
          <div className="flex relative z-10 min-h-screen w-full">
            {/* Left Side - Title with Cyan Quarter Circle */}
            <div className="w-80 absolute flex items-start justify-start pt-5 pl-8">
              {/* Cyan Blurry Quarter Circle Background */}
              <div className="absolute top-[-40px] left-[-40px] w-60 h-60 bg-gradient-to-br from-cyan-400/90 to-cyan-600/900 dark:from-cyan-400/900 dark:to-cyan-600/90 rounded-br-full blur-xl"></div>
              
              {/* Title */}
              <div className="relative z-10">
                <h1 className="relative text-4xl md:text-5xl lg:text-6xl font-black mb-5 mt-2">
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-blue-600 to-cyan-500 bg-clip-text text-transparent blur-md opacity-50"></span>
                  <span className="relative bg-blue-500 dark:bg-white bg-clip-text text-transparent font-black" style={{
                    textShadow: '0 0 40px rgba(59, 130, 246, 0.3), 0 0 80px rgba(147, 51, 234, 0.2)'
                  }}>
                    {translations.title[language].toUpperCase()}
                  </span>
                </h1>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 relative z-20 flex flex-col">
              {/* Contact Section - Form and Info Side by Side */}
              <div className="flex-1 flex flex-col items-center justify-center px-4 pr-20">
                {/* Subtitle centered above both sections */}
                <p className="text-center text-gray-600 dark:text-gray-300 mb-8 text-lg max-w-2xl">
                  {translations.subtitle[language]}
                </p>
                
                <div className="flex gap-6 w-full max-w-5xl justify-center">
                  {/* Contact Form */}
                  <div className="flex-1 max-w-lg bg-white/80 dark:bg-gray-900/80 rounded-2xl shadow-xl p-5 relative z-10 min-h-[500px] flex flex-col justify-center">
                
                  {submitted ? (
                    <div className="text-green-600 dark:text-green-400 text-center font-semibold py-8">
                      {translations.success[language]}
                    </div>
                  ) : (
                <form onSubmit={handleSubmit} className="space-y-8 flex flex-col items-center justify-center">
                  <div className="relative group w-full max-w-md">
                    <input
                      type="text"
                      className="w-full pl-10 pr-4 py-3 bg-transparent border-0 border-b-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:outline-none focus:border-blue-500 transition-all duration-300 placeholder-transparent peer"
                      placeholder={translations.name[language]}
                      value={name}
                      onChange={e => setName(e.target.value)}
                      required
                    />
                    <label className="absolute left-10 -top-3 text-sm text-gray-600 dark:text-gray-400 transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3 peer-focus:text-sm peer-focus:text-blue-500">
                      {translations.name[language]}
                    </label>
                    <User className="absolute left-0 top-3 text-gray-400 dark:text-gray-500 transition-colors duration-300 group-focus-within:text-blue-500" size={18} />
                    {/* Animated underline */}
                    <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 scale-x-0 transition-transform duration-300 group-focus-within:scale-x-100 w-full"></div>
                  </div>
                  <div className="relative group w-full max-w-md">
                    <input
                      type="email"
                      className="w-full pl-10 pr-4 py-3 bg-transparent border-0 border-b-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:outline-none focus:border-blue-500 transition-all duration-300 placeholder-transparent peer"
                      placeholder={translations.email[language]}
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      required
                    />
                    <label className="absolute left-10 -top-3 text-sm text-gray-600 dark:text-gray-400 transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3 peer-focus:text-sm peer-focus:text-blue-500">
                      {translations.email[language]}
                    </label>
                    <Mail className="absolute left-0 top-3 text-gray-400 dark:text-gray-500 transition-colors duration-300 group-focus-within:text-blue-500" size={18} />
                    {/* Animated underline */}
                    <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 scale-x-0 transition-transform duration-300 group-focus-within:scale-x-100 w-full"></div>
                  </div>
                  <div className="relative group w-full max-w-md">
                    <textarea
                      className="w-full pl-10 pr-4 py-3 bg-transparent border-0 border-b-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:outline-none focus:border-blue-500 transition-all duration-300 min-h-[120px] resize-none placeholder-transparent peer"
                      placeholder={translations.message[language]}
                      value={message}
                      onChange={e => setMessage(e.target.value)}
                      required
                    />
                    <label className="absolute left-10 top-0 text-sm text-gray-600 dark:text-gray-400 transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:top-0 peer-focus:text-sm peer-focus:text-blue-500">
                      {translations.message[language]}
                    </label>
                    <MessageSquare className="absolute left-0 top-3 text-gray-400 dark:text-gray-500 transition-colors duration-300 group-focus-within:text-blue-500" size={18} />
                    {/* Animated underline - positioned at the bottom of the textarea */}
                    <div className="absolute bottom-[6px] left-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 scale-x-0 transition-transform duration-300 group-focus-within:scale-x-100 w-full"></div>
                  </div>
                      <button
                        type="submit"
                        className="w-full max-w-md py-3 mt-8 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
                      >
                        {translations.send[language]}
                      </button>
                    </form>
                  )}
                  </div>
                  
                  {/* Contact Info Section */}
                  <div className="flex-1 max-w-[300px] bg-white/80 dark:bg-gray-900/80 rounded-2xl shadow-xl p-5 relative z-10 min-h-[500px] flex flex-col justify-center">
                    {/* Avatar */}
                    <div className="flex justify-center mb-4">
                      <div className="relative">
                        <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-gradient-to-r from-blue-500 to-cyan-500 p-1 bg-gradient-to-r from-blue-500 to-cyan-500">
                          <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-gray-900">
                            <Image
                              src="/assets/me.png"
                              alt="Hicham Eljabbary"
                              width={76}
                              height={76}
                              className="w-full h-full object-cover"
                              priority
                            />
                          </div>
                        </div>
                        {/* Status indicator */}
                        <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-gray-900 animate-pulse"></div>
                      </div>
                    </div>

                    {/* Name and Title */}
                    <div className="text-center mb-4">
                      <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-1">Hicham Eljabbary</h3>
                      <p className="text-blue-600 dark:text-blue-400 font-semibold text-xs">{translations.jobTitle[language]}</p>
                    </div>

                    {/* Contact Details */}
                    <div className="space-y-3">
                      {/* Email */}
                      <div className="flex items-center group hover:bg-gray-50 dark:hover:bg-gray-800/50 p-2 rounded-lg transition-all duration-300">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mr-3">
                          <Mail className="text-white" size={14} />
                        </div>
                        <div>
                          <p className="text-xs text-gray-600 dark:text-gray-400">{translations.emailLabel[language]}</p>
                          <p className="text-gray-800 dark:text-white font-medium text-xs">hicham@gmail.com</p>
                        </div>
                      </div>

                      {/* Behance */}
                      <div className="flex items-center group hover:bg-gray-50 dark:hover:bg-gray-800/50 p-2 rounded-lg transition-all duration-300 cursor-pointer">
                        <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-3">
                          <ExternalLink className="text-white" size={14} />
                        </div>
                        <div className="flex-1">
                          <p className="text-xs text-gray-600 dark:text-gray-400">{translations.behanceLabel[language]}</p>
                          <p className="text-gray-800 dark:text-white font-medium text-xs">@BeLofted</p>
                        </div>
                        <ExternalLink className="text-gray-400 group-hover:text-purple-500 transition-colors" size={12} />
                      </div>

                      {/* LinkedIn */}
                      <div className="flex items-center group hover:bg-gray-50 dark:hover:bg-gray-800/50 p-2 rounded-lg transition-all duration-300 cursor-pointer">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center mr-3">
                          <Linkedin className="text-white" size={14} />
                        </div>
                        <div className="flex-1">
                          <p className="text-xs text-gray-600 dark:text-gray-400">{translations.linkedinLabel[language]}</p>
                          <p className="text-gray-800 dark:text-white font-medium text-xs">Hicham Eljabbary</p>
                        </div>
                        <ExternalLink className="text-gray-400 group-hover:text-blue-500 transition-colors" size={12} />
                      </div>

                      {/* Fiverr */}
                      <div className="flex items-center group hover:bg-gray-50 dark:hover:bg-gray-800/50 p-2 rounded-lg transition-all duration-300 cursor-pointer">
                        <div className="w-8 h-8 bg-gradient-to-r from-green-600 to-green-700 rounded-full flex items-center justify-center mr-3">
                          <ExternalLink className="text-white" size={14} />
                        </div>
                        <div className="flex-1">
                          <p className="text-xs text-gray-600 dark:text-gray-400">{translations.fiverrLabel[language]}</p>
                          <p className="text-gray-800 dark:text-white font-medium text-xs">@BeLofted</p>
                        </div>
                        <ExternalLink className="text-gray-400 group-hover:text-green-500 transition-colors" size={12} />
                      </div>
                    </div>

                    {/* WhatsApp Deal Button */}
                    <a 
                      href="https://wa.me/212619665220" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="mt-4 p-3 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 rounded-lg border border-green-400 transition-all duration-300 hover:scale-105 cursor-pointer block"
                    >
                      <div className="flex items-center justify-center">
                        <div className="w-3 h-3 bg-white rounded-full animate-pulse mr-3"></div>
                        <div className="text-center">
                          <p className="text-white font-semibold text-sm">{translations.availability[language]}</p>
                          <p className="text-green-100 text-xs">+212 619 665 220</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Media Icons - Bottom Center */}
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
                <div className="flex items-center gap-6">
                  {/* Instagram */}
                  <a 
                    href="https://instagram.com/hicham_eljabbary" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group relative"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-pink-500/25">
                      <Instagram className="text-white" size={20} />
                    </div>
                    {/* Tooltip */}
                    <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 dark:bg-gray-700 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                      Instagram
                    </div>
                  </a>

                  {/* Facebook */}
                  <a 
                    href="https://facebook.com/hicham.eljabbary" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group relative"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25">
                      <Facebook className="text-white" size={20} />
                    </div>
                    {/* Tooltip */}
                    <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 dark:bg-gray-700 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                      Facebook
                    </div>
                  </a>

                  {/* X (Twitter) */}
                  <a 
                    href="https://x.com/hicham_eljabbary" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group relative"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-gray-800 to-black dark:from-gray-600 dark:to-gray-800 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-gray-500/25">
                      {/* X Icon (custom SVG since Lucide doesn't have X) */}
                      <svg className="text-white" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    </div>
                    {/* Tooltip */}
                    <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 dark:bg-gray-700 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                      X (Twitter)
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <Sidebar />
          </div>
        </div>
      </ModalProvider>
    </ThemeProvider>
  );
}
