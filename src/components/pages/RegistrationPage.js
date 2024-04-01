import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./RegistrationPage.css";



export const RegistrationPage = () => {

  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegistration = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/password/addPassword', { // Replace with your actual backend URL for registration
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }), // Assuming you send username and password for registration
      });

      const data = await response.json();

      if (response.ok) {
        // Registration successful, redirect or display success message
        console.log('Registration successful');
        alert("Registration Successful");

        //******************
        // navigate("/Login_Page");
        //******************

      } else {
        // Registration failed, display error message
        alert("Registration Failed!")
        setError(data.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/password/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.text();

      if (response.ok) {
        console.log('Login successful');
        alert(data);

        navigate("/StudentPage")

      } else {
        alert("Login Failed!")
        setError("Invalid username or password");
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  return (
    <div className='div_registration'>
      <h2 className='registration_h2'>Register</h2>
      {error && <p>{error}</p>}
      <form className='form_registration' onSubmit={handleRegistration}>
        <div className='form_div_username'>
          <label className='username_registration'>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className='form_div_password'>
          <label className='password_registration'>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Register</button>
      </form>


      <div style={{height:"40px", marginTop:"20px"}}>
----------------------------------------------
      </div>


      <h2 className='registration_h2'>Login</h2>
      <form className='form_login' >
        <div className='form_div_username'>
          <label className='username_login'>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className='form_div_password'>
          <label className='password_login'>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" onClick={handleLogin}>Login</button>
      </form>
    </div>
    
    
  );
};
