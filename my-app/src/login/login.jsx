import React, { useState } from 'react';
import axios from 'axios';
import { json,useNavigate } from 'react-router-dom';
import './login.css';

const LoginPage = () => {

  const navigate = useNavigate()

  const [loginId, setLoginId] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Handle login logic here (e.g., validation, authentication)
    console.log('Login ID:', loginId);
    console.log('Password:', password);
    
    fetch("http://localhost:3003/user/login", {
      mode: "cors",
      method: "POST",
      body: JSON.stringify({email: loginId, password}),
      headers: {
      "Content-Type": "application/json",
    },
    })
    .then(res => res.json())
    .then(data => {
      if (data.err === "PasswordError: User exists, but passord does not match : (") {
        alert("Password does not match");
        return;
      }

      navigate("/");
    })
    .catch(e => console.log(e))

    // saveUserSession(data.user);
    // navigate("/");
  }

  return (
    <div style={{maxWidth: "600px", margin: "0 auto"}}>
      <h1>Login</h1>
      <form>
        <div>
          <label htmlFor="loginId">Login ID:</label>
          <input
            type="text"
            id="loginId"
            value={loginId}
            onChange={(e) => setLoginId(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
