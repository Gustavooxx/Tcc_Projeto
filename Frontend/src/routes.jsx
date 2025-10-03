import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Inicio from './pages/home'
import Cadastro from './pages/cadastro'

export default function Navegacao() {
    return (
        <BrowserRouter>
           <Routes>
            
             <Route  path='/' element={<Cadastro/>}/>
             <Route path="/Inicio" element={<Inicio/>} />

          </Routes>
        </BrowserRouter>
    )
}
