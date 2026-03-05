import { createContext, useEffect, useState } from "react";

export let user=createContext();

import React from 'react';

export default function User(props) {

    const [id, setid] = useState(null);
    useEffect(() => {
        if(localStorage.getItem("key")){
            setid(localStorage.getItem("key"))
        }
       
    }, []);
    

    return (
        <user.Provider value={{id,setid}}>
            {props.children}
        </user.Provider>
    );
}


