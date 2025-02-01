import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Form from './Form'
import Welcome from './Welcome'
import Signup from './Signup';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Form />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App
