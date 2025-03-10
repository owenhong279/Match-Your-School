import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import Introduction from './components/Introduction.js';
import TellUsAboutYou from './components/TellUsAboutYou.js';
import React from 'react';

function HomePage(){
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('introduction');
    }

    return (
        <div className="container">
            <div className="title">
                <h1>Discover Your Path</h1>
            </div>
            <button className="startButton" onClick={handleClick}>
                Get Started
            </button>
        </div>
    );
}


function App() {
  return (
    <Router>
        <div className="App">
            <Routes>
                <Route path = "/" element={<HomePage />} />
                <Route path = "/introduction" element={<Introduction />} />
                <Route path = "/tellusaboutyou" element={<TellUsAboutYou />} />
            </Routes>

        </div>

    </Router>
    
  );
}

export default App;
