import { useState } from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom";

import './App.css'
import { Signup } from './components/Signup.jsx';
import { Login } from './components/Login.jsx';
import { Dashboard } from './components/Dashboard.jsx';

function App() {


  return (
    <>
    <BrowserRouter>
     <Routes>

       <Route path='/' element={<Signup></Signup>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path='/transfer'></Route>

     </Routes>

    </BrowserRouter>
    
     </>
  )
}

export default App
