import { Link, useNavigate } from "react-router";
import { useState, useEffect } from "react";
import "./index.scss";
import app from "../../api";
import axios from 'axios';

export default function AgendamentoUser() {
    const navigate = useNavigate();
    const [totalAgend, setTotalAgend] = useState([]);
    const [agendamentos, setAgendamentos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [editarAgend, setEditarAgend] = useState({});
    const [isAgend, setIsAgend] = useState(false);
    const [nome, setNome] = useState([]);
    const [horarios, setHorarios] = useState([]);
    const [carregandoHorarios, setCarregandoHorarios] = useState(false);
    const [horarioError, setHorarioError] = useState("");

    function sair() {
        window.confirm('Tem certeza que deseja sair da sua conta?')
        localStorage.removeItem("USUARIO");
        localStorage.removeItem("TOKEN");

        navigate('/Inicio')
    }

    const carregarAgendamentos = async () => {
        setLoading(true);
        setError('');
        setAgendamentos([]);

        try {
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

        } catch (error) {
            setError('Erro ao listar agendamentos. Tente novamente');
            console.error('Erro detalhado:', error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        carregarAgendamentos();
        listarHemocentros();
    }, []);

    const listarHemocentros = async () => {
        try {
            const resposta = await app.get("/listarHemocentros");
            setNome(resposta.data.registros);
        } catch (error) {
            console.error("Erro ao listar hemocentros", error);
        }
    };

    const listarHorarios = async (nomeHemocentro, data) => {
        setCarregandoHorarios(true);
        setHorarioError("");
        try {
            // Converter data de YYYY-MM-DD para DD/MM/YYYY
            const [ano, mes, dia] = data.split('-');
            const dataFormatada = `${dia}/${mes}/${ano}`;

            const resposta = await app.post("listarHorariosDisponiveis", {
                nome: nomeHemocentro,
                data: dataFormatada
            });
            const horariosRecebidos = Array.isArray(resposta.data.resposta) ? resposta.data.resposta : [];
            setHorarios(horariosRecebidos);

            if (horariosRecebidos.length === 0) {
                setHorarioError("escolha um dia nos próximos dois meses");
                setEditarAgend((prev) => ({
                    ...prev,
                    horario_agendamento: ""
                }));
            }
        } catch (error) {
            console.error("Erro ao listar horários", error);
            setHorarios([]);
            setHorarioError("Não foi possível carregar horários. Tente novamente.");
        } finally {
            setCarregandoHorarios(false);
        }
    };

    const handleDeletar = async (id) => {
        if (window.confirm('Tem certeza que deseja deletar o agendamento?')) {
            try {
                await app.delete(`deletar/${id}`);
                alert('Agendamento deletado com sucesso!');
                carregarAgendamentos();
            } catch (error) {
                console.error('Erro ao deletar agendamento:', error);
                alert('Erro ao deletar agendamento. Tente novamente');
            }
        }
    }

    const handleEditar = (hemo) => {
        setEditarAgend({
            ...hemo,
            data_agendamento: new Date(hemo.data_agendamento).toISOString().split('T')[0],
            horario_agendamento: hemo.horario
        });
        setIsAgend(true);
    }

    const handleSalvarEdit = async () => {
        try {
            const response = await app.put(`atualizar/${editarAgend.id}`, {
                id_hemocentro: editarAgend.id_hemocentro,
                data_agendamento: editarAgend.data_agendamento,
                horario: editarAgend.horario_agendamento
            });
            if (response.status !== 200) {
                throw new Error('Erro ao atualizar agendamento. Tente novamente');
            }
            setAgendamentos(agendamentos.map(hemo =>
                hemo.id === editarAgend.id ? { ...hemo, nome_hemocentro: editarAgend.nome_hemocentro, cidade_hemocentro: editarAgend.cidade_hemocentro, data_agendamento: editarAgend.data_agendamento, horario: editarAgend.horario_agendamento } : hemo
            ));
            setIsAgend(false);
            alert('Agendamento atualizado com sucesso!');
            carregarAgendamentos();
        } catch (error) {
            console.error('Erro ao atualizar agendamento:', error);
            alert(error.message);
        }
    }

    const handleCancelar = () => {
        setIsAgend(false);
        setEditarAgend({})
    }

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
                        {agendamentos.length === 0 ? (
                            <div className="sem-agendamentos">
                                <h2>Você ainda não possui agendamentos</h2>
                                <p>Que tal agendar sua primeira doação?</p>
                                <Link to="/Marcar agendamento">
                                    <button>Agendar Agora</button>
                                </Link>
                            </div>
                        ) : (
                            agendamentos.map((hemo) => (
                                <div key={hemo.id_agendamento} className="agendamentos">
                                    <h2>{hemo.nome_hemocentro}</h2>
                                    <p> <img src="/assets/images/pin.png" alt="" height='20px' /> {hemo.cidade_hemocentro}</p>
                                    <p> <img src="/assets/images/pin.png" alt="" height='20px' /> {hemo.bairro_hemocentro}</p>
                                    <p> <img src="/assets/images/pin.png" alt="" height='20px' /> {hemo.rua_hemocentro}</p>
                                    <p> <img src="/assets/images/cronograma(1).png" alt="" height='20px' /> {new Date(hemo.data_agendamento).toLocaleDateString('pt-BR')}</p>
                                    <p><img src="/assets/images/relogio.png" alt="" height='20px' /> {hemo.horario}</p>

                                    <button onClick={() => handleEditar(hemo)}>Editar</button>
                                    <button onClick={() => handleDeletar(hemo.id)}>Cancelar</button>
                                </div>
                            ))
                        )}
                    </div>

                </div>

            </div>

            {isAgend && (
                <div className="container-editar">
                    <div className="contents">
                        <h3>Editar agendamento</h3>
                        <div className="form-group">
                            <label htmlFor="nome_hemocentro">Hemocentro</label>
                            <select
                                id="nome_hemocentro"
                                value={editarAgend.nome_hemocentro}
                                onChange={async (e) => {
                                    const selectedHemocentro = nome.find(h => h.nome_hemocentro === e.target.value);
                                    setEditarAgend({
                                        ...editarAgend,
                                        nome_hemocentro: e.target.value,
                                        cidade_hemocentro: selectedHemocentro ? selectedHemocentro.cidade_hemocentro : '',
                                        id_hemocentro: selectedHemocentro ? selectedHemocentro.id_hemocentro : ''
                                    });
                                    try {
                                        if (e.target.value && editarAgend.data_agendamento) {
                                            await listarHorarios(e.target.value, editarAgend.data_agendamento);
                                        } else {
                                            setHorarios([]);
                                        }
                                    } catch (error) {
                                        console.error("Erro ao buscar horários:", error);
                                        setHorarios([]);
                                    }
                                }}
                                required
                            >
                                <option value="" disabled>Selecione um hemocentro</option>
                                {nome.map((item, index) => (
                                    <option key={index} value={item.nome_hemocentro}>
                                        {item.nome_hemocentro}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="cidade_hemocentro">Cidade</label>
                            <input type="text"
                                id="cidade_hemocentro"
                                value={editarAgend.cidade_hemocentro}
                                readOnly />
                        </div>
                        <div className="form-group">
                            <label htmlFor="data_agendamento">Data</label>
                            <input type="date"
                                id="data_agendamento"
                                value={editarAgend.data_agendamento}
                                min={new Date().toISOString().split('T')[0]}
                                max={new Date(Date.now() + 60 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]}
                                onChange={async (e) => {
                                    setEditarAgend({ ...editarAgend, data_agendamento: e.target.value });
                                    try {
                                        if (editarAgend.nome_hemocentro && e.target.value) {
                                            await listarHorarios(editarAgend.nome_hemocentro, e.target.value);
                                        } else {
                                            setHorarios([]);
                                        }
                                    } catch (error) {
                                        console.error("Erro ao buscar horários:", error);
                                        setHorarios([]);
                                    }
                                }} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="horario_agendamento">Horário</label>
                            <select id="horario_agendamento" value={editarAgend.horario_agendamento} onChange={(e) => setEditarAgend({ ...editarAgend, horario_agendamento: e.target.value })} required disabled={!editarAgend.nome_hemocentro || !editarAgend.data_agendamento || carregandoHorarios || horarios.length === 0 || horarioError}>
                                <option value="" disabled>Selecione um horário</option>
                                {Array.isArray(horarios) && horarios.map((horario, index) => (
                                    <option key={index} value={horario}>
                                        {horario}
                                    </option>
                                ))}
                            </select>
                            {horarioError && (
                                <p style={{ color: 'red', marginTop: '5px' }}>{horarioError}</p>
                            )}
                        </div>
                        <button onClick={handleSalvarEdit}>Salvar</button>
                        <button onClick={handleCancelar}>Cancelar</button>
                    </div>
                </div>
            )}

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