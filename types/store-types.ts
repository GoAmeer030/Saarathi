import { languageType } from "./general-types";

export interface LanguageState {
  language: languageType;
  setLanguage: (lang: languageType) => void;
}
