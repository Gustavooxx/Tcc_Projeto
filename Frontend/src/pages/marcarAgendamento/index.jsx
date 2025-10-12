import { useState } from 'react'
import Footer from '../../components/footer/footer'
import Tags from '../../components/tags/util'
import './index.scss'
import { useNavigate } from 'react-router'
import axios from 'axios'

export default function MarcaAgendamento() {

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nome_completo: "",
    email: "",
    telefone: "",
    estado: "",
    cidade: "",
    hemocentro_id: "",
    tipo_sanguineo: "",
    data_agendamento: "",
    horario: "",
    observacoes: "",
    confirmou_requisitos: 0
  })

  const [mensagem, setMensagem] = useState("");

  // handleChange atualiza o state quando o usuário digita/select/checkbox
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (checked ? 1 : 0) : value
    }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = 'http://localhost:5010/agendamento';
    try {
      const token = localStorage.getItem('token');
      const resposta = await axios.post(url, formData, {
        headers: { 'x-access-token': token }
      });

      setMensagem("Agendamento feito com sucesso!");
      console.log("Resposta da API:", resposta.data);

      setFormData({
        nome_completo: "",
        email: "",
        telefone: "",
        estado: "",
        cidade: "",
        hemocentro_id: "",
        tipo_sanguineo: "",
        data_agendamento: "",
        horario: "",
        observacoes: "",
        confirmou_requisitos: 0
      });

    } catch (error) {
      console.error("erro ao fazer agendamento", error)
          const errorMessage = error.response?.data?.erro || error.message;
            alert('Erro ao cadastrar: ' + errorMessage);

      if (error.response && error.response.data && error.response.data.erro) {
        setMensagem(error.response.data.erro);
      } else {
        setMensagem("Erro ao fazer agendamento do usuário!");
      }
    }
  }

  return (
    <div className="container-agendamento">
      <Tags />

      <section className="conteudo">
        <header className="cabecalho">
          <h1>Marcar Agendamento</h1>
          <p>
            Preencha os dados abaixo para realizar seu agendamento de doação.
            As informações serão usadas apenas para o contato e organização do
            seu atendimento.
          </p>
        </header>

        <div className="grid">
          <section className="card-form">
            <h2>Dados do agendamento</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="nome_completo">Nome completo</label>
                <input type="text" name="nome_completo" id="nome_completo" placeholder="Seu nome" required value={formData.nome_completo} onChange={handleChange} />
              </div>

              <div className="row">
                <div className="form-group">
                  <label htmlFor="email">E-mail</label>
                  <input type="email" name="email" id="email" placeholder="seu@email.com" value={formData.email} onChange={handleChange} />
                </div>

                <div className="form-group">
                  <label htmlFor="telefone">Telefone</label>
                  <input type="tel" name="telefone" id="telefone" placeholder="(00) 00000-0000" maxLength={15} value={formData.telefone} onChange={handleChange} />
                </div>
              </div>

              <div className="row">
                <div className="form-group">
                  <label htmlFor="estado">Estado</label>
                  <select id="estado" name="estado" value={formData.estado} onChange={handleChange} required>
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
                  <input type="text" name="cidade" id="cidade" placeholder="Sua cidade" required value={formData.cidade} onChange={handleChange} />
                </div>
              </div>

              <div className="row">
                <div className="form-group">
                  <label htmlFor="hemocentro">Hemocentro</label>
                  <select id="hemocentro_id" name="hemocentro_id" value={formData.hemocentro_id} onChange={handleChange} required>
                    <option value="" disabled>Selecione um hemocentro</option>
                    <option value="Fundação Pró-Sangue - São Paulo (SP)">Fundação Pró-Sangue - São Paulo (SP)</option>
                    <option value="HemoRio - Rio de Janeiro (RJ)">HemoRio - Rio de Janeiro (RJ)</option>
                    <option value="Hemominas - Belo Horizonte (MG)">Hemominas - Belo Horizonte (MG)</option>
                    <option value="HemoPE - Recife (PE)">HemoPE - Recife (PE)</option>
                    <option value="Outro">Outro</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="tipo_sanguineo">Tipo sanguíneo</label>
                  <select id="tipo_sanguineo" name="tipo_sanguineo" value={formData.tipo_sanguineo} onChange={handleChange} required>
                    <option value="" disabled>Selecione</option>
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

              <div className="row">
                <div className="form-group">
                  <label htmlFor="data">Data</label>
                  <input type="date" name="data_agendamento" id="data_agendamento" required value={formData.data_agendamento} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="hora">Horário</label>
                  <input type="time" name="horario" id="horario" min="08:00" max="17:30" step={1800} required value={formData.horario} onChange={handleChange} />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="observacoes">Observações</label>
                <textarea id="observacoes" name="observacoes" rows={3} placeholder="Informações adicionais (opcional)" value={formData.observacoes} onChange={handleChange} />
              </div>

              <div className="form-check">
                  <input type="checkbox" id="confirmou_requisitos" name="confirmou_requisitos" checked={!!formData.confirmou_requisitos} onChange={handleChange} />
                  <label htmlFor="confirmou_requisitos">
                    Confirmo que atendo aos requisitos para doação e estou em boas condições de saúde.
                  </label>
              </div>

              <button type="submit" className="btn-primary">Marcar agendamento</button>
            </form>
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
