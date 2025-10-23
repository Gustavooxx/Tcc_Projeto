import React, { useState } from "react";
import { data, Link, useNavigate } from "react-router";
import "./index.scss";
import app from "../../api.js";

export default function VoluntarioForm (){

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new data(e.target);

    const data = {
      nome: formData.get('nome'),
      email: formData.get('email'),
      cpf: formData.get('cpf'),
      telefone: formData.get('telefone'),
      disponibilidade: formData.get('disponibilidade'),
      mensagem: formData.get('mensagem')

    }
      try{
        const response = await app.post('/voluntariar')
        alert('Obrigado por ser voluntariar')
        navigate('/Como ajudar')
      }

      catch(error){
          const errorMessage = error.response?.data?.erro || error.message;
          alert('Erro ao se voluntariar' + errorMessage);
      }

  };

  return (
    <div className="fundo-modal">
      <div className="modal-registro">

        <Link to='/Comoajudar'><button className="botao-fechar" >×</button></Link>

        <div className="cabecalho-modal">
          <h2>Cadastre-se e receba mais informações</h2>
        </div>

        <form className="formulario-registro" onChange={handleSubmit}>
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
            name="cpf " 
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
            <label>Mensagem</label>
            <textarea
              rows="3"
              placeholder="Escreva aqui sua mensagem..."
              name="mensagem"
              
            ></textarea>
          </div>

          <button type="submit" className="botao-enviar">
            Enviar
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
