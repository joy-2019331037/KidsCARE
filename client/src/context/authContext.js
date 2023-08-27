import axios from "axios";
import { set } from "lodash";
import { createContext, useEffect, useState } from "react";
import { useNavigate,BrowserRouter as Router } from "react-router-dom";
export const AuthContext = createContext();

export const AuthContextProvider= ({children})=>{
    const [currentUser, setCurrentUser]=useState(JSON.parse(localStorage.getItem("user"))||null);
    //const navigate = useNavigate();
    
    const login=async(inputs)=>{
        const res = await axios.post("http://localhost:7000/api/auth/login",inputs);
        setCurrentUser(res.data);
        
    };

    const logout=async()=>{
        await axios.post("http://localhost:7000/api/auth/logout");
        setCurrentUser(null);
        //navigate("/login");
        
    };

    useEffect(()=>{
        localStorage.setItem("user", JSON.stringify(currentUser));
    },[currentUser]);

    
    return <AuthContext.Provider value={{currentUser,login,logout}}>
        {children}
        </AuthContext.Provider>
};