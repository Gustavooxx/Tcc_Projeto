import Footer from '../../components/footer/footer'
import Tags from '../../components/tags/util'
import './index.scss'
import { Link } from 'react-router-dom'

export default function Ajuda (){
    return(
        <div className='pagina-ajuda'>
            <Tags/>

            <main className='ajuda-container'>
                <header className='ajuda-hero'>
                    <h1>Não pode doar agora? Ainda pode ajudar!</h1>
                    <p>Se você não pode doar sangue, existem muitas formas valiosas de apoiar quem precisa — desde divulgar campanhas até colaborar com recursos ou tempo.</p>
                </header>

                <section className='ajuda-sections'>
                    <div className='card'>
                        <h2>Divulgar e mobilizar</h2>
                        <p>Compartilhe nossas campanhas nas redes sociais, convide amigos e familiares e ajude a aumentar o alcance das doações. Pequenas ações multiplicam vidas.</p>
                        <div className='card-actions'>
                            <button className='btn-primary'>Compartilhar</button>
                        </div>
                    </div>

                    <div className='card'>
                        <h2>Voluntariado</h2>
                        <p>Ofereça seu tempo para ajudar na logística de campanhas, organização de eventos, triagem ou apoio aos doadores nos postos.</p>
                        <div className='card-actions'>
                            <Link to='/contato'><button className='btn-primary'>Quero ser voluntário</button></Link>
                        </div>
                    </div>

                    <div className='card'>
                        <h2>Doações financeiras ou materiais</h2>
                        <p>Contribuições financeiras e doações de suprimentos ajudam os hemocentros a manter a estrutura de coleta e atendimento. Informe-se com os parceiros locais.</p>
                        <div className='card-actions'>
                            <Link to='/contato'><button className='btn-secondary'>Entrar em contato</button></Link>
                        </div>
                    </div>

                </section>

                <footer className='ajuda-footer'>
                    <p>Se tiver dúvidas sobre como ajudar, fale com a nossa equipe.</p>
                    <Link to='/contato'><button className='btn-ghost'>Falar com a equipe</button></Link>
                </footer>
            </main>

            <Footer/>
        </div>
    )
}