// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Services from './pages/Services';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-slate-100">
        <Header /> {/* Header now appears on all pages */}
        
        <div className="container mx-auto px-4 py-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="services" element={<Services />} />
            {/* Add other routes here - Header will stay persistent */}
          </Routes>
        </div>
        
        {/* Footer would go here if you had one */}
      </div>
    </Router>
  );
}

export default App;