import React, { useState } from 'react';
import '../Style/Register.css'; // You can create a separate CSS file for styling
import * as auth from '../Functions/AuthFuns';
import { useNavigate } from 'react-router-dom';
function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate()
  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    const registerDto = { username, email, password };
    try {
      const response = await auth.register(registerDto);
      navigate("/login")
      console.log(response.data);
    } catch (err) {
      console.error('Registration error:', err);
      setError(err)
    }
  };

  return (<>
  
  <div className="container-wrapper d-flex justify-content-center align-items-center">
  <div className="card">
    <div className="card-body">
      {error && <div className="alert alert-danger" >{error}</div>}
      <h2 className="text-center">Register</h2>
      <form>
        <div className="form-group">
          <label htmlFor="formUsername">Username</label>
          <input
            type="text"
            className="form-control"
            id="formUsername"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="formEmail">Email</label>
          <input
            type="email"
            className="form-control"
            id="formEmail"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="formPassword">Password</label>
          <input
            type="password"
            className="form-control"
            id="formPassword"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="formConfirmPassword">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            id="formConfirmPassword"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <button type="submit" onClick={handleRegister} className="btn btn-dark btn-block">
          Register
        </button>
      </form>

      <hr />

      <div className="text-center">
        <p>Already have an account? <a href="/login">Login</a></p>
      </div>
    </div>
  </div>
</div>
   
    </>
  );
}

export default Register;