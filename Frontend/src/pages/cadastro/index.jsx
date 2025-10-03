import './index.scss'
import { Link } from 'react-router-dom'


export default function Cadastro() {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted');
    };

    return (
        <div className='container-login'>

            <section className="container-tags">

                <div className='img-tags'>
                    <img src="/assets/images/image 4.svg" alt="logoTa" />
                    <h1>Doe Vida</h1>
                </div>

                <div className='tags-login'>

                   <Link to='/inicio'><button className='ajudar'>Não posso doar e quero ajudar</button></Link> 
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
                            <input
                                type="text"
                                name="nome"
                                placeholder="Nome Completo"
                                required

                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="email"
                                name="email"
                                placeholder="Endereço de e-mail"
                                required

                            />
                        </div>

                                                <div className="form-group">
                            <input
                                type="cpf"
                                name="cpf"
                                placeholder="CPF"
                                required
                                maxLength={11}

                            />
                        </div>

                        <div className="form-group">
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
                         <Link to='/inicio' className='semCadastro'>entrar sem cadastro</Link>
                    </form>
                </div> 

            </section>
        </div>
    )
}
