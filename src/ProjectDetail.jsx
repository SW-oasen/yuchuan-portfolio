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
  "energy-price-forecast": {
    title: "Strompreisprognose Deutschland — Day-Ahead Forecasting",
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
        { label: "Hauptmodell", value: "XGBoost", change: "Preisvorhersage" },
        { label: "Train-Test-Split", value: "Zeit(Datum)", change: "2026-01-01" },
        { label: "Bewertung", value: "MAE - RMSE - R²", change: "15.27 - 24.07 - 0.82" },
        { label: "Prognosehorizont", value: "24h", change: "stündlich" },
        { label: "Datenquellen", value: "3+", change: "SMARD, Open-Meteo, MaStR" },
        { label: "App", value: "Streamlit", change: "Vorhersage + Analyse" },
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
      readme: "https://github.com/SW-oasen/electricity_price_forecast/blob/main/README.md",
      context: "https://github.com/SW-oasen/electricity_price_forecast/blob/main/documents/PROJECT_CONTEXT.md",
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
    title: "Stromverbrauchsprognose — Zeitreihenanalyse",
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
        { label: "Konservative Modelle", value: "Asymetrische Verlustfunktionen", change: "<5% Unterschätzung für Produktionspuffer" },
        { label: "Prognosehorizont", value: "24h", change: "stündlich" },
        { label: "Evaluierung", value: "Time-CV", change: "5 Folds" },
        { label: "Wichtigkeit", value: "Features", change: "vor Modellwahl" },
        { label: "Interaktive App", value: "Notebook + Streamlit", change: "Vorhersage + Analyse" },
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

  "airbnb-berlin": {
    title: "Berlin Airbnb Marktanalyse 2025 — Business Intelligence & Compliance",
    date: "2025-11, erneuert in 2026-02",
    duration: "3 Wochen",
    status: "Abgeschlossen (v2: Revenue Modelling & Regulatory Analysis)",
    problem: {
      title: "Problem",
      content:
        "Der Berliner Kurzzeitvermietungsmarkt unterliegt dem Zweckentfremungsverbot. Ziel war eine datenbasierte Analyse aktiver Listings, Umsatzpotenziale und Compliance-Muster.",
      challenges: [
        "Viele Listings sind Ghost-Einträge ohne echte Marktaktivität",
        "Berliner Lizenz-Compliance nur oberflächlich prüfbar",
        "Revenue-Schätzungen benötigen transparente Annahmen",
        "Power-BI-Import mit deutschen Trennzeichenstandards",
      ],
    },
    approach: {
      title: "Daten & Ansatz",
      dataset: "Inside Airbnb Berlin Dataset Sept. 2025 (~13k Listings) → Active Market (~2.4k)",
      methodology: [
        "Active-Market-Filtering über Reviews pro Monat",
        "Revenue Proxy Modelling mit Upper-/Lower-Bounds",
        "Lizenz-Klassifizierung per Regex",
        "Compliance-Performance-Analyse",
        "Power-BI-Export mit deutscher Lokalisierung",
      ],
      tools: ["Python", "Pandas", "Seaborn", "Regex", "Jupyter", "Power BI"],
    },
    solution: {
      title: "Lösung",
      content:
        "Business-Intelligence-Pipeline mit Revenue Proxy Modelling und Berliner Compliance-Analyse.",
      features: [
        "Active-Market-Definition",
        "Lizenz-Kategorisierung",
        "Power-BI-Dashboard",
        "Geografische Revenue Heatmaps",
        "Host-Profiling",
      ],
    },
    results: {
      title: "Ergebnisse",
      metrics: [
        { label: "Active Listings", value: "2.395", change: "real market" },
        { label: "Median Revenue", value: "€1.074", change: "active" },
        { label: "Top 5%", value: "€6.000+", change: "Performance" },
        { label: "Compliance", value: "44%", change: "Valid + Exempt" },
      ],
      insights: [
        "Wenige professionelle Hosts dominieren einen großen Umsatzanteil",
        "Mitte und Kreuzberg treten als Revenue-Cluster hervor",
        "Active-Market-Filtering verändert die Marktperspektive deutlich",
      ],
    },
    learnings: {
      title: "Learnings & Reflexion",
      positives: ["Business-Intelligence-Fokus statt reiner EDA", "Power-BI-Workflow verbessert", "Compliance-Analyse strukturiert umgesetzt"],
      improvements: ["Zeitreihenvergleich ergänzen", "Externe Eventdaten einbinden", "DAX-Measures erweitern"],
    },
    resources: {
      repo: "https://github.com/SW-oasen/airbnb-eda-berlin",
      notebook: "https://github.com/SW-oasen/airbnb-eda-berlin/blob/main/notebooks/Airbnb_EDA_Berlin.ipynb",
    },
    visuals: [
      {
        title: "Umsatzverteilung nach Unterkunftsart",
        type: "violin",
        src: getImagePath("airbnb-eda-berlin/violinplot-revenue-property-type.png"),
        description: "Umsatzverteilung nach Unterkunftsart.",
      },
      {
        title: "Lizenz-Compliance vs. Performance",
        type: "boxplot",
        src: getImagePath("airbnb-eda-berlin/boxplot-revenue-license-status.png"),
        description: "Vergleich der Umsatzmetriken nach Lizenzstatus.",
      },
      {
        title: "Geografische Heatmap des aktiven Markts",
        type: "heatmap",
        src: getImagePath("airbnb-eda-berlin/geo-heatmap-revenue.png"),
        description: "Geografische Umsatz-Cluster in Berlin.",
      },
    ],
  },

  "telco-customer-churn": {
    title: "Telco Customer Churn — Classification",
    date: "2025-10",
    duration: "3 Wochen",
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
      methodology: ["Data Prep und Encoding", "Feature Engineering", "Modellvergleich", "Optuna-Tuning", "SHAP-Auswertung"],
      tools: ["Python", "scikit-learn", "Optuna", "Power BI", "Pandas", "SHAP", "Matplotlib"],
    },
    solution: {
      title: "Lösung",
      content:
        "End-to-End-ML-Pipeline mit Feature Engineering, Hyperparameter-Optimierung und Dashboard für Churn-Risiken.",
      features: ["Feature Engineering", "Optuna-Tuning", "Risk Segmentation", "Power-BI-Dashboard", "SHAP-Erklärbarkeit"],
    },
    results: {
      title: "Ergebnisse",
      metrics: [
        { label: "Accuracy", value: "77.7%", change: "AUC 0.85+" },
        { label: "F1-Score", value: "0.82", change: "optimiert" },
        { label: "Churn Rate", value: "26.5%", change: "Dataset" },
      ],
      insights: ["Tenure ist ein wichtiger Prädiktor", "Month-to-month-Verträge zeigen hohes Risiko", "Service-Bundles senken Churn-Risiko"],
    },
    learnings: {
      title: "Learnings & Reflexion",
      positives: ["Feature Engineering verbessert Performance", "Optuna effektiver als Grid Search", "Dashboard macht ML-Insights zugänglich"],
      improvements: ["Zeitreihen-Features ergänzen", "A/B-Testing-Framework vorbereiten", "Real-time Scoring Pipeline prüfen"],
    },
    resources: { repo: "https://github.com/SW-oasen/telco-customer-churn" },
    visuals: [],
  },

  "turbine-maintenance": {
    title: "Turbinen-ML-Pipeline — Predictive Maintenance (NASA CMAPSS)",
    date: "2025-10",
    duration: "4 Wochen",
    status: "Abgeschlossen",
    problem: {
      title: "Problem",
      content:
        "Die NASA CMAPSS-Datensätze enthalten Sensordaten von Turbinentriebwerken bis zum Ausfall. Ziel war die Vorhersage der verbleibenden Nutzungsdauer (RUL).",
      challenges: [
        "PyTorch CUDA und XGBoost GPU konfigurieren",
        "Feature Engineering für Sensorzeitreihen",
        "Cross-Dataset-Validierung",
        "Integration von dbt, n8n und Streamlit",
      ],
    },
    approach: {
      title: "Daten & Ansatz",
      dataset: "NASA Turbofan Engine Degradation Simulation (CMAPSS) — FD001–FD004",
      methodology: ["Rolling Windows", "dbt-Pipeline", "GPU-Training", "Multi-Modell-Vergleich", "n8n-Automatisierung"],
      tools: ["PyTorch (CUDA)", "XGBoost GPU", "CuPy", "dbt", "SQLite", "n8n", "Streamlit", "Docker"],
    },
    solution: {
      title: "Lösung",
      content:
        "GPU-beschleunigte ML-Pipeline mit n8n-Workflow-Automatisierung, Streamlit-Dashboard und dbt-Datenpipeline.",
      features: ["GPU-Training", "Neuronales Netz", "84+ Features", "Multi-Modell-Vergleich", "n8n-Workflow"],
    },
    results: {
      title: "Ergebnisse",
      metrics: [
        { label: "Modelle", value: "4", change: "inkl. NN + XGB" },
        { label: "Features", value: "84+", change: "aus Sensoren" },
        { label: "GPU-Speedup", value: "~5x", change: "vs. CPU" },
      ],
      insights: ["GPU-Training beschleunigt Experimente", "Feature Engineering ist entscheidend", "Cross-Dataset-Validierung zeigt Robustheit"],
    },
    learnings: {
      title: "Learnings & Reflexion",
      positives: ["GPU-Training praktisch umgesetzt", "n8n vereinfacht Orchestrierung", "Streamlit eignet sich für Monitoring"],
      improvements: ["MLflow integrieren", "Optuna für GPU-Modelle ergänzen", "Dashboard erweitern"],
    },
    resources: {
      repo: "https://github.com/SW-oasen/turbine-maintenance-etl",
      notebook: "https://github.com/SW-oasen/turbine-maintenance-etl/blob/master/notebooks/turbine_maintenance_etl.ipynb",
    },
    visuals: [],
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
        <div className="aspect-video bg-slate-100">
          <img
            src={visual.src}
            alt={visual.title}
            className="h-full w-full object-cover"
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
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{project.title}</h1>
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
