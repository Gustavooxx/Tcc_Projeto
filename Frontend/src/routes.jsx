import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Inicio from './pages/Inicio'
import Cadastro from './pages/cadastro'
import QuemSomos from './pages/quemSomos'
import Login from './pages/login'
import Contato from './pages/contato'
import Comodoar from './pages/comodoar'
import MarcaAgendamento from './pages/marcarAgendamento'
import Ajuda from './pages/ajuda'
import VoluntarioForm from './pages/voluntariado'



export default function Navegacao() {
    return (
        <BrowserRouter>
            <Routes>

                <Route path="/" element={<Inicio />} />
                <Route path="/Inicio" element={<Inicio />} />
                <Route path='/cadastro' element={<Cadastro />} />
                <Route path="/Quem somos" element={<QuemSomos />} />
                <Route path="/login" element={<Login />} />
                <Route path="/contato" element={<Contato />} />
                <Route path="/como doar" element={<Comodoar />} />
                <Route path="/Marcar agendamento" element={<MarcaAgendamento />} />
                <Route path="/Como Ajudar" element={<Ajuda />} />
                <Route path='/voluntariado' element={<VoluntarioForm/>}></Route>
                <Route path="/Comoajudar" element={<Ajuda />} />
                <Route path="/Voluntario" element={<VoluntarioForm />} />



            </Routes>
        </BrowserRouter>
    )
}
