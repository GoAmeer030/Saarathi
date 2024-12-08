import { languageType, User } from "@/types/general-types";

export interface LanguageState {
  language: languageType;
  setLanguage: (lang: languageType) => void;
}

export type UserStore = {
  user: User;
  setUser: (user: User) => void;
};
