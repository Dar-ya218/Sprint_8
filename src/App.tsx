import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Home} from './pages/Home'
import { Starships } from './pages/Starships'

function App() {
  

  return (
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/starships' element={<Starships/>}/>
     </Routes>
    </BrowserRouter>
  )
}

export default App
