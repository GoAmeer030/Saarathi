import { languageType } from "@/types/general-types";

export const languageList: languageType[] = ["en", "ta", "hi"];

export const getLanguageExpansion = (lang: languageType) => {
  switch (lang) {
    case "ta":
      return "தமிழ்";
    case "hi":
      return "हिंदी";
    default:
      return "English";
  }
};
