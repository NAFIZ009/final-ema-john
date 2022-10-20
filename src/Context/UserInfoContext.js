import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword ,signInWithEmailAndPassword ,updateProfile,onAuthStateChanged,signInWithPopup,signOut} from "firebase/auth";
import app from "../firebase.config";
import { GoogleAuthProvider } from "firebase/auth";

const authContext=createContext();

const UserInfoContext = ({children}) => {
    const [user,setUser]=useState({});
    const auth=getAuth(app);

    const signup=(email,password)=>createUserWithEmailAndPassword(auth,email,password);    
    const login=(email,password)=>signInWithEmailAndPassword(auth,email,password);
    const provider = new GoogleAuthProvider();
    const loginWithGoogle=()=>signInWithPopup(auth, provider);    
    const logout=()=>signOut(auth);
    const updateName=name=>updateProfile(auth.currentUser, {
        displayName: name
      });
    const value={login,signup,logout,loginWithGoogle,updateName,user};

    useEffect(()=>{
        onAuthStateChanged(auth,users=>{
            setUser(users);
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    return (
        <authContext.Provider value={value}>
            {children}
        </authContext.Provider>
    );
};

export {authContext,UserInfoContext};