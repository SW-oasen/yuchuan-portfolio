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
  Code2
} from "lucide-react";
import { motion } from "framer-motion";

const getImagePath = (path) => {
  const baseUrl = import.meta.env.BASE_URL || '/';
  return `${baseUrl}img/${path}`;
};

// ======== PROJECT DATA ========
const PROJECT_DATA = {
  "airbnb-berlin": {
    title: "Airbnb Berlin — Exploratory Data Analysis",
    date: "2025-08",
    duration: "2 Wochen",
    status: "Abgeschlossen",
    
    problem: {
      title: "Problem",
      content: "Berlin ist ein beliebtes Reiseziel mit einem komplexen Airbnb-Markt. Vermieter und Gäste benötigen datenbasierte Einblicke in Preisgestaltung, Nachfragemuster und optimale Standorte.",
      challenges: [
        "Unstrukturierte Rohdaten mit inkonsistenten Formaten", 
        "Zahlumbrüche im 'name' Feld führen zu Transformationsproblemen bei Power BI",
        "Fehlende Werte und Ausreißer in Preisdaten",
        "Komplexe geografische Verteilung der Listings",
        "Saisonale Schwankungen nicht ersichtlich"
      ]
    },

    approach: {
      title: "Daten & Ansatz",
      dataset: "Inside Airbnb Berlin Dataset (~22k Listings)",
      methodology: [
        "Explorative Datenanalyse (EDA) mit statistischen Kennzahlen",
        "Datenbereinigung und Feature Engineering",
        "Geografische Analyse mit Folium-Karten",
        "Preis-Nachfrage-Korrelationsanalyse",
        "Interactive Visualisierungen mit Power BI"
      ],
      tools: ["Python", "Pandas", "Plotly", "Folium", "Seaborn", "Jupyter", "Power BI"]
    },

    solution: {
      title: "Lösung",
      content: "Entwicklung einer umfassenden EDA-Pipeline mit automatisierter Datenbereinigung und interaktiven Dashboards.",
      features: [
        "Automatisierte Datenvalidierung und -bereinigung",
        "Interaktives Dashboard nach Bezirken",
        "Preis und Nachfrage nach Bezirk und Unterkunftstyp",
        "Geografische Hotspot-Identifikation"
      ]
    },

    results: {
      title: "Ergebnisse",
      metrics: [
        { label: "Datensätze bereinigt", value: "22.247", change: "100%" },
        { label: "Bezirke analysiert", value: "12", change: "Alle" },
        { label: "Durchschnittspreis/Nacht", value: "€89", change: "±€45" },
        { label: "Visualisierungen erstellt", value: "15+", change: "Interaktiv" }
      ],
      insights: [
        "Mitte und Prenzlauer Berg haben höchste Preise (€120-150/Nacht)",
        "Ganze Wohnungen sind 2.3x teurer als private Zimmer",
        "Verfügbarkeit korreliert negativ mit Bewertungsanzahl (-0.34)",
        "Zentrale Lagen haben 40% höhere Buchungsraten"
      ]
    },

    learnings: {
      title: "Learnings & Reflexion",
      positives: [
        "Das erste Portfolio-Projekt mit initialen Installationen und Konfigurationen",
        "Notebooks durch KI generieren lassen, aber selbst getestet und validiert",
        "Das durch Onlinekurse angelernten EDA-Methodik und Datenvisualisierung durch Anwendung vertieft",
        "Nach KI Empfehlung AutoML wie FLAML und H2O AutoML ausprobiert",
        "Power BI Anwendung durch Onlinekurse erlernt",
        "Interaktive Visualisierungen erhöhen Verständnis deutlich",
        "Geografische Analyse liefert wertvolle Business-Insights"
      ],
      improvements: [
        "Selbständigere Datenbereinigung und Feature Engineering ohne KI-Unterstützung durchführen",
        "Zeitreihenanalyse für saisonale Muster hinzufügen (nach Datenverfügbarkeit)",
        "Übernachtungsprognosen basierend auf historischen Daten - Listing statt Preis als Target",
        "Mehr externe Datenquellen (Events, ÖPNV) integrieren"
      ]
    },

    resources: {
      repo: "https://github.com/SW-oasen/airbnb-eda-berlin",
      notebook: "https://github.com/SW-oasen/airbnb-eda-berlin/blob/main/notebooks/Airbnb_EDA_Berlin.ipynb",
      report: "https://github.com/SW-oasen/airbnb-eda-berlin/blob/main/dashboards/aribnb_cleandata_report.pbix",
      presentation: "/dashboards/aribnb_cleandata_report.pdf"
    },

    visuals: [
      {
        title: "Preis-Heatmap nach Bezirken",
        type: "image",
        src: getImagePath("airbnb-eda-berlin/price-neighborhood-heatmap.png"),
        description: "Interaktive Folium-Karte zeigt Preisverteilung je nach Bezirk"
      },
      {
        title: "Übernachtung nach Bezirken",
        type: "image",
        src: getImagePath("airbnb-eda-berlin/listing-neighborhood-heatmap.png"),
        description: "Interaktive Folium-Karte zeigt Übernachtungen je nach Bezirk"
      },
      {
        title: "Listing-Typ Distribution",
        type: "image",
        src: getImagePath("airbnb-eda-berlin/listing-types-heatmap.png"), 
        description: "Verteilung verschiedener Unterkunftstypen mit Preisvergleich"
      },
      {
        title: "Preise und Übernachtungen nach Unterkunftstyp",
        type: "image",
        src: getImagePath("airbnb-eda-berlin/price-listing-by-type.png"),
        description: "Korrelationsanalyse zwischen Preis und Übernachtungen nach Unterkunftstyp"
      },
      {
        title: "Übernachtungen und Reviews Korelation",
        type: "image",
        src: getImagePath("airbnb-eda-berlin/listing-review.png"),
        description: "Korrelationsanalyse zwischen Übernachtungen und Reviews-Anzahl"
      }
    ]
  },

  "store-sales-forecast": {
    title: "Store Sales Forecast — Time Series Modeling",
    date: "2025-09",
    duration: "3 Wochen",
    status: "Abgeschlossen",
    
    problem: {
      title: "Problem",
      content: "Corporation Favorita benötigt präzise Verkaufsprognosen für tausende Produktfamilien in 54 Filialen in Ecuador. Ohne verlässliche Vorhersagen entstehen Überbestände oder Fehlmengen, was zu Umsatzverlusten führt.",
      challenges: [
        "Hohe Komplexität: 33 Produktfamilien × 54 Filialen = 1.782 Zeitreihen",
        "Externe Faktoren: Ölpreise, Feiertage, Promotionen beeinflussen Verkäufe",
        "Saisonalität: Starke wöchentliche Muster (Sonntag-Peak, Freitag-Tief)",
        "Datenqualität: 4+ Jahre historische Daten mit inkonsistenten Formaten",
        "Performance-Varianz: Extreme Unterschiede zwischen Filialen ($95K - $2.5M)"
      ]
    },

    approach: {
      title: "Daten & Ansatz",
      dataset: "Kaggle Store Sales Dataset - 4+ Jahre Verkaufsdaten (2013-2017)",
      methodology: [
        "Explorative Datenanalyse: Trends, Saisonalität, Verteilungen identifizieren",
        "Feature Engineering: Lag-Features, Rolling Windows, Kalender-Features",
        "Baseline-Modelle: Seasonal Naive, Moving Average für Benchmarking", 
        "Advanced ML: XGBoost, Random Forest mit Hyperparameter-Tuning",
        "AutoML-Vergleich: FLAML für automatisierte Feature-Selektion",
        "Cross-Validation: Time-based splits für robuste Evaluierung"
      ],
      tools: ["Python", "scikit-learn", "XGBoost", "FLAML AutoML", "Power BI", "Pandas", "Plotly"]
    },

    solution: {
      title: "Lösung",
      content: "End-to-End ML-Pipeline mit FLAML AutoML als bestem Modell, kombiniert mit umfassendem Power BI Dashboard für Business Intelligence.",
      features: [
        "Automatisierte Feature-Selektion durch FLAML AutoML",
        "Rolling Averages (61.3% Feature Importance) für Trend-Erfassung",
        "Lag-Features (34.7% Importance) für historische Muster",
        "6-seitiges Power BI Dashboard mit Geschäftseinblicken",
        "Store- und Kategorie-spezifische Performance-Analyse",
        "Promotion-Impact-Tracking und Korrelationsanalyse"
      ]
    },

    results: {
      title: "Ergebnisse",
      metrics: [
        { label: "MAE (Mean Absolute Error)", value: "$69.17", change: "44.5% Accuracy" },
        { label: "RMSE", value: "237.8", change: "Robust" },
        { label: "Gesamtumsatz analysiert", value: "$48.03M", change: "54 Stores" },
        { label: "Produktfamilien", value: "33", change: "Vollständig" }
      ],
      insights: [
        "Store 44: Höchster Umsatz ($2.5M) aber auch höchste Prognosefehler ($133 MAE)",
        "Store 26: Beste Performance mit niedrigster MAE von $31.29",
        "GROCERY I dominiert mit $14.8M (31% des Gesamtumsatzes)",
        "Wochenmuster: Sonntag-Peaks (~$9M), Freitag-Tiefs (~$6M)",
        "Rolling Averages und Lag-Features machen 95% der Model-Importance aus"
      ]
    },

    learnings: {
      title: "Learnings & Reflexion",
      positives: [
        "FLAML AutoML übertrifft manuelle Feature Engineering deutlich",
        "Power BI Dashboard macht ML-Ergebnisse für Business-Stakeholder zugänglich",
        "Time-based CV verhindert erfolgreich Data Leakage bei Zeitreihen",
        "Feature Importance Analysis bestätigt Domain-Knowledge (Saisonalität)"
      ],
      improvements: [
        "Store-Clustering für spezialisierte Modelle pro Store-Typ implementieren",
        "Externe Datenquellen integrieren (Wetter, Events, Konkurrenz)",
        "Real-time Forecasting mit dynamischen Updates entwickeln",
        "PRODUCE-Kategorie (höchste MAE: 199.49) gezielt optimieren",
        "Promotion-Kalender direkt in Feature Engineering einbauen",
        "Ensemble-Methoden für robustere Predictions testen"
      ]
    },

    resources: {
      repo: "https://github.com/SW-oasen/store-sales-forecast",
      notebook: "/notebooks/06_automl_comparison.ipynb",
      report: "/dashboards/README.md",
      presentation: "/dashboards/guide/report_1.png"
    },

    visuals: [
      {
        title: "FLAML Model Performance",
        type: "chart",
        src: "/img/store-sales/flaml-performance.png",
        description: "Vergleich Actual vs Predicted Sales über Holdout-Periode"
      },
      {
        title: "Feature Importance Analysis", 
        type: "image",
        src: "/img/store-sales/feature-importance.png",
        description: "Rolling Averages (61.3%) und Lag Features (34.7%) dominieren"
      },
      {
        title: "Store Performance Ranking",
        type: "dashboard",
        src: "/img/store-sales/store-ranking.png",
        description: "Power BI: Store 44 ($2.5M) vs Store 26 (beste MAE $31.29)"
      },
      {
        title: "Weekly Sales Patterns",
        type: "chart", 
        src: "/img/store-sales/weekly-patterns.png",
        description: "Sonntag-Peaks und Freitag-Tiefs für optimierte Personalplanung"
      },
      {
        title: "Category Revenue Analysis",
        type: "treemap",
        src: "/img/store-sales/category-revenue.png", 
        description: "GROCERY I ($14.8M, 31%) dominiert Umsatzverteilung"
      }
    ]
  },

  "global-power-plants": {
    title: "Global Power Plants — Data Pipeline & Dashboard",
    date: "2025-09",
    duration: "2 Wochen", 
    status: "Abgeschlossen",
    
    problem: {
      title: "Problem",
      content: "Die globale Energiewende erfordert datengetriebene Einblicke in die weltweite Kraftwerkslandschaft. Ohne strukturierte Analyse der Kapazitäten, Brennstoffmixe und CO₂-Emissionen können keine fundierten Energiestrategien entwickelt werden.",
      challenges: [
        "Fragmentierte Datenquellen: Keine einheitliche globale Kraftwerksdatenbank",
        "Fehlende CO₂-Schätzungen: Keine standardisierten Emissionsfaktoren verfügbar",
        "Komplexe Geographie: 30.000+ Kraftwerke in 164 Ländern zu strukturieren",
        "Business Intelligence Gap: Keine interaktiven Dashboards für Stakeholder",
        "Skalierbarkeit: System muss für verschiedene Analysezwecke erweiterbar sein"
      ]
    },

    approach: {
      title: "Daten & Ansatz",
      dataset: "Global Power Plant Database (World Resources Institute) - 30.000+ Kraftwerke",
      methodology: [
        "Datenschema-Design: SQLite-Datenbank mit normalisierten Tabellen",
        "ETL-Pipeline: CSV-Import mit Datenvalidierung und -bereinigung",
        "Feature Engineering: CO₂-Intensität pro Brennstoff, Inbetriebnahme-Trends",
        "Aggregation Views: Kapazität nach Brennstoff/Land, Jahres-Trends",
        "Power BI Integration: ODBC-Verbindung mit interaktiven Dashboards",
        "What-If-Parameter: Kapazitätsfaktor-Simulationen für CO₂-Schätzungen"
      ],
      tools: ["SQLite", "Power BI", "Python", "SQL", "ODBC"]
    },

    solution: {
      title: "Lösung",
      content: "Vollständige SQL + Power BI Pipeline mit normalisierter Datenbankstruktur und interaktiven Dashboards für globale Energieanalysen.",
      features: [
        "SQLite-Datenbank mit 4 optimierten Views für verschiedene Analysen",
        "Automatisierte ETL-Pipeline für CSV-Import und Datenvalidierung",
        "3-seitiges Power BI Dashboard mit KPIs und geografischen Visualisierungen",
        "What-If-Parameter für dynamische CO₂-Emissions-Szenarien",
        "Länder-Ranking und Brennstoffmix-Analysen",
        "Interaktive Karten mit Kraftwerks-Standorten und Kapazitäten"
      ]
    },

    results: {
      title: "Ergebnisse", 
      metrics: [
        { label: "Kraftwerke analysiert", value: "30.000+", change: "164 Länder" },
        { label: "Gesamtkapazität", value: "6.5 TW", change: "Global" },
        { label: "Dashboard-Seiten", value: "3", change: "Interaktiv" },
        { label: "SQL Views", value: "4", change: "Optimiert" }
      ],
      insights: [
        "China dominiert mit 30% der globalen Kraftwerkskapazität",
        "Kohle-Kraftwerke stellen noch 38% der installierten Leistung",
        "Erneuerbare Energien zeigen starke Wachstumstrends seit 2010",
        "USA und Indien folgen als zweit- und drittgrößte Kraftwerksbetreiber",
        "Durchschnittliche CO₂-Intensität variiert um Faktor 100 zwischen Brennstoffen"
      ]
    },

    learnings: {
      title: "Learnings & Reflexion",
      positives: [
        "SQLite als lokale Datenbank ideal für mittelgroße Datasets (30K Rows)",
        "Power BI ODBC-Integration funktioniert nahtlos mit SQLite",
        "What-If-Parameter erhöhen erheblich die Dashboard-Interaktivität",
        "Normalisierte Views beschleunigen komplexe Aggregations-Queries"
      ],
      improvements: [
        "Zeitreihen-Daten integrieren für historische Entwicklung der Kapazitäten",
        "Automatisierte Data-Refresh-Pipeline für regelmäßige Updates implementieren",
        "PostgreSQL/BigQuery für bessere Skalierbarkeit bei größeren Datasets",
        "REST API entwickeln für programmatischen Datenzugriff",
        "Machine Learning für Kapazitäts-Forecasting und Brennstoffmix-Prognosen",
        "Externe Datenquellen hinzufügen (CO₂-Preise, Energiemarkt-Daten)"
      ]
    },

    resources: {
      repo: "https://github.com/SW-oasen/global-power-plants",
      notebook: "/sql/sample_queries_sqlite.sql",
      report: "/README.md",
      presentation: "/powerbi/dashboard_screenshots.png"
    },

    visuals: [
      {
        title: "Global Power Plant Map",
        type: "map",
        src: "/img/power-plants/global-map.png", 
        description: "Interaktive Weltkarte mit 30.000+ Kraftwerken nach Kapazität und Brennstoff"
      },
      {
        title: "Fuel Mix by Country",
        type: "chart",
        src: "/img/power-plants/fuel-mix.png",
        description: "Top 10 Länder nach installierter Kapazität mit Brennstoffmix-Breakdown"
      },
      {
        title: "CO₂ Intensity Analysis",
        type: "dashboard",
        src: "/img/power-plants/co2-analysis.png",
        description: "What-If-Simulation für CO₂-Emissionen mit Kapazitätsfaktor-Parameter"
      }
    ]
  },

  "telco-customer-churn": {
    title: "Telco Customer Churn — Classification",
    date: "2025-10",
    duration: "3 Wochen",
    status: "Abgeschlossen",
    
    problem: {
      title: "Problem",
      content: "Telekommunikationsunternehmen verlieren 26.5% ihrer Kunden jährlich. Ohne präzise Churn-Vorhersage können keine gezielten Retention-Maßnahmen eingeleitet werden, was zu Millionen-Umsatzverlusten führt.",
      challenges: [
        "Hohe Churn-Rate: 26.5% überschreitet Industriestandard (15-20%)",
        "Klassendisbalance: Nur 26.5% Churn-Fälle im Dataset von 7.043 Kunden",
        "Feature-Komplexität: 19 verschiedene Kundenattribute (demografisch, Services, Billing)",
        "Business-Implikationen: $276K+ jährlich gefährdeter Umsatz bei High-Risk-Kunden",
        "Actionable Insights: ML-Modell muss konkrete Retention-Strategien ermöglichen"
      ]
    },

    approach: {
      title: "Daten & Ansatz",
      dataset: "Kaggle Telco Customer Churn Dataset - 7.043 Kunden mit 19 Features",
      methodology: [
        "Data Prep: Missing Value Imputation, Feature Encoding, Data Validation",
        "Feature Engineering: Tenure Buckets, Service Count, Revenue-to-Date, Contract-Payment Risk",
        "Baseline Models: Logistic Regression, Random Forest, Gradient Boosting",
        "Hyperparameter Optimization: Bayesian Optimization mit Optuna (50 Trials)",
        "Threshold Optimization: F1-Score und Cost-based Optimization für Business Value",
        "Model Interpretability: Feature Importance, SHAP Values, Statistical Testing"
      ],
      tools: ["Python", "scikit-learn", "Optuna", "Power BI", "Pandas", "SHAP", "Matplotlib"]
    },

    solution: {
      title: "Lösung",
      content: "End-to-End ML-Pipeline mit Feature Engineering, automatisierter Hyperparameter-Optimierung und 3-seitigem Power BI Dashboard für Retention-Strategien.",
      features: [
        "Advanced Feature Engineering: Tenure Buckets, Service Engagement Scores",
        "Optuna-basierte Hyperparameter-Optimierung für 3 Algorithmen",
        "Business-optimierte Threshold-Findung (F1-Score maximiert)",
        "Risk Segmentation: Very High (>75%), High (50-74%), Medium (25-49%), Low (<25%)",
        "Power BI Dashboard mit Retention Campaign Strategies",
        "ROI Calculator für Interventions-Kosten vs. Revenue Protection"
      ]
    },

    results: {
      title: "Ergebnisse",
      metrics: [
        { label: "Model Accuracy", value: "77.7%", change: "AUC 0.85+" },
        { label: "F1-Score", value: "0.82", change: "Optimiert" },
        { label: "High-Risk Kunden", value: "178", change: "$276K Risk" },
        { label: "Churn Rate", value: "26.5%", change: "vs 15-20% Industry" }
      ],
      insights: [
        "Customer Tenure ist wichtigster Prädiktor (13.4% Feature Importance)",
        "Month-to-month + Electronic Check = höchstes Churn-Risiko-Profil",
        "Neue Kunden (0-12 Monate) zeigen 40%+ höhere Churn-Wahrscheinlichkeit",
        "Service Bundle: Kunden mit <3 Services haben 2.3x höheres Churn-Risiko",
        "Payment Method Impact: Electronic Check korreliert mit 35% höherem Churn"
      ]
    },

    learnings: {
      title: "Learnings & Reflexion", 
      positives: [
        "Feature Engineering verbessert Modell-Performance um 5+ AUC-Punkte",
        "Optuna-Hyperparameter-Tuning deutlich effektiver als Grid Search",
        "Power BI Dashboard macht ML-Insights für Business-Teams zugänglich",
        "Threshold-Optimierung kritisch für actionable Business-Metriken"
      ],
      improvements: [
        "Zeitreihen-Features hinzufügen für Customer Journey Analysis",
        "A/B-Testing-Framework für Retention Campaign Effectiveness",
        "Real-time Scoring Pipeline für dynamische Churn-Risk-Updates",
        "Ensemble Methods testen (Voting, Stacking) für robustere Predictions",
        "Externe Datenquellen integrieren (Customer Support Tickets, Usage Patterns)",
        "Explainable AI für individuelle Customer-Risk-Erklärungen implementieren"
      ]
    },

    resources: {
      repo: "https://github.com/SW-oasen/telco-customer-churn",
      notebook: "/notebooks/04_feature_engineering_and_tuning.ipynb",
      report: "/dashboards/README_Dashboard_Analysis.md",
      presentation: "/dashboards/telco-customer-churn.pbix"
    },

    visuals: [
      {
        title: "Feature Importance Analysis",
        type: "chart",
        src: "/img/telco-churn/feature-importance.png",
        description: "Customer Tenure (13.4%) und Monthly Charges (9.5%) als Top-Prädiktoren"
      },
      {
        title: "Risk Segmentation Matrix",
        type: "heatmap",
        src: "/img/telco-churn/risk-matrix.png",
        description: "Contract Type vs Payment Method Churn-Risiko-Heatmap"
      },
      {
        title: "Business Intelligence Dashboard",
        type: "dashboard",
        src: "/img/telco-churn/power-bi-dashboard.png",
        description: "3-seitiges Power BI Dashboard mit Retention Campaign Strategies"
      },
      {
        title: "Model Performance Comparison",
        type: "chart",
        src: "/img/telco-churn/model-comparison.png", 
        description: "ROC Curves und Performance-Metriken für 3 optimierte ML-Algorithmen"
      }
    ]
  },

  "turbine-maintenance": {
    title: "GPU-Accelerated Turbofan Engine ML Pipeline (NASA CMAPSS)",
    date: "2025-10", 
    duration: "5+ Wochen (ongoing)",
    status: "GPU ML Pipeline - Feature Engineering & Model Training Complete",
    
    problem: {
      title: "Problem",
      content: "NASA Turbofan Engine Degradation Simulation Data (CMAPSS) erfordert hochperformante Machine Learning Pipeline für Remaining Useful Life (RUL) Prediction mit GPU-Beschleunigung für Industrie 4.0 Anwendungen.",
      challenges: [
        "GPU-Acceleration Setup: NVIDIA RTX 4070 Ti SUPER mit CUDA 12.6+ Integration",
        "Multi-Framework Pipeline: PyTorch, XGBoost GPU, CuPy für verschiedene ML-Algorithmen", 
        "21 Sensor Time-Series: Feature Engineering für komplexe Sensor-Korrelationen",
        "4 CMAPSS Datasets: Cross-Dataset Validation mit verschiedenen Operating Conditions",
        "Memory Optimization: GPU Memory Management für große Tensor-Operationen",
        "ETL + dbt + ML Integration: End-to-End Pipeline von Raw Data bis GPU Models",
        "Performance Monitoring: GPU vs CPU Benchmark für Industrial Deployment"
      ]
    },

    approach: {
      title: "Daten & Ansatz",
      dataset: "NASA Turbofan Engine Degradation Simulation (CMAPSS) - 4 Sub-Datasets (FD001-FD004) mit Run-to-Failure Cycles",
      methodology: [
        "GPU Environment Setup: PyTorch CUDA, XGBoost GPU, CuPy für beschleunigte Operationen",
        "Advanced Feature Engineering: Rolling Windows, Z-Scores, Sensor Differences, Unit-based Normalization",
        "SQLite + dbt Pipeline: Staging → Intermediate → Marts mit Data Quality Tests",
        "GPU-Accelerated ML: PyTorch Neural Networks, XGBoost GPU, Memory-optimized Training",
        "Multi-Model Architecture: Baseline Linear Regression bis Deep Learning mit GPU",
        "Cross-Dataset Evaluation: 4 CMAPSS Datasets für robuste Model Validation",
        "Performance Optimization: Batch Processing, GPU Memory Management, Early Stopping",
        "Feature Importance Analysis: Sensor Impact auf RUL Prediction verstehen"
      ],
      tools: ["PyTorch (CUDA)", "XGBoost GPU", "CuPy", "dbt", "SQLite", "Pandas", "NVIDIA RTX 4070 Ti SUPER"]
    },

    solution: {
      title: "Lösung (GPU ML Pipeline Complete)",
      content: "Vollständige GPU-beschleunigte ML Pipeline mit PyTorch Neural Networks, XGBoost GPU und comprehensive Feature Engineering für Predictive Maintenance in Industrie 4.0 Umgebungen.",
      features: [
        "GPU-Accelerated Training: PyTorch NN mit CUDA, XGBoost GPU für 5x Performance Boost",
        "Advanced Neural Architecture: 256→128→64→1 mit BatchNorm, Dropout, Early Stopping",
        "Comprehensive Feature Engineering: 21 Sensoren → 84+ Features durch Rolling Stats, Diffs, Z-Scores",
        "Multi-Model Comparison: Linear Regression, Random Forest, XGBoost GPU, PyTorch NN",
        "Memory-Optimized Pipeline: GPU Memory Management, Batch Processing, Automatic Cleanup",
        "Cross-Dataset Validation: FD001-FD004 für verschiedene Operating Conditions getestet",
        "dbt Data Quality: SQL-based Tests für Feature Integrity und Business Logic",
        "Performance Monitoring: GPU vs CPU Benchmarks, Training Time, Inference Speed",
        "Model Persistence: PyTorch State Dict, XGBoost GPU Models für Production Deployment"
      ]
    },

    results: {
      title: "Ergebnisse (GPU Pipeline Complete)",
      metrics: [
        { label: "GPU Models Trained", value: "4+", change: "PyTorch + XGBoost GPU" },
        { label: "Feature Engineering", value: "84+", change: "21 Sensors → ML Features" },
        { label: "GPU Acceleration", value: "5x", change: "vs CPU Training" },
        { label: "Cross-Dataset RMSE", value: "<15", change: "FD001-FD004 Validated" },
        { label: "Training Time (GPU)", value: "<2min", change: "PyTorch + XGBoost" },
        { label: "dbt Models", value: "6+", change: "Staging → Marts" }
      ],
      insights: [
        "GPU-Acceleration: PyTorch CUDA 5x schneller als CPU für Neural Network Training",
        "Feature Engineering Impact: Rolling Windows (5,20) und Z-Scores kritisch für Performance",
        "Sensor Importance: Sensor 2, 11, 15 zeigen höchste Korrelation mit RUL Degradation",
        "Cross-Dataset Robustness: Modelle generalisieren gut zwischen FD001-FD004 Conditions",
        "XGBoost GPU vs PyTorch NN: XGBoost GPU bessere RMSE, PyTorch NN bessere Generalization",
        "Memory Optimization: CuPy für GPU NumPy Operations reduziert Memory Bottlenecks",
        "Early Stopping Essential: Verhindert Overfitting bei Deep Learning Models",
        "dbt Data Quality: Automated Tests catching 95% der Feature Engineering Errors"
      ]
    },

    learnings: {
      title: "Learnings & Reflexion (GPU Pipeline Complete)",
      positives: [
        "GPU-Acceleration revolutioniert ML Training Speed für Industrial Time-Series",
        "PyTorch CUDA Integration seamless mit automatischem CPU Fallback",
        "Feature Engineering komplexer als erwartet aber entscheidend für Performance",
        "dbt + ML Pipeline Kombination optimal für reproduzierbare Data Science",
        "Cross-Dataset Validation essentiell für robuste Industrial AI Models",
        "XGBoost GPU Support excellent für Tabular Data mit großen Datasets",
        "GPU Memory Management skills durch praktische Anwendung dramatisch verbessert",
        "Sensor Physics Understanding durch Feature Importance Analysis vertieft"
      ],
      improvements: [
        "Hyperparameter Optimization: Optuna GPU für automated tuning implementieren",
        "Ensemble Methods: GPU-accelerated Stacking/Blending verschiedener Models",
        "Real-time Inference: TensorRT/ONNX für Production GPU Deployment",
        "Streaming Pipeline: Kafka + GPU Models für Real-time RUL Prediction",
        "MLflow Integration: GPU Model Versioning und Experiment Tracking",
        "Advanced Architectures: LSTM/Transformer für Sequence Modeling on GPU",
        "Multi-GPU Training: DataParallel für größere Models und Datasets",
        "Sensor Fusion: Advanced Signal Processing mit CuPy GPU Arrays",
        "Production Monitoring: GPU Model Performance Tracking in Industrial Environment"
      ]
    },

    resources: {
      repo: "https://github.com/SW-oasen/turbine-maintenance-etl",
      ml_pipeline: "/workspace-turbine-maintenance/scripts/ml_pipeline_gpu.py",
      dbt_project: "/turbine_etl_dbt",
      notebook: "/workspace-turbine-maintenance/notebooks/gpu_performance_analysis.ipynb",
      dataset: "NASA Turbofan Engine Degradation Simulation Data Set (CMAPSS)",
      models: "/workspace-turbine-maintenance/results/ml_models/"
    },

    visuals: [
      {
        title: "GPU vs CPU Performance Comparison",
        type: "chart",
        src: getImagePath("turbine-maintenance/gpu-cpu-performance.png"),
        description: "Training Time und Model Performance: PyTorch GPU vs CPU Baseline"
      },
      {
        title: "Feature Importance Heatmap", 
        type: "heatmap",
        src: getImagePath("turbine-maintenance/feature-importance-sensors.png"),
        description: "21 Sensor Features → RUL Impact Analysis mit XGBoost Feature Importance"
      },
      {
        title: "PyTorch Neural Network Architecture",
        type: "diagram",
        src: getImagePath("turbine-maintenance/pytorch-nn-architecture.png"),
        description: "GPU-beschleunigtes NN: 84 Features → 256→128→64→1 mit CUDA Optimization"
      },
      {
        title: "Cross-Dataset Model Validation",
        type: "chart", 
        src: getImagePath("turbine-maintenance/cross-dataset-rmse.png"),
        description: "RMSE Performance über FD001-FD004 Datasets für Model Robustness"
      },
      {
        title: "GPU Memory Usage Monitoring",
        type: "dashboard",
        src: getImagePath("turbine-maintenance/gpu-memory-monitoring.png"),
        description: "NVIDIA RTX 4070 Ti SUPER Memory Usage während ML Training"
      },
      {
        title: "RUL Prediction vs Ground Truth",
        type: "scatter",
        src: getImagePath("turbine-maintenance/rul-prediction-accuracy.png"),
        description: "GPU Model Predictions vs NASA CMAPSS Ground Truth für alle Test Units"
      },
      {
        title: "dbt + ML Pipeline Flow",
        type: "diagram",
        src: getImagePath("turbine-maintenance/dbt-ml-pipeline-flow.png"),
        description: "End-to-End: Raw CMAPSS → dbt → Feature Engineering → GPU ML Training"
      }
    ]
  }
  // Weitere Projekte können hier hinzugefügt werden
};

// ======== COMPONENTS ========
function ProjectSection({ icon: Icon, title, children, className = "" }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true }}
      className={`mb-12 ${className}`}
    >
      <div className="flex items-center gap-3 mb-6">
        <Icon className="h-6 w-6 text-primary" />
        <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
      </div>
      {children}
    </motion.div>
  );
}

function MetricCard({ label, value, change }) {
  return (
    <Card className="text-center">
      <CardContent className="p-4">
        <div className="text-2xl font-bold text-primary">{value}</div>
        <div className="text-sm text-muted-foreground">{label}</div>
        {change && (
          <div className="text-xs text-green-600 mt-1">{change}</div>
        )}
      </CardContent>
    </Card>
  );
}

function VisualCard({ visual }) {
  return (
    <Card className="overflow-hidden">
      <div className="aspect-video bg-muted flex items-center justify-center">
        <img 
          src={visual.src} 
          alt={visual.title} 
          className="w-full h-full object-cover"
          onError={(e) => {
            // Fallback to icon if image fails to load
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'flex';
          }}
        />
        <div className="hidden w-full h-full flex items-center justify-center">
          <BarChart3 className="h-12 w-12 text-muted-foreground" />
        </div>
      </div>
      <CardContent className="p-4">
        <h4 className="font-semibold mb-2">{visual.title}</h4>
        <p className="text-sm text-muted-foreground">{visual.description}</p>
      </CardContent>
    </Card>
  );
}

function ProjectCard({ project, onViewDetails }) {
  return (
    <Card className="h-full hover:shadow-lg transition-shadow">
      {/* ...existing card content... */}
      
      <CardContent className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-semibold mb-3">
          {project.title}
        </h3>
        
        {/* ...existing content... */}
        
        <div className="mt-auto pt-4">
          <Button 
            onClick={() => {
              // Set the hash to navigate to project detail
              window.location.hash = `#project/${project.id}`;
            }}
            className="w-full"
          >
            Details ansehen
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

// In the main Portfolio component, update the project cards:
const projects = [
  {
    id: "airbnb-berlin", // Make sure this matches your PROJECT_DATA keys
    title: "Airbnb Berlin — Exploratory Data Analysis",
    // ...other project data...
  },
  {
    id: "store-sales-forecast",
    title: "Store Sales Forecast — Time Series Modeling",
    // ...other project data...
  },
  // ...other projects with correct IDs...
];

export default function ProjectDetail({ projectId }) {
  const project = PROJECT_DATA[projectId];
  
  const handleBack = () => {
    window.location.hash = '';
  };

  if (!project) {
    return <div>Projekt nicht gefunden</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        <Button 
          onClick={handleBack}
          variant="outline" 
          className="mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Zurück zur Übersicht
        </Button>
        
        {/* Project Title */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
            {project.title}
          </h1>
          <div className="flex justify-center gap-6 text-sm text-muted-foreground">
            <span>Dauer: {project.duration}</span>
            <span>•</span>
            <span>{project.date}</span>
          </div>
        </motion.div>

        {/* Problem */}
        <ProjectSection icon={Target} title="Problem">
          <Card>
            <CardContent className="p-6">
              <p className="text-lg mb-6">{project.problem.content}</p>
              <div>
                <h4 className="font-semibold mb-3">Hauptherausforderungen:</h4>
                <ul className="space-y-2">
                  {project.problem.challenges.map((challenge, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0"></span>
                      <span>{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        </ProjectSection>

        {/* Approach */}
        <ProjectSection icon={Database} title="Daten & Ansatz">
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Dataset</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-medium">{project.approach.dataset}</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Tools & Technologien</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.approach.tools.map((tool, i) => (
                    <Badge key={i} variant="secondary">{tool}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          <Card className="mt-6">
            <CardContent className="p-6">
              <h4 className="font-semibold mb-3">Methodisches Vorgehen:</h4>
              <ol className="space-y-2">
                {project.approach.methodology.map((step, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0">
                      {i + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </CardContent>
          </Card>
        </ProjectSection>

        {/* Solution */}
        <ProjectSection icon={CheckCircle} title="Lösung">
          <Card>
            <CardContent className="p-6">
              <p className="text-lg mb-6">{project.solution.content}</p>
              <div>
                <h4 className="font-semibold mb-3">Implementierte Features:</h4>
                <div className="grid md:grid-cols-2 gap-3">
                  {project.solution.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </ProjectSection>

        {/* Results */}
        <ProjectSection icon={BarChart3} title="Ergebnisse">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {project.results.metrics.map((metric, i) => (
              <MetricCard key={i} {...metric} />
            ))}
          </div>
          <Card>
            <CardContent className="p-6">
              <h4 className="font-semibold mb-4">Wichtigste Erkenntnisse:</h4>
              <div className="space-y-3">
                {project.results.insights.map((insight, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <BarChart3 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>{insight}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </ProjectSection>

        {/* Visuals */}
        <ProjectSection icon={BarChart3} title="Visualisierungen">
          <div className="grid md:grid-cols-3 gap-6">
            {project.visuals.map((visual, i) => (
              <VisualCard key={i} visual={visual} />
            ))}
          </div>
        </ProjectSection>

        {/* Learnings */}
        <ProjectSection icon={BookOpen} title="Learnings & Reflexion">
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-green-600">Was gut lief</CardTitle>
              </CardHeader>
              <CardContent>
                {project.learnings.positives.map((positive, i) => (
                  <div key={i} className="flex items-start gap-2 mb-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>{positive}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-orange-600">Wie würd' ich's beim nächsten Mal besser machen</CardTitle>
              </CardHeader>
              <CardContent>
                {project.learnings.improvements.map((improvement, i) => (
                  <div key={i} className="flex items-start gap-2 mb-3">
                    <span className="w-2 h-2 rounded-full bg-orange-500 mt-2 flex-shrink-0"></span>
                    <span>{improvement}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </ProjectSection>

        {/* Resources */}
        <ProjectSection icon={Code2} title="Code & Resources">
          <div className="flex flex-wrap gap-4">
            <Button asChild>
              <a href={project.resources.repo} target="_blank" rel="noreferrer">
                <Github className="h-4 w-4 mr-2" />
                GitHub Repository
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href={project.resources.notebook} target="_blank" rel="noreferrer">
                <BookOpen className="h-4 w-4 mr-2" />
                Jupyter Notebook
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href={project.resources.report} target="_blank" rel="noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" />
                Final Report
              </a>
            </Button>
          </div>
        </ProjectSection>
      </div>
    </div>
  );
}