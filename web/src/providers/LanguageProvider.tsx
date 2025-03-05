import { createContext, ReactNode, useContext, useState } from "react";
import { getLanguage, LanguageTypes } from "../configurations/language";


interface LanguageContextType {
  _language: LanguageTypes;
  switchLanguage: (lang: LanguageTypes) => void;
}


const LanguageContext = createContext<LanguageContextType | undefined>(undefined);
export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [_language, setLanguage] = useState<LanguageTypes>(
    getLanguage()
  );

  const switchLanguage = (lang: LanguageTypes) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };

  return (
    <LanguageContext.Provider value={{ _language, switchLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook for easy access
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
