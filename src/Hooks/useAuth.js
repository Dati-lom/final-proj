import React, { useState,useEffect, useContext } from 'react'
import * as auth from "../Functions/AuthFuns" 
import { useParams } from 'react-router-dom';
import AuthContext from '../Context/AuthContext';


function useAuth(userId) {
    const [user,setUser] = useState();
    const {setAuthed,isAuthed} = useContext(AuthContext);
    

    useEffect(()=>{
        auth.getUser(userId)
        .then((response)=>{
            if(response.data.token != localStorage.getItem("Token")){
                localStorage("Token","")
                setAuthed(false)
            }else{
                setUser(response.data)
                setAuthed(true)
            }
        }).catch(e => {
            setAuthed(false)
        })

    },[])
  return {user}
}

export default useAuth