import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './App.css'

const Form = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    const users = JSON.parse(localStorage.getItem('users')) || [];

    const user = users.find((user) => user.email === email && user.password === password);

    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user));
      alert('Login successful!');
      navigate('/welcome'); 
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="login">
      <form className="mainform" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {error && <div className="text-danger mb-3">{error}</div>}

        <button type="submit" className="btn btn-primary submit">Sign In</button>

        <div id="emailHelp" className="form-text mt-3">
          Don't have an account?{' '}
          <Link to="/signup" className="text-primary">
            Click here to Register!
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Form;
