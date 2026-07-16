# Projektpflege

Projektinformationen werden zentral im Verzeichnis `src/data/` gepflegt. UI-Komponenten sollen keine eigenen Projektkopien enthalten.

## Neues Projekt anlegen

### 1. Übersichtsdaten ergänzen

In `src/data/projects.js` einen Eintrag zu `PROJECTS` hinzufügen:

```js
{
  id: "project-id",
  tags: ["software", "ai"],
  date: "2026-07",
  stack: ["React", "Python"],
  resources: {
    repo: "https://github.com/...",
    live: null,
    video: null,
  },
  translations: {
    de: {
      title: "Projekttitel",
      summary: "Kurze Beschreibung für die Projektkarte.",
      highlights: ["Highlight 1", "Highlight 2"],
    },
    en: {
      title: "Project title",
      summary: "Short description for the project card.",
      highlights: ["Highlight 1", "Highlight 2"],
    },
  },
}
```

Englische Inhalte sind zunächst optional. Fehlt `translations.en`, verwendet der Zugriff automatisch `translations.de`.

### 2. Detaildaten ergänzen

In `src/data/projectDetails.js` einen Eintrag mit derselben ID hinzufügen:

```js
"project-id": {
  title: "Projekttitel",
  date: "2026-07",
  duration: "Vier Wochen",
  status: "Abgeschlossen",
  problem: {
    title: "Problem",
    content: "Beschreibung des Problems",
    challenges: ["Herausforderung 1"],
  },
  approach: {
    title: "Daten & Ansatz",
    dataset: "Beschreibung der Datengrundlage",
    methodology: ["Schritt 1", "Schritt 2"],
    tools: ["Python", "Pandas"],
  },
  solution: {
    title: "Lösung",
    content: "Beschreibung der Lösung",
    features: ["Funktion 1"],
  },
  results: {
    title: "Ergebnisse",
    metrics: [{ label: "Metrik", value: "Wert", change: "Kontext" }],
    insights: ["Erkenntnis 1"],
  },
  learnings: {
    title: "Learnings & Reflexion",
    positives: ["Was gut funktioniert hat"],
    improvements: ["Nächste Verbesserung"],
  },
  resources: {
    repo: "https://github.com/...",
  },
  visuals: [],
}
```

Englische Detailtexte werden als sprachabhängige Ergänzung in `src/data/projectDetails.en.js` gepflegt. Dort müssen nur übersetzbare Felder stehen; technische Werte, Ressourcen, Bilder und nicht überschriebene Felder werden aus `projectDetails.js` übernommen.

## Bilder hinzufügen

1. Bilder unter `public/img/<project-id>/` speichern.
2. In `projectDetails.js` über `getImagePath("<project-id>/<datei>")` referenzieren.
3. Aussagekräftigen Alternativtext und eine Beschreibung hinterlegen.

```js
visuals: [
  {
    title: "Visualisierungstitel",
    type: "chart",
    src: getImagePath("project-id/chart.png"),
    description: "Was die Visualisierung zeigt.",
  },
]
```

## Tags erweitern oder umbenennen

Tags werden in `PROJECT_TAGS` in `src/data/projects.js` definiert. Projekte speichern ausschließlich die stabile Tag-ID. Sichtbare Bezeichnungen können daher übersetzt oder geändert werden, ohne die Filterlogik anzupassen.

## Prüfen

Nach jeder Datenänderung:

```bash
npm run build
npm run dev
```

Danach Projektkarte, Filter, Detailseite, Bilder, externe Links und Zurück-Navigation manuell testen.
