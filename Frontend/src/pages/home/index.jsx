import './index.scss'
import { Link } from 'react-router-dom'

export default function Inicio() {

    return (
        <div className='container-site'>

            <section className='section-tags' >

                <div className='container-tags'>

                    <div className='foto-tags'>
                        <img src="/assets/images/image 4.svg" alt="logo1" />
                        <h1>Doe Vida</h1>
                    </div>

                    <div className='tags-paginas'>

                        <Link to='/login'> Inicio </Link>
                        <Link to='/login'> Quem somos </Link>
                        <Link to='/login'> Como Doar </Link>
                        <Link to='/login'> Contato </Link>

                    </div>

                    <div className='botao-login'>

                        <Link to='/login' className='login'> Login </Link>
                        <Link to='/login'> <button> Cadastra-se </button> </Link>
                    </div>

                </div>

            </section>

            <section className='container-pagina'>

                <div className='texto-pagina'>

                    <h2>Doe sangue, <br />
                        Salve vidas.</h2>
                    <p style={{fontSize: '20px', maxWidth: '420px', marginBottom: '2rem', color: '#A9233E'}}>
                        Sua atitude pode transformar o futuro de alguém. Ao doar sangue, você oferece esperança, solidariedade e a chance de recomeçar para quem mais precisa. Seja a diferença na vida de muitas pessoas!
                    </p>
                    <div className='botaos'>
                        <button className='agendar'> Agendar minha doação </button>
                    </div>

                </div>
                <div className='imagem-pagina'>
                    <img src="/assets/images/doacaosangueimg.jpg" alt="imagem-pagina" />
                </div>
            </section>

            <section className='beneficios'>
                <div className='conteudo-beneficios'>
                    <h3>Benefícios </h3>

                    <div className='itens-beneficios'>
                        <img src="" alt="" />
                        <p>Uma Doação pode
                            salvar ate 4 vidas</p>
                    </div>
                </div>
            </section>
        </div>
    )
}