import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Inicio from './pages/home'
import Cadastro from './pages/cadastro'
import QuemSomos from './pages/quemSomos'
import Login from './pages/login'

export default function Navegacao() {
    return (
        <BrowserRouter>
           <Routes>
            
             <Route path="/" element={<Inicio/>} />
             <Route  path='/cadastro' element={<Cadastro/>}/>
             <Route path="/Quem somos" element={<QuemSomos/>} />
              <Route path="/login" element={<Login/>} />


          </Routes>
        </BrowserRouter>
    )
}
