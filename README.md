# Yuchuan Portfolio

Persönliches Portfolio mit Projekten aus Softwareentwicklung, Data Science und künstlicher Intelligenz.

## Live-Demo

[https://sw-oasen.github.io/yuchuan-portfolio](https://sw-oasen.github.io/yuchuan-portfolio)

## Tech-Stack

- React 18 und Vite
- Tailwind CSS und shadcn/ui
- Lucide React
- Framer Motion
- Hash-basiertes Routing für GitHub Pages

## Projektstruktur

```text
src/
├── components/ui/                         # Wiederverwendbare UI-Komponenten
├── data/
│   ├── projects.js                        # Zentraler Projektkatalog und Zugriffsfunktionen
│   └── projectDetails.js                  # Ausführliche Projektinhalte
├── i18n/config.js                         # Unterstützte Sprachen und Fallback
├── App.jsx                                # Hash-Routing und Projektauswahl
├── ProjectDetail.jsx                      # Darstellung einer Projekt-Detailseite
├── yuchuan_portfolio_static_site_starter.jsx # Startseite
└── index.css                              # Globale Styles
```

Die React-Komponenten enthalten keine Projektkataloge. Start- und Detailseite beziehen ihre Daten über `getProjects()` beziehungsweise `getProjectById()` aus `src/data/projects.js`.

## Projektdaten pflegen

- Karteninformationen, Tags, Stack und Ressourcen werden in `src/data/projects.js` gepflegt.
- Ausführliche Inhalte und Visualisierungen liegen in `src/data/projectDetails.js`.
- Die stabile Projekt-ID muss in beiden Dateien identisch sein.
- Projektbilder liegen unter `public/img/<project-id>/`.

Eine vollständige Vorlage und Pflegehinweise stehen in [PROJECT_DETAILS_GUIDE.md](PROJECT_DETAILS_GUIDE.md).

## Sprachvorbereitung

Die Website kann über den Umschalter in Kopfzeile und Detailansicht zwischen Deutsch und Englisch wechseln. Die Auswahl wird in `localStorage` gespeichert und beim nächsten Besuch wiederhergestellt. Deutsch ist die Standardsprache. Der Projektkatalog trennt sprachneutrale Felder von übersetzbaren Inhalten:

```js
translations: {
  de: {
    title: "Deutscher Titel",
    summary: "Deutsche Zusammenfassung",
    highlights: [],
  },
  en: {
    title: "English title",
    summary: "English summary",
    highlights: [],
  },
}
```

`src/i18n/config.js` registriert `de` und `en`. Projektkarten, Navigation, Lernreise, Karriere und die fachlichen Inhalte der Detailseiten sind übersetzt. Technische Werte, Links, Bilder und Toolnamen werden gemeinsam genutzt. Fehlt künftig eine Übersetzung, fällt der Datenzugriff automatisch auf Deutsch zurück.

## Lokale Entwicklung

```bash
git clone https://github.com/SW-oasen/yuchuan-portfolio.git
cd yuchuan-portfolio
npm install
npm run dev
```

Die lokale Anwendung läuft standardmäßig unter `http://localhost:5173/yuchuan-portfolio/`.

```bash
npm run build    # Produktions-Build erstellen
npm run preview  # Produktions-Build lokal testen
npm run deploy   # Auf GitHub Pages veröffentlichen
```

Hinweis: Das vorhandene `lint`-Skript benötigt noch eine ESLint-Konfigurationsdatei.

## Kontakt

Yuchuan Liu — Berlin  
[E-Mail](mailto:see.wind@gmx.de) · [GitHub](https://github.com/SW-oasen) · [LinkedIn](https://de.linkedin.com/in/yuchuan-liu-58309a274)
