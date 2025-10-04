import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Inicio from './pages/home'
import Cadastro from './pages/cadastro'
import QuemSomos from './pages/quemSomos'

export default function Navegacao() {
    return (
        <BrowserRouter>
           <Routes>
            
             <Route  path='/cadastro' element={<Cadastro/>}/>
             <Route path="/Inicio" element={<Inicio/>} />
             <Route path="/Quem somos" element={<QuemSomos/>} />

          </Routes>
        </BrowserRouter>
    )
}
