import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Inicio from './pages/home'
import Login from './pages/login'

export default function Navegacao() {
    return (
        <BrowserRouter>
           <Routes>
            
             <Route  path='/' element={<Login/>}/>
             <Route path="/Inicio" element={<Inicio/>} />

          </Routes>
        </BrowserRouter>
    )
}
