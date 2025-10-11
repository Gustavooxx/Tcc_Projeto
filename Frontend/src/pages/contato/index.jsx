import Footer from '../../components/footer/footer'
import Tags from '../../components/tags/util'
import './index.scss'
import { Link } from 'react-router-dom'

export default function Contato(){

    return(
        <div className="container-contato">

                <Tags/>
            

            <section className='conteudo'>

            <div className='title'>

                <h1>Deixe sua dúvida, sugestão ou comentário.</h1>

            </div>

            <div className="paragrafo">
                <p>A sua opinião ajuda nossos agentes a esclarecer pontos cruciais que tornam nossos serviços cada vez melhores. Compartilhe suas dúvidas, sugestões ou feedbacks cada mensagem é uma oportunidade de aperfeiçoarmos a forma como atendemos você.
                Estamos prontos para ouvir o que você tem a dizer e oferecer o suporte necessário para que sua experiência seja clara, ágil e satisfatória..</p>
            </div>
            
            </section>

                        <Footer/>
            
        </div>
    )
}