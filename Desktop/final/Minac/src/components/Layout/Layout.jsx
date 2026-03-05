import React from 'react';
import style from './Layout.module.css'
import Nav from './../Nav/Nav';
import { Outlet } from 'react-router-dom';
import Footer from './../Footer/Footer';

export default function Layout()  {
    return (
        <>
            <Nav/>
            <div className='py-28'>
            <Outlet/>
            </div>
            <Footer/>
        </>
    );
}
