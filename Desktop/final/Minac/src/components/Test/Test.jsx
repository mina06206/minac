import React from 'react';
import style from './Test.module.css'
import { Navigate } from 'react-router-dom';
export default function Test(props)  {
   if(localStorage.getItem("key")){
    return(props.children)
   }
   else{
    return(<Navigate to={"/login"}/>)
   }
}
