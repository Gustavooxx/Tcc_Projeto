import Footer from '../../components/footer/footer'
import FAQ from '../../components/perguntas'
import Tags from '../../components/tags/util'
import './index.scss'
import { Link } from 'react-router-dom'

export default function Inicio() {

    return (
        <div className='container-site'>

                <Tags/>

            <section className='container-pagina'>

                <div className='texto-pagina'>

                    <h2>Doe <span style={{ color: '#A9233E' }}>Sangue</span>, <br />
                        Salve vidas!</h2>
                    <p style={{ fontSize: '20px', maxWidth: '420px', marginBottom: '2rem', color: '#A9233E' }}>
                        Doe sangue e salve vidas! Sua doação oferece esperança e solidariedade para quem precisa. Seja a diferença!
                    </p>

                    <div className='botaos'>
                       
                        <Link to='/agendar'><button className='agendar'> Agendar minha doação </button></Link>
                    
                    </div>

                </div>
                <div className='imagem-pagina'>
                    <img src="/assets/images/doacaosangueimg.jpg" alt="imagem-pagina" />
                </div>
            </section>

            <section className='beneficios'>

                <h3>Benefícios:</h3>
                <div className='conteudo-beneficios'>

                    <div className='itens-beneficios'>
                        <img src="/assets/images/gota-de-sangue.png" alt="" />
                        <p>Uma Doação pode
                            salvar ate 4 vidas</p>
                    </div>

                    <div className='itens-beneficios'>
                        <img src="/assets/images/relogio.png" alt="" />
                        <p>A cada 2 segundos alguém
                            precisa de sangue no Brasil </p>
                    </div>


                </div>
            </section>

            <section className='requisitos-doar'>


                <div className='conteudo-requisitos'>
                    <h4>Requisitos para Doar Sangue</h4>
                    <ul>
                        <li>Estar em boas condições de saúde;</li>
                        <li>Ter entre 16 e 69 anos (menores de 18 anos precisam de autorização dos responsáveis);</li>
                        <li>Pesar no mínimo 50 kg;</li>
                        <li>Estar descansado (ter dormido pelo menos 6 horas nas últimas 24 horas);</li>
                        <li>Estar alimentado (evitar alimentos gordurosos nas 3 horas que antecedem a doação);</li>
                    </ul>

                </div>

            </section>

            <section className='texto-doadores'>
                <h4>Para os doadores</h4>
                <div className='conteudo-texto-doadores'>
                    <p>Nosso site foi desenvolvido para tornar o ato de doar ainda mais simples e acessível. Aqui, os doadores encontram todas as informações necessárias em um só lugar: desde como funciona o processo de doação até a localização dos hospitais e hemocentros mais próximos.
                        Com uma navegação fácil e intuitiva, você pode buscar rapidamente onde doar, visualizar os locais disponíveis na sua região e se organizar para realizar sua doação com praticidade. Nosso objetivo é facilitar a conexão entre quem deseja ajudar e os hospitais que precisam, contribuindo para salvar vidas de forma ágil e segura.</p>
                </div>
            </section>

            <section className='como-funciona'>
                <h5>Como funciona</h5>
                <div className='conteudo-como-funciona'>
                    <div className='itens'>
                    <img src="assets/images/do-utilizador.png" alt="" />
                    <p>1.   Cadastre-se</p>
                     <p>Crie uma conta em nosso site para começar o processo de doação.</p>
                    </div>

                    <div className='itens'>

                    <img src="assets/images/cronograma.png" alt="" />
                    <p>2.   Agende sua doação</p>
                    <p>Escolha o local e horário que melhor se adequa a você.</p>
                    </div>

                    <div className='itens'>

                    <img src="assets/images/amor.png" alt="" />
                    <p>3.   Salve vidas</p>
                    <p>Compareça ao local escolhido e faça a diferença na vida de alguém.</p>
                    </div>

                </div>

            </section>

            <div className='fazer-parte'>
                <Link><button> Venha fazer parte</button></Link>
            </div>


            <FAQ/>
        
       
           <Footer/>

        </div>
    )
}