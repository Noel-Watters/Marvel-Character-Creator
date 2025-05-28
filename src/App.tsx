import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Homepage from './components/HomePage'
import NavBar from './components/NavBar'
import NotFound from './components/NotFound'
import Characters from './components/Characters'
import Edit from './components/Edit'
import Create from './components/Create'

function App() {


  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/create" element={<Create />} />
        <Route path="*" element={<NotFound />} /> 

      </Routes>
    </>

  );
}

export default App;
