// * Dont forget to add the type in the LanguageList in Utils too!
export type languageType = "en" | "ta" | "hi";

export type User = {
  name: string;
  email: string;
  phone: string;
  pictureUrl: string;
} | null;
