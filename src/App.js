// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Posts from './pages/Posts';
import About from './pages/About';
import PostDetail from './pages/PostDetail';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Router>
        <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} /> {/* Pass darkMode prop */}
        <main className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/about" element={<About />} />
            <Route path="/posts/:id" element={<PostDetail />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
