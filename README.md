# Yuchuan Portfolio

Persönliches Datenanalyse-Portfolio — Projektübersicht, Lernreise und Werdegang.

## Live Demo

[https://sw-oasen.github.io/yuchuan-portfolio](https://sw-oasen.github.io/yuchuan-portfolio)

## Tech Stack

- **Frontend**: React 18, Vite
- **Styling**: Tailwind CSS, shadcn/ui
- **Icons**: Lucide React
- **Animationen**: Framer Motion
- **Routing**: Hash-basiertes Routing (GitHub Pages kompatibel)

## Projektstruktur

```
src/
├── components/ui/          # Button, Card, Badge
├── lib/                    # Hilfsfunktionen
├── App.jsx                 # Router
├── main.jsx                # Einstiegspunkt
├── ProjectDetail.jsx       # Detailseiten der Projekte
├── yuchuan_portfolio_static_site_starter.jsx  # Hauptkomponente
└── index.css               # Globale Styles
public/
├── img/                    # Projektbilder
└── Stromverbrauch_Vorhersagen.pdf  # Präsentation Stromverbrauchsprognose
```

## Lokale Entwicklung

```bash
git clone https://github.com/SW-oasen/yuchuan-portfolio.git
cd yuchuan-portfolio
npm install
npm run dev
```

Läuft unter `http://localhost:5173/yuchuan-portfolio/`

```bash
npm run build    # Produktions-Build
npm run preview  # Build lokal testen
npm run deploy   # Auf GitHub Pages deployen
```

## Projekte

### 1. Stromverbrauchsprognose — Zeitreihenanalyse
- **Tech**: Python, Pandas, scikit-learn, XGBoost, Plotly, Jupyter
- **Highlights**: Feature Engineering für Zeitreihen, zeitbasierte Kreuzvalidierung, XGBoost vs. Baseline-Vergleich
- **Ressourcen**: [GitHub](https://github.com/SW-oasen/electricity_demand_forecast) · Präsentation (PDF im Repo)

### 2. Turbinen-ML-Pipeline — Predictive Maintenance (NASA CMAPSS)
- **Tech**: Python, scikit-learn, XGBoost, Pandas, Jupyter
- **Highlights**: RUL-Vorhersage, Feature Engineering auf Sensordaten, Modellvergleich
- **Ressourcen**: [GitHub](https://github.com/SW-oasen/turbine-maintenance)

### 3. Telco Customer Churn — Klassifikation
- **Tech**: Python, scikit-learn, Optuna, SHAP, Jupyter
- **Highlights**: Klassenbalancierung, Hyperparameter-Tuning, Erklärbarkeit mit SHAP
- **Ressourcen**: [GitHub](https://github.com/SW-oasen/telco-customer-churn)

### 4. Airbnb Berlin — Explorative Datenanalyse
- **Tech**: Python, Pandas, Plotly, Jupyter
- **Highlights**: Preisanalyse nach Bezirk, Angebotstypen, Review-Korrelationen
- **Ressourcen**: [GitHub](https://github.com/SW-oasen/airbnb-eda-berlin)

## Kontakt

**Yuchuan Liu** — Berlin  
[see.wind@gmx.de](mailto:see.wind@gmx.de) · [GitHub](https://github.com/SW-oasen)
- 💼 [LinkedIn](https://de.linkedin.com/in/yuchuan-liu-58309a274)

## � License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

This is a personal portfolio project. If you find any issues or have suggestions, feel free to open an issue or reach out directly.

---

*Built with ❤️ using React, Vite, and modern web technologies*