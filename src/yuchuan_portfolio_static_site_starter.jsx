import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Mail, FileText, ChevronRight, Menu, X } from "lucide-react";
import { motion } from "framer-motion";

// ======== DATA: Edit this to update your site ========
const PROFILE = {
  name: "Yuchuan",
  title: "Software Engineer → Data/ML Engineer in progress",
  subtitle: "Portfolio, Lernreise und Projektübersicht",
  tagline:
    "Von Engineering zu Data Science — praxisorientiert, dokumentiert, stetig lernend.",
  email: "mailto:see.wind@gmx.de",
  location: "Berlin",
  links: {
    github: "https://github.com/SW-oasen",
    linkedin: "https://de.linkedin.com/in/yuchuan-liu-58309a274",
  },
};

const PROJECTS = [
  {
    id: "energy-demand-forecast",
    title: "Stromverbrauchsprognose — Zeitreihenanalyse",
    date: "2025-11",
    summary:
      "Kurzfristige Strombedarfsprognose mit Feature Engineering und ML-Modellvergleich.",
    highlights: [
      "Feature Engineering: Kalender- und Lag-Features",
      "Modellvergleich: Baseline vs. XGBoost",
      "Zeitbasierte Kreuzvalidierung",
      "Residuendiagnostik und Fehleranalyse",
    ],
    stack: ["Python", "Pandas", "scikit-learn", "XGBoost", "Plotly", "Jupyter"],
    repo: "https://github.com/SW-oasen/electricity_demand_forecast",
    live: null,
    video: null,
  },
  {
    id: "turbine-maintenance",
    title: "Turbinen-ML-Pipeline — Predictive Maintenance (NASA CMAPSS)",
    date: "2025-10",
    summary:
      "GPU-beschleunigtes ML-Modell zur Vorhersage der verbleibenden Nutzungsdauer von Turbinentriebwerken.",
    highlights: [
      "GPU-Training mit PyTorch und XGBoost",
      "Feature Engineering für 21 Sensorzeitreihen",
      "n8n-Workflow-Orchestrierung",
      "Streamlit-Dashboard zur Ergebnisüberwachung",
      "dbt-Datenpipeline mit SQLite",
    ],
    stack: ["PyTorch (CUDA)", "XGBoost GPU", "n8n", "Streamlit", "dbt", "Docker", "CuPy", "SQLite"],
    repo: "https://github.com/SW-oasen/turbine-maintenance-etl",
    live: null,
    video: null,
  },
  {
    id: "telco-customer-churn",
    title: "Telco Customer Churn — Klassifikation",
    date: "2025-10",
    summary:
      "End-to-End-Churn-Modellierung mit Feature Engineering, Hyperparameter-Tuning und Auswertung.",
    highlights: [
      "Datenvorverarbeitung und Imputation",
      "Modellauswertung mit ROC/AUC",
      "Erklärbarkeit mit SHAP und Permutation Importance",
    ],
    stack: ["Python", "scikit-learn", "Pandas", "Optuna", "SHAP"],
    repo: "https://github.com/SW-oasen/telco-customer-churn",
    live: null,
    video: null,
  },
  {
    id: "airbnb-berlin",
    title: "Airbnb Berlin — Explorative Datenanalyse",
    date: "2025-08",
    summary:
      "EDA der Airbnb-Listings in Berlin mit Preisanalysen, geografischen Visualisierungen und ML-Modellen.",
    highlights: [
      "Datenbereinigung und Feature Engineering",
      "Interaktive Visualisierungen (Plotly, Folium)",
      "Preisanalyse nach Bezirk und Unterkunftstyp",
      "AutoML-Preisvorhersage mit FLAML und H2O",
    ],
    stack: ["Python", "Pandas", "Plotly", "Folium", "Jupyter", "Power BI"],
    repo: "https://github.com/SW-oasen/airbnb-eda-berlin",
    live: null,
    video: null,
  },
];

const LEARNING = [
  {
    date: "2025-10",
    title: "MLOps-Pipeline mit n8n und Streamlit Dashboard",
    details:
      "n8n-Workflow-Automatisierung, Streamlit-Dashboard und Docker für das Turbinen-Maintenance-Projekt implementiert.",
  },
  {
    date: "2025-10",
    title: "GPU-Setup für PyTorch",
    details:
      "CUDA-Installation für schnellere Trainingsläufe — GPU-Training deutlich schneller als CPU-Baseline.",
  },
  {
    date: "2025-09",
    title: "Deep Learning, Microsoft Power BI und Datenvisualisierung",
    details:
      "Image-Classification-Projekt durchgeführt. Power-BI-Dashboards erstellt, Datenmodelle optimiert, Berichte automatisiert.",
  },
  {
    date: "2025-08",
    title: "Portfolio-Projekte gestartet",
    details:
      "EDA, Datenbereinigung, Modellierung, Visualisierung und Dokumentation.",
  },
  {
    date: "2025-07",
    title: "Kaggle-Kurse: Python, Datenanalyse, ML, Deep Learning",
    details:
      "Data-Science- und ML-Grundlagen über Kaggle-Kurse erlernt, inkl. praktischer Übungen.",
  },
  {
    date: "2024",
    title: "Lokale RAG-Experimente mit ollama und n8n",
    details:
      "Mit Docker Compose lokale n8n-Instanz mit ollama/mistral aufgesetzt und mit lokalen Datenquellen verbunden.",
  },
];

const EXPERIENCE = [
  {
    period: "Dipl.-Wirt.-Ing. (Informatik)",
    place: "TU Berlin",
  },
  { period: "Order Manager", place: "Nokia Siemens" },
  { period: "Senior Support Engineer", place: "Spirent" },
  { period: "Support Engineer", place: "macmon" },
  { period: "Software Engineer → Data/ML (self-directed)", place: "2024–2025" },
];

// ======== UI ========
function Section({ id, title, children }) {
  return (
    <section id={id} className="max-w-6xl mx-auto px-4 md:px-6 py-12">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">{title}</h2>
      {children}
    </section>
  );
}

function ProjectCard({ project }) {
  const handleViewDetails = () => {
    window.location.hash = `project/${project.id}`;
  };

  return (
    <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
      <Card className="h-full hover:shadow-lg transition-shadow">
        <CardContent className="p-6 flex-1 flex flex-col">
          <h3 className="text-xl font-semibold mb-3">
            {project.title}
          </h3>
          <p className="mt-2 text-sm md:text-base text-muted-foreground">{project.summary}</p>

          <ul className="mt-4 list-disc list-inside text-sm space-y-1">
            {project.highlights.map((h, i) => (
              <li key={i}>{h}</li>
            ))}
          </ul>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.stack.map((s, i) => (
              <Badge key={i} variant="secondary" className="px-3 py-1 rounded-full">
                {s}
              </Badge>
            ))}
          </div>

          <div className="mt-auto pt-4">
            <Button 
              onClick={handleViewDetails}
              className="w-full"
            >
              Details ansehen
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      {/* Header */}
      <header className="sticky top-0 z-10 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 md:px-6 h-16">
          <a href="#home" className="font-bold text-lg">{PROFILE.name}</a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#projects" className="hover:underline">Projekte</a>
            <a href="#learning" className="hover:underline">Lernfortschritte</a>
            <a href="#about" className="hover:underline">Werdegang</a>
            <a href="#contact" className="hover:underline">Kontakt</a>
          </nav>
          <button
            className="md:hidden p-2 rounded-md hover:bg-muted"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Navigation öffnen"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden border-t bg-background">
            <nav className="flex flex-col px-4 py-3 gap-1 text-sm">
              <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="hover:underline py-2">Projekte</a>
              <a href="#learning" onClick={() => setMobileMenuOpen(false)} className="hover:underline py-2">Lernfortschritte</a>
              <a href="#about" onClick={() => setMobileMenuOpen(false)} className="hover:underline py-2">Werdegang</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="hover:underline py-2">Kontakt</a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero */}
      <section id="home" className="max-w-6xl mx-auto px-4 md:px-6 py-14">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            {PROFILE.title}
          </h1>
          <p className="mt-2 text-lg md:text-xl font-medium text-foreground">
            {PROFILE.subtitle}
          </p>
          <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-3xl">
            {PROFILE.tagline}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild>
              <a href="#projects"><FileText className="h-4 w-4 mr-2"/>Projekte ansehen</a>
            </Button>
            <Button variant="outline" asChild>
              <a href={PROFILE.links.github} target="_blank" rel="noreferrer"><Github className="h-4 w-4 mr-2"/>GitHub</a>
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Projects */}
      <Section id="projects" title="Projekte">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, index) => (
            <ProjectCard 
              key={index} 
              project={project}
            />
          ))}
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          Hinweis: Einige Teile wurden mit Hilfe von AI‑Tools (Copilot/ChatGPT) generiert und anschließend von mir nachvollzogen, validiert und dokumentiert.
        </p>
      </Section>

      {/* Learning Journey */}
      <Section id="learning" title="Lernfortschritte">
        <ol className="relative border-s ps-6">
          {LEARNING.map((item, i) => (
            <li key={i} className="mb-8 ms-4">
              <div className="absolute w-3 h-3 bg-primary rounded-full mt-1.5 -start-1.5 border"></div>
              <time className="mb-1 text-sm font-medium text-muted-foreground">{item.date}</time>
              <h3 className="text-base md:text-lg font-semibold">{item.title}</h3>
              <p className="text-sm md:text-base text-muted-foreground">{item.details}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* About / Werdegang */}
      <Section id="about" title="Werdegang">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-2">Stationen</h3>
            <ul className="space-y-2 text-sm md:text-base">
              {EXPERIENCE.map((e, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  <span className="font-medium">{e.period}</span>
                  <span className="text-muted-foreground">— {e.place}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Kernkompetenzen</h3>
            <div className="flex flex-wrap gap-2 mb-4">
              {["Python","Pandas","scikit-learn","XGBoost","SQL","Power BI","Git","Matplotlib"].map((t, i)=> (
                <Badge key={i} variant="secondary" className="px-3 py-1 rounded-full">{t}</Badge>
              ))}
            </div>
            <h3 className="font-semibold mb-2">Aktuell vertiefend</h3>
            <div className="flex flex-wrap gap-2">
              {["PyTorch (CUDA)","Docker","n8n","Streamlit","dbt","MLOps"].map((t, i)=> (
                <Badge key={i} variant="outline" className="px-3 py-1 rounded-full">{t}</Badge>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-3">
              Fokus: saubere Datenpipelines, reproduzierbare Experimente, klare Visualisierung und ehrliche Dokumentation.
            </p>
          </div>
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" title="Kontakt">
        <div className="flex flex-wrap items-center gap-3">
          <Button asChild variant="outline">
            <a href={PROFILE.email}><Mail className="h-4 w-4 mr-2"/>E-Mail</a>
          </Button>
          <Button asChild variant="outline">
            <a href={PROFILE.links.github} target="_blank" rel="noreferrer"><Github className="h-4 w-4 mr-2"/>GitHub</a>
          </Button>
          <Button asChild variant="outline">
            <a href={PROFILE.links.linkedin} target="_blank" rel="noreferrer"><ExternalLink className="h-4 w-4 mr-2"/>LinkedIn</a>
          </Button>
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} {PROFILE.name}. Built as a lightweight static portfolio.
      </footer>
    </div>
  );
}
