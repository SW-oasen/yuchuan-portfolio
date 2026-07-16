export const DEFAULT_LANGUAGE = "de";
export const SUPPORTED_LANGUAGES = ["de", "en"];

export function normalizeLanguage(language) {
  return SUPPORTED_LANGUAGES.includes(language) ? language : DEFAULT_LANGUAGE;
}

export function detectBrowserLanguage(languages = navigator.languages) {
  for (const language of languages ?? []) {
    const baseLanguage = language.toLowerCase().split("-")[0];
    if (SUPPORTED_LANGUAGES.includes(baseLanguage)) {
      return baseLanguage;
    }
  }

  return DEFAULT_LANGUAGE;
}
