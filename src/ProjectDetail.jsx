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

const DETAIL_TEXT = {
  de: { enlarge: "Klicken zum Vergrößern", notFound: "Projekt nicht gefunden", back: "Zurück zur Übersicht", duration: "Dauer", challenges: "Hauptherausforderungen", dataset: "Datensatz", methodology: "Methodisches Vorgehen", insights: "Zentrale Erkenntnisse", visuals: "Visualisierungen", positives: "Was gut funktioniert hat", improvements: "Nächste Verbesserungen", repository: "GitHub-Repository", close: "Schließen" },
  en: { enlarge: "Click to enlarge", notFound: "Project not found", back: "Back to overview", duration: "Duration", challenges: "Main challenges", dataset: "Dataset", methodology: "Methodology", insights: "Key insights", visuals: "Visualisations", positives: "What worked well", improvements: "Next improvements", repository: "GitHub repository", close: "Close" },
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

function VisualCard({ visual, onOpen, text }) {
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
          <p className="mt-2 text-xs text-slate-500">{text.enlarge}</p>
        </CardContent>
      </Card>
    </button>
  );
}

export default function ProjectDetail({ project, language, onLanguageChange }) {
  const [selectedVisual, setSelectedVisual] = React.useState(null);
  const text = DETAIL_TEXT[language];

  const handleBack = () => {
    window.location.hash = "";
  };

  if (!project) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-16 text-center">
        <h1 className="text-3xl font-bold">{text.notFound}</h1>
        <Button onClick={handleBack} className="mt-6">
          {text.back}
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-between gap-4">
          <Button variant="ghost" onClick={handleBack} className="gap-2">
            <ArrowLeft className="h-4 w-4" /> {text.back}
          </Button>
          <div className="flex rounded-md border border-slate-200 bg-white p-0.5">
            {["de", "en"].map((option) => (
              <button key={option} type="button" onClick={() => onLanguageChange(option)} aria-pressed={language === option} className={`rounded px-2 py-1 text-xs font-semibold uppercase ${language === option ? "bg-slate-900 text-white" : "text-slate-600 hover:bg-slate-100"}`}>{option}</button>
            ))}
          </div>
        </div>

        <motion.header initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="mb-10">
          <div className="mb-3 flex flex-wrap gap-2">
            <Badge>{project.status}</Badge>
            <Badge variant="secondary">{project.date}</Badge>
          </div>
          <h1 className="text-3xl font-bold tracking-tight break-words hyphens-auto leading-tight sm:text-4xl lg:text-5xl">{project.title}</h1>
          <p className="mt-4 text-slate-600">{text.duration}: {project.duration}</p>
        </motion.header>

        <ProjectSection icon={Target} title={project.problem.title}>
          <Card>
            <CardContent className="p-6">
              <p className="leading-7 text-slate-700">{project.problem.content}</p>
              <h4 className="mt-6 font-semibold">{text.challenges}:</h4>
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
                <CardTitle>{text.dataset}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-6 text-slate-700">{project.approach.dataset}</p>
              </CardContent>
            </Card>
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>{text.methodology}</CardTitle>
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
              <CardTitle>{text.insights}</CardTitle>
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
          <ProjectSection icon={BarChart3} title={text.visuals}>
            <div className="grid gap-6 md:grid-cols-2">
              {project.visuals.map((visual, i) => (
                <VisualCard key={i} visual={visual} onOpen={setSelectedVisual} text={text} />
              ))}
            </div>
          </ProjectSection>
        )}

        <ProjectSection icon={BookOpen} title={project.learnings.title}>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>{text.positives}</CardTitle>
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
                <CardTitle>{text.improvements}</CardTitle>
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
                <Github className="h-4 w-4" /> {text.repository}
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
              {text.close}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

