// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

import Header from './components/Header';
import SurahCard from './components/SurahCard ';
import SearchBar from './components/SearchBar ';
import Surah from './pages/Surah ';


function App() {
  return (
    <Router>
      <div className="bg-gray-100 min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/surahcard" element={<SurahCard />} />
          <Route path="/search" element={<SearchBar />} />
          <Route path="/surah/:number" element={<Surah />} />
         
        </Routes>
      </div>
    </Router>
  );
}

export default App;
