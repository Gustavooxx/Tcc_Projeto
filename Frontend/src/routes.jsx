import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Inicio from './pages/Inicio'
import Cadastro from './pages/cadastro'
import QuemSomos from './pages/quemSomos'
import Login from './pages/login'
import Contato from './pages/contato'
import Comodoar from './pages/comodoar'


export default function Navegacao() {
    return (
        <BrowserRouter>
           <Routes>
            
             <Route path="/" element={<Inicio/>} />
             <Route path="/Inicio" element={<Inicio/>} />
             <Route  path='/cadastro' element={<Cadastro/>}/>
             <Route path="/Quemsomos" element={<QuemSomos/>} />
              <Route path="/login" element={<Login/>} />
              <Route path="/contato" element={<Contato/>} />
              <Route path="/comodoar" element={<Comodoar/>} />
              

          </Routes>
        </BrowserRouter>
    )
}
