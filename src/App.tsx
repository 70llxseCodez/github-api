import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import FavouritesPages from './pages/FavouritesPages';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <Header/>
      <>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/favourites' element={<FavouritesPages/>}/>
        </Routes>
      </>
    </div>
  );
}

export default App;
