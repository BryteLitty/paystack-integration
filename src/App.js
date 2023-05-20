import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import PaymentForm from './components/PaymentForm';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={ <Home />} />
        <Route path='/home' element={ <Home />} />
        <Route path='/payment' element={ <PaymentForm /> } />
      </Routes>
    </Router>
  );
}

export default App;
