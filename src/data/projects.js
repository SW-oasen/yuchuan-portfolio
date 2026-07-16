import { PROJECT_DETAILS } from "@/data/projectDetails";
import { PROJECT_DETAILS_EN } from "@/data/projectDetails.en";
import { DEFAULT_LANGUAGE, normalizeLanguage } from "@/i18n/config";

export const PROJECT_TAGS = [
  { id: "all", translations: { de: "Alle", en: "All" } },
  { id: "software", translations: { de: "Software", en: "Software" } },
  { id: "data-science", translations: { de: "Data Science", en: "Data Science" } },
  { id: "ai", translations: { de: "KI", en: "AI" } },
];

const PROJECTS = [
  {
    id: "store-finder-platform",
    tags: ["software"],
    date: "2026-07",
    stack: ["React", "TypeScript", "Spring Boot", "Java", "PostgreSQL", "PostGIS", "Leaflet", "Docker", "REST API"],
    resources: { repo: null, live: null, video: null },
    translations: {
      de: {
        title: "Store Finder Plattform",
        summary: "Kommerzielle Full-Stack-Plattform zur standortbasierten Suche nach Fachgeschäften und zur Bereitstellung strukturierter Geschäftsinformationen. Das System kombiniert Kartensuche, Detailansichten, Benutzerrollen und administrative Verwaltungsfunktionen.",
        highlights: [
          "Text-, Standort- und Umkreissuche mit interaktiver Kartenansicht",
          "Geocodierung von Adressen und räumliche Abfragen mit PostGIS",
          "Rollenbasierte Bereiche für Endkunden, Betreiber, Autoren und Administration",
          "Verwaltung von Geschäften, Benutzern und Zugriffsrechten",
          "Mehrsprachiges React-Frontend mit Spring-Boot-REST-API",
          "Roadmap für Warenverfügbarkeit, Anfragen, Aufträge und Abonnements",
        ],
      },
      en: {
        title: "Store Finder Platform",
        summary: "Commercial full-stack platform for location-based specialist-store discovery and structured business information, combining map search, detail views, user roles and administrative workflows.",
        highlights: [
          "Text, location and radius search with an interactive map",
          "Address geocoding and spatial PostGIS queries",
          "Role-based areas for customers, operators, authors and administrators",
          "Management of stores, users and access permissions",
          "Multilingual React frontend backed by a Spring Boot REST API",
          "Roadmap for stock availability, requests, orders and subscriptions",
        ],
      },
    },
  },
  {
    id: "ai-rag-local",
    tags: ["software", "ai"],
    date: "2026-07",
    stack: ["Python", "Ollama", "ChromaDB", "Tesseract OCR", "PyPDF", "HTML/CSS", "pytest"],
    resources: { repo: "https://github.com/SW-oasen/ai-rag-local", live: null, video: null },
    translations: {
      de: {
        title: "Lokales AI-RAG-System",
        summary: "Local-first RAG-Assistent für private Dokumentbibliotheken mit Hybrid-Suche, Quellenangaben, OCR und vollständig lokalen Ollama-Modellen.",
        highlights: [
          "Semantische, Keyword- und Hybrid-Suche mit nachvollziehbaren Quellenangaben",
          "Lokale LLMs und Embeddings über Ollama – ohne Cloud-API",
          "Profile, persistente Chat-Sessions und separates Langzeitgedächtnis",
          "Mehrsprachige OCR mit optionaler LLM-Korrektur für gescannte PDFs",
          "Hierarchische Dokumentzusammenfassungen mit Cache und Export",
        ],
      },
      en: {
        title: "Local AI RAG System",
        summary: "Local-first RAG assistant for private document libraries with hybrid retrieval, source citations, OCR and fully local Ollama models.",
        highlights: [
          "Semantic, keyword and hybrid search with traceable citations",
          "Local LLMs and embeddings through Ollama without a cloud API",
          "Profiles, persistent chat sessions and separate long-term memory",
          "Multilingual OCR with optional LLM correction for scanned PDFs",
          "Hierarchical document summaries with caching and export",
        ],
      },
    },
  },
  {
    id: "energy-price-forecast",
    tags: ["data-science"],
    date: "2026-06",
    stack: ["Python", "Pandas", "scikit-learn", "XGBoost", "LightGBM", "SQLite", "Streamlit", "SMARD", "Open-Meteo"],
    resources: { repo: "https://github.com/SW-oasen/electricity_price_forecast", live: null, video: null },
    translations: {
      de: {
        title: "Strompreis-Prognose Deutschland",
        summary: "Vorhersage stündlicher Day-Ahead-Strompreise für Deutschland auf Basis von Nachfrage, Erzeugung, Wetterdaten und Kalendermerkmalen.",
        highlights: [
          "End-to-End-Pipeline bis zur operativen Tagesprognose",
          "XGBoost-Modell für stündliche Strompreisprognosen",
          "Integration von Last-, Wind- und PV-Prognosen als Eingangsgrößen",
          "Streamlit-App mit Tomorrow Forecast, historischer Analyse und Residuallast-Visualisierung",
        ],
      },
      en: {
        title: "German Electricity Price Forecast",
        summary: "Hourly day-ahead electricity price forecasting for Germany based on demand, generation, weather and calendar features.",
        highlights: [
          "End-to-end pipeline through operational next-day forecasting",
          "XGBoost model for hourly electricity prices",
          "Demand, wind and photovoltaic forecasts as model inputs",
          "Streamlit app with tomorrow forecast, historical analysis and residual-load visualisation",
        ],
      },
    },
  },
  {
    id: "energy-demand-forecast",
    tags: ["data-science"],
    date: "2026-05",
    stack: ["Python", "Pandas", "scikit-learn", "Optuna", "XGBoost", "LightGBM", "SMARD", "Open-Meteo", "Streamlit"],
    resources: { repo: "https://github.com/SW-oasen/electricity_demand_forecast", live: null, video: null },
    translations: {
      de: {
        title: "Stromverbrauchs-Prognose Deutschland",
        summary: "End-to-End-Day-Ahead-Prognose des stündlichen Stromverbrauchs in Deutschland mit SMARD-, Wetter- und Kalenderdaten.",
        highlights: [
          "Dreifachvergleich: Ist-Verbrauch vs. SMARD-Prognose vs. ML-Prognose",
          "Modulare Python-Pipeline für Datenabruf, Feature Engineering, Training und Vorhersage",
          "Optuna-Tuning und Exploration asymmetrischer Verlustfunktionen sowie Quantilregression",
          "Streamlit-App mit Tomorrow Forecast und frei wählbarem historischem Vergleich",
        ],
      },
      en: {
        title: "German Electricity Demand Forecast",
        summary: "End-to-end day-ahead forecast of hourly electricity consumption in Germany using SMARD, weather and calendar data.",
        highlights: [
          "Three-way comparison of actual demand, official SMARD forecast and ML forecast",
          "Modular Python pipeline for ingestion, feature engineering, training and prediction",
          "Optuna tuning plus experiments with asymmetric loss and quantile regression",
          "Streamlit app with tomorrow forecast and configurable historical comparisons",
        ],
      },
    },
  },
  {
    id: "turbine-maintenance",
    tags: ["data-science"],
    date: "2026-06",
    stack: ["Python", "Pandas", "scikit-learn", "XGBoost", "LightGBM", "SQLite", "SQLAlchemy", "scikit-optimize", "Matplotlib"],
    resources: { repo: "https://github.com/SW-oasen/turbine-predictive-maintenance", live: null, video: null },
    translations: {
      de: {
        title: "Turbofan Predictive Maintenance — RUL Prediction",
        summary: "End-to-End-ML-Projekt zur Vorhersage der Remaining Useful Life (RUL) von Turbofan Engines mit NASA CMAPSS-Daten.",
        highlights: [
          "ETL-Pipeline mit SQLite-Datenhaltung",
          "RUL-Berechnung für FD001–FD004 ohne Data Leakage",
          "Feature Engineering mit Sensor-Trendfeatures und RUL Capping",
          "Streamlit Dashboard mit Performance, Prognose und Sensortrends",
        ],
      },
      en: {
        title: "Turbofan Predictive Maintenance — RUL Prediction",
        summary: "End-to-end machine-learning project predicting the remaining useful life of turbofan engines using NASA CMAPSS data.",
        highlights: [
          "ETL pipeline with SQLite persistence",
          "Leakage-free RUL calculation for FD001–FD004",
          "Feature engineering with sensor trends and RUL capping",
          "Streamlit dashboard for performance, predictions and sensor trends",
        ],
      },
    },
  },
  {
    id: "telco-customer-churn",
    tags: ["data-science"],
    date: "2025-10",
    stack: ["Python", "Pandas", "scikit-learn", "Optuna", "Matplotlib"],
    resources: { repo: "https://github.com/SW-oasen/telco-customer-churn", live: null, video: null },
    translations: {
      de: {
        title: "Telco Customer Churn — Klassifikation",
        summary: "Kundenabwanderungsprognose mit Feature Engineering, Modellvergleich und Risiko-Segmentierung.",
        highlights: [
          "Datenvorverarbeitung und Imputation",
          "Feature Engineering für Kundenwert, Vertrags- und Service-Merkmale",
          "Modellauswertung mit ROC/AUC und Threshold-Optimierung",
          "Erklärbarkeit mit Feature Importance, Permutation Importance",
        ],
      },
      en: {
        title: "Telco Customer Churn — Classification",
        summary: "Customer churn prediction with feature engineering, model comparison and risk segmentation.",
        highlights: [
          "Data preprocessing and imputation",
          "Feature engineering for customer value, contracts and services",
          "Model evaluation with ROC/AUC and threshold optimisation",
          "Explainability using feature and permutation importance",
        ],
      },
    },
  },
];

function getTranslation(translations, language) {
  const normalizedLanguage = normalizeLanguage(language);
  return translations[normalizedLanguage] ?? translations[DEFAULT_LANGUAGE];
}

export function getProjects(language = DEFAULT_LANGUAGE) {
  return PROJECTS.map((project) => ({
    ...project,
    ...project.resources,
    ...getTranslation(project.translations, language),
  }));
}

export function getProjectById(projectId, language = DEFAULT_LANGUAGE) {
  const project = getProjects(language).find((item) => item.id === projectId);
  const details = PROJECT_DETAILS[projectId];

  if (!project || !details) {
    return null;
  }

  const localizedDetails = language === "en"
    ? mergeProjectDetails(details, PROJECT_DETAILS_EN[projectId])
    : details;

  return {
    ...localizedDetails,
    ...project,
    id: project.id,
    tags: project.tags,
    stack: project.stack,
    resources: localizedDetails.resources ?? project.resources,
  };
}

function mergeProjectDetails(base, translation) {
  if (!translation) return base;

  return Object.fromEntries(
    Object.entries(base).map(([key, value]) => {
      const translatedValue = translation[key];
      if (translatedValue === undefined) return [key, value];
      if (Array.isArray(value) && Array.isArray(translatedValue)) {
        return [key, translatedValue.map((item, index) =>
          value[index] && item && typeof value[index] === "object" && typeof item === "object"
            ? mergeProjectDetails(value[index], item)
            : item,
        )];
      }
      if (value && translatedValue && typeof value === "object" && typeof translatedValue === "object" && !Array.isArray(value)) {
        return [key, mergeProjectDetails(value, translatedValue)];
      }
      return [key, translatedValue];
    }),
  );
}

export function getProjectTagLabels(language = DEFAULT_LANGUAGE) {
  return Object.fromEntries(
    PROJECT_TAGS.map((tag) => [tag.id, getTranslation(tag.translations, language)]),
  );
}
