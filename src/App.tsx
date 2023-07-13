import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import Starships from './pages/Starships'
import { initializeApp } from "firebase/app";
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import { config } from './config/config';
import AuthRoute from './components/AuthRoute';

initializeApp(config.firebaseConfig);

function App() {
  

  return (
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/starships' element={<AuthRoute><Starships/></AuthRoute>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<SignUp/>}/>
     </Routes>
    </BrowserRouter>
  )
}

export default App
