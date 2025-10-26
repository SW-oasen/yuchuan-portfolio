# Project Detail System - Setup Guide

## 📁 Struktur

Das System verwendet eine flexible Datenstruktur in `ProjectDetail.jsx`, um detaillierte Projektpräsentationen zu erstellen.

## 🎯 Verfügbare Projekte

Aktuell implementiert:
- ✅ **airbnb-berlin** - Vollständig konfiguriert
- 🚧 **global-power-plants** - Template verfügbar
- 🚧 **store-sales-forecast** - Template verfügbar  
- 🚧 **telco-customer-churn** - Template verfügbar
- 🚧 **turbine-maintenance** - Template verfügbar

## 📋 Template für neue Projekte

```javascript
"project-key": {
  title: "Projekt Titel",
  date: "YYYY-MM",
  duration: "X Wochen",
  status: "Abgeschlossen|In Bearbeitung",
  
  problem: {
    title: "Problem",
    content: "Beschreibung des Problems...",
    challenges: [
      "Herausforderung 1",
      "Herausforderung 2"
    ]
  },

  approach: {
    title: "Daten & Ansatz", 
    dataset: "Dataset Beschreibung",
    methodology: [
      "Schritt 1",
      "Schritt 2"
    ],
    tools: ["Python", "Pandas", "etc."]
  },

  solution: {
    title: "Lösung",
    content: "Lösungsbeschreibung...",
    features: [
      "Feature 1",
      "Feature 2"
    ]
  },

  results: {
    title: "Ergebnisse",
    metrics: [
      { label: "Metrik", value: "Wert", change: "±X%" }
    ],
    insights: [
      "Erkenntnis 1",
      "Erkenntnis 2"
    ]
  },

  learnings: {
    title: "Learnings & Reflexion",
    positives: [
      "Was gut lief"
    ],
    improvements: [
      "Was beim nächsten Mal besser"
    ]
  },

  resources: {
    repo: "GitHub URL",
    notebook: "Notebook Pfad",
    report: "Report Pfad"
  },

  visuals: [
    {
      title: "Visual Titel",
      type: "image|chart|gif",
      src: "/pfad/zum/bild.png",
      description: "Beschreibung"
    }
  ]
}
```

## 🖼️ Bilder hinzufügen

1. **Bilder speichern** in `/public/img/projektname/`
2. **Pfad referenzieren** als `/img/projektname/bild.png`
3. **3-5 aussagekräftige Visuals** pro Projekt

Beispiel-Struktur:
```
public/
  img/
    airbnb-berlin/
      - price-heatmap.png
      - listing-types.png
      - availability-ratings.png
    global-power-plants/
      - power-distribution.png
      - capacity-trends.png
    store-sales-forecast/
      - forecast-accuracy.png
      - feature-importance.png
```

## 🔗 Navigation einrichten

In `yuchuan_portfolio_static_site_starter.jsx` die Projekt-Links aktualisieren:

```jsx
// Statt nur repo Links:
<Button variant="outline" asChild>
  <a href={`/project/${projectKey}`}>
    <ExternalLink className="h-4 w-4 mr-2" /> Details
  </a>
</Button>
```

## 🚀 Nächste Schritte

1. **Projekt-Daten sammeln** aus den jeweiligen Workspaces
2. **Screenshots/Visualisierungen** erstellen und speichern  
3. **PROJECT_DATA erweitern** mit den anderen 4 Projekten
4. **Routing einrichten** für Navigation zwischen Portfolio und Details
5. **Live-Testing** mit echten Daten

## 💡 Erweiterungen

- **Bildergalerie** mit Lightbox-Funktionalität
- **Code-Snippets** direkt in der Präsentation
- **Performance-Metriken** mit Charts
- **Download-Links** für Reports/Notebooks
- **Kommentar-System** für Feedback

Willst du dass ich die anderen Projekte als Templates vorbereite oder soll ich dir dabei helfen, die echten Daten aus deinen Workspaces zu übertragen?