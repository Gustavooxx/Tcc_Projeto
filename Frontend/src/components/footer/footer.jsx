import './footer.scss'
import { Link } from 'react-router'

export default function Footer() {
    return (
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
    )
}