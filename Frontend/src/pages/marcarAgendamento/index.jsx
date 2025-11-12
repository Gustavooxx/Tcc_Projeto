import { useState, useEffect } from 'react'
import Footer from '../../components/footer/footer'
import Tags from '../../components/tags/util'
import './index.scss'
import { useNavigate } from 'react-router'
import axios from 'axios'
import { toast } from 'react-toastify'

export default function MarcaAgendamento() {

  const navegar = useNavigate();
  const [dadosFormulario, setDadosFormulario] = useState({
    nome_completo: "",
    cpf: "",
    email: "",
    telefone: "",
    estado: "",
    cidade: "",
    tipo_sanguineo: "",
    data_agendamento: "",
    horario: "",
    observacoes: "",
    confirmou_requisitos: 0,
    nome_hemocentro: ''
  })

  const [mensagem, setMensagem] = useState("");
  const [nome, setNome] = useState([]);
  const [horarios, setHorarios] = useState([]);
  const [carregandoHorarios, setCarregandoHorarios] = useState(false);
  const [horarioError, setHorarioError] = useState("");
  const [carregando, setCarregando] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? (checked ? 1 : 0) : value;

    setDadosFormulario((prev) => ({
      ...prev,
      [name]: newValue
    }));
  }

const listarHemocentros = async () => {
  try {
    const resposta = await axios.get("http://localhost:5000/listarHemocentros");
    const sortedHemocentros = resposta.data.registros.sort((a, b) =>
      a.nome_hemocentro.localeCompare(b.nome_hemocentro)
    );
    setNome(sortedHemocentros);
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

    const resposta = await axios.post("http://localhost:5000/listarHorariosDisponiveis", {
      nome: nomeHemocentro,
      data: dataFormatada
    });
    const horariosRecebidos = Array.isArray(resposta.data.resposta) ? resposta.data.resposta : [];
    setHorarios(horariosRecebidos);

    if (horariosRecebidos.length === 0) {
      setHorarioError("escolha um dia nos próximos dois meses");
      setDadosFormulario((prev) => ({
        ...prev,
        horario: ""
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

useEffect(() => {
  listarHemocentros();
}, []);



  const handleSubmit = async (e) => {
    e.preventDefault();
    setCarregando(true);

    // Verificar se não há horários disponíveis
    if (horarios.length === 0 && dadosFormulario.nome_hemocentro && dadosFormulario.data_agendamento) {
      toast.warning('Não há horários disponíveis para o dia selecionado.');
      setCarregando(false);
      return;
    }

    const url = 'http://localhost:5000/agendamento';
    try {
      const token = localStorage.getItem('token');
      const resposta = await axios.post(url, dadosFormulario, {
        headers: { 'x-access-token': token }
      });

      setMensagem("Agendamento feito com sucesso!");
      console.log("Resposta da API:", resposta.data);

      setDadosFormulario({
        nome_completo: "",
        cpf: "",
        email: "",
        telefone: "",
        estado: "",
        cidade: "",
        tipo_sanguineo: "",
        data_agendamento: "",
        horario: "",
        observacoes: "",
        confirmou_requisitos: 0,
        nome_hemocentro: ''
      });

    } catch (error) {
      console.error("Erro ao fazer agendamento", error)
          const errorMessage = error.response?.data?.erro || error.message;
            toast.error('Erro ao cadastrar: ' + errorMessage);

          



      if (error.response && error.response.data && error.response.data.erro) {
        setMensagem(error.response.data.erro);
      } else {
        setMensagem("Erro ao fazer agendamento do usuário!");
      }
    } finally {
      setCarregando(false);
    }
  }


  return (
    <div className="container-agendamento">
      <Tags />

      <section className="conteudo">
        <header className="cabecalho">
          <h1>Marcar Agendamento</h1>
          <h3>
            Preencha os dados abaixo para realizar seu agendamento de doação.<br/>
            As informações serão usadas apenas para o contato e organização do
            seu atendimento.
          </h3>
        </header>

        <div className="grid">
          <section className="card-form">
            <h2>Dados do agendamento</h2>
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="form-group">
                  <label htmlFor="nome_completo">Nome completo</label>
                  <input type="text" name="nome_completo" id="nome_completo" placeholder="Seu nome" maxLength={100} required value={dadosFormulario.nome_completo} onChange={handleChange} />
                </div>

                <div className='form-group'>
                  <label htmlFor="cpf">CPF</label>
                  <input type="text" name="cpf" id="cpf" placeholder="000.000.000-00" maxLength={14} value={dadosFormulario.cpf} onChange={handleChange} />
                </div>
              </div>

              <div className="row">
                <div className="form-group">
                  <label htmlFor="email">E-mail</label>
                  <input type="email" name="email" id="email" placeholder="seu@email.com" value={dadosFormulario.email} onChange={handleChange} />
                </div>

                <div className="form-group">
                  <label htmlFor="telefone">Telefone</label>
                  <input type="tel" name="telefone" id="telefone" placeholder="(00) 00000-0000" maxLength={15} value={dadosFormulario.telefone} onChange={handleChange} />
                </div>
              </div>


              <div className="row">
                <div className="form-group">
                  <label htmlFor="estado">Estado</label>
                  <select id="estado" name="estado" value={dadosFormulario.estado} onChange={handleChange} required>
                    <option value="" disabled>Estado</option>
                    <option value="AC">AC</option>
                    <option value="AL">AL</option>
                    <option value="AP">AP</option>
                    <option value="AM">AM</option>
                    <option value="BA">BA</option>
                    <option value="CE">CE</option>
                    <option value="DF">DF</option>
                    <option value="ES">ES</option>
                    <option value="GO">GO</option>
                    <option value="MA">MA</option>
                    <option value="MT">MT</option>
                    <option value="MS">MS</option>
                    <option value="MG">MG</option>
                    <option value="PA">PA</option>
                    <option value="PB">PB</option>
                    <option value="PR">PR</option>
                    <option value="PE">PE</option>
                    <option value="PI">PI</option>
                    <option value="RJ">RJ</option>
                    <option value="RN">RN</option>
                    <option value="RS">RS</option>
                    <option value="RO">RO</option>
                    <option value="RR">RR</option>
                    <option value="SC">SC</option>
                    <option value="SP">SP</option>
                    <option value="SE">SE</option>
                    <option value="TO">TO</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="cidade">Cidade</label>
                  <input type="text" name="cidade" id="cidade" placeholder="Sua cidade" maxLength={50} required value={dadosFormulario.cidade} onChange={handleChange} />
                </div>
              </div>

              <div className="row">
                <div className="form-group">
                  <label htmlFor="hemocentro">Hemocentro</label>
                 <select
                    id="nome_hemocentro"
                    name="nome_hemocentro"
                    value={dadosFormulario.nome_hemocentro}
                    onChange={async (e) => {
                      handleChange(e);
                      try {
                        if (e.target.value && dadosFormulario.data_agendamento) {
                          await listarHorarios(e.target.value, dadosFormulario.data_agendamento);
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
                  <label htmlFor="tipo_sanguineo">Tipo sanguíneo</label>
                  <select id="tipo_sanguineo" name="tipo_sanguineo" value={dadosFormulario.tipo_sanguineo} onChange={handleChange} required>
                    <option value="" disabled>Selecione</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                    <option value="Não sei">Não sei</option>

                  </select>
                </div>
              </div>

              <div className="row">
                <div className="form-group">
                  <label htmlFor="data">Data</label>
                  <input type="date" name="data_agendamento" id="data_agendamento" required value={dadosFormulario.data_agendamento} min={new Date().toISOString().split('T')[0]} max={new Date(Date.now() + 60 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]} onChange={async (e) => {
                    handleChange(e);
                    try {
                      if (dadosFormulario.nome_hemocentro && e.target.value) {
                        await listarHorarios(dadosFormulario.nome_hemocentro, e.target.value);
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
                  <label htmlFor="hora">Horário</label>
                  <select id="horario" name="horario" value={dadosFormulario.horario} onChange={handleChange} required disabled={!dadosFormulario.nome_hemocentro || !dadosFormulario.data_agendamento || carregandoHorarios || horarios.length === 0 || horarioError}>
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
              </div>

              <div className="form-group">
                <label htmlFor="observacoes">Observações</label>
                <textarea id="observacoes" name="observacoes" rows={3} placeholder="Informações adicionais (opcional)" maxLength={200} value={dadosFormulario.observacoes} onChange={handleChange} />
              </div>

              <div className="form-check">
                  <input type="checkbox" id="confirmou_requisitos" name="confirmou_requisitos" checked={!!dadosFormulario.confirmou_requisitos} onChange={handleChange} />
                  <label htmlFor="confirmou_requisitos">
                    Confirmo que atendo aos requisitos para doação e estou em boas condições de saúde.
                  </label>
              </div>

              <button type="submit" className="btn-primary" disabled={carregando}>
                {carregando ? 'Marcando...' : 'Marcar agendamento'}
              </button>
            </form>
            {mensagem && <p className="mensagem">{mensagem}</p>}
          </section>

          <aside className="card-info">
            <h3>Importante</h3>
            <ul>
              <li>Levar documento oficial com foto no dia da doação.</li>
              <li>Evite alimentos gordurosos 3 horas antes da doação.</li>
              <li>Durma bem na noite anterior.</li>
              <li>Este agendamento é local e não envia dados ao servidor.</li>
            </ul>
          </aside>

        </div>

      </section>

      <Footer />
    </div>
  )
}
