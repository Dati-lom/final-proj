import React, { useContext, useEffect, useState } from 'react'
import jwt from "jwt-decode"
import AuthContext from '../Context/AuthContext'
import * as auth from "../Functions/AuthFuns"
import { Navigate, useNavigate } from 'react-router-dom'

const name = "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"
const id = "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"
const role = "http://schemas.microsoft.com/ws/2008/06/identity/claims/role"

const TokenValid = ( token ) => {
    console.log("Token" + token);

    if(token != ""){
        console.log("Inside");
        const decoded = jwt(token);
        
        localStorage.setItem("userId",decoded[id])
        localStorage.setItem("userName",decoded[name])
        localStorage.setItem("userRole",decoded[role] == "True")
        localStorage.setItem("isAuthed",true)
    }
    console.log("TOKEN: ",token);
}

export default TokenValid