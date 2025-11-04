import React from "react";
import Portfolio from "./yuchuan_portfolio_static_site_starter.jsx";
import ProjectDetail from "./ProjectDetail.jsx";

// Simple router based on URL hash
export default function App() {
  const [currentView, setCurrentView] = React.useState('home');
  const [selectedProject, setSelectedProject] = React.useState(null);

  // Add scroll to top effect when view changes
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView, selectedProject]);

  React.useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      console.log('Hash changed to:', hash); // Debug log
      
      if (hash.startsWith('project/')) {
        const projectId = hash.replace('project/', '');
        console.log('Setting project ID to:', projectId); // Debug log
        setSelectedProject(projectId);
        setCurrentView('project');
      } else {
        setCurrentView('home');
        setSelectedProject(null);
      }
    };

    // Check initial hash on load
    handleHashChange();
    
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  if (currentView === 'project') {
    return <ProjectDetail projectId={selectedProject} />;
  }

  return <Portfolio />;
}