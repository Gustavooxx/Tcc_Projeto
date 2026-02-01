import './index.scss'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'
import app from '../../api';
import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';


export default function Login() {
    const navigate = useNavigate();
    const [mostrarSenha, setMostrarSenha] = useState(false);


    const logar = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        const data = {
            email: formData.get('email'),
            senha: formData.get('senha')
        };

        try {
            const response = await app.post('/logar', data)
            const token = response.data.token;
            const id_cadastro = response.data.id_cadastro;
            const nome_completo = response.data.nome_completo;

            localStorage.setItem('USUARIO', JSON.stringify({
                id_cadastro: id_cadastro,
                nome_completo: nome_completo
            }));
            localStorage.setItem('token', token);
            toast.success('Usuário logado com sucesso!');
            navigate('/inicio')
        }
        catch (error) {
            const errorMessage = error.response?.data.erro || error.message;
            toast.error('Erro ao Logar: ' + errorMessage);


        }
    }

    return (
        <div className='container-login'>
            <section className="container-tags">
                <div className='img-tags'>
                    <Link to={'/'}><img src="/assets/images/logoTcc.webp" alt="logo1" /></Link>
                </div>

                <Link to={"/"}> <button>Voltar</button> </Link>
            </section>
            <section className="login-form-section">
                <h2>Entrar na sua conta</h2>
                <form className="login-form" onSubmit={logar} noValidate>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="Digite seu email" required autoComplete="email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="senha">Senha</label>
                        <input type={mostrarSenha ? 'text' : 'password'} id="senha" name="senha" placeholder="Digite sua senha" required autoComplete="current-password" />

                        <button
                            type='button' onClick={() => setMostrarSenha(!mostrarSenha)} className='toggle-password'>
                            {mostrarSenha ? <EyeOff size={16} /> : <Eye size={16} />}

                        </button>
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
