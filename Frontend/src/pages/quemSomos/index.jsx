import './index.scss'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function QuemSomos() {

    return (
        <div className='container-quemsomos'>

            <section className='section-tags' >

                <div className='container-tags'>

                    <Link to={'/inicio'}>
                        <div className='foto-tags'>
                            <img src="/assets/images/image 4.svg" alt="logo1" />
                            <h1>Doe Vida</h1>
                        </div>
                    </Link>

                    <div className='tags-paginas'>

                        <Link to='/inicio'> Inicio </Link>
                        <Link to='/login'> Quem somos </Link>
                        <Link to='/login'> Como Doar </Link>
                        <Link to='/login'> Contato </Link>

                    </div>

                    <div className='botao-login'>

                        <Link to='/login' className='login'> Login </Link>
                        <Link to='/cadastro'> <button> Cadastra-se </button> </Link>
                    </div>

                </div>

            </section>

            <section className='textos-quemsomos'>

                    
                <div className='texto-pagina'>
                    <h2>Quem Somos</h2>
                    <p>Juntos pela vida. Conheça nossa missão e propósito.</p>
                    <img src="/assets/images/mao coracao 1.svg" alt="" />
                </div>

            
            </section>

            
        </div>
        
    )
}