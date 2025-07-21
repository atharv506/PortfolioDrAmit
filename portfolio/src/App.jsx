import React, { useState, useEffect } from 'react';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Research from './components/Research';
import Publications from './components/Publications';
import Links from './components/Links';
import Teaching from './components/Teaching';
import Contact from './components/Contact';

function App() {
  const [page, setPage] = useState(window.location.hash || '#home');

  useEffect(() => {
    const onHashChange = () => setPage(window.location.hash || '#home');
    window.addEventListener('hashchange', onHashChange);
    window.scrollTo(0, 0);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, [page]);

  const renderPage = () => {
    switch(page) {
      case '#research': return <Research />;
      case '#publications': return <Publications />;
      case '#professional-links': return <Links />;
      case '#teaching': return <Teaching />;
      case '#contact': return <Contact />;
      default: return <Home />;
    }
  };

  return (
    <>
      <Navbar setPage={setPage} />
      {renderPage()}
    </>
  );
}

export default App;
