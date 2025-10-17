import './footer.scss'
import { Link } from 'react-router'

export default function Footer() {
    return (
        <footer className='footer'>
            <div className='conteinar-foo'>

                {/* SOBRE */}
                <div className='Nos'>
                    <h1>Doevida.com <img src="assets/images/logoTcc.webp" alt="Logo Doe Vida" /></h1>
                    <p>
                        A Doevida.com é uma iniciativa do <strong>Instituto Doe Vida</strong>,
                        dedicada a facilitar o processo de doação de sangue, conectando doadores a hospitais e hemocentros em todo o Brasil.
                    </p>
                </div>

                {/* LINKS ÚTEIS */}
                <div className='links-foo'>
                    <h2>Links úteis</h2>
                    <ul>
                        <li><Link to="/como doar">Como doar</Link></li>
                        <li><Link to="/#perguntas">Perguntas frequentes</Link></li>
                        <li><Link to="/Voluntario">Seja voluntário</Link></li>
                    </ul>
                </div>

                {/* CONTATO */}
                <div className='cadastro-foo'>
                    <h2>Doe Vida</h2>
                    <Link to="/cadastro">
                        <button>Cadastre-se</button>
                    </Link>

                    <div className='contato'>
                        <p><strong>Entre em contato</strong></p>
                        <p className='email'>contato@doevida.com</p>
                        <p className='telefone'>(11) 4002-8922</p>
                    </div>
                </div>

                {/* LOCALIZAÇÃO */}
                <div className='localizacao'>
                    <h2>Instituto Doe Vida</h2>

                    <p>CNPJ: 12.345.678/0001-90</p>
                </div>

            </div>

            <div className='direitos'>
                <p>© 2025 Doe Vida. Todos os direitos reservados.</p>
                <p>Desenvolvido com ❤️ por voluntários da Doevida.com</p>
            </div>
        </footer>
    )
}
