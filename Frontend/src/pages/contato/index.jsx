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
                        <Link to='/como doar'> Como Doar </Link>
                        <Link to='/contato'> Contato </Link>
                        <Link to='/login'> Marcar agendamento </Link>


                    </div>

                    <div className='botao-login'>

                        <Link to='/login' className='login'> Login </Link>
                        <Link to='/cadastro'> <button> Cadastra-se </button> </Link>
                    </div>

                </div>

            </section>

            <section className='conteudo'>

            <div className='title'>

                <h1>Deixe sua dúvida, sugestão ou comentário.</h1>

            </div>

            <div className="paragrafo">
                <p>A sua opinião ajuda nossos agentes a esclarecer pontos cruciais que tornam nossos serviços cada vez melhores. Compartilhe suas dúvidas, sugestões ou feedbacks cada mensagem é uma oportunidade de aperfeiçoarmos a forma como atendemos você.

Estamos prontos para ouvir o que você tem a dizer e oferecer o suporte necessário para que sua experiência seja clara, ágil e satisfatória..</p>
            </div>
            
            </section>
        </div>
    )
}