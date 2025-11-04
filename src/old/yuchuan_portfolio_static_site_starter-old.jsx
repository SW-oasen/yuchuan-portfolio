import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Mail, PlayCircle, FileText, Eye, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

// ======== DATA: Edit this to update your site ========
const PROFILE = {
  name: "Yuchuan",
  title: "Software Engineer → Data/ML Engineer in progress",
  subtitle: "Portfolio, learning journey, and project highlights",
  tagline:
    "Von Engineering zu Data Science — praxisorientiert, dokumentiert, stetig lernend.",
  email: "mailto:see.wind@gmx.de", 
  location: "Berlin, Germany",
  links: {
    github: "https://github.com/SW-oasen",
    medium: "https://medium.com/",
    linkedin: "https://de.linkedin.com/in/yuchuan-liu-58309a274",
  },
};

const PROJECTS = [
  {
    id: "airbnb-berlin", // Changed from 'key' to 'id'
    title: "Airbnb Berlin — Exploratory Data Analysis",
    date: "2025-08",
    summary:
      "EDA of Airbnb listings in Berlin with visual insights and data cleaning pipeline.",
    highlights: [
      "Data cleaning & feature engineering",
      "Interactive visuals (matplotlib/Plotly)",
      "Actionable insights for pricing & demand",
      "Price prediction with traditional ML, and AutoML FLAML and H2O"
    ],
    stack: ["Python", "Pandas", "Plotly", "Jupyter", "AutoML"],
    repo: "https://github.com/SW-oasen/airbnb-eda-berlin",
    live: null,
    video: null,
  },
  {
    id: "telco-customer-churn", // Changed from 'key' to 'id'
    title: "Telco Customer Churn — Classification",
    date: "2025-10",
    summary:
      "End-to-end churn modeling with feature engineering, evaluation, and reporting.",
    highlights: [
      "Data preprocessing & imputation",
      "Model evaluation & ROC/AUC",
      "Explainability with SHAP/Permutation",
    ],
    stack: ["Python", "scikit-learn", "Pandas", "Matplotlib"],
    repo: "https://github.com/SW-oasen/telco-customer-churn",
    live: null,
    video: null,
  },
  {
    id: "store-sales-forecast", // Changed from 'key' to 'id'
    title: "Store Sales Forecast — Time Series Modeling",
    date: "2025-09",
    summary:
      "Forecasting weekly sales; model comparison and error analysis with permutation importance.",
    highlights: [
      "Baseline vs. advanced models",
      "Permutation importance",
      "Cross-validation & diagnostics",
    ],
    stack: ["Python", "scikit-learn", "XGBoost", "MLflow (local)", "Pandas"],
    repo: "https://github.com/SW-oasen/store-sales-forecast",
    live: null,
    video: null,
  },
  {
    id: "global-power-plants", // Changed from 'key' to 'id'
    title: "Global Power Plants — Data Pipeline & Dashboard",
    date: "2025-09",
    summary:
      "ETL on global power plant datasets with a cleaned dataset and analytics-ready schema.",
    highlights: [
      "Schema normalization",
      "Data validation & profiling",
      "Reusable pipeline components",
    ],
    stack: ["Python", "Pandas", "Data visualization", "SQL"],
    repo: "https://github.com/SW-oasen/global-power-plants",
    live: null,
    video: null,
  },
  {
    id: "turbine-maintenance", // Changed from 'key' to 'id'
    title: "Turbine Maintenance ETL Pipeline (in progress)",
    date: "2025-10",
    summary:
      "ETL → feature store → model training → report. Currently finalizing orchestration with n8n.",
    highlights: [
      "Prefect/n8n orchestration (WIP)",
      "dbt-style transformations (WIP)",
      "Power BI refresh automation (planned)",
    ],
    stack: ["Python", "Pandas", "Prefect or n8n", "Power BI", "PyTorch (CUDA)"],
    repo: "",
    live: null,
    video: null,
  },
];

const LEARNING = [
  {
    date: "2024",
    title: "Lokale RAG Experimente mit ollama und n8n",
    details:
      "Mit Docker Compose lokale n8n Instanz mit ollama/mistral aufgesetzt, mit lokalen Datenquellen zu verbinden.",
  },
  {
    date: "2025-07",
    title: "Kaggle Onlinekurse - Python, Datenanalyse, ML, Deep Learning",
    details:
      "Data Science und ML Grundlagen via Kaggle Kurse erlernt, inkl. praktischer Übungen.",
  },
    {
    date: "2025-08",
    title: "Portfolio-Projekte Anfang",
    details:
      "EDA, Data Cleaning, Modellierung und Visualisierung und Dokumentation.",
  },
  {
    date: "2025-09",
    title: "Deep Learning, Microsoft Power BI und Datenvisualisierung",
    details:
      "Image Classification Projekt. Portable Dashboards erstellt, Datenmodelle optimiert, Berichte automatisiert.",
  },
  {
    date: "2025-10",
    title: "GPU Setup for PyTorch",
    details:
      "CUDA-Installation für schnellere Trainingsläufe — Ziel erreicht: Faktor x~10 Speedup gegenüber CPU.",
  },
  {
    date: "2025-10",
    title: "Automatische Workflows mit n8n für ETL und Reporting",
    details:
      "n8n via Docker Compose installiert; erste Workflows geplant (ETL orchestration, Reporting).",
  }
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
        </div>
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
              <a href="#projects"><FileText className="h-4 w-4 mr-2"/>Case Studies</a>
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
            <h3 className="font-semibold mb-2">Tech‑Stack (Auswahl)</h3>
            <div className="flex flex-wrap gap-2">
              {["Python","Pandas","scikit-learn","XGBoost","PyTorch","SQL","Power BI","Docker","n8n","Prefect","dbt (Basics)","Git"].map((t, i)=> (
                <Badge key={i} variant="secondary" className="px-3 py-1 rounded-full">{t}</Badge>
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
            <a href={PROFILE.email}><Mail className="h-4 w-4 mr-2"/>Email</a>
          </Button>
          <Button asChild variant="outline">
            <a href={PROFILE.links.github} target="_blank" rel="noreferrer"><Github className="h-4 w-4 mr-2"/>GitHub</a>
          </Button>
          <Button asChild variant="outline">
            <a href={PROFILE.links.medium} target="_blank" rel="noreferrer"><ExternalLink className="h-4 w-4 mr-2"/>Blog</a>
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
