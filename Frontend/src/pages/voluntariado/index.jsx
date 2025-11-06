import React, { useState, useEffect } from "react";
import { data, Link, useNavigate } from "react-router";
import "./index.scss";
import app from "../../api.js";

export default function VoluntarioForm (){

  const navigate = useNavigate();
  const [hemocentros, setHemocentros] = useState([]);
  const [carregando, setCarregando] = useState(false);

  useEffect(() => {
    const fetchHemocentros = async () => {
      try {
        const response = await app.get('/listarHemocentros');
        const sortedHemocentros = response.data.registros.sort((a, b) =>
          a.nome_hemocentro.localeCompare(b.nome_hemocentro)
        );
        setHemocentros(sortedHemocentros);
      } catch (error) {
        console.error('Erro ao carregar hemocentros:', error);
      }
    };
    fetchHemocentros();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setCarregando(true);

    const formData = new FormData(e.target);

    const data = {
      nome: formData.get('nome'),
      email: formData.get('email'),
      cpf: formData.get('cpf'),
      telefone: formData.get('telefone'),
      disponibilidade: formData.get('disponibilidade'),
      mensagem: formData.get('mensagem'),
      nome_hemocentro: formData.get('nome_hemocentro')

    }
      try{
        const response = await app.post('/voluntarios', data)
        alert('Obrigado por ser voluntário')
        navigate('/Como ajudar')
      }

      catch(error){
          const errorMessage = error.response?.data?.erro || error.message;
          alert('Erro ao se voluntariar' + errorMessage);
      } finally {
        setCarregando(false);
      }

  };

  return (
    <div className="fundo-modal">
      <div className="modal-registro">

        <Link to='/Comoajudar'><button className="botao-fechar" >×</button></Link>

        <div className="cabecalho-modal">
          <h2>Cadastre-se e receba mais informações</h2>
        </div>

        <form className="formulario-registro" onSubmit={handleSubmit}>
          <div className="grupo-formulario">
            <label>Nome completo</label>
            <input type="text" placeholder="Digite seu nome"
            name="nome" 
            required
            />
          </div>

          <div className="grupo-formulario">
            <label>E-mail</label>
            <input type="email" placeholder="Digite seu e-mail"
            name="email" 
            required
            />
          </div>

          <div className="grupo-formulario">
            <label>CPF</label>
            <input type="text" placeholder="Digite seu CPF"
            name="cpf"
            required
            />
          </div>

          <div className="grupo-formulario">
            <label>Telefone</label>
            <input type="tel" placeholder="(00) 00000-0000" 
            name="telefone"
            required
            />
            
          </div>

          <div className="grupo-formulario">
            <label>Disponibilidade</label>
            <input
              type="text"
              placeholder="Ex: Segunda a Sexta - 9h às 18h"
              name="disponibilidade"
              required
            />
          </div>

          <div className="grupo-formulario">
            <label>Hemocentro</label>
            <select
              name="nome_hemocentro"
              required
            >
              <option value="">Selecione um hemocentro</option>
              {hemocentros.map((hemo) => (
                <option key={hemo.id_hemocentro} value={hemo.nome_hemocentro}>
                  {hemo.nome_hemocentro} - {hemo.cidade_hemocentro}
                </option>
              ))}
            </select>
          </div>

          <div className="grupo-formulario">
            <label>Mensagem</label>
            <textarea
              rows="3"
              placeholder="Escreva aqui sua mensagem..."
              name="mensagem"

            ></textarea>
          </div>

          <button type="submit" className="botao-enviar" disabled={carregando}>
            {carregando ? (
              <>
                <span className="spinner"></span> Enviando...
              </>
            ) : (
              'Enviar'
            )}
          </button>
        </form>

        <p className="texto-rodape">
          Ao enviar, você concorda com nossos{" "}
          <a href="#">termos de uso</a> e <a href="#">política de privacidade</a>.
        </p>
      </div>
    </div>
  );
};
