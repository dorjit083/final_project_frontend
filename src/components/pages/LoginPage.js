import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importing useNavigate
import "./LoginPage.css";

export const LoginPage = () => {
  const [username, setUsername] = useState(''); // Define username state
  const [password, setPassword] = useState(''); // Define password state
  const [error, setError] = useState(''); // Define error state
  const navigate = useNavigate(); // Assigning useNavigate to navigate

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

        navigate("/StudentPage");

      } else {
        alert("Login Failed! \n\n" + error);
        setError("Invalid username or password");
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  return (
    <div className='div_login'>
    
      <h2 className='login_h2'>Login</h2>
      <form className='form_login' onSubmit={handleLogin}>
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
        <button type="submit">Login</button>
      </form>
      <div></div>
      <button style={{color:'blueviolet', marginTop:'60px'}} onClick={() => navigate('/RegistrationPage')}>Register</button>
    </div>
  );
};
