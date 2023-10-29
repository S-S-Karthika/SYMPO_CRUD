import React from 'react';
import {Routes,Route} from 'react-router-dom'

import Home from './Home';
import Crud from './Crud';
import 'bootstrap/dist/css/bootstrap.min.css'
import Edit from './Edit';


function App  ()  {
  return (
   <>
  <Routes>
  <Route path='/'element={<Crud/>}/>
  <Route path='/Home'element={<Home/>}/>
  <Route path='/Edit/:id'element={<Edit/>}/>
  </Routes>
 
   </>
  )
}

export default App


