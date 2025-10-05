import './index.scss'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'


export default function Cadastro() {

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const data = {
            nome_completo: formData.get('nome'),
            email: formData.get('email'),
            senha: formData.get('senha'),
            cpf: formData.get('cpf'),
            telefone: formData.get('telefone'),
            estado: formData.get('estado'),
            sexo: formData.get('sexo'),
            tipo_sanguineo: formData.get('tipo_sanguineo'),
            origem: formData.get('conheceu')
        };

        try {
            const response = await axios.post('http://localhost:3000/cadastro', data);
            alert('Cadastro realizado com sucesso!');
            navigate('/Inicio');
        } catch (error) {
            alert('Erro ao cadastrar: ' + (error.response?.data || error.message));
        }
    };

    return (
        <div className='container-cadastro'>

            <section className="container-tags">

                <div className='img-tags'>
                    <img src="/assets/images/image 4.svg" alt="logoTa" />
                    <h1>Doe Vida</h1>
                </div>

                <div className='tags-login'>

                    <Link to='/'><button className='ajudar'>Não posso doar e quero ajudar</button></Link>
                </div>

            </section>

            <section className='container-cadastro'>


                <div className='texto-cadastro'>

                    <div className='textos'>

                        <h2>Doar sangue é um gesto simples,
                            mas que pode transformar vidas. </h2>

                        <p>
                            Em poucos minutos, você se torna parte da corrente que leva esperança, saúde e novas chances a quem mais precisa. Cada doação pode salvar até quatro vidas.
                        </p>

                        <div className='botao-como-funciona'>
                            <button>Como funciona?</button>
                        </div>

                    </div>

                </div>

                <div className="container-informacoes">

                    <form onSubmit={handleSubmit}>
                        <div className='titulo'>

                            <h2>Cadastrar-se para ser um doador(a)</h2>
                        </div>

                        <div className="form-group">
                            <label htmlFor="nome">Nome Completo</label>
                            <input
                                type="text"
                                name="nome"
                                placeholder="Nome Completo"
                                required

                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">E-mail</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Endereço de e-mail"
                                required

                            />
                        </div>

                            <div className="form-group">
                                <label htmlFor="senha">Senha</label>

                            <input

                                type="password"
                                name="senha"
                                placeholder="Senha"
                                required
                                minLength={6}
                                maxLength={20}
                                

                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="cpf">CPF</label>
                            <input
                                type="cpf"
                                name="cpf"
                                placeholder="CPF"
                                required
                                maxLength={11}

                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="telefone">Telefone</label>
                            <input
                                type="tel"
                                name="telefone"
                                placeholder="(00) 00000-0000"
                                required
                                maxLength={15}

                            />
                        </div>

                        <div className="row">
                            <div className='form-group'>
                                <select id="estado" name="estado">
                                    <option value="">Estado</option>
                                    <option value="SP">SP</option>
                                    <option value="RJ">RJ</option>
                                    <option value="MG">MG</option>
                                    <option value="Outros">Outros...</option>
                                </select>
                            </div>

                            <div className='form-group'>
                                <select id="sexo" name="sexo">
                                    <option value="">Sexo</option>
                                    <option value="Masculino">Masculino</option>
                                    <option value="Feminino">Feminino</option>
                                    <option value="Outro">Outro</option>
                                </select>
                            </div>

                            <div className='form-group'>
                                <select id="tipo_sanguineo" name="tipo_sanguineo">
                                    <option value="">Tipo Sanguíneo</option>
                                    <option value="A+">A+</option>
                                    <option value="A-">A-</option>
                                    <option value="B+">B+</option>
                                    <option value="B-">B-</option>
                                    <option value="AB+">AB+</option>
                                    <option value="AB-">AB-</option>
                                    <option value="O+">O+</option>
                                    <option value="O-">O-</option>
                                </select>
                            </div>
                        </div>

                        <div className='form-group'>
                            <select id="conheceu" name="conheceu">
                                <option value="">Onde nos conheceu?</option>
                                <option value="Redes Sociais">Redes Sociais</option>
                                <option value="Amigos/Família">Amigos/Família</option>
                                <option value="Site">Site</option>
                                <option value="Outro">Outro</option>
                            </select>
                        </div>


                        <button type="submit">Cadastrar</button>
                        <Link to='/' className='semCadastro'>entrar sem cadastro</Link>
                    </form>
                </div>

            </section>
        </div>
    )
}
