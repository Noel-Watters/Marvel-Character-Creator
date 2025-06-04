import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Homepage from './pages/HomePage'
import NotFound from './pages/NotFound'
import Characters from './pages/CharactersPage'
import Edit from './components/Edit'
import Create from './pages/CreateCharacterPage'
//import { RootState } from "./redux/store";
import Login from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage'
//import { useSelector } from 'react-redux';


function App() {
  //const user = useSelector((state: RootState) => state.user.user);


  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/create" element={<Create />} />
        <Route path="*" element={<NotFound />} /> 

      </Routes>
    </>

  );
}

export default App;
