import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Mail, ChevronRight, Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { getProjects, getProjectTagLabels, PROJECT_TAGS } from "@/data/projects";

// ======== DATA: Edit this to update your site ========
const PROFILE = {
  name: "Yuchuan",
  title: "Software Engineer | Data Scientist | AI Engineer",
  subtitle: "Ausgewählte Projekte aus Softwareentwicklung, Data Science und Künstlicher Intelligenz",
  tagline: "Von Software-Entwicklung zu Data Science, Machine Learning und KI-gestützten Lösungen.",
  email: "mailto:see.wind@gmx.de",
  location: "Berlin",
  links: {
    github: "https://github.com/SW-oasen",
    linkedin: "https://de.linkedin.com/in/yuchuan-liu-58309a274",
  },
};

const LEARNING = [
  {
    date: "2026-07",
    title: "Store Finder Plattform — Full-Stack-Projekt Prototype",
    details:
      "Full-Stack-Projekt zur Entwicklung einer Store Finder Plattform mit React, TypeScript, Vite, Java 21, Spring Boot, PostgreSQL und Leaflet. Funktionen umfassen Suche nach Geschäften, interaktive Karten, rollenbasierte Verwaltung und mehrsprachige Benutzeroberfläche.",
  },
  {
    date: "2026-06",
    title: "AI RAG-System mit lokalen LLMs und OCR",
    details:
      "Lokales RAG-System für Dokumentenanalyse mit Ollama, ChromaDB, Sentence Transformers und Tesseract OCR entwickelt. Streamlit-App für Upload, Analyse und semantische Suche implementiert.",
  },
  {
    date: "2026-06",
    title: "Überarbeitung bestehender Turbine-Maintenance-Projekt und Telco-Customer-Churn-Projekt",
    details:
      "Alte Projekte überarbeitet mit Fokus auf saubere ETL-Pipeline, Feature Engineering (Sensor-Trendfeatures, RUL Capping) und Streamlit-Dashboard-Visualisierung.",
  },
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
      "End-to-End-Pipeline und Streamlit-App für Day-Ahead-Lastprognosen umgesetzt – inklusive SMARD-Live-Daten, offizieller SMARD-Prognose und historischem Drei-Kurven-Vergleich mit MAE und RMSE.",
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
    date: "2025-11",
    title: "Anfang der Ausbildung zum Data/ML Engineer bei Stackfuel",
    details:
      "Die Ausbildung zum Data/ML Engineer bei Stackfuel begonnen.",
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

const LEARNING_EN = [
  ["Store Finder Platform — Full-Stack Prototype", "Built a full-stack store finder with React, TypeScript, Java 21, Spring Boot, PostgreSQL and Leaflet, including search, maps, role-based administration and a multilingual interface."],
  ["AI RAG System with Local LLMs and OCR", "Developed a local document-analysis system with Ollama, ChromaDB, Sentence Transformers and Tesseract OCR, including upload, analysis and semantic search."],
  ["Modernised Predictive Maintenance and Customer Churn Projects", "Reworked earlier projects with a focus on clean ETL pipelines, feature engineering and Streamlit dashboard visualisation."],
  ["Electricity Price Forecast with an Operational ML Pipeline", "Implemented a day-ahead price forecast using SMARD, Open-Meteo and MaStR data, XGBoost, stacked forecast features and a Streamlit dashboard."],
  ["Electricity Demand Forecast with Time-Series Analysis", "Implemented an end-to-end day-ahead demand pipeline and Streamlit app with live SMARD data, the official forecast and historical MAE/RMSE comparisons."],
  ["Completed Data/ML Engineer Training at StackFuel", "Passed the final Data Science examination with a taxi waiting-time prediction project."],
  ["Completed the Data Analysis Module at StackFuel", "Passed the Data Analysis examination with a customer churn analysis project."],
  ["Completed the Business Intelligence / Power BI Module", "Passed the Business Intelligence examination with a flight delay analysis project."],
  ["Started Data/ML Engineer Training at StackFuel", "Began the professional Data/ML Engineer training programme at StackFuel."],
  ["Deep Learning, Microsoft Power BI and Data Visualisation", "Completed an image-classification project, created Power BI dashboards, optimised data models and automated reports."],
  ["Started Portfolio Projects", "Worked on exploratory analysis, data cleaning, modelling, visualisation and documentation."],
  ["Kaggle Courses: Python, Data Analysis, ML and Deep Learning", "Learned Data Science and machine-learning foundations through hands-on Kaggle courses."],
  ["Local RAG Experiments with Ollama and n8n", "Set up a local n8n and Ollama/Mistral environment with Docker Compose and connected it to local data sources."],
].map(([title, details], index) => ({ ...LEARNING[index], title, details }));

const EXPERIENCE_EN = [
  { period: "Data Scientist vocational training", place: "StackFuel", date: "2025–2026" },
  { period: "Network Security Support Engineer", place: "macmon", date: "2023–2025" },
  { period: "Senior Support Engineer", place: "Spirent", date: "2010–2023" },
  { period: "Order Manager", place: "Nokia Siemens", date: "2008–2010" },
  { period: "Diploma in Business Engineering (Computer Science)", place: "TU Berlin", date: "2000–2007" },
];

const UI_TEXT = {
  de: {
    subtitle: PROFILE.subtitle,
    tagline: PROFILE.tagline,
    projects: "Projekte",
    learning: "Lernfortschritte",
    career: "Werdegang",
    contact: "Kontakt",
    viewProjects: "Projekte ansehen",
    viewDetails: "Details ansehen",
    filterLabel: "Projekte nach Kategorie filtern",
    menuLabel: "Navigation öffnen",
    contactText: "Interesse an Zusammenarbeit, Austausch oder Projektfeedback? Schreib mir gerne.",
    stations: "Stationen",
    skills: "Kernkompetenzen",
    learningNow: "Aktuell vertiefend",
    focus: "Fokus: saubere Datenpipelines, reproduzierbare Experimente, klare Visualisierung und nachvollziehbare Dokumentation.",
    skillItems: ["Python", "EDA", "Datenvisualisierung", "Feature Engineering", "Machine Learning Modellselektion", "ML Modell-Evaluierung", "Zeitreihenanalyse", "ETL Pipelines", "SQL", "Streamlit"],
  },
  en: {
    subtitle: "Selected projects in software engineering, data science and artificial intelligence",
    tagline: "From software engineering to data science, machine learning and AI-powered solutions.",
    projects: "Projects",
    learning: "Learning journey",
    career: "Career",
    contact: "Contact",
    viewProjects: "View projects",
    viewDetails: "View details",
    filterLabel: "Filter projects by category",
    menuLabel: "Open navigation",
    contactText: "Interested in collaborating, exchanging ideas or sharing project feedback? Feel free to contact me.",
    stations: "Experience",
    skills: "Core skills",
    learningNow: "Currently developing",
    focus: "Focus: clean data pipelines, reproducible experiments, clear visualisation and transparent documentation.",
    skillItems: ["Python", "EDA", "Data visualisation", "Feature engineering", "Machine-learning model selection", "ML model evaluation", "Time-series analysis", "ETL pipelines", "SQL", "Streamlit"],
  },
};

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

function ProjectCard({ project, tagLabels, viewDetailsLabel }) {
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
            <div className="mt-3 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="outline">
                  {tagLabels[tag]}
                </Badge>
              ))}
            </div>
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
              {viewDetailsLabel} <ChevronRight className="h-4 w-4" />
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

export default function Portfolio({ language, onLanguageChange }) {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [activeTag, setActiveTag] = React.useState("all");
  const projects = getProjects(language);
  const projectTagLabels = getProjectTagLabels(language);
  const text = UI_TEXT[language];
  const learning = language === "en" ? LEARNING_EN : LEARNING;
  const experience = language === "en" ? EXPERIENCE_EN : EXPERIENCE;

  const filteredProjects =
    activeTag === "all"
      ? projects
      : projects.filter((project) => project.tags.includes(activeTag));

  const navLinks = [
    { href: "#projects", label: text.projects },
    { href: "#learning", label: text.learning },
    { href: "#career", label: text.career },
    { href: "#contact", label: text.contact },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#" className="text-lg font-bold">
            {PROFILE.name}
          </a>
          <nav className="hidden items-center gap-6 text-sm font-medium sm:flex">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="hover:text-slate-600">
                {link.label}
              </a>
            ))}
          </nav>
          <div className="ml-auto mr-3 flex rounded-md border border-slate-200 p-0.5 sm:ml-4 sm:mr-0">
            {["de", "en"].map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => onLanguageChange(option)}
                aria-pressed={language === option}
                className={`rounded px-2 py-1 text-xs font-semibold uppercase ${language === option ? "bg-slate-900 text-white" : "text-slate-600 hover:bg-slate-100"}`}
              >
                {option}
              </button>
            ))}
          </div>
          <button
            className="sm:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={text.menuLabel}
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
            <p className="mt-4 text-xl text-slate-600">{text.subtitle}</p>
            <p className="mt-4 text-slate-600">{text.tagline}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild>
                <a href="#projects">{text.viewProjects}</a>
              </Button>
              <Button asChild variant="outline" className="gap-2">
                <a href={PROFILE.links.github} target="_blank" rel="noreferrer">
                  <Github className="h-4 w-4" /> GitHub
                </a>
              </Button>
            </div>
          </motion.div>
        </section>

        <Section id="projects" title={text.projects}>
          <div className="mb-6 flex flex-wrap gap-2" aria-label={text.filterLabel}>
            {PROJECT_TAGS.map((tag) => {
              const isActive = activeTag === tag.id;

              return (
                <Button
                  key={tag.id}
                  type="button"
                  variant={isActive ? "default" : "outline"}
                  size="sm"
                  aria-pressed={isActive}
                  onClick={() => setActiveTag(tag.id)}
                >
                  {projectTagLabels[tag.id]}
                </Button>
              );
            })}
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                tagLabels={projectTagLabels}
                viewDetailsLabel={text.viewDetails}
              />
            ))}
          </div>
        </Section>

        <Section id="learning" title={text.learning}>
          <ol className="space-y-5 border-l border-slate-200 pl-6">
            {learning.map((item, i) => (
              <li key={i} className="relative">
                <span className="absolute -left-[31px] top-1 h-3 w-3 rounded-full bg-slate-900" />
                <div className="text-sm font-medium text-slate-500">{item.date}</div>
                <h3 className="mt-1 font-semibold">{item.title}</h3>
                <p className="mt-1 text-sm leading-6 text-slate-600">{item.details}</p>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="career" title={text.career}>
          <div className="grid gap-8 md:grid-cols-2">
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-4 text-lg font-semibold">{text.stations}</h3>
                <ul className="space-y-3 text-sm text-slate-700">
                  {experience.map((item, i) => (
                    <li key={i}>
                      <span className="font-medium">{item.period}</span> — {item.place} {item.date && <span className="text-slate-500">({item.date})</span>}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-4 text-lg font-semibold">{text.skills}</h3>
                <div className="flex flex-wrap gap-2">
                  {text.skillItems.map((item) => (
                    <Badge key={item} variant="secondary">
                      {item}
                    </Badge>
                  ))}
                </div>
                <h3 className="mb-4 mt-6 text-lg font-semibold">{text.learningNow}</h3>
                <div className="flex flex-wrap gap-2">
                  {["MLOps", "Docker", "GenAI", "Agentic AI"].map((item) => (
                    <Badge key={item}>{item}</Badge>
                  ))}
                </div>
                <p className="mt-6 text-sm leading-6 text-slate-600">
                  {text.focus}
                </p>
              </CardContent>
            </Card>
          </div>
        </Section>

        <Section id="contact" title={text.contact}>
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
