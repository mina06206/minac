import { useState } from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home/Home';
import About from './components/About/About';
import Prudects from './components/Prudects/Prudects';
import Layout from './components/Layout/Layout';
import Notfound from './components/Notfound/Notfound';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Form from './components/Form/Form';
import CounterContext from './Context/CounterContext'
import User from './Context/User';
import Login from './components/login/login';
import Test from './components/Test/Test'
import Prudect from './components/Prudect/Prudect';



let x = createBrowserRouter([
  {
    path: "", element: <Layout />, children: [
      { path: "", element:<Test> <Home /></Test> },
      { path: "about", element:<Test> <About /></Test> },
      { path: "prudects", element:<Test> <Prudects /></Test> },
      { path: "prudects/:id/:cat", element:<Test> <Prudect /></Test> },
      { path: "form", element: <Form /> },
      { path: "login", element: <Login /> },
      { path: "*", element: <Notfound /> }
    ]
  }
])


function App() {

  return (
    <>
      <User>
        <CounterContext>
          <RouterProvider router={x}></RouterProvider>
        </CounterContext>
      </User>
    </>
  )

}

export default App
