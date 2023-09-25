
import React, { useContext, useEffect, useState } from 'react'
import jwt from "jwt-decode"
import * as auth from "../Functions/AuthFuns"
import { useNavigate,useParams } from 'react-router-dom'
import useAuth from "../Hooks/useAuth"
import AuthContext from '../Context/AuthContext'
import TokenValid from '../Hooks/TokenValid'
import SidePanel from './SidePanel';
import Reviews from './Reviews';
import ReviewC from './ReviewComps/ReviewC';

function MainPage() {
  const [token,setToken] = useState(localStorage.getItem("Token"));
  
  const username = localStorage.getItem("userName")
  const userId = localStorage.getItem("userId");
  const isAuthed = localStorage.getItem("isAuthed")
  
  
  const navigate = useNavigate();

  const  handleLogout = async ()=>{
    try{
      const response = await auth.logout(username)
      console.log(response.data);
      localStorage.setItem("Token","")
      localStorage.setItem("isAuthed","")
      localStorage.setItem("userName","")
      localStorage.setItem("userId","")
      navigate("/")
    }catch(e){
      console.log(e);
    }
  }
  

  return (
  <div >
    
    <div style={{ display: 'flex' }}>
  <div style={{ flex: '0 0 auto' }}>
    <SidePanel handleLogOut={handleLogout}></SidePanel>
  </div>
  <div style={{ flex: '1' }}>
    <Reviews></Reviews>
  </div>
</div>
      
    </div>
  )
}

export default MainPage