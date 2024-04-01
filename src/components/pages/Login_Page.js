import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import "./LoginPage.css";

export const Login_Page = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/password/checkPassword', { // Replace with your actual backend URL for login check
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }), // Assuming you send username and password for login
      });

      const data = await response.json();

      if (response.ok) {
        // Login successful, redirect or display success message
        console.log('Login successful');
        alert("Login Successful");
        navigate("/Home"); // Redirect to home page upon successful login
      } else {
        // Login failed, display error message
        setError(data.message);
        alert("Login Failed!");
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='div_login'>
      <h2 className='login_h2'>Login</h2>
      {error && <p>{error}</p>}
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
    </div>
  );
};
