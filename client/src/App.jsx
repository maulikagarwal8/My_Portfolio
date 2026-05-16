import React,{useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';

function App() {
  useEffect(() => {
    const BACKEND_URL = "https://maulik-personal-portfolio-backend.onrender.com";
    const wakeUpBackend = async () => {
      try {
        await fetch(`${BACKEND_URL}/api/ping`);
        console.log("Backend successfully awakened!");
      } 
      catch (error) {
        console.error("Failed to ping backend:", error);
      }
    };
    wakeUpBackend();}, 
  []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App