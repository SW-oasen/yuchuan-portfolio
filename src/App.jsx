import React from "react";
import Portfolio from "./yuchuan_portfolio_static_site_starter.jsx";
import ProjectDetail from "./ProjectDetail.jsx";

// Simple router based on URL hash
export default function App() {
  const [currentView, setCurrentView] = React.useState(() => {
    const hash = window.location.hash;
    if (hash.startsWith('#/project/')) {
      return { type: 'project', id: hash.replace('#/project/', '') };
    }
    return { type: 'portfolio' };
  });

  React.useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#/project/')) {
        setCurrentView({ type: 'project', id: hash.replace('#/project/', '') });
      } else {
        setCurrentView({ type: 'portfolio' });
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  if (currentView.type === 'project') {
    return <ProjectDetail projectId={currentView.id} />;
  }

  return <Portfolio />;
}