import './index.scss'

import { Link } from 'react-router-dom'

export default function Login() {

    return (
        <div className='container-login'>
            <section className="container-tags">
                <div className='img-tags'>
                    <Link to={'/'}><img src="/assets/images/image 4.svg" alt="logo1" /></Link>
                </div>
            </section>
            <section className="login-form-section">
                <h2>Entrar na sua conta</h2>
                <form className="login-form" noValidate>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>    
                        <input type="email" id="email" name="email" placeholder="Digite seu email" required autoComplete="email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="senha">Senha</label>
                        <input type="password" id="senha" name="senha" placeholder="Digite sua senha" required autoComplete="current-password" />
                    </div>
                    <button type="submit" className="login-btn">Entrar</button>
                </form>
                <div className="no-account">
                    <span>Não tem conta?</span>
                    <Link to="/cadastro" className="register-link">Cadastre-se</Link>
                </div>
            </section>
        </div>
    )
}
