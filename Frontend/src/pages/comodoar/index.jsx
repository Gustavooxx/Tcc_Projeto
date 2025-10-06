import './index.scss'
import { Link } from 'react-router'

export default function Comodoar() {

    return (
        <section className='container-site'>
            <div className='container-tags'>

                <Link to={'/inicio'}>
                    <div className='foto-tags'>
                        <img src="/assets/images/image 4.svg" alt="logo1" />
                        <h1>Doe Vida</h1>
                    </div>
                </Link>

                <div className='tags-paginas'>

                    <Link to='/inicio'> Inicio </Link>
                    <Link to='/Quemsomos'> Quem somos </Link>
                    <Link to='/comodoar'> Como Doar </Link>
                    <Link to='/contato'> Contato </Link>
                    <Link to='/login'> Marcar agendamento </Link>


                </div>

                <div className='botao-login'>

                    <Link to='/login' className='login'> Login </Link>
                    <Link to='/cadastro'> <button> Cadastra-se </button> </Link>

                </div>

            </div>

            <div>
               
            </div>
        </section>
    )
}