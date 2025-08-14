"use client";

import { useState } from "react";
import { Search } from "lucide-react";
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
          <div className="flex-1 flex flex-col items-center justify-center relative z-10 px-4 py-10">
            <div className="w-full max-w-lg bg-white/80 dark:bg-gray-900/80 rounded-2xl shadow-xl p-8 relative z-10">
              <h1 className="relative text-4xl md:text-5xl lg:text-6xl font-black text-center mb-5 mt-2">
                <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-blue-600 to-cyan-500 bg-clip-text text-transparent blur-md opacity-50"></span>
                <span className="relative bg-blue-500 dark:bg-white bg-clip-text text-transparent font-black" style={{
                  textShadow: '0 0 40px rgba(59, 130, 246, 0.3), 0 0 80px rgba(147, 51, 234, 0.2)'
                }}>
                  {translations.title[language].toUpperCase()}
                </span>
              </h1>
              <p className="text-center text-gray-600 dark:text-gray-300 mb-6">
                {translations.subtitle[language]}
              </p>
              {submitted ? (
                <div className="text-green-600 dark:text-green-400 text-center font-semibold py-8">
                  {translations.success[language]}
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="relative">
                    <input
                      type="text"
                      className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                      placeholder={translations.name[language]}
                      value={name}
                      onChange={e => setName(e.target.value)}
                      required
                    />
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500" size={18} />
                  </div>
                  <div className="relative">
                    <input
                      type="email"
                      className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                      placeholder={translations.email[language]}
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      required
                    />
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500" size={18} />
                  </div>
                  <div className="relative">
                    <textarea
                      className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition min-h-[120px] resize-none"
                      placeholder={translations.message[language]}
                      value={message}
                      onChange={e => setMessage(e.target.value)}
                      required
                    />
                    <Search className="absolute left-3 top-6 text-gray-400 dark:text-gray-500" size={18} />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition"
                  >
                    {translations.send[language]}
                  </button>
                </form>
              )}
            </div>
          </div>
          <Sidebar activeItem="contact" />
        </div>
      </ModalProvider>
    </ThemeProvider>
  );
}
