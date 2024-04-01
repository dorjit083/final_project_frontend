import React from 'react';

import { NavBar } from './components/NavBar';
import { Route, Routes } from 'react-router-dom';
import { About, Contact, Home, UserIncentives, RegistrationPage/*, Login_Page*/, StudentPage} from './components/pages';


function App() {
  return (
    //can have different component outside of the routers
    <div className="App">
      <NavBar />
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/UserIncentives" element={<UserIncentives />} />
        <Route path="/RegistrationPage" element={<RegistrationPage/>}/>
        {/* <Route path="/Login_Page" element={<Login_Page/>}/> */}
        <Route path="/StudentPage" element={<StudentPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
