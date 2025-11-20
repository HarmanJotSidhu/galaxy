import React, { createContext, useContext, useState, ReactNode } from "react";

type Ctx = {
  isOpen: boolean;
  mode: "quote" | "contact";                 // which tab/intent to show
  openQuote: () => void;
  openContact: () => void;
  close: () => void;
};

const BookingModalContext = createContext<Ctx | undefined>(undefined);

export function BookingModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState<"quote" | "contact">("quote");

  const openQuote = () => { setMode("quote"); setIsOpen(true); };
  const openContact = () => { setMode("contact"); setIsOpen(true); };
  const close = () => setIsOpen(false);

  return (
    <BookingModalContext.Provider value={{ isOpen, mode, openQuote, openContact, close }}>
      {children}
    </BookingModalContext.Provider>
  );
}

export function useBookingModal() {
  const ctx = useContext(BookingModalContext);
  if (!ctx) throw new Error("useBookingModal must be used within BookingModalProvider");
  return ctx;
}
