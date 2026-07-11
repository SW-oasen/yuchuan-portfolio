import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Github,
  ExternalLink,
  ArrowLeft,
  Target,
  Database,
  CheckCircle,
  BarChart3,
  BookOpen,
  Code2,
} from "lucide-react";
import { motion } from "framer-motion";

const getImagePath = (path) => {
  const baseUrl = import.meta.env.BASE_URL || "/";
  return `${baseUrl}img/${path}`;
};

// ======== PROJECT DATA ========
const PROJECT_DATA = {
  "ai-rag-local": {
    title: "Lokaler RAG-Assistent — private Dokumentenanalyse mit Ollama",
    date: "2026-07",
    duration: "Fortlaufend erweitert",
    status: "Aktiv weiterentwickelt",
    problem: {
      title: "Problem",
      content:
        "Viele KI-gestützte Dokumentensysteme übertragen potenziell vertrauliche Inhalte an externe Dienste. Das Projekt stellt deshalb einen vollständig lokal ausführbaren RAG-Assistenten bereit, der private Dokumentbibliotheken indexiert, durchsucht, zusammenfasst und mit nachvollziehbaren Quellenangaben beantwortet.",
      challenges: [
        "Lokale Verarbeitung ohne externe LLM- oder Cloud-API",
        "Heterogene Formate wie PDF, Markdown, Text, EPUB, AZW3 und OpenDocument zuverlässig einlesen",
        "OCR für gescannte Dokumente und Bilder integrieren",
        "Relevante Textstellen semantisch finden und dem LLM als Kontext bereitstellen",
        "Antworten mit konkreten Seiten- und Abschnittsangaben nachvollziehbar machen",
        "Längere Chats und Dokumente innerhalb begrenzter lokaler Kontextfenster verarbeiten",
      ],
    },
    approach: {
      title: "Daten & Ansatz",
      dataset:
        "Eigene PDF-, Markdown-, Text-, EPUB-, AZW3- und OpenDocument-Dateien. Inhalte werden lokal extrahiert, in Chunks zerlegt, über Ollama eingebettet und getrennt nach Profilen in ChromaDB gespeichert.",
      methodology: [
        "Datei- und Ordner-Ingestion über CLI und lokale Weboberfläche",
        "Formatabhängige Textextraktion inklusive optionaler PDF-Tabellenerkennung",
        "Mehrsprachige Tesseract-OCR mit drei Stufen optionaler LLM-Korrektur",
        "Chunking der extrahierten Inhalte für semantische Suche",
        "Embedding-Erzeugung über Ollama und persistente Speicherung in ChromaDB",
        "Semantisches, Keyword- oder hybrides Retrieval mit Dokument- und Profilfiltern",
        "Kontextbudgetierung für Quellen, Chatverlauf und separates Langzeitgedächtnis",
        "Lokale Web-UI und CLI für Bibliothek, Fragen, Extraktion und Zusammenfassungen",
      ],
      tools: [
        "Python",
        "Ollama",
        "ChromaDB",
        "Tesseract OCR",
        "PyPDF",
        "Python HTTP Server",
        "pytest",
      ],
    },
    solution: {
      title: "Lösung",
      content:
        "Der Assistent verbindet eine lokale Dokumentbibliothek mit drei Suchmodi, ChromaDB und Ollama. Gefundene Passagen, relevante Erinnerungen und der komprimierte Chatverlauf werden unter festen Tokenbudgets zu einem Prompt zusammengesetzt. Antworten referenzieren die verwendeten Quellen; lange Dokumente werden hierarchisch zusammengefasst und Ergebnisse lokal gecacht.",
      features: [
        "Lokale RAG-Pipeline für eigene Dokumente",
        "Lokale Dokumentbibliothek mit Datei- und Ordner-Ingestion",
        "Semantische, Keyword- und Hybrid-Suche mit Quellen-, Verzeichnis- und Profilfiltern",
        "Persistente Chats mit Folgefragen, Conversation Summary und Markdown-Export",
        "Profilbezogenes Langzeitgedächtnis in separater Chroma-Collection",
        "Mehrsprachige OCR, LLM-Korrektur und Export von Original- und Korrekturtext",
        "Hierarchische Zusammenfassungen mit Validierung, Cache und Export",
        "CLI sowie dependency-free Web-UI unter 127.0.0.1",
      ],
    },
    results: {
      title: "Ergebnisse",
      metrics: [
        { label: "Anwendungstyp", value: "RAG", change: "lokal" },
        { label: "LLM-Ausführung", value: "Ollama", change: "ohne Cloud-API" },
        { label: "Vektordatenbank", value: "ChromaDB", change: "semantische Suche" },
        { label: "OCR", value: "Tesseract", change: "Scans & Bilder" },
        { label: "Suchmodi", value: "3", change: "semantisch / Keyword / hybrid" },
        { label: "Tests", value: "17 Module", change: "pytest-Suite" },
      ],
      insights: [
        "Lokale LLMs ermöglichen datenschutzfreundliche Dokumentenanalyse ohne externe API-Abhängigkeit",
        "Die Qualität der Antworten hängt stark von Chunking, Embeddings und der Relevanz der gefundenen Textstellen ab",
        "OCR erweitert den praktischen Nutzen deutlich, ist aber bei komplexen Layouts oder schlechter Scanqualität begrenzt",
        "Quellen-, Profil- und Verzeichnisfilter verbessern die Kontrolle über den Retrieval-Kontext",
        "Feste Kontextbudgets machen längere Chats auch mit kleineren lokalen Modellen praktikabel",
      ],
    },
    learnings: {
      title: "Learnings & Reflexion",
      positives: [
        "RAG-Systeme lassen sich mit lokalen Komponenten als vollständige CLI- und Webanwendung umsetzen",
        "Ollama vereinfacht die Integration lokaler LLMs in eigene Python-Anwendungen",
        "Die Kombination von semantischer und lexikalischer Suche erhöht die Robustheit bei unterschiedlichen Fragetypen",
        "OCR-Korrektur braucht Schutzregeln für Namen, Zahlen und andere sensible Fakten",
        "Persistenz, Kontextbudgets und Evaluation sind ebenso wichtig wie die eigentliche RAG-Pipeline",
      ],
      improvements: [
        "Retrieval-Qualität systematisch mit Testfragen und erwarteten Quellen bewerten",
        "Retrieval-Evaluation ausbauen und als reproduzierbare Benchmark automatisieren",
        "Chunking-Strategien und Embedding-Modelle vergleichen",
        "Performance bei größeren Dokumentensammlungen testen",
        "Unterstützung für weitere Dateiformate und bessere Layout-Erkennung ergänzen",
      ],
    },
    resources: {
      repo: "https://github.com/SW-oasen/ai-rag-local",
    },
    visuals: [
      {
        title: "Weboberfläche des lokalen RAG-Systems",
        type: "UI",
        src: getImagePath("ai-rag-local/Overview.png"),
        description: "Startansicht mit Kennzahlen, Bibliotheksdetails und gruppierten lokalen Quellen.",
      },
      {
        title: "Dokumentbasierte Frage-Antwort",
        type: "RAG",
        src: getImagePath("ai-rag-local/Ask.png"),
        description: "Chat mit Suchmodus, Profil, Scope, Memory und nachvollziehbaren Quellen.",
      },
      {
        title: "OCR-Verarbeitung",
        type: "OCR",
        src: getImagePath("ai-rag-local/Extract-Text.png"),
        description: "Mehrsprachige OCR mit konfigurierbarer Vorverarbeitung, LLM-Korrektur und Text-Export.",
      },
      {
        title: "Dokumentzusammenfassung",
        type: "LLM",
        src: getImagePath("ai-rag-local/Summerize.png"),
        description: "Hierarchische Zusammenfassung langer Dokumente mit Cache, Fortschritt und Export.",
      },
    ],
  },

  "energy-price-forecast": {
    title: "Strompreis-Prognose Deutschland — Day-Ahead Forecasting",
    date: "2026-06",
    duration: "3 Wochen",
    status: "Abegeschlossen",
    problem: {
      title: "Problem",
      content:
        "Der deutsche Strommarkt ist stark von wetterabhängiger Einspeisung, Stromnachfrage und kurzfristiger Residuallast geprägt. Ziel des Projekts ist die stündliche Vorhersage der Day-Ahead-Strompreise für Deutschland (DE/LU) auf Basis öffentlicher Markt-, Erzeugungs-, Nachfrage- und Wetterdaten.",
      challenges: [
        "Hohe Preisvolatilität durch Wind- und PV-Einspeisung, inklusive negativer Preise",
        "Unvollständige reale Daten für heute und gestern, obwohl diese als Prädiktoren relevant sind",
        "Zeitreihen mit unterschiedlichen Aktualisierungsständen aus SMARD, Open-Meteo und eigener Lastprognose",
        "Zeitzonen-Handling zwischen UTC und Europe/Berlin, inklusive Sommerzeitumstellung",
        "Operative Tomorrow-Prognose ohne Data Leakage und mit konsistentem Feature Engineering",
        "Plausible Darstellung der Preisprognose zusammen mit Residuallast und Referenzwerten",
      ],
    },
    approach: {
      title: "Daten & Ansatz",
      dataset:
        "Stündliche öffentliche Strommarktzeitreihen für Deutschland: Day-Ahead-Preise, Last, Wind, PV, konventionelle Erzeugung sowie technologiegewichtete Wetterdaten.",
      methodology: [
        "ETL-Pipeline für SMARD-Daten: Day-Ahead-Preise, Nachfrage, Wind Onshore/Offshore, PV und konventionelle Erzeugung",
        "Open-Meteo-Integration für PV- und Wind-Wetterdaten mit gewichteter Aggregation über Anlagencluster",
        "MaStR-basierte Clusterbildung und jährliche Kapazitätsgewichtung für Wind- und PV-Anlagen",
        "Feature Engineering mit Preis-, Nachfrage-, Erzeugungs-, Wetter-, Kalender- und Residuallastmerkmalen",
        "Gestapelte operative Pipeline: fehlende Last-, Wind- und PV-Werte für gestern/heute/morgen werden durch Vorhersagemodelle bereitgestellt",
        "Modellvergleich mit LightGBM und XGBoost; XGBoost als aktuell bevorzugtes Preisvorhersagemodell",
        "Streamlit-App für Tomorrow Forecast und historische Analyse",
      ],
      tools: [
        "Python",
        "Pandas",
        "scikit-learn",
        "XGBoost",
        "LightGBM",
        "SQLite",
        "Streamlit",
        "Matplotlib",
        "SMARD API",
        "Open-Meteo API",
      ],
    },
    solution: {
      title: "Lösung",
      content:
        "End-to-End-ML-Pipeline für stündliche Strompreisprognosen: Datenabruf, Datenhaltung, Feature Engineering, Modelltraining, operative Vorhersage und interaktive Visualisierung sind in einem reproduzierbaren Workflow verbunden.",
      features: [
        "SQLite-Datenbank mit normalisiertem Zeitreihenschema für Markt-, Erzeugungs- und Wetterdaten",
        "Entkoppelte Ingestion für SMARD- und Open-Meteo-Daten mit Delta-Logik",
        "Technologiegewichtete Wetteraggregation für Wind und PV auf Basis installierter Anlagenleistung",
        "XGBoost-Regressor für die stündliche Day-Ahead-Preisprognose",
        "Operative Funktion prepare_data_for_price_prediction_operational() für die Tomorrow-Pipeline",
        "Integration der prognostizierten Last-, Wind- und PV-Werte als Eingangsgrößen für die Preisprognose",
        "Streamlit-Dashboard mit Preisprognose, historischer Vorhersageanalyse und Residuallast-Visualisierung",
      ],
    },
    results: {
      title: "Ergebnisse",
      metrics: [
        { label: "Train-Test-Split", value: "2026-01-01", change: "Zeit(Datum)" },
        { label: "Prognosehorizont", value: "24h", change: "stündlich" },
        { label: "Hauptmodell", value: "XGBoost", change: "Preisvorhersage" },
        { label: "MAE", value: "15.27", change: "EUR/MWh" },
        { label: "RMSE", value: "24.07", change: "EUR/MWh" },
        { label: "R²", value: "0.82", change: "Testbewertung" },
        { label: "Datenquellen", value: "3+", change: "SMARD, Open-Meteo, MaStR" },
      ],
      insights: [
        "Residuallast ist fachlich zentral, weil sie die verbleibende Nachfrage nach wetterabhängiger Erzeugung beschreibt",
        "Die operative Prognose benötigt Ersatzwerte für heute und gestern, da reale Erzeugungs- und Lastdaten oft verspätet vollständig sind",
        "XGBoost lieferte im aktuellen Projektstand plausiblere Tomorrow-Forecasts als LightGBM",
        "Zeitzonen müssen projektweit konsequent behandelt werden, damit Berlin-Tage korrekt als 00:00–23:00 Europe/Berlin interpretiert werden",
        "Eine fachlich nachvollziehbare Visualisierung ist für die Bewertung der Prognose fast genauso wichtig wie die reine Modellmetrik",
      ],
    },
    learnings: {
      title: "Learnings & Reflexion",
      positives: [
        "Komplexe Energieprognosen benötigen eine saubere Trennung zwischen Rohdaten, Feature Engineering und operativer Prognose",
        "Feature Engineering und Datenverfügbarkeit bestimmen die Qualität stärker als ein einzelner Modellwechsel",
        "Gestapelte Prognosefeatures können eine realistische operative Tomorrow-Prognose ermöglichen",
        "SMARD-, Open-Meteo- und MaStR-Daten lassen sich zu einem praxisnahen Energie-ML-Projekt kombinieren",
        "Streamlit eignet sich gut, um Modellverhalten, Ausreißer und Plausibilität iterativ zu prüfen",
      ],
      improvements: [
        "Walk-Forward-Simulation für eine realistischere historische Bewertung ergänzen",
        "Historische Prognosen persistieren, um echte operative Forecasts mit späteren Ist-Werten zu vergleichen",
        "Modellmetriken und Feature-Importances systematisch dokumentieren",
        "Automatische Aktualisierung der MaStR-Erzeugerdaten und Wettergewichtungen vorbereiten",
        "Power-BI-Dashboard als ergänzende Business-Intelligence-Perspektive umsetzen",
      ],
    },
    resources: {
      repo: "https://github.com/SW-oasen/electricity_price_forecast",
      presentation: "/yuchuan-portfolio/Strompreis_Vorhersagen.pdf",
    },
    visuals: [
      {
        title: "Preismuster in verschiedenen Perioden",
        type: "EDA",
        src: getImagePath("energy-price-forecast/price-pattern-influences.png"),
        description: "Verteilungsmuster der Preise in verschiedenen Perioden.",
      },
      {
        title: "Preis-Ausreißer",
        type: "EDA",
        src: getImagePath("energy-price-forecast/price-outliers.png"),
        description: "Identifikation und Analyse von Preis-Ausreißern. Ungewöhnliche extreme Preise erkannt, können dennoch nicht pauschal als Ausreißer behandelt werden",
      },
      {
        title: "PV- und Wind-Energieerzeuger-Cluster",
        type: "ETL",
        src: getImagePath("energy-price-forecast/pv-wind-clusters.png"),
        description: "Clustering von PV- und Wind-Energieerzeugern zur Aggregation von Wetterdaten.",
      },
      {
        title: "Historische Preis-Vorhersage",
        type: "ML",
        src: getImagePath("energy-price-forecast/historical-prediction.png"),
        description: "Historische Preis-Vorhersagen im Vergleich zu realen Preisen. Ungewöhnliche extreme Preise erkannt. Eventuell weitere Analyse und Feature Engineering. ",
      },
      {
        title: "Vorhersage für morgen",
        type: "ML",
        src: getImagePath("energy-price-forecast/prediction-tomorrow.png"),
        description: "Prognose der Energiepreise für den nächsten Tag und Vergleich zu den Preisen von vorgestern und dem Durchschnitt der letzten 7 Tagen.",
      },

    ],
  },

  "energy-demand-forecast": {
    title: "Stromverbrauchs-Prognose Deutschland — Day-Ahead Forecasting",
    date: "2026-05",
    duration: "3 Wochen",
    status: "Abgeschlossen",
    problem: {
      title: "Problem",
      content:
        "Kurzfristige Prognosen des Stromverbrauchs sind ein Kernproblem im Energiesektor. Genaue Vorhersagen helfen bei der Netzsteuerung und der Einsatzplanung von Kraftwerken.",
      challenges: [
        "Unterschiedliche Zeitformate aus verschiedenen Quellen (SMARD, Wetterdaten)",
        "Starke Saisonalität: täglich, wöchentlich und jährlich überlagerte Muster",
        "Kalendarische Einflüsse: Feiertage, Wochentage und Brückentage",
        "Wettereinflüsse: empfundene Temperatur, Sonneneinstrahlung und Windstärke",
        "Wetterdatenaggregation mit der Population ausgewählter Städte als Gewichtung",
        "Auswahl geeigneter Lag-Features ohne Data Leakage",
        "Robuste Evaluierung durch zeitbasierten Train-Test-Split und Kreuzvalidierung",
      ],
    },
    approach: {
      title: "Daten & Ansatz",
      dataset: "Öffentliche Stromverbrauchsdaten für Deutschland (stündliche Auflösung)",
      methodology: [
        "Explorative Datenanalyse: saisonale Dekompositionen und Autokorrelationen",
        "Feature Engineering: Kalender-Features, Lag-Features, Rolling-Window-Statistiken",
        "Saisonell-naive und Moving-Average-Baselines für Stromverbrauchs- und Wetterdaten",
        "Baseline-Modelle: Linear Regression, Random Forest, XGBoost, LightGBM, SVR",
        "Vergleich der ML-Vorhersage gegen reale SMARD-Daten und SMARD-Prognose",
        "Fehleranalyse: MAE, RMSE und visuelle Residuendiagnostik",
      ],
      tools: ["Pandas", "scikit-learn", "sklearn-optimizer", "XGBoost", "LightGBM", "SQLite", "Matplotlib", "Streamlit", "Jupyter"],
    },
    solution: {
      title: "Lösung",
      content: "ML-Pipeline mit Feature Engineering und Kreuzvalidierung für kurzfristige Strombedarfsprognosen.",
      features: [
        "Manuelles und automatisiertes Feature Engineering für Zeitreihen",
        "Zeitbasierte Train-Test-Splits zur Vermeidung von Data Leakage",
        "Hyperparameter-Optimierung mit Bayesian Optimization für LightGBM und XGBoost",
        "Interaktive Visualisierungen der Prognoseergebnisse",
        "Vergleich von Prognose und realen Verbrauchsdaten von SMARD",
      ],
    },
    results: {
      title: "Ergebnisse",
      metrics: [
        { label: "Beste Modelle", value: "XGBoost + LightGBM", change: "Tuned mit Bayesian Optimization" },
        { label: "Konservative Modelle", value: "bis 5% Unterschätzung", change: "Asymetrische Verlustfunktionen" },
        { label: "Prognosehorizont", value: "24h", change: "stündlich" },
        { label: "Visualisierung", value: "Notebook + Streamlit", change: "Vergleich Prognose vs. Realität" },
      ],
      insights: [
        "Baseline-Modelle mit saisonalen Mittelwerten und gleitenden Durchschnitten liefern bereits eine solide Prognose",
        "XGBoost und LightGBM tuned mit Bayesian Optimization für stabile Prognosen mit konservativem Bias",
        "Feature Engineering hat größeren Einfluss auf die Prognosegenauigkeit als die Wahl des ML-Modells",
        "Lag-Features des Vortages und der Vorwoche liefern hohen Informationsgehalt",
        "Historische Verbrauch und Kalender-Features sind entscheidend für die Prognosegenauigkeit",
      ],
    },
    learnings: {
      title: "Learnings & Reflexion",
      positives: [
        "Zeitbasierte Kreuzvalidierung verhindert Data Leakage",
        "Feature Engineering bei Zeitreihen erfordert sorgfältige Planung der Lag-Fenster",
        "EDA deckte wichtige saisonale Muster auf",
        "Vergleich mit Live-Daten von SMARD ermöglichte realistische Evaluierung und Modellanpassungen",
      ],
      improvements: [
        "Zeitformat und Zeitzonen-Handling von Anfang an standardisieren",
        "Variablenbenennung in Funktionen vereinheitlichen",
        "Visualisierungsstil in allen Plots vereinheitlichen",
        "Datenbank für das Folgeprojekt vorbereiten",
      ],
    },
    resources: {
      repo: "https://github.com/SW-oasen/electricity_demand_forecast",
      presentation: "/yuchuan-portfolio/Stromverbrauch_Vorhersagen.pdf",
    },
    visuals: [
      {
        title: "Kalender-Feature Distribution",
        type: "distribution",
        src: getImagePath("energy-demand-forecast/energy-calendar-distribution.jpg"),
        description: "Verteilung der Kalender-Features im Zeitverlauf.",
      },
      {
        title: "Wetterdaten-Distribution",
        type: "distribution",
        src: getImagePath("energy-demand-forecast/energy-weather-distribution.jpg"),
        description: "Verteilung der Wetterdaten.",
      },
      {
        title: "Feature Importances",
        type: "bar",
        src: getImagePath("energy-demand-forecast/feature-importances.jpg"),
        description: "Wichtigkeit der Features für die Prognosemodelle.",
      },
      {
        title: "Prognose vs. Historie",
        type: "line",
        src: getImagePath("energy-demand-forecast/prediction-historical.jpg"),
        description: "Vergleich: Modellprognose und reale Verbrauchsdaten.",
      },
      {
        title: "Prognose für den nächsten Tag",
        type: "line",
        src: getImagePath("energy-demand-forecast/prediction-tomorrow.jpg"),
        description: "Modellprognose für den nächsten Tag im Vergleich zu SMARD.",
      },
    ],
  },

  "telco-customer-churn": {
    title: "Telco Customer Churn — Classification",
    date: "2026-06",
    duration: "Überarbeitung eines alten Projekts",
    status: "Abgeschlossen",
    problem: {
      title: "Problem",
      content:
        "Telekommunikationsunternehmen verlieren Kunden durch Churn. Ziel war ein Klassifikationsmodell zur Identifikation gefährdeter Kunden und zur Ableitung von Retention-Strategien.",
      challenges: ["Klassendisbalance", "Viele kategorische Features", "Business-orientierte Threshold-Wahl", "Erklärbarkeit für Retention-Maßnahmen"],
    },
    approach: {
      title: "Daten & Ansatz",
      dataset: "Kaggle Telco Customer Churn Dataset - 7.043 Kunden mit 19 Features",
      methodology: [
        "Data Prep, Missing-Value-Behandlung und Encoding",
        "Explorative Analyse von Churn Rate, Tenure und Monthly Charges",
        "Feature Engineering für Tenure Buckets, Service Count, Revenue to Date und Contract-Payment-Risk",
        "Modellvergleich mit Logistic Regression, Random Forest, LightGBM und XGBoost",
        "Optuna-Tuning und Threshold-Optimierung für business-orientierte Churn-Erkennung",
        "Feature-Importance-Analyse mit Tree Importance, Permutation Importance und SHAP",
      ],
      tools: ["Python", "Pandas", "scikit-learn", "Optuna", "LightGBM", "XGBoost", "SHAP", "Matplotlib", "Seaborn"],
    },
    solution: {
      title: "Lösung",
      content:
        "End-to-End-ML-Pipeline mit Feature Engineering, Hyperparameter-Optimierung, Threshold-Wahl und Risiko-Segmentierung für Churn-Risiken.",
      features: [
        "Automatisierte Datenbereinigung und Preprocessing",
        "Feature Engineering für Kundenlebenszyklus, Service-Nutzung und Vertragsrisiko",
        "Modellvergleich mit mehreren Klassifikationsalgorithmen",
        "Optuna-Tuning mit Cross-Validation",
        "Risk Segmentation in Low, Medium, High und Very High",
        "Feature-Importance-Analyse für Retention-Maßnahmen",
      ],
    },
    results: {
      title: "Ergebnisse",
      metrics: [
        { label: "Bestes Modell", value: "XGBoost", change: "AUC 0.849" },
        { label: "Modelle", value: "4", change: "LogReg, RF, LightGBM, XGBoost" },
        { label: "Churn Rate", value: "26.5%", change: "Dataset" },
        { label: "Kunden", value: "7.043", change: "Kaggle Dataset" },
      ],
      insights: [
        "Tenure ist ein wichtiger Prädiktor, besonders neue Kunden mit 0-12 Monaten zeigen hohes Risiko",
        "Month-to-month-Verträge und Electronic-Check-Zahlungen korrelieren stark mit Churn",
        "Service-Bundles und längere Vertragslaufzeiten senken Churn-Risiko",
        "XGBoost und LightGBM erzielten sehr ähnliche AUC-Werte im Modellvergleich",
        "Feature Engineering verbessert nicht die AUC, aber die Interpretierbarkeit und Handlungsfähigkeit für Retention-Maßnahmen",
      ],
    },
    learnings: {
      title: "Learnings & Reflexion",
      positives: [
        "Feature Engineering verbessert nicht die AUC, aber die Interpretierbarkeit und Handlungsfähigkeit für Retention-Maßnahmen",
        "Optuna effektiver als Grid Search",
        "Feature Importance macht ML-Insights für Retention-Maßnahmen zugänglich",
        "Threshold-Optimierung ist für Churn-Projekte fachlich wichtiger als reine Accuracy",
      ],
      improvements: [
        "Zeitreihen-Features ergänzen",
        "A/B-Testing-Framework vorbereiten",
        "Real-time Scoring Pipeline prüfen",
        "MLOps-Pipeline mit Modellmonitoring vorbereiten",
      ],
    },
    resources: { repo: "https://github.com/SW-oasen/telco-customer-churn" },
    visuals: [
      {
        title: "Customer Churn Analyse",
        type: "EDA",
        src: getImagePath("telco-customer-churn/churn_eda.png"),
        description: "EDA zu Churn-Verteilung, Tenure, Monthly Charges und Churn Rate nach Tenure-Gruppen.",
      },
      {
        title: "Modell-Evaluierung",
        type: "ML",
        src: getImagePath("telco-customer-churn/model_evaluation.png"),
        description: "ROC-Kurven, AUC-Vergleich, Confusion Matrix und Wahrscheinlichkeitsverteilung der Modelle.",
      },
      {
        title: "Feature Importance",
        type: "ML",
        src: getImagePath("telco-customer-churn/feature_importance.png"),
        description: "Vergleich der wichtigsten Features über mehrere Modelle.",
      },
    ],
  },

  "turbine-maintenance": {
    title: "Turbofan Predictive Maintenance — RUL Prediction",
    date: "2026-06",
    duration: "Eine Woche (Überarbeitung eines alten Projekts)",
    status: "Abgeschlossen",
    problem: {
      title: "Problem",
      content:
        "Ziel des Projekts ist die Vorhersage der Remaining Useful Life (RUL) von Turbofan Engines auf Basis der NASA CMAPSS-Datensätze FD001–FD004.",
      challenges: [
        "Vermeidung von Data Leakage bei Zeitreihen- und Engine-Daten",
        "Korrekte RUL-Berechnung für Trainings- und Testdaten",
        "Vereinheitlichung von vier Datensätzen mit unterschiedlichen Betriebsbedingungen und Fehlermodi",
        "Feature Engineering für Sensorzeitreihen",
        "Realistische Evaluation anhand der offiziellen Test-RUL-Werte",
      ],
    },
    approach: {
      title: "Daten & Ansatz",
      dataset:
        "NASA CMAPSS Turbofan Engine Degradation Simulation Dataset — FD001, FD002, FD003 und FD004.",
      methodology: [
        "Entfernung unnötiger Komplexität aus dem alten Projekt",
        "Aufbau einer klaren ETL-Pipeline mit SQLite-Datenbank",
        "Berechnung der RUL-Werte pro Engine und Zyklus",
        "Feature Engineering mit Sensorwerten, Operational Settings und Trendfeatures",
        "Modellvergleich mit LightGBM und XGBoost",
        "Bayesian Optimization zur Hyperparameter-Optimierung",
        "Evaluation nur auf dem letzten Testzyklus je Engine gegen die offiziellen RUL-Werte",
      ],
      tools: [
        "Python",
        "Pandas",
        "NumPy",
        "scikit-learn",
        "XGBoost",
        "LightGBM",
        "SQLite",
        "SQLAlchemy",
        "scikit-optimize",
        "Matplotlib",
      ],
    },
    solution: {
      title: "Lösung",
      content:
        "Reproduzierbare Predictive-Maintenance-Pipeline mit Datenimport, Feature Engineering, SQLite-Datenhaltung, Modelltraining, Hyperparameter-Tuning und sauberer Evaluation.",
      features: [
        "SQLite-Datenbank mit Tabellen für Engine-Zyklen, Dataset-Metadaten und Test-RUL",
        "Separate Views für Training, Test und letzte Testzyklen",
        "Feature Engineering für Sensor-Trends",
        "Vergleich von Baseline- und Gradient-Boosting-Modellen",
        "Bayesian Optimization für XGBoost und LightGBM",
      ],
    },
    results: {
      title: "Ergebnisse",
      metrics: [
        { label: "Bestes Modell", value: "XGBoost", change: "Tuned + RUL cap 150" },
        { label: "MAE", value: "18.30", change: "Zyklen" },
        { label: "RMSE", value: "24.64", change: "Zyklen" },
        { label: "R²", value: "0.77", change: "Testbewertung" },
        { label: "Datensätze", value: "FD001–FD004", change: "CMAPSS" },
      ],
      insights: [
        "Feature Engineering verbesserte die Modellleistung deutlich stärker als reines Hyperparameter-Tuning",
        "Trendfeatures aus Sensorsignalen lieferten den größten Performance-Gewinn",
        "Condition und Fault Mode als kategoriale Features verbesserten die Scores kaum",
        "Die alte zufällige Train-Test-Aufteilung war für dieses Zeitreihenproblem vermutlich zu optimistisch",
        "XGBoost und LightGBM erzielten nach Tuning sehr ähnliche Ergebnisse",
      ],
    },
    learnings: {
      title: "Learnings & Reflexion",
      positives: [
        "ETL mit SQLite ermöglichte eine klare Trennung von Datenimport, Feature Engineering und Modelltraining",
        "Feature Engineering wie Sensor-Trendfeatures und RUL-Capping hatten einen größeren Einfluss als die Modellwahl",
        "Rolling Features und Setting-Kombinationen hatten keine deutliche Verbesserung gebracht",
        "Bayesian Optimization brachte nach gutem Feature Engineering zusätzliche, aber kleinere Verbesserungen",
        "Gradient-Boosting-Modelle waren für diesen Datensatz besonders robust",
        "Streamlit-Dashboard brachte wichtige Einblicke in die Prognosequalität und Sensorverläufe",
      ],
      improvements: [
        "Echtzeit-Integration in industrielle Wartungssysteme vorbereiten",
        "Erweiterung auf weitere Sensordaten und Anwendungsbereiche",
        "Unsicherheitsabschätzung der RUL-Prognosen ergänzen",
      ],
    },
    resources: {
      repo: "https://github.com/SW-oasen/turbine-predictive-maintenance",
      presentation: "/yuchuan-portfolio/Turbofan-predictive-maintenance.pdf",
    },
    visuals: [
      {
        title: "Vergleich der Modell-Performance",
        type: "Line",
        src: getImagePath("turbine-maintenance/model_performance_comparison.png"),
        description: "Vergleich der LightGBM und XGBoost Modell-Performance auf verschiedenen ML Stufen.",
      },
      {
        title: "RUL Capping Effekt",
        type: "boxplot",
        src: getImagePath("turbine-maintenance/rul_capping_effect.png"),
        description: "Vergleich der RUL Capping Effekte auf die Modell-Performance.",
      },
      {
        title: "Tatsächliche vs. prognostizierte RUL",
        type: "heatmap",
        src: getImagePath("turbine-maintenance/true_prediction_comparison.png"),
        description: "Vergleich der tatsächlichen und prognostizierten RUL Werte.",
      },
      {
        title: "Entwicklung wichtiger Sensorwerte über die Zyklen",
        type: "line",
        src: getImagePath("turbine-maintenance/sensor_trends.png"),
        description: "Verlauf wichtiger Sensorwerte über die Betriebszyklen.",
      }
    ],

  },
};

// ======== COMPONENTS ========
function ProjectSection({ icon: Icon, title, children, className = "" }) {
  return (
    <section className={`mb-10 ${className}`}>
      <div className="mb-4 flex items-center gap-3">
        <div className="rounded-lg bg-slate-100 p-2">
          <Icon className="h-5 w-5 text-slate-700" />
        </div>
        <h2 className="text-2xl font-bold text-slate-900">{title}</h2>
      </div>
      {children}
    </section>
  );
}

function MetricCard({ label, value, change }) {
  return (
    <Card className="border-slate-200 bg-white">
      <CardContent className="p-5 text-center">
        <div className="mt-1 text-sm text-slate-600">{label}</div>
        <div className="text-2xl font-bold text-slate-900">{value}</div>
        {change && <div className="mt-2 text-xs text-slate-500">{change}</div>}
      </CardContent>
    </Card>
  );
}

function VisualCard({ visual, onOpen }) {
  return (
    <button onClick={() => onOpen(visual)} className="block w-full text-left" aria-label={`${visual.title} vergroessern`}>
      <Card className="overflow-hidden border-slate-200 transition hover:shadow-md">
        <div className="aspect-[16/9] bg-white flex items-center justify-center rounded-t-xl overflow-hidden">
          <img
            src={visual.src}
            alt={visual.title}
            className="w-full h-full object-contain p-3"
            onError={(event) => {
              event.currentTarget.style.display = "none";
            }}
          />
        </div>
        <CardContent className="p-4">
          <h4 className="font-semibold text-slate-900">{visual.title}</h4>
          <p className="mt-1 text-sm text-slate-600">{visual.description}</p>
          <p className="mt-2 text-xs text-slate-500">Klicken zum Vergrößern</p>
        </CardContent>
      </Card>
    </button>
  );
}

export default function ProjectDetail({ projectId }) {
  const project = PROJECT_DATA[projectId];
  const [selectedVisual, setSelectedVisual] = React.useState(null);

  const handleBack = () => {
    window.location.hash = "";
  };

  if (!project) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-16 text-center">
        <h1 className="text-3xl font-bold">Projekt nicht gefunden</h1>
        <Button onClick={handleBack} className="mt-6">
          Zurück zur Übersicht
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <Button variant="ghost" onClick={handleBack} className="mb-8 gap-2">
          <ArrowLeft className="h-4 w-4" /> Zurück zur Übersicht
        </Button>

        <motion.header initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="mb-10">
          <div className="mb-3 flex flex-wrap gap-2">
            <Badge>{project.status}</Badge>
            <Badge variant="secondary">{project.date}</Badge>
          </div>
          <h1 className="text-3xl font-bold tracking-tight break-words hyphens-auto leading-tight sm:text-4xl lg:text-5xl">{project.title}</h1>
          <p className="mt-4 text-slate-600">Dauer: {project.duration}</p>
        </motion.header>

        <ProjectSection icon={Target} title={project.problem.title}>
          <Card>
            <CardContent className="p-6">
              <p className="leading-7 text-slate-700">{project.problem.content}</p>
              <h4 className="mt-6 font-semibold">Hauptherausforderungen:</h4>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                {project.problem.challenges.map((challenge, i) => (
                  <li key={i} className="flex gap-2">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-slate-500" />
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </ProjectSection>

        <ProjectSection icon={Database} title={project.approach.title}>
          <div className="grid gap-6 lg:grid-cols-3">
            <Card className="lg:col-span-1">
              <CardHeader>
                <CardTitle>Dataset</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-6 text-slate-700">{project.approach.dataset}</p>
              </CardContent>
            </Card>
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Methodisches Vorgehen</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="space-y-3 text-sm text-slate-700">
                  {project.approach.methodology.map((step, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-900 text-xs text-white">
                        {i + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.approach.tools.map((tool, i) => (
              <Badge key={i} variant="secondary">
                {tool}
              </Badge>
            ))}
          </div>
        </ProjectSection>

        <ProjectSection icon={Code2} title={project.solution.title}>
          <Card>
            <CardContent className="p-6">
              <p className="leading-7 text-slate-700">{project.solution.content}</p>
              <div className="mt-6 grid gap-3 md:grid-cols-2">
                {project.solution.features.map((feature, i) => (
                  <div key={i} className="rounded-lg border border-slate-200 bg-white p-4 text-sm text-slate-700">
                    {feature}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </ProjectSection>

        <ProjectSection icon={BarChart3} title={project.results.title}>
          <div className="mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {project.results.metrics.map((metric, i) => (
              <MetricCard key={i} {...metric} />
            ))}
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Zentrale Erkenntnisse</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm text-slate-700">
                {project.results.insights.map((insight, i) => (
                  <li key={i} className="flex gap-2">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-slate-500" />
                    <span>{insight}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </ProjectSection>

        {project.visuals && project.visuals.length > 0 && (
          <ProjectSection icon={BarChart3} title="Visualisierungen">
            <div className="grid gap-6 md:grid-cols-2">
              {project.visuals.map((visual, i) => (
                <VisualCard key={i} visual={visual} onOpen={setSelectedVisual} />
              ))}
            </div>
          </ProjectSection>
        )}

        <ProjectSection icon={BookOpen} title={project.learnings.title}>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Was gut funktioniert hat</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-700">
                  {project.learnings.positives.map((item, i) => (
                    <li key={i} className="flex gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-slate-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Nächste Verbesserungen</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-700">
                  {project.learnings.improvements.map((item, i) => (
                    <li key={i} className="flex gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-slate-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </ProjectSection>

        <div className="mb-12 flex flex-wrap gap-3">
          {project.resources.repo && (
            <Button asChild className="gap-2">
              <a href={project.resources.repo} target="_blank" rel="noreferrer">
                <Github className="h-4 w-4" /> GitHub Repository
              </a>
            </Button>
          )}
          {Object.entries(project.resources)
            .filter(([key]) => key !== "repo")
            .map(([key, value]) => (
              <Button key={key} asChild variant="outline" className="gap-2">
                <a href={value} target="_blank" rel="noreferrer">
                  <ExternalLink className="h-4 w-4" /> {key}
                </a>
              </Button>
            ))}
        </div>
      </main>

      {selectedVisual && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setSelectedVisual(null)}
        >
          <div className="max-h-[90vh] max-w-5xl overflow-auto rounded-xl bg-white p-4" onClick={(event) => event.stopPropagation()}>
            <img src={selectedVisual.src} alt={selectedVisual.title} className="max-h-[75vh] w-full object-contain" />
            <h3 className="mt-4 text-lg font-semibold">{selectedVisual.title}</h3>
            <p className="mt-1 text-sm text-slate-600">{selectedVisual.description}</p>
            <Button className="mt-4" onClick={() => setSelectedVisual(null)}>
              Schließen
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
