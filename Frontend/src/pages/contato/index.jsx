import Footer from '../../components/footer/footer'
import Tags from '../../components/tags/util'
import './index.scss'
import { Link } from 'react-router-dom'

export default function Contato() {

    return (
        <div className="container-contato">

            <Tags />


            <section className='conteudo'>

                <div className='fale-conosco'>

                    <h1>Fale Conosco!</h1>
                    <img src="assets/images/faleconosco.png" height={'70px'} />

                </div>

                <div className="duvidas">

                    <h2>Tem <span style={{ color: '#A9233E' }}>duvidas</span> sobre como <span style={{ color: '#A9233E' }}>agendar</span> sua doação ou <span style={{ color: '#A9233E' }}>encontrar</span> o hemocentro mais proximo de você?
                        <br/>
                        <br/>
                        Nossa equipe está disponível para ajudar você de forma rápida e totalmente online.
                    </h2>


            

                    <img src="assets/images/duvida.png" height={'250px'} />

                </div>

                <div className='opcoes-contato'>


                <h1>Aqui está nossas opções de contato</h1>


                </div>

            </section>

            <Footer />

        </div>
    )
}