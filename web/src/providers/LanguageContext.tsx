import { createContext, useContext } from "react";
import { LanguageTypes } from "../configurations/language";

export const LanguageContext = createContext<(language: LanguageTypes) => void | null>(() => {});
export const useLanguage = () => useContext(LanguageContext);