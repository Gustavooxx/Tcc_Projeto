import './index.scss'
import { Link } from 'react-router-dom'

export default function Inicio() {

    return (
        <div className='container-site'>

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
                        <Link to='/login'> Contato </Link>

                    </div>

                    <div className='botao-login'>

                        <Link to='/login' className='login'> Login </Link>
                        <Link to='/cadastro'> <button> Cadastra-se </button> </Link>
                    </div>

                </div>

            </section>

            <section className='container-pagina'>

                <div className='texto-pagina'>

                    <h2>Doe sangue, <br />
                        Salve vidas.</h2>
                    <p style={{ fontSize: '20px', maxWidth: '420px', marginBottom: '2rem', color: '#A9233E' }}>
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
                    <h3>Requisitos para Doar Sangue</h3>
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
        
        <footer className='footer'>

            <div className='conteinar-foo'>


            <div className='Nos'>
                <h1>Doevida.com <img src="assets/images/image 4.svg" alt="" /></h1>

                <p> A Doevida.com é uma plataforma dedicada a facilitar o processo de doação de sangue, conectando doadores a hospitais e hemocentros.</p>

            </div>

            <div className='cadastro-foo'>
                <p>Doe Vida</p>

                <Link>
                    <button>Cadastre-se</button>
                </Link>

                <p>Entre em contato</p>
                <p className='email'>contato@doevida.com</p>

            </div>



            </div>

        </footer>
           

        </div>
    )
}