import React, { useContext } from 'react';
import style from './Nav.module.css'
import Home from './../Home/Home';
import About from './../About/About';
import Prudects from './../Prudects/Prudects';
import Form from './../Form/Form';
import { Link, useNavigate } from 'react-router-dom';
import { user } from './../../Context/User';


 export  default  function Nav()  {

    const {id,setid} = useContext(user);
    let Navigate=useNavigate();

    function signout(){
        localStorage.removeItem("key")
        setid(null)
        Navigate("/login")
    }
   
    

    
    return (
        <>
            <div className='p-4 bg-blue-500 flex justify-between items-center text-white fixed top-0 left-0 right-0 z-50'>
                <div className=''>
                   <Link to=""> <i class=" fa-solid fa-house text-3xl ml-9"><span className='ml-2'>Mina store</span></i></Link>
                </div>

                <div>
                    <ul className='flex gap-5 '>
                        {id!==null? 
                        <>
                        <li><Link to="">Home</Link></li>

                        <li><Link to="about">About</Link></li>
                        <li><Link to="prudects">Prudects</Link></li>
                        <li onClick={signout}>signout</li>
                        </>
                        : <>
                        <li><Link to="login">login</Link></li>
                        <li><Link to="form">Form</Link></li>
                        </>
                        }
                       
                    </ul>
                </div>
            </div>
        </>
    );
}
