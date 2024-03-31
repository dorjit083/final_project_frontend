import React from 'react';

import { NavBar } from './components/NavBar';
import { Route, Routes } from 'react-router-dom';
import { About, Contact, Home, UserIncentives } from './components/pages';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/UserIncentives" element={<UserIncentives />} />
      </Routes>
    </div>
  );
}

export default App;
