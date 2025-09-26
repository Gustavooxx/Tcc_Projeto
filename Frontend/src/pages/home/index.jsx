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
                        <Link to='/login'> Como funciona </Link>
                        <Link to='/login'> Por que doar? </Link>
                        <Link to='/login'> Contato </Link>

                    </div>

                    <div className='botao-login'>

                        <Link to='/login' className='login'> Login </Link>
                        <Link to='/login'> <button> torne-se um doador </button> </Link>
                    </div>

                </div>

            </section>

            <section className='container-pagina'>
                <div className='texto-pagina'>

                    <h2>Plataforma digital que conecta doadores de sangue a hemocentros
                        de forma rápida e eficiente.</h2>

                    <div className='botaos'>
                        <button className='endereco'>Informe seu endereço <img src="/assets/images/localizacao.svg" height='20px'/></button>
                        <button className='doar'>Doar agora</button>
                    </div>

                </div>
            </section>

            <section className='beneficios'>
                <div className='conteudo-beneficios'>
                    <h3>Por que doar sangue?</h3>
                    <ul>
                        <li>Salva vidas: Cada doação pode ajudar até 3 pessoas.</li>
                        <li>É seguro: O processo é rápido e supervisionado por profissionais.</li>
                        <li>Benefícios para a saúde: Reduz o risco de doenças cardíacas e ajuda na produção de novas células sanguíneas.</li>
                        <li>Sensação de bem-estar: Contribui para a comunidade e traz satisfação pessoal.</li>
                    </ul>
                </div>
            </section>
        </div>
    )
}