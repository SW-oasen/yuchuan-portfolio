export const DEFAULT_LANGUAGE = "de";
export const SUPPORTED_LANGUAGES = ["de", "en"];

export function normalizeLanguage(language) {
  return SUPPORTED_LANGUAGES.includes(language) ? language : DEFAULT_LANGUAGE;
}
