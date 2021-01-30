const LOCALE = "locale";

export const DataLocaleStorage = {
  setLocale(locale) {
    localStorage.setItem(LOCALE, locale);
  },
  getLocale() {
    return localStorage.getItem(LOCALE);
  },
};