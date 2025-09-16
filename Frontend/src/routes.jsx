import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Inicio from './pages/home'
import Login from './pages/login'

export default function Navegacao() {
    return (
        <BrowserRouter>
           <Routes>
             <Route path="/" element={<Inicio />} />
             <Route path="/Login" element={<Login/>} />

          </Routes>
        </BrowserRouter>
    )
}
