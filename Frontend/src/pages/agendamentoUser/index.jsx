import { Link, useNavigate } from "react-router";
import { useState, useEffect } from "react";
import "./index.scss";
import app from "../../api";

export default function AgendamentoUser() {
    const navigate = useNavigate();
    const [totalAgend, setTotalAgend] = useState([]);
    const [agendamentos, setAgendamentos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [editarAgend, setEditarAgend] = useState({});

     function sair() {
        localStorage.removeItem("USUARIO");
        localStorage.removeItem("TOKEN");

        navigate('/Inicio')
    }

    const carregarAgendamentos = async () => {
        setLoading(true);
        setError('');
        setAgendamentos([]);

        try{
            console.log('Carregando agendamentos...');
            let url = '/listar/agendamentos/usuario';

            const response = await app.get(url)
            console.log('Resposta da API:', response);
            console.log('Status da resposta:', response.status);

            const data = await response.data;
            console.log('Dados recebidos:', data);
            console.log('Tipo dos dados:', typeof data);
            console.log('É array?', Array.isArray(data));

            // Verificar se é um array válido
            if (Array.isArray(data)) {
                setAgendamentos(data);
            } else {
                console.error('Dados não são um array:', data);
                setAgendamentos([]);
            }
            setLoading(false);

        }catch(error){
            setError('Erro ao listar agendamentos. Tente novamente');
            console.error('Erro detalhado:', error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        carregarAgendamentos();
    }, []);

    return (
        <div className="agendamentoUser">
            <div className="cabelho">
                <div className="logo-usuario">

                    <img src="/assets/images/logoTcc.webp" alt="" />
                    <div className="usuario">
                        <h1>Nome do usuário</h1>
                        <p>membro desde...</p>
                    </div>
                </div>

                <div className="botoes">

                <Link to="/inicio"><button> Voltar</button></Link>
                <button onClick={sair}> <img src="/assets/images/sair.png" alt="" /> Sair</button>
                </div>
            </div>

            <div className="grupos-agendamentos">

                <div className="grupo">

                    <h2>Total de agendamentos</h2>
                    <h3>4</h3>
                    {/*
                 {
                    totalAgend.map(() => {
                        
                        })
                        }
                        
                        */}
                </div>
                <div className="grupo">
                    <h2>concluidos</h2>
                    <h3>4</h3>
                </div>
                <div className="grupo">

                </div>
            </div>

            <div className="proximo-agendamento">

                <h2>Meus agendamentos</h2>


                <div className="grupos-agendamento">

                
                <div className="informacoes">
                    {
                     agendamentos.map((hemo) => (
                        <div key={hemo.id_agendamento} className="agendamentos">
                            <h2>{hemo.nome_hemocentro}</h2>
                            <p> <img src="/assets/images/pin.png" alt="" height='20px' /> {hemo.cidade_hemocentro}</p>
                            <p> <img src="/assets/images/cronograma(1).png" alt="" height='20px' /> {new Date(hemo.data_agendamento).toLocaleDateString('pt-BR')}</p>
                            <p><img src="/assets/images/relogio.png" alt="" height='20px' /> {hemo.horario}</p>
                        </div>
                    ))}

                    <div className="botoes">
                        <button>Cancelar agendamento</button>

                        <span>

                        <button>Editar</button>
                        </span>
                    </div>
                </div>

                </div>

            </div>

            <div className="perfil">

                <h2>Informações pessoais</h2>
                <p>atualize suas Informações de perfil</p>

                <div className="editar-informacoes">
                    <div className="informacoes">
                        <label htmlFor=""> Nome</label>
                        <input type="text"
                            placeholder="Nome"
                            name="nome" />
                    </div>
                    <div className="informacoes">
                        <label htmlFor="">Email</label>
                        <input type="text"
                            placeholder="Email"
                            name="email" />
                    </div>

                    <div className="informacoes">
                        <label htmlFor="">Telefone</label>
                        <input type="text"
                            placeholder="(11) 99999-9999"
                            name="telefone" />
                    </div>

                    <button>Salvar alterações</button>

                    <span>
                    <button>Cancelar</button>
                    </span>
                </div>
            </div>
        </div>
    );
}