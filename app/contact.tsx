"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";

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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 dark:from-black dark:via-gray-950 dark:to-slate-950 transition-colors duration-300 px-4 py-10">
      <div className="w-full max-w-lg bg-white/80 dark:bg-gray-900/80 rounded-2xl shadow-xl p-8 relative z-10">
        <h1 className="text-3xl font-bold text-center mb-2 text-blue-900 dark:text-blue-300">
          {translations.title[language]}
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
  );
}
