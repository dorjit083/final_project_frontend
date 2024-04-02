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
      const response = await fetch('/password/addPassword', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Registration successful');
        alert("Registration Successful");
      } else {
        alert("Registration Failed!")
        setError(data.message);
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

      <button style={{ color: 'blueviolet', marginTop: '60px' }} onClick={() => navigate('/LoginPage')}>Login</button>
    </div>
  );
};
