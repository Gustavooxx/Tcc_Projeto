import './index.scss'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Tags from '../../components/tags/util'
import Footer from '../../components/footer/footer'

export default function QuemSomos() {

    return (
        <div className='container-quemsomos'>

          <Tags/>

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
                        <img src="/assets/images/humano.png" alt="" />
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

                    <div className='texto-image'>

                    <p>Nosso maior motivador é a crença de que cada doação de sangue tem o poder de salvar vidas e transformar comunidades. Através da solidariedade e do compromisso coletivo, buscamos criar um mundo onde a generosidade seja a força que impulsiona a esperança e a cura.</p>

                    <img src="assets/images/amor.png" alt="" />
                    </div>
                </div>

                <div className='valores'>

                        <img src="assets/images/amor.png" alt="" />
                    <div className='lista'>

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
                </div>
            </section>

                 <Footer/>

        </div>


    )
}