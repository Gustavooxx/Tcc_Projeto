import './index.scss'
import { Link } from 'react-router'
import { useEffect, useState } from "react"

export default function Tags() {
    const [logado, setLogado] = useState(false)

    useEffect(() => {
        const nomeUsuario = localStorage.getItem("USUARIO");
        
        if (nomeUsuario != undefined || nomeUsuario != null) {
            setLogado(true)
        } else {
            setLogado(false)
        }
    }, [])

    return (
        <section className='section-tags' >
            <div className='container-tags'>
                <Link to={'/inicio'}>
                    <div className='foto-tags'>
                        <img src="/assets/images/logoTcc.webp" alt="logo1" />
                        <h1>Doe Vida</h1>
                    </div>
                </Link>
                <div className='tags-paginas'>
                    <Link to='/inicio'> Inicio </Link>
                    <Link to='/Quem somos'> Quem somos </Link>
                    <Link to='/como doar'> Como Doar </Link>
                    <Link to='/contato'> Contato </Link>
                    <Link to='/Marcar agendamento'> Marcar agendamento </Link>
                    <Link to="/Comoajudar">Como apoiar</Link>
                </div>


                <div className='botao-login'>
                    
                    
                    {logado ? (
                        // Usuário logado - mostra botões adicionais
                        <div>
                            <Link to='/AgendamentoUser'>Informações usuário</Link>
                            <Link to='/listar'>Listar</Link>
                            <span>Logado</span>
                        </div>
                    ) : (

                <div>
                            <Link to='/login' className='login'> Login </Link>
                            <Link to='/cadastro'> <button> Cadastra-se </button> </Link>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}