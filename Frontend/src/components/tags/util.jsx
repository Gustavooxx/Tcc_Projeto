    import './index.scss'
import { Link } from 'react-router'
import { useEffect, useState } from "react"

export default function Tags() {
    const [logado, setLogado] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const nomeUsuario = localStorage.getItem("USUARIO");

        if (nomeUsuario != undefined || nomeUsuario != null) {
            setLogado(true)
        } else {
            setLogado(false)
        }
    }, [])

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    return (
        <section className='section-tags' >
            <div className='container-tags'>
                <Link to={'/inicio'}>
                    <div className='foto-tags'>
                        <img src="/assets/images/logoTcc.webp" alt="logo1" />
                        <h1>Doe Vida</h1>
                    </div>
                </Link>
                <div className={`tags-paginas ${menuOpen ? 'active' : ''}`}>
                    <Link to='/inicio' onClick={() => setMenuOpen(false)}> Inicio </Link>
                    <Link to='/Quem somos' onClick={() => setMenuOpen(false)}> Quem somos </Link>
                    <Link to='/como doar' onClick={() => setMenuOpen(false)}> Como Doar </Link>
                    <Link to='/contato' onClick={() => setMenuOpen(false)}> Contato </Link>
                    <Link to='/Marcar agendamento' onClick={() => setMenuOpen(false)}> Marcar agendamento </Link>
                    <Link to="/Comoajudar" onClick={() => setMenuOpen(false)}>Como apoiar</Link>
                </div>

                <div className='botoes'>
                    {  logado &&
                        <div className='botoes-logado'>
                            <Link to='/perfil'><button>Meu perfil</button></Link>                            
                        </div>
                    }

                    {!logado &&
                        <div className='botoes-login'>
                           <Link to='/login'><button>Entrar</button></Link>
                        </div>
                    }
                </div>

                <div className='hamburger' onClick={toggleMenu}>
                    <span className={`bar ${menuOpen ? 'active' : ''}`}></span>
                    <span className={`bar ${menuOpen ? 'active' : ''}`}></span>
                    <span className={`bar ${menuOpen ? 'active' : ''}`}></span>
                </div>
            </div>
        </section>
    )
}
