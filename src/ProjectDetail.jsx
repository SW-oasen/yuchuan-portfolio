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
  "energy-demand-forecast": {
    title: "Stromverbrauchsprognose — Zeitreihenanalyse",
    date: "2025-11",
    duration: "3 Wochen",
    status: "Abgeschlossen",

    problem: {
      title: "Problem",
      content: "Kurzfristige Prognosen des Stromverbrauchs sind ein Kernproblem im Energiesektor. Genaue Vorhersagen helfen bei der Netzsteuerung und der Einsatzplanung von Kraftwerken.",
      challenges: [
        "Starke Saisonalität: täglich, wöchentlich und jährlich überlagerte Muster",
        "Externe Einflussfaktoren: Temperatur, Feiertage, Wochentage",
        "Auswahl geeigneter Lag-Features ohne Data Leakage",
        "Robuste Evaluierung durch zeitbasierte Kreuzvalidierung",
      ]
    },

    approach: {
      title: "Daten & Ansatz",
      dataset: "Öffentliche Stromverbrauchsdaten für Deutschland (stündliche Auflösung)",
      methodology: [
        "Explorative Datenanalyse: saisonale Dekompositionen und Autokorrelationen",
        "Feature Engineering: Kalender-Features, Lag-Features, Rolling-Window-Statistiken",
        "Baseline-Modelle: Seasonal Naive und Moving Average als Referenz",
        "ML-Modelle: Random Forest und XGBoost mit zeitbasierter Kreuzvalidierung",
        "Fehleranalyse: MAE, RMSE und visuelle Residuendiagnostik",
      ],
      tools: ["Python", "Pandas", "scikit-learn", "XGBoost", "Plotly", "Jupyter"]
    },

    solution: {
      title: "Lösung",
      content: "ML-Pipeline mit Feature Engineering und Kreuzvalidierung für kurzfristige Strombedarfsprognosen.",
      features: [
        "Automatisiertes Feature Engineering für Zeitreihen",
        "Zeitbasierte Kreuzvalidierung zur Vermeidung von Data Leakage",
        "Modellvergleich und Fehleranalyse",
        "Interaktive Visualisierungen der Prognoseergebnisse",
      ]
    },

    results: {
      title: "Ergebnisse",
      metrics: [
        { label: "Bestes Modell", value: "XGBoost", change: "vs. Baseline" },
        { label: "Prognosehorizont", value: "24h", change: "stündlich" },
        { label: "Evaluierungsmethode", value: "Time-CV", change: "5 Folds" },
        { label: "Wichtigste Features", value: "Lag + Kalender", change: "Top-Features" },
      ],
      insights: [
        "Kalender-Features (Wochentag, Feiertag) sind entscheidend für die Prognosegenauigkeit",
        "Lag-Features des Vortages und der Vorwoche liefern den höchsten Informationsgehalt",
        "XGBoost übertrifft die Baseline-Modelle auf dem Testset",
        "Residuenanalyse zeigt keine systematischen Abweichungen",
      ]
    },

    learnings: {
      title: "Learnings & Reflexion",
      positives: [
        "Zeitbasierte Kreuzvalidierung verhindert zuverlässig Data Leakage",
        "Feature Engineering bei Zeitreihen erfordert sorgfältige Planung der Lag-Fenster",
        "Baseline-Modelle sind wichtig als Referenzpunkt für ML-Modelle",
        "Explorative Datenanalyse deckte wichtige saisonale Muster auf",
      ],
      improvements: [
        "Wetterdaten als externe Kovariable integrieren",
        "Langfristige Prognosen (mehrere Tage) testen",
        "Spezialisierte Zeitreihenmodelle wie Prophet oder ARIMA vergleichen",
        "Fehleranalyse nach Tageszeit und Jahreszeit vertiefen",
      ]
    },

    resources: {
      repo: "https://github.com/SW-oasen/electricity_demand_forecast",
      presentation: "/yuchuan-portfolio/Stromverbrauch_Vorhersagen.pdf",
    },

    visuals: []
  },

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
      notebook: "https://github.com/SW-oasen/airbnb-eda-berlin/blob/main/notebooks/Airbnb_EDA_Berlin.ipynb",
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
    },

    visuals: []
  },

  "turbine-maintenance": {
    title: "Turbinen-ML-Pipeline — Predictive Maintenance (NASA CMAPSS)",
    date: "2025-10",
    duration: "4 Wochen",
    status: "Abgeschlossen",

    problem: {
      title: "Problem",
      content: "Die NASA CMAPSS-Datensätze enthalten Sensordaten von Turbinentriebwerken bis zum Ausfall. Ziel war die Vorhersage der verbleibenden Nutzungsdauer (RUL) mithilfe einer GPU-beschleunigten ML-Pipeline mit Workflow-Automatisierung und Dashboard.",
      challenges: [
        "GPU-Einrichtung: PyTorch CUDA und XGBoost GPU korrekt konfigurieren",
        "Feature Engineering für 21 Sensorzeitreihen mit Rolling Windows und Z-Scores",
        "Cross-Dataset-Validierung über 4 CMAPSS-Subsets mit unterschiedlichen Betriebsbedingungen",
        "GPU Memory Management bei größeren Tensoren und Batch-Größen",
        "Integration von dbt, n8n und Streamlit in eine zusammenhängende Pipeline",
      ]
    },

    approach: {
      title: "Daten & Ansatz",
      dataset: "NASA Turbofan Engine Degradation Simulation (CMAPSS) — 4 Sub-Datensätze (FD001–FD004)",
      methodology: [
        "Feature Engineering: Rolling Windows, Z-Scores und Sensor-Differenzen für 21 Signale",
        "dbt-Pipeline: Staging → Intermediate → Marts mit Qualitätstests",
        "GPU-Training: PyTorch Neural Networks und XGBoost GPU mit Memory Management",
        "Multi-Modell-Vergleich: Baseline bis Deep Learning mit systematischer Evaluierung",
        "n8n-Automatisierung: Pipeline-Orchestrierung von ETL bis Dashboard-Aktualisierung",
        "Cross-Dataset-Validierung: FD001–FD004 für Robustheitsprüfung",
      ],
      tools: ["PyTorch (CUDA)", "XGBoost GPU", "CuPy", "dbt", "SQLite", "n8n", "Streamlit", "Docker"]
    },

    solution: {
      title: "Lösung",
      content: "GPU-beschleunigte ML-Pipeline mit n8n-Workflow-Automatisierung, Streamlit-Dashboard und dbt-Datenpipeline für Predictive Maintenance auf NASA CMAPSS-Daten.",
      features: [
        "GPU-Training: PyTorch NN und XGBoost GPU für beschleunigtes Modelltraining",
        "Neuronale Netzarchitektur: 256→128→64→1 mit BatchNorm, Dropout und Early Stopping",
        "Feature Engineering: 21 Sensorsignale → 84+ Features (Rolling Stats, Z-Scores, Diffs)",
        "Multi-Modell-Vergleich: Lineare Regression, Random Forest, XGBoost GPU, PyTorch NN",
        "n8n-Workflow: automatisierte ETL → dbt → ML-Training → Dashboard-Aktualisierung",
        "Cross-Dataset-Validierung: FD001–FD004 mit verschiedenen Betriebsbedingungen",
      ]
    },

    results: {
      title: "Ergebnisse",
      metrics: [
        { label: "Trainierte Modelle", value: "4", change: "inkl. PyTorch NN + XGBoost" },
        { label: "Engineered Features", value: "84+", change: "aus 21 Sensoren" },
        { label: "GPU-Speedup", value: "~5x", change: "gegenüber CPU-Baseline" },
        { label: "RMSE (Cross-Dataset)", value: "<15", change: "FD001–FD004" },
      ],
      insights: [
        "GPU-Training mit PyTorch CUDA deutlich schneller als CPU-Baseline (gemessener Speedup ~5x)",
        "Feature Engineering mit Rolling Windows und Z-Scores entscheidend für Modellperformance",
        "Sensor 2, 11 und 15 zeigen die stärkste Korrelation mit der RUL-Degradation",
        "XGBoost GPU erzielt niedrigere RMSE-Werte, PyTorch NN generalisiert besser auf neuen Datensätzen",
        "Cross-Dataset-Validierung zeigt robuste Ergebnisse über unterschiedliche Betriebsbedingungen",
      ]
    },

    learnings: {
      title: "Learnings & Reflexion",
      positives: [
        "GPU-Training mit PyTorch CUDA ist deutlich schneller als CPU-basierte Alternativen",
        "GPU Memory Management erfordert sorgfältige Planung bei größeren Tensoren",
        "n8n-Workflows vereinfachen die Automatisierung der Pipeline erheblich",
        "Streamlit eignet sich gut für einfache Monitoring-Dashboards während der Entwicklung",
        "Feature Engineering für Sensorzeitreihen ist aufwändig, aber entscheidend für die Performance",
        "Cross-Dataset-Validierung zeigt, wie gut Modelle auf neuen Betriebsbedingungen generalisieren",
      ],
      improvements: [
        "MLflow für Experiment-Tracking und Modellversionierung integrieren",
        "Hyperparameter-Tuning mit Optuna für GPU-Modelle ergänzen",
        "Streamlit-Dashboard um Modellvergleichs-Visualisierungen erweitern",
        "Robustheit durch weitere Cross-Dataset-Szenarien prüfen",
      ]
    },

    resources: {
      repo: "https://github.com/SW-oasen/turbine-maintenance-etl",
      notebook: "https://github.com/SW-oasen/turbine-maintenance-etl/blob/master/notebooks/turbine_maintenance_etl.ipynb",
    },

    visuals: []
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
        {project.visuals && project.visuals.length > 0 && (
        <ProjectSection icon={BarChart3} title="Visualisierungen">
          <div className="grid md:grid-cols-3 gap-6">
            {project.visuals.map((visual, i) => (
              <VisualCard key={i} visual={visual} />
            ))}
          </div>
        </ProjectSection>
        )}

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
        <ProjectSection icon={Code2} title="Code & Ressourcen">
          <div className="flex flex-wrap gap-4">
            {project.resources.repo && (
            <Button asChild>
              <a href={project.resources.repo} target="_blank" rel="noreferrer">
                <Github className="h-4 w-4 mr-2" />
                GitHub Repository
              </a>
            </Button>
            )}
            {project.resources.notebook && (
            <Button variant="outline" asChild>
              <a href={project.resources.notebook} target="_blank" rel="noreferrer">
                <BookOpen className="h-4 w-4 mr-2" />
                Jupyter Notebook
              </a>
            </Button>
            )}
            {project.resources.report && (
            <Button variant="outline" asChild>
              <a href={project.resources.report} target="_blank" rel="noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" />
                Abschlussbericht
              </a>
            </Button>
            )}
            {project.resources.presentation && (
            <Button variant="outline" asChild>
              <a href={project.resources.presentation} target="_blank" rel="noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" />
                Präsentation (PDF)
              </a>
            </Button>
            )}
          </div>
        </ProjectSection>
      </div>
    </div>
  );
}