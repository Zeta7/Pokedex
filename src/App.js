import React from 'react';
import Pokedex from './components/Pokedex';
import Login from './components/Login';
import './App.css';
import {HashRouter, Routes, Route} from 'react-router-dom';
import Pokedexid from './components/PokedexId';
import ProtectedRoutes from './components/ProtectedRoutes';

function App() {
  
  return (
    <HashRouter >
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route element={<ProtectedRoutes />}>
          <Route path='/pokedex' element={<Pokedex/>}/>
          <Route path='/pokedex/:id' element={<Pokedexid />}/>
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
