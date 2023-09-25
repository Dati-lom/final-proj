import React, { useContext, useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from "react-router-dom" 
import AuthContext from '../Context/AuthContext';
function Header() {

  
  return (
    <nav className="navbar navbar-expand-lg navbar-warning bg-dark border p-3 w-100">
      <div className="wrapper">
        <Link to="/" className="navbar-brand text-white">
          Repo
        </Link>
      </div>
      
        <ul className="navbar-nav ml-auto">
          {localStorage.getItem("isAuthed") ? (
            <li className="nav-item">
              <span className="nav-link text-white">{localStorage.getItem("userName")}</span>
            </li>
          ) : (
            <>
              <li className="nav-item">
                <Link to="/login" className="nav-link text-white">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/register" className="nav-link text-white">
                  Register
                </Link>
              </li>
            </>
          )}
        </ul>
    
    </nav>
  );
}

export default Header