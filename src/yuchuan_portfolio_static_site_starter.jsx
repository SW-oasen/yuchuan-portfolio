import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Mail, ChevronRight, Menu, X } from "lucide-react";
import { motion } from "framer-motion";

// ======== DATA: Edit this to update your site ========
const PROFILE = {
  name: "Yuchuan",
  title: "Software Engineer → Data/ML Engineer",
  subtitle: "Portfolio, Lernreise und Projektübersicht",
  tagline: "Von Software-Entwicklung zu Data Science, Machine Learning und Energieanalytik",
  email: "mailto:see.wind@gmx.de",
  location: "Berlin",
  links: {
    github: "https://github.com/SW-oasen",
    linkedin: "https://de.linkedin.com/in/yuchuan-liu-58309a274",
  },
};

const PROJECTS = [
  {
    id: "energy-price-forecast",
    title: "Strompreisprognose Deutschland — Day-Ahead Forecasting",
    date: "2026-06",
    summary:
      "Vorhersage stündlicher Day-Ahead-Strompreise für Deutschland auf Basis von Nachfrage, Erzeugung, Wetterdaten und Kalendermerkmalen.",
    highlights: [
      "End-to-End-Pipeline von SMARD/Open-Meteo bis zur operativen Tagesprognose",
      "XGBoost-Modell für stündliche Strompreisprognosen",
      "Integration von Last-, Wind- und PV-Prognosen als Eingangsgrößen",
      "Streamlit-App mit Tomorrow Forecast, historischer Analyse und Residuallast-Visualisierung",
    ],
    stack: ["Python", "Pandas", "scikit-learn", "XGBoost", "LightGBM", "SQLite", "Streamlit", "SMARD", "Open-Meteo"],
    repo: "https://github.com/SW-oasen/electricity_price_forecast",
    live: null,
    video: null,
  },
  {
    id: "energy-demand-forecast",
    title: "Stromverbrauchsprognose — Zeitreihenanalyse",
    date: "2026-05",
    summary:
      "Kurzfristige Strombedarfsprognose anhand realer Verbrauchsdaten von SMARD und Wetterdaten.",
    highlights: [
      "ML-Vorhersage vs. reale Daten und SMARD-Prognose",
      "Modulare Datenpipeline mit wiederverwendbaren Komponenten",
      "Asymmetrische Verlustfunktion für Unterschätzung",
      "Interaktive Streamlit-Anwendung und Notebook-Auswertung",
    ],
    stack: ["Pandas", "scikit-learn", "sklearn-optimizer", "XGBoost", "LightGBM", "SQLite", "Matplotlib", "Streamlit"],
    repo: "https://github.com/SW-oasen/electricity_demand_forecast",
    live: null,
    video: null,
  },
  {
    id: "turbine-maintenance",
    title: "Turbofan Predictive Maintenance — RUL Prediction",
    date: "2026-06",
    summary:
      "End-to-End-ML-Projekt zur Vorhersage der Remaining Useful Life (RUL) von Turbofan Engines mit NASA CMAPSS-Daten.",
    highlights: [
      "ETL-Pipeline mit SQLite-Datenhaltung",
      "RUL-Berechnung für FD001–FD004 ohne Data Leakage",
      "Feature Engineering mit Sensor-Trendfeatures",
      "Bayesian Optimization für Hyperparameter-Tuning",
    ],
    stack: [
      "Python",
      "Pandas",
      "scikit-learn",
      "XGBoost",
      "LightGBM",
      "SQLite",
      "SQLAlchemy",
      "scikit-optimize",
      "Matplotlib",
    ],
    repo: "https://github.com/SW-oasen/turbine-predictive-maintenance",
    live: null,
    video: null,
  },
  {
    id: "telco-customer-churn",
    title: "Telco Customer Churn — Klassifikation",
    date: "2025-10",
    summary: "Kundenabwanderungsprognose mit Klassifikationsmodellen.",
    highlights: [
      "Datenvorverarbeitung und Imputation",
      "Modellauswertung mit ROC/AUC",
      "Erklärbarkeit mit SHAP und Permutation Importance",
    ],
    stack: ["scikit-learn", "Pandas", "Optuna", "SHAP"],
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
      "Preisanalyse nach Bezirk und Unterkunftstyp",
      "AutoML-Preisvorhersage mit FLAML und H2O",
    ],
    stack: ["Python", "Pandas", "Jupyter", "Power BI"],
    repo: "https://github.com/SW-oasen/airbnb-eda-berlin",
    live: null,
    video: null,
  },
];

const LEARNING = [
  {
    date: "2026-06",
    title: "Strompreisprognose mit operativer ML-Pipeline",
    details:
      "Day-Ahead-Strompreisprognose mit SMARD-, Open-Meteo- und MaStR-Daten, XGBoost-Modell, gestapelten Prognosefeatures und Streamlit-Dashboard umgesetzt.",
  },
  {
    date: "2026-05",
    title: "Stromverbrauchsprognose mit Zeitreihenanalyse",
    details:
      "Portfolio-Projekt zur kurzfristigen Strombedarfsprognose mit Feature Engineering, ML, Vergleich mit SMARD-Realdaten und SMARD-Prognose.",
  },
  {
    date: "2026-05",
    title: "Abschluss der Ausbildung zum Data/ML Engineer bei Stackfuel",
    details:
      "Erfolgreiche Abschlussprüfung des dritten/letzten Fachs Data Science bei Stackfuel - Projekt: Wartezeitprognose im Taxi.",
  },
  {
    date: "2026-02",
    title: "Abschlussprüfung des zweiten Fachs Data Analyse bei Stackfuel",
    details:
      "Erfolgreiche Abschlussprüfung des Fachs Data Analyse bei Stackfuel - Projekt: Kundenabwanderungsanalyse.",
  },
  {
    date: "2025-12",
    title: "Abschlussprüfung des ersten Fachs Business Intelligence / Power BI bei Stackfuel",
    details:
      "Erfolgreiche Abschlussprüfung Business Intelligence / Power BI - Projekt: Flugverspätungsanalyse.",
  },
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
    details: "EDA, Datenbereinigung, Modellierung, Visualisierung und Dokumentation.",
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
  { period: "AZAV Ausbildung zu Data Scientist", place: "Stackfuel", date: "2025–2026" },
  { period: "Support Engineer für Computernetzsicherheit", place: "macmon", date: "2023–2025" },
  { period: "Senior Support Engineer", place: "Spirent", date: "2010–2023" },
  { period: "Order Manager", place: "Nokia Siemens", date: "2008–2010" },
  { period: "Dipl.-Wirt.-Ing. (Informatik)", place: "TU Berlin", date: "2000–2007" },
];

// ======== UI ========
function Section({ id, title, children }) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-8 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
      >
        {title}
      </motion.h2>
      {children}
    </section>
  );
}

function ProjectCard({ project }) {
  const handleViewDetails = () => {
    window.location.hash = `project/${project.id}`;
  };

  return (
    <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
      <Card className="h-full border-slate-200 bg-white/90 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
        <CardContent className="flex h-full flex-col gap-4 p-6">
          <div>
            <div className="mb-2 text-sm text-slate-500">{project.date}</div>
            <h3 className="text-xl font-semibold text-slate-900">{project.title}</h3>
          </div>
          <p className="text-sm leading-6 text-slate-600">{project.summary}</p>
          <ul className="space-y-2 text-sm text-slate-700">
            {project.highlights.map((highlight, i) => (
              <li key={i} className="flex gap-2">
                <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-slate-500" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
          <div className="mt-auto flex flex-wrap gap-2">
            {project.stack.map((item, i) => (
              <Badge key={i} variant="secondary">
                {item}
              </Badge>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 pt-2">
            <Button onClick={handleViewDetails} className="gap-2">
              Details ansehen <ChevronRight className="h-4 w-4" />
            </Button>
            {project.repo && (
              <Button asChild variant="outline" className="gap-2">
                <a href={project.repo} target="_blank" rel="noreferrer">
                  <Github className="h-4 w-4" /> Repo
                </a>
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const navLinks = [
    { href: "#projects", label: "Projekte" },
    { href: "#learning", label: "Lernfortschritte" },
    { href: "#career", label: "Werdegang" },
    { href: "#contact", label: "Kontakt" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#" className="text-lg font-bold">
            {PROFILE.name}
          </a>
          <nav className="hidden gap-6 text-sm font-medium sm:flex">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="hover:text-slate-600">
                {link.label}
              </a>
            ))}
          </nav>
          <button
            className="sm:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Navigation öffnen"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {mobileMenuOpen && (
          <nav className="flex flex-col gap-3 border-t border-slate-200 bg-white px-4 py-4 text-sm sm:hidden">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 hover:underline"
              >
                {link.label}
              </a>
            ))}
          </nav>
        )}
      </header>

      <main>
        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="max-w-5xl">
            <p className="mb-3 text-sm font-medium text-slate-500">{PROFILE.location}</p>
            <h1 className="text-3xl font-bold tracking-tight leading-tight sm:text-4xl lg:text-5xl">{PROFILE.title}</h1>
            <p className="mt-4 text-xl text-slate-600">{PROFILE.subtitle}</p>
            <p className="mt-4 text-slate-600">{PROFILE.tagline}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild>
                <a href="#projects">Projekte ansehen</a>
              </Button>
              <Button asChild variant="outline" className="gap-2">
                <a href={PROFILE.links.github} target="_blank" rel="noreferrer">
                  <Github className="h-4 w-4" /> GitHub
                </a>
              </Button>
            </div>
          </motion.div>
        </section>

        <Section id="projects" title="Projekte">
          <div className="grid gap-6 md:grid-cols-2">
            {PROJECTS.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          <p className="mt-6 text-sm text-slate-500">
            Hinweis: Einige Teile wurden mit Hilfe von AI-Tools (Copilot/ChatGPT) generiert und anschließend von mir nachvollzogen,
            validiert und dokumentiert.
          </p>
        </Section>

        <Section id="learning" title="Lernfortschritte">
          <ol className="space-y-5 border-l border-slate-200 pl-6">
            {LEARNING.map((item, i) => (
              <li key={i} className="relative">
                <span className="absolute -left-[31px] top-1 h-3 w-3 rounded-full bg-slate-900" />
                <div className="text-sm font-medium text-slate-500">{item.date}</div>
                <h3 className="mt-1 font-semibold">{item.title}</h3>
                <p className="mt-1 text-sm leading-6 text-slate-600">{item.details}</p>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="career" title="Werdegang">
          <div className="grid gap-8 md:grid-cols-2">
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-4 text-lg font-semibold">Stationen</h3>
                <ul className="space-y-3 text-sm text-slate-700">
                  {EXPERIENCE.map((item, i) => (
                    <li key={i}>
                      <span className="font-medium">{item.period}</span> — {item.place} {item.date && <span className="text-slate-500">({item.date})</span>}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-4 text-lg font-semibold">Kernkompetenzen</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Python",
                    "EDA",
                    "Datenvisualisierung",
                    "Feature Engineering",
                    "Machine Learning Modellselektion",
                    "ML Modell-Evaluierung",
                    "Zeitreihenanalyse",
                    "ETL Pipelines",
                    "SQL",
                    "Streamlit",
                  ].map((item) => (
                    <Badge key={item} variant="secondary">
                      {item}
                    </Badge>
                  ))}
                </div>
                <h3 className="mb-4 mt-6 text-lg font-semibold">Aktuell vertiefend</h3>
                <div className="flex flex-wrap gap-2">
                  {["MLOps", "Docker", "Energieanalytik", "GenAI", "Agentic AI"].map((item) => (
                    <Badge key={item}>{item}</Badge>
                  ))}
                </div>
                <p className="mt-6 text-sm leading-6 text-slate-600">
                  Fokus: saubere Datenpipelines, reproduzierbare Experimente, klare Visualisierung und ehrliche Dokumentation.
                </p>
              </CardContent>
            </Card>
          </div>
        </Section>

        <Section id="contact" title="Kontakt">
          <div className="flex flex-wrap gap-3">
            <Button asChild className="gap-2">
              <a href={PROFILE.email}>
                <Mail className="h-4 w-4" /> E-Mail
              </a>
            </Button>
            <Button asChild variant="outline" className="gap-2">
              <a href={PROFILE.links.github} target="_blank" rel="noreferrer">
                <Github className="h-4 w-4" /> GitHub
              </a>
            </Button>
            <Button asChild variant="outline">
              <a href={PROFILE.links.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </Button>
          </div>
        </Section>
      </main>

      <footer className="border-t border-slate-200 py-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} {PROFILE.name}. Built as a lightweight static portfolio.
      </footer>
    </div>
  );
}
