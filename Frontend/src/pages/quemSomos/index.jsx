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
                        <Link to='/login'> Marcar agendamento </Link>


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

            <section className='missao-visao-valores'>
                <div className='missao'>
                    <h3>Nossa missão e propósito</h3>
                    <p>Somos uma iniciativa dedicada a conectar pessoas dispostas a doar sangue
                        com os locais que precisam. Nosso propósito é salvar vidas, tornando o
                        processo  de doação mais simples, rápido e acessivel</p>
                </div>
                <div className='visao'>
                    <h3>Visão</h3>
                    <p>Ser reconhecida como uma instituição líder na promoção da doação de sangue, inspirando solidariedade e responsabilidade social.</p>
                </div>

            </section>

            <section className='oque-fazemos'>

                    <h2>O que fazemos</h2>
                <div className='texto-oque-fazemos'>

                    <div className='group'>
                        <img src="/assets/images/cronograma.png" alt="" />
                        <h3>Facilitamos o agendamento</h3>
                        <p>Oferecemos uma plataforma intuitiva para agendar doações de sangue, tornando o processo simples e rápido.</p>

                    </div>
                    <div className='group'>
                        <img src="/assets/images/compartilhar.png" alt="" />
                        <h3>Conectamos doadores e instituições</h3>
                        <p>Trabalhamos em parceria com bancos de sangue e hospitais para garantir que as doações cheguem a quem mais precisa.</p>
                    </div>
                    <div className='group'>
                        <img src="/assets/images/reseau-securise.png" alt="" />
                        <h3>Promovemos a conscientização</h3>
                        <p>Realizamos campanhas educativas para informar sobre a importância da doação de sangue e incentivar mais pessoas a participarem.</p>
                    </div>
                </div>
            </section>

            <section className='nossos-valores'>

                <div className='nossa-motivacao'>
                    <h4>
                        Nossa motivação
                    </h4>
                    <p>Nosso maior motivador é a crença de que cada doação de sangue tem o poder de salvar vidas e transformar comunidades. Através da solidariedade e do compromisso coletivo, buscamos criar um mundo onde a generosidade seja a força que impulsiona a esperança e a cura.</p>
                </div>

                <div className='valores'>
                    <h4>Nossos valores</h4>
                    <ul>
                        <li>Solidariedade: Acreditamos no poder da generosidade e na importância de ajudar o próximo.</li>
                        <li>Responsabilidade: Comprometemo-nos a agir com ética e transparência em todas as nossas ações.</li>
                        <li>Inovação: Buscamos constantemente novas maneiras de melhorar o processo de doação de sangue.</li>
                        <li>Inclusão: Valorizamos a diversidade e promovemos a participação de todos na nossa missão.</li>
                        <li>Educação: Acreditamos que a conscientização é fundamental para aumentar a doação de sangue.</li>
                        <li>Colaboração: Trabalhamos em parceria com instituições e comunidades para alcançar nossos objetivos.</li>
                    </ul>
                </div>
            </section>

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