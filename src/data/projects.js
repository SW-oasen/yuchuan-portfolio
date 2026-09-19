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
    id: "ai-agent-platform",
    tags: ["software", "ai"],
    date: "2026-09",
    stack: ["Python", "FastAPI", "React", "Ollama", "SQLite", "ChromaDB", "SearXNG", "Docker", "pytest"],
    resources: { repo: "https://github.com/SW-oasen/ai_agent_platform", live: null, video: null },
    translations: {
      de: {
        title: "AI Agent Platform",
        summary: "Local-first Agentenplattform mit Browser-Chat, lokalem LLM, RAG, Memory, kontrollierter Web-Recherche und Kalenderverwaltung.",
        highlights: [
          "Serviceorientierte Architektur mit Web UI, Orchestrator, Agent Core, Memory und RAG",
          "Lokales, Ollama-kompatibles LLM sowie lokale SQLite- und ChromaDB-Datenhaltung",
          "Kontrollierte Tools f\u00fcr Web-Recherche, Wetter, Dokumente und lokale Kalenderaktionen",
          "Security by Design: Prompt-Injection-Abwehr, SSRF-Grenzen und sichere HTML-Darstellung",
          "Sichtbare Best\u00e4tigung vor schreibenden Kalenderaktionen und kooperative Cancellation",
        ],
      },
      en: {
        title: "AI Agent Platform",
        summary: "Local-first agent platform with browser chat, a local LLM, RAG, memory, controlled web research and calendar management.",
        highlights: [
          "Service-oriented architecture with Web UI, orchestrator, agent core, memory and RAG",
          "Ollama-compatible local LLM plus local SQLite and ChromaDB storage",
          "Controlled tools for web research, weather, documents and local calendar actions",
          "Security by design: prompt-injection defences, SSRF limits and safe HTML rendering",
          "Visible confirmation for calendar writes and cooperative cancellation",
        ],
      },
    },
  },
  {
    id: "ai-agent-core",
    tags: ["software", "ai"],
    date: "2026-09",
    stack: ["Python", "FastAPI", "Ollama", "SQLite", "SearXNG", "HTTP/SSE", "pytest"],
    resources: { repo: "https://github.com/SW-oasen/ai_agent_core", live: null, video: null },
    translations: {
      de: {
        title: "Local AI Agent Core",
        summary: "Eigenst\u00e4ndiger lokaler Agentendienst f\u00fcr Ollama-kompatible LLMs mit kontrolliertem Tool-Calling, Streaming, Quellenregeln und Sicherheitsgrenzen.",
        highlights: [
          "HTTP- und SSE-API f\u00fcr Chat, Streaming, Health-Checks und Run-Cancellation",
          "Mehrstufiges Tool-Calling f\u00fcr RAG, Websuche, Web-Scraping, Wetter, Kalender sowie Datei- und Repository-Zugriff",
          "Lokale LLM-Endpunkte wie Ollama, llama.cpp oder vLLM",
          "Prompt-Injection-Abwehr f\u00fcr Tool-Inhalte sowie Freshness- und Quellenregeln",
          "Standalone lauff\u00e4hig oder optional in die AI Agent Platform integrierbar",
        ],
      },
      en: {
        title: "Local AI Agent Core",
        summary: "Standalone local agent service for Ollama-compatible LLMs with controlled tool calling, streaming, source rules and security boundaries.",
        highlights: [
          "HTTP and SSE API for chat, streaming, health checks and run cancellation",
          "Multi-step tool calling for RAG, web search, web scraping, weather, calendar, file and repository access",
          "Local LLM endpoints such as Ollama, llama.cpp or vLLM",
          "Prompt-injection defences for tool content plus freshness and source rules",
          "Runs standalone or integrates optionally with the AI Agent Platform",
        ],
      },
    },
  },
  {
    id: "ai-document-service",
    tags: ["software", "ai"],
    date: "2026-09",
    stack: ["Python", "FastAPI", "MinerU", "Ollama", "ChromaDB", "Java", "Jakarta EE", "WildFly", "Docker", "TLS"],
    resources: { repo: null, live: null, video: null },
    translations: {
      de: {
        title: "AI Document Service",
        summary: "Lokaler, sicher integrierbarer Dokumentendienst für PDF-Extraktion, OCR, semantische Suche und quellengebundene KI-Antworten.",
        highlights: [
          "Serverseitige HTTPS-Integration: Browser kennt weder Service-URL noch API-Key",
          "PDF-Extraktion und OCR mit MinerU für gescannte und layoutintensive Dokumente",
          "Semantische Suche mit abschnittsgenauen Quellen und Seitenangaben",
          "Lokale, quellengebundene RAG-Antworten über Ollama",
          "Idempotente Uploads, Versionsbehandlung und optionale asynchrone Verarbeitung",
        ],
      },
      en: {
        title: "AI Document Service",
        summary: "Local, securely integrable document service for PDF extraction, OCR, semantic search and source-grounded AI answers.",
        highlights: [
          "Server-side HTTPS integration: the browser never receives the service URL or API key",
          "PDF extraction and OCR with MinerU for scanned and layout-heavy documents",
          "Semantic search with section-level citations and page references",
          "Local, source-grounded RAG answers through Ollama",
          "Idempotent uploads, version handling and optional asynchronous processing",
        ],
      },
    },
  },
  {
    id: "ai-job-application-assistant",
    tags: ["software", "ai"],
    date: "2026-09",
    stack: ["Python", "FastAPI", "PostgreSQL", "ChromaDB", "Dify", "Ollama", "MinerU", "Playwright", "Docker", "pytest"],
    resources: { repo: "https://github.com/SW-oasen/ai-job-application-assistant", live: null, video: null },
    translations: {
      de: {
        title: "AI Bewerbungsassistent",
        summary: "Lokal betriebene Webanwendung für Profile, Stellenanzeigen, evidenzbasiertes Matching und Bewerbungsverläufe mit kontrollierten KI-Workflows und optionaler Hybrid Search.",
        highlights: [
          "Kanonische zweisprachige Profile mit kontrolliertem CV-Import",
          "Jobimport per URL, PDF oder HTML mit MinerU-Fallback",
          "Ein-Klick-Jobimport per Browser-Lesezeichen für komplexe Portale wie Indeed",
          "Evidenzbasiertes Matching mit getrenntem Qualifikations- und Ziel-Fit",
          "Portfolio-Projekte als eigenständige Evidenzquelle und CV-Recommender",
          "Dashboard für Bewerbungsstatus, Empfehlungen, Filter, Suche und Statistiken",
          "FastAPI-Backend mit PostgreSQL, Alembic und lokaler Docker-Infrastruktur",

        ],
      },
      en: {
        title: "AI Job Application Assistant",
        summary: "Locally hosted web application for profiles, job postings, evidence-based matching and application histories with controlled AI workflows and optional hybrid search.",
        highlights: [
          "Canonical bilingual profiles with controlled CV import",
          "Job import from URLs, PDFs or HTML with a MinerU fallback",
          "One-click job import via browser bookmarklet for complex portals like Indeed",
          "Evidence-based matching with separate qualification and target fit",
          "Portfolio projects as a distinct evidence source and CV recommender",
          "Dashboard for application status, recommendations, filters, search and statistics",
          "FastAPI backend with PostgreSQL, Alembic and local Docker infrastructure",
        ],
      },
    },
  },
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
    stack: ["Python", "Pandas", "scikit-learn", "LightGBM", "MLflow", "SQLite", "Streamlit", "SMARD", "Open-Meteo", "MaStR"],
    resources: { repo: "https://github.com/SW-oasen/electricity_price_forecast", live: null, video: null },
    translations: {
      de: {
        title: "Strompreis-Prognose Deutschland",
        summary: "Vorhersage stündlicher Day-Ahead-Strompreise für Deutschland auf Basis von Nachfrage, Erzeugung, Wetterdaten und Kalendermerkmalen.",
        highlights: [
          "Reproduzierbare End-to-End-Pipeline bis zur operativen Tagesprognose",
          "LightGBM-Modell für stündliche Strompreisprognosen",
          "Gewichtete Aggregation von Wind- und PV-Wetterdaten anhand von Anlagenstandorten und Leistung",
          "MLflow-Tracking für Experimente, Parameter und Modellmetriken",
          "Streamlit-App mit Tagesprognose, historischer Analyse und interaktiven Visualisierungen",
        ],
      },
      en: {
        title: "German Electricity Price Forecast",
        summary: "Hourly day-ahead electricity price forecasting for Germany based on demand, generation, weather and calendar features.",
        highlights: [
          "Reproducible end-to-end pipeline through operational next-day forecasting",
          "LightGBM model for hourly electricity prices",
          "Capacity-weighted aggregation of wind and PV weather data using plant locations",
          "MLflow tracking for experiments, parameters and model metrics",
          "Streamlit app with next-day forecast, historical analysis and interactive visualisations",
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
