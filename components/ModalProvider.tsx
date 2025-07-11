"use client";

import { createContext, useContext, useState, ReactNode } from 'react';

interface ModalContextType {
  isModalExpanded: boolean;
  setIsModalExpanded: (expanded: boolean) => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [isModalExpanded, setIsModalExpanded] = useState(false);

  return (
    <ModalContext.Provider value={{ isModalExpanded, setIsModalExpanded }}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
}