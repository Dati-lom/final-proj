import React, { useContext, useState } from 'react'
import "../Style/Login.css"
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import * as auth from '../Functions/AuthFuns';
import AuthContext from '../Context/AuthContext';
import TokenValid from '../Hooks/TokenValid';

function Login() {
  const [username,setUsername] = useState("")
  const [password,setPassword] = useState("")
  const [error,setError] = useState("")
  const {setAuthed} = useContext(AuthContext)
  const navigate = useNavigate();

    const handleLogin = async (e) => {
      e.preventDefault();
      const loginDto = {username:username,password:password}
      try{
        const response = await auth.login(loginDto)
        let token = response.data.token;
        localStorage.setItem("Token",token)
        TokenValid(token)
        console.log(localStorage.getItem("Token"))
        navigate("/")
        setAuthed(true);
      }catch(error){
        setError(error.message)
        setAuthed(false);
      }
    }
    
    

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      {error && <div>{error}</div>}
      <div className="card" style={{ width: '350px' }}>
        <div className="card-body">
          <h2 className="text-center">Login</h2>
          <form>
            <div className="form-group">
              <label htmlFor="formUsername">Username</label>
              <input type="text" 
              className="form-control" 
              id="formUsername" 
              placeholder="Enter username" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              />
              
            </div>

            <div className="form-group">
              <label htmlFor="formPassword">Password</label>
              <input type="password" 
              className="form-control" 
              id="formPassword" 
              placeholder="Password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="form-group mb-3">
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="formRememberMe" />
                <label className="form-check-label" htmlFor="formRememberMe">Remember Me</label>
              </div>
            </div>

            <button type="submit" onClick={handleLogin} className="btn btn-dark btn-block">
              Login
            </button>
          </form>
          <hr />
          <div className="text-center">
            <p>Don't have an account? <a href="/register">Register</a></p>
            <p>Or login with:</p>
            <button className="btn btn-danger btn-block">Google</button>
            <button className="btn btn-dark btn-block">Github</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login