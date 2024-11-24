/* eslint-disable prettier/prettier */
import { create } from "zustand";

import { languageList } from "@/utils/langugesUtils";

import { LanguageState } from "@/types/store-types";

const useLanguageStore = create<LanguageState>((set) => ({
  language: "en",
  setLanguage: (lang) =>
    set({ language: languageList.includes(lang) ? lang : "en" }),
}));

export default useLanguageStore;
