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
import HemoControl from "./pages/HemoControl"
import CadastrarHemoCentro from "./pages/CadastrarHemoCentro"
import BuscarHemoCentro from "./pages/BuscarHemoCentro"
import Agendamentos from "./pages/Agendamentos"
import Relatorios from "./pages/Relatorios"
import Configuracoes from "./pages/Configuracoes"


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
                <Route path="/Comoajudar" element={<Ajuda />} />
                <Route path="/Voluntario" element={<VoluntarioForm />} />
                <Route path="/HemoControl" element={<HemoControl />} />
                <Route path="/cadastrar" element={<CadastrarHemoCentro />} />
                <Route path="/buscar" element={<BuscarHemoCentro />} />
                <Route path="/agendamentos" element={<Agendamentos />} />
                <Route path="/relatorios" element={<Relatorios />} />
                <Route path="/configuracoes" element={<Configuracoes />} />


            </Routes>
        </BrowserRouter>
    )
}
