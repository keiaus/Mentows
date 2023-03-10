import React from 'react';
import './App.css'
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './pages';
import About from './pages/about';
import Documentation from './pages/documentation';
import Downloads from './pages/downloads';
import Topics from './pages/topics';
import Login from './pages/login';

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        {/* <Route path='/' exact component={Home} /> */}
        <Route path='/about' exact component={About} />
        <Route path='/documentation' exact component={Documentation} />
        <Route path='/downloads' exact component={Downloads} />
        <Route path='/topics' exact component={Topics} />
        <Route path='/login' exact component={Login} />
      </Routes>
    </Router>
  );
}

export default App;