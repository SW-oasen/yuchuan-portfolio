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
    title: "Berlin Airbnb Marktanalyse 2025 — Business Intelligence & Compliance",
    date: "2025-11, erneuert in 2026-02", 
    duration: "3 Wochen",
    status: "Abgeschlossen (v2: Revenue Modelling & Regulatory Analysis)",
    
    problem: {
      title: "Problem",
      content: "Der Berliner Kurzzeitvermietungsmarkt unterliegt dem Zweckentfremungsverbot, doch die Effektivität städtischer Regulierungen und echte Umsatzpotenziale bleiben intransparent. Investoren und Stadtplaner benötigen evidenzbasierte Insights über aktiveLIstings, Compliance-Patterns und Revenue-Potenziale.",
      challenges: [
        "95% der Listings sind 'Ghost-Einträge' ohne echte Marktaktivität", 
        "Berliner Lizenz-Compliance nur oberflächlich überprüfbar (Regex-Sanitization nötig)",
        "Revenue-Schätzungen: Inside Airbnb nutzt veraltete SF-Model-Annahmen",
        "Power BI Import: Deutsche Trennzeichen-Standards erforderlich (CSV-Export-Pipeline)",
        "Business Intelligence: Welche Listings sind echter 'Active Market'?"
      ]
    },

    approach: {
      title: "Daten & Ansatz",
      dataset: "Inside Airbnb Berlin Dataset Sept. 2025 (~13k Listings) → Active Market (~2.4k)",
      methodology: [
        "Active Market Filtering: Reviews >2/Monat als echter Marktindikator",
        "Revenue Proxy Modelling: Upper/Lower Bounds mit San Francisco Model",
        "Berliner Lizenz-Klassifizierung: Regex-basierte Kategorisierung (Gültig/Befreit/Invalid/Dirty)",
        "Compliance-Performance Analysis: Boxplot Revenue vs. License Status", 
        "Power BI Export: Deutsche Lokalisierung (Semikolon/Komma-Standards)",
        "Regulatory Paradox: Performance vs. Legal Compliance Correlation"
      ],
      tools: ["Python", "Pandas", "Seaborn", "Violin Plots", "Regex", "Jupyter", "Power BI"]
    },

    solution: {
      title: "Lösung", 
      content: "Business Intelligence Pipeline mit Revenue Proxy Modelling und einzigartiger Berliner Compliance-Analyse für Stakeholder in Investor Relations und Urban Planning.",
      features: [
        "San Francisco Model Implementation: Upper (30% Review Rate) vs Lower (70%) Revenue Proxy",
        "Active Market Definition: Filtering auf >2 Reviews/Monat (reale vs Ghost Listings)",
        "4-Kategorien Lizenz-Klassifizierung: Gültig, Befreit, Invalid/Dirty, Missing",
        "Power BI Dashboard: Pareto-Analyse für Commercial Hosts (80/20 Rule)",
        "Geografische Revenue Heatmaps: Mitte vs Kreuzberg Performance-Cluster",
        "Host-Profiling: Commercial (3+ Units) vs Private Segmentation"
      ]
    },

    results: {
      title: "Ergebnisse",
      metrics: [
        { label: "Active Market Listings", value: "2.395", change: "~35% real market" },
        { label: "Median Revenue (Active)", value: "€1.074", change: "€800-€1.500" },
        { label: "Top 5% Property Performance", value: "€6.000+", change: "Apartment/Loft" },
        { label: "License Compliance Rate", value: "44%", change: "Valid + Exempt" }
      ],
      insights: [
        "REGULATORY PARADOX: Invalid/Dirty Lizenzen zeigen höhere Median-Revenue als konforme",
        "Professionalisierung: Commercielle Hosts (3+ Units) dominieren Umsatz-Pareto",
        "Active Market: 95% aller Listings sind ƒGhosts' - nur 35% echte Marktteilnehmer", 
        "Geographic Premium: Mitte (€150+ avg) vs Pankow Private Room Density",
        "Survival Bias: Missing License = 0% in Active Market (Algorithmus-Filtereffekt)"
      ]
    },

    learnings: {
      title: "Learnings & Reflexion",
      positives: [
        "Business Intelligence statt EDA: Fokus auf actionable Stakeholder-Insights",
        "Revenue Proxy Modelling liefert realistische Umsatz-Estimates vs naive Preisanalysen",
        "Berliner Lizenz-Regex ermöglicht einzigartige Compliance-vs-Performance-Analyse",
        "Power BI deutsche Lokalisierung: Semikolon-CSV erhöht Dashboard-Workflow um 80%",
        "Active Market Filtering: Echte Marktdynamik vs 'Ghost Listing'-Verzerrung"
      ],
      improvements: [
        "Zeitreihen-Vergleich: Q3/Q4 2025 vs Q1 2026 für Regulierungs-Impact",
        "External Data: Events-Kalender, ÖPNV-Index für Revenue-Korrelationen",
        "Host Churn Analysis: Lizenz-Verlust führt zu Market-Exit-Rate?",
        "Advanced Power BI: DAX-Measures für dynamische Host-Kategorisierung implementieren",
        "Neighborhood-Level: BezirksAMT-Daten für micro-lokale Enforcement-Patterns"  
      ]
    },

    resources: {
      repo: "https://github.com/SW-oasen/airbnb-eda-berlin",
      notebook: "/notebooks/v2/AirBnB_Berlin_EDA.ipynb",
      report: "/reports/v2/airbnb_berlin_20250923_eda.pbix",
      presentation: "/reports/v2/airbnb_berlin_20250923_eda.pdf"
    },

    visuals: [
      {
        title: "Revenue Distribution by Property Type",
        type: "violin",
        src: getImagePath("airbnb-eda-berlin/violinplot-revenue-property-type.png"),
        description: "Violin Plot: Serviced Apartments €6K vs Private Rooms €800 median revenue"
      },
      {
        title: "License Compliance vs Performance",
        type: "boxplot", 
        src: getImagePath("airbnb-eda-berlin/boxplot-revenue-license-status.png"),
        description: "Paradox: Invalid/Dirty Licenses outperform Valid ones in revenue metrics"
      },
      {
        title: "Active Market Geographic Heatmap",
        type: "heatmap",
        src: getImagePath("airbnb-eda-berlin/geo-heatmap-revenue.png"),
        description: "Mitte + Kreuzberg als Revenue-Cluster"
      },
      {
        title: "Commercial Host Analysis",
        type: "dashboard",
        src: getImagePath("airbnb-eda-berlin/barplot-renenue-host.png"),
        description: "Wenige Commercial Hosts kontrollieren Großteil des Marktumsatzes"
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
    duration: "4 Wochen",
    status: "Complete MLOps Pipeline with n8n Orchestration & Streamlit Dashboard",
    
    problem: {
      title: "Problem",
      content: "NASA Turbofan Engine Degradation Simulation Data (CMAPSS) erfordert hochperformante Machine Learning Pipeline für Remaining Useful Life (RUL) Prediction mit GPU-Beschleunigung für Industrie 4.0 Anwendungen, kombiniert mit automatisierter Workflow-Orchestrierung und Real-time Monitoring.",
      challenges: [
        "GPU-Acceleration Setup: NVIDIA RTX 4070 Ti SUPER mit CUDA 12.6+ Integration",
        "Multi-Framework Pipeline: PyTorch, XGBoost GPU, CuPy für verschiedene ML-Algorithmen", 
        "21 Sensor Time-Series: Feature Engineering für komplexe Sensor-Korrelationen",
        "4 CMAPSS Datasets: Cross-Dataset Validation mit verschiedenen Operating Conditions",
        "Memory Optimization: GPU Memory Management für große Tensor-Operationen",
        "ETL + dbt + ML Integration: End-to-End Pipeline von Raw Data bis GPU Models",
        "Workflow Automation: n8n Integration für Pipeline Orchestrierung und Scheduling",
        "Real-time Dashboard: Streamlit mit automatischen Updates für Live-Monitoring",
        "Production Deployment: MLOps Pipeline für Industrial Predictive Maintenance"
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
        "n8n Workflow Orchestration: Automated ETL → ML → Dashboard Pipeline Execution",
        "Streamlit Real-time Dashboard: Interactive Monitoring mit automatischen Model Updates",
        "Multi-Model Architecture: Baseline Linear Regression bis Deep Learning mit GPU",
        "Cross-Dataset Evaluation: 4 CMAPSS Datasets für robuste Model Validation",
        "Performance Optimization: Batch Processing, GPU Memory Management, Early Stopping",
        "MLOps Integration: Workflow Automation, Model Versioning, Performance Tracking"
      ],
      tools: ["PyTorch (CUDA)", "XGBoost GPU", "CuPy", "dbt", "SQLite", "n8n", "Streamlit", "Docker", "NVIDIA RTX 4070 Ti SUPER"]
    },

    solution: {
      title: "Lösung (Complete MLOps Pipeline with Orchestration)",
      content: "Vollständige GPU-beschleunigte ML Pipeline mit n8n Workflow-Orchestrierung, Streamlit Real-time Dashboard und automatisierter Model Deployment für Production-ready Predictive Maintenance.",
      features: [
        "GPU-Accelerated Training: PyTorch NN mit CUDA, XGBoost GPU für 5x Performance Boost",
        "Advanced Neural Architecture: 256→128→64→1 mit BatchNorm, Dropout, Early Stopping",
        "n8n Workflow Orchestration: Automatisierte ETL → dbt → ML Training → Dashboard Refresh",
        "Streamlit Real-time Dashboard: Interactive Monitoring mit Live Model Performance Updates",
        "Feature Engineering: 21 Sensoren → 84+ Features durch Rolling Stats, Diffs, Z-Scores",
        "Multi-Model Comparison: Linear Regression, Random Forest, XGBoost GPU, PyTorch NN",
        "Memory-Optimized Pipeline: GPU Memory Management, Batch Processing, Automatic Cleanup",
        "Cross-Dataset Validation: FD001-FD004 für verschiedene Operating Conditions getestet",
        "dbt Data Quality: SQL-based Tests für Feature Integrity und Business Logic",
        "n8n Trigger: periodische Model Retraining und Performance Monitoring",
        "Docker Integration: Containerized Deployment für Production Environment Setup",
        "Model Persistence: PyTorch State Dict, XGBoost GPU Models für Production Deployment"
      ]
    },

    results: {
      title: "Ergebnisse (Complete MLOps Pipeline)",
      metrics: [
        { label: "GPU Models Trained", value: "4+", change: "PyTorch + XGBoost GPU" },
        { label: "Feature Engineering", value: "84+", change: "21 Sensors → ML Features" },
        { label: "GPU Acceleration", value: "5x", change: "vs CPU Training" },
        { label: "Cross-Dataset RMSE", value: "<15", change: "FD001-FD004 Validated" },
        { label: "Training Time (GPU)", value: "<2min", change: "PyTorch + XGBoost" },
        { label: "n8n Workflows", value: "1", change: "Automated Orchestration" },
        { label: "Dashboard Refresh", value: "Real-time", change: "Streamlit Auto-Update" },
        { label: "dbt Models", value: "1", change: "Staging → Marts" }
      ],
      insights: [
        "GPU-Acceleration: PyTorch CUDA 5x schneller als CPU für Neural Network Training",
        "n8n Orchestration: Automatisierte Workflows reduzieren Manual Pipeline Execution um 90%",
        "Streamlit Dashboard: Real-time Model Performance Monitoring ermöglicht sofortige Issue Detection",
        "Feature Engineering Impact: Rolling Windows (5,20) und Z-Scores kritisch für Performance",
        "Sensor Importance: Sensor 2, 11, 15 zeigen höchste Korrelation mit RUL Degradation",
        "Cross-Dataset Robustness: Modelle generalisieren gut zwischen FD001-FD004 Conditions",
        "XGBoost GPU vs PyTorch NN: XGBoost GPU bessere RMSE, PyTorch NN bessere Generalization",
        "Workflow Automation: n8n Scheduling ermöglicht kontinuierliche Model Updates ohne Manual Intervention",
        "Memory Optimization: CuPy für GPU NumPy Operations reduziert Memory Bottlenecks",
        "Dashboard Performance: Streamlit Auto-Refresh zeigt Live GPU Memory und Training Progress",
        "Production Ready: Docker + n8n + Streamlit Stack ready für Industrial Deployment"
      ]
    },

    learnings: {
      title: "Learnings & Reflexion (Complete MLOps Pipeline)",
      positives: [
        "GPU-Acceleration revolutioniert ML Training Speed für Industrial Time-Series",
        "GPU Memory Management skills durch praktische Anwendung dramatisch verbessert",
        "PyTorch CUDA Integration seamless mit automatischem CPU Fallback",
        "n8n Workflow Orchestration transformiert Manual Pipeline zu Full Automation",
        "n8n SSH CMD spezielle Systembefehle für Remote Execution",
        "Streamlit Dashboard bietet Real-time Monitoring für Production Models",
        "Streamlit selektive Metrics Anzeige für sinnvolle Insights",
        "Feature Engineering komplexer als erwartet aber entscheidend für Performance",
        "dbt + ML Pipeline Kombination optimal für reproduzierbare Data Science",
        "Workflow Automation reduziert DevOps Overhead und ermöglicht kontinuierliche Improvements",
        "MLOps Stack (n8n + Streamlit + Docker) vorbereitet für nächste AI gestützte Orchestratierung",
        "Cross-Dataset Validation essentiell für robuste Industrial AI Models",
        "XGBoost GPU Support excellent für Tabular Data mit großen Datasets"
      ],
      improvements: [
        "n8n Workflows mit AI: Erweiterung mit AI Models für intelligente Entscheidungen",
        "Enhanced Streamlit Dashboard: Multi-Model Comparison Views und A/B Testing Interface",
        "Real-time Inference: TensorRT/ONNX für Production GPU Deployment",
        "Streaming Pipeline: Kafka + GPU Models für Real-time RUL Prediction",
        "MLflow Integration: GPU Model Versioning und Experiment Tracking",
        "Advanced Orchestration: Airflow Integration für Complex Workflow Dependencies",
        "Cloud Deployment: Kubernetes + n8n + Streamlit für Scalable Production Environment",
        "Alert System: n8n Integration mit Slack/Email für Model Performance Alerts",
        "Multi-GPU Training: DataParallel für größere Models und Datasets",
        "Production API: FastAPI + Streamlit für External Model Serving und Monitoring"
      ]
    },

    resources: {
      repo: "https://github.com/SW-oasen/turbine-maintenance-etl",
      ml_pipeline: "/blob/master/scripts/ml_pipeline_gpu.py",
      streamlit_dashboard: "https://github.com/SW-oasen/turbine-maintenance-etl/blob/master/scripts/streamlit_dashboard.py",
      n8n_workflows: "https://github.com/SW-oasen/turbine-maintenance-etl/blob/master/n8n/turbine-maintenance-workflow.json",
      dbt_project: "https://github.com/SW-oasen/turbine-maintenance-etl/tree/master/turbine_etl_dbt",
      notebook: "https://github.com/SW-oasen/turbine-maintenance-etl/blob/master/notebooks/turbine_maintenance_etl.ipynb",
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
      },
      {
        title: "n8n Workflow Orchestration",
        type: "workflow",
        src: getImagePath("turbine-maintenance/n8n-workflow-orchestration.png"),
        description: "Automatisierte ETL → ML Training → Dashboard Refresh mit n8n Scheduling und Monitoring"
      },
      {
        title: "Streamlit Real-time Dashboard",
        type: "dashboard",
        src: getImagePath("turbine-maintenance/streamlit-realtime-dashboard.png"),
        description: "Interactive Model Performance Monitoring mit Live GPU Memory Usage und Training Progress"
      },
      {
        title: "MLOps Pipeline Architecture",
        type: "architecture",
        src: getImagePath("turbine-maintenance/mlops-pipeline-architecture.png"),
        description: "Complete MLOps Stack: n8n + dbt + GPU ML + Streamlit + Docker für Production Deployment"
      }
    ]
  }
  // Weitere Projekte 
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