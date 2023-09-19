import { useRouter } from "next/router";
import { type I18nData } from "./type";

import { data as enData } from "./en";
import { data as esData } from "./es";
import { data as ptData } from "./pt";
import { data as jpData } from "./jp";

export type Locales = "en" | "es"; //| "pt" | "jp"//
export const defaultLocale: Locales = "en";

export const localeData = {
  en: enData,
  es: esData,
  // pt: ptData,
  // jp: jpData,
};

export const localeOptions = [
  { value: "en", label: "English" },
  { value: "es", label: "Español" },
  { value: "pt", label: "Português" },
  { value: "jp", label: "日本語" },
];

export function useI18n(): I18nData {
  const { locale } = useRouter();
  return localeData[locale as Locales] || localeData[defaultLocale];
}
