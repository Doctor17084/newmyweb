import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Home from './page/Home';
import Movies from './page/Movies';
import Series from './page/Series';
import Anime from './page/Anime';
import Reques from './page/Reques';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <main className="content-wrapper">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/series" element={<Series />} />
            <Route path="/anime" element={<Anime />} />
            <Route path="/requests" element={<Reques />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;