import Footer from '../../components/footer/footer'
import Tags from '../../components/tags/util'
import './index.scss'
import { Link } from 'react-router'

export default function Comodoar() {

    return (
        <section className='container-comodoar'>


            <Tags />

            <section className='requisitos'>

                <div className='quem-pode-doar'>
                    <h2>Quem pode doar</h2>
                    <ul>
                        <li>ter entre 16 a 69 anos</li>
                        <li>Pesar acima de 50 kg</li>
                        <li>Estar em boas condições de saude</li>
                        <li>Intervalo: homens (2 meses) mulheres (3 meses)</li>
                        <li>ter entre 16 a 69 anos</li>
                        <li>ter entre 16 a 69 anos</li>

                    </ul>

                </div>

                <div className='restricoes'>

                    <h2>Restrições para doar</h2>
                    <ul>
                        <li>ter entre 16 a 69 anos</li>
                        <li>Pesar acima de 50 kg</li>
                        <li>Estar em boas condições de saude</li>
                        <li>Intervalo: homens (2 meses) mulheres (3 meses)</li>
                        <li>ter entre 16 a 69 anos</li>
                        <li>ter entre 16 a 69 anos</li>

                    </ul>

                </div>
            </section>

            <section className='processo'>
                <h2>O processo de doação </h2>

                <div className='cards'>

                    <div className='card'>
                        <img src="assets/images/cronograma.png" alt="" height={'70px'} />
                        <h4>Agendamento</h4>
                    </div>

                    <div className='card'>
                        <img src="assets/images/cadastro.png" alt="" height={'70px'} />
                        <h4>Cadastro e triagem no homocentro</h4>
                    </div>

                    <div className='card'>
                        <img src="assets/images/exame-medico.png" alt="" height={'70px'} />
                        <h4>Exame rapido</h4>
                    </div>

                    <div className='card'>
                        <img src="assets/images/doacao-de-sangue.png" alt="" height={'70px'} />
                        <h4>Doação (10 min)</h4>
                    </div>

                    <div className='card'>
                        <img src="assets/images/descanso.png" alt="" height={'70px'} />
                        <h4>Descanso</h4>
                    </div>

                </div>
            </section>

            <section className='porque-doar'>
                <h2>Por que doar sangue?</h2>
                <div className='texto-image'>

                <p>Doar sangue é um ato simples que pode salvar até quatro vidas em poucos minutos. Todos os dias, hospitais precisam de sangue para cirurgias, acidentes, partos de risco e tratamentos, mas a quantidade de doações nem sempre é suficiente.
                    Esse gesto é um ato de solidariedade e empatia, pois qualquer pessoa pode precisar de sangue em algum momento da vida. Como não existe forma de produzir sangue artificialmente, a doação voluntária é a única fonte disponível.
                    Segura, rápida e gratuita, a doação transforma minutos doados em esperança para quem luta pela vida. Doar sangue é, acima de tudo, doar vida.</p>

                    <img src="/assets/images/doação de sangue img 1.png" alt="" height={"100px"} />
                </div>
            </section>


            <Footer />
        </section>
    )
}