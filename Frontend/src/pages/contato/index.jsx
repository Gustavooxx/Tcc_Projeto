import { retry } from 'statuses'
import './index.scss'
import { Link } from 'react-router-dom'

export default function Contato(){

    return(
        <div className="container-site">
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
                        <Link to='/Quem somos'> Quem somos </Link>
                        <Link to='/login'> Como Doar </Link>
                        <Link to='/contato'> Contato </Link>

                    </div>

                    <div className='botao-login'>

                        <Link to='/login' className='login'> Login </Link>
                        <Link to='/cadastro'> <button> Cadastra-se </button> </Link>
                    </div>

                </div>

            </section>

            <div className='title'>

                <h1>Deixe sua dúvida, sugestão ou comentário.</h1>

            </div>

            <div className="paragrafo">
                <p>Teremos o maior prazer em responder o seu e-mail.</p>

                <br />

                <p>Contate diretamente o banco de sangue para saber sobre declaração de doação, carteirinha de doador e resultado de exames de sangue.</p>
            
                <br />

                <p>Não respondemos em nome dos hospitais</p>

                <br />

                <p>Para mais informações entre em contato diretamente conosco!</p>

                <br />
                
                <p>doevida@gmail.com</p>
            </div>
        </div>
    )
}