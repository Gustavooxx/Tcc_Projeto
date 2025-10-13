import './index.scss'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios'


export default function Login() {
    const navigate = useNavigate();

    const logar = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        const data = {
          email: formData.get('email'),
          senha: formData.get('senha')  
        };

        try {
        const response = await axios.post('http://localhost:5010/logar', data)
        const token = response.data.token;

        localStorage.setItem('token', token);
        alert('Usuario logado!!');
        navigate('/inicio')
        }
        catch (error) {
        const errorMessage = error.response?.data.erro || error.message;
        alert('Erro ao Logar: ' + errorMessage);


        }
    }

    return (
        <div className='container-login'>
            <section className="container-tags">
                <div className='img-tags'>
                    <Link to={'/'}><img src="/assets/images/image 4.svg" alt="logo1" /></Link>
                </div>

                <Link> <button>Voltar</button> </Link> 
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
