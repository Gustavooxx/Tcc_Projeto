import React, { useState } from "react";
import { Link } from "react-router";
import "./index.scss";

<<<<<<< HEAD
export default function VoluntarioForm (){
=======
const VoluntarioForm = () => {
  const [showModal, setShowModal] = useState(true)

  const onClose = () => setShowModal(false);
 

  if (!showModal) return null;

>>>>>>> f2e0038ec3b1501ad52a307fa0d98ab494116c9a
  return (
    <div className="fundo-modal">
      <div className="modal-registro">

        <Link to='/Comoajudar'><button className="botao-fechar" >×</button></Link>

        <div className="cabecalho-modal">
          <h2>Cadastre-se e receba mais informações</h2>
        </div>

        <form className="formulario-registro">
          <div className="grupo-formulario">
            <label>Nome completo</label>
            <input type="text" placeholder="Digite seu nome" />
          </div>

          <div className="grupo-formulario">
            <label>E-mail</label>
            <input type="email" placeholder="Digite seu e-mail" />
          </div>

          <div className="grupo-formulario">
            <label>Telefone</label>
            <input type="tel" placeholder="(00) 00000-0000" />
          </div>

          <div className="grupo-formulario">
            <label>Disponibilidade</label>
            <input
              type="text"
              placeholder="Ex: Segunda a Sexta - 9h às 18h"
            />
          </div>

          <div className="grupo-formulario">
            <label>Mensagem</label>
            <textarea
              rows="3"
              placeholder="Escreva aqui sua mensagem..."
            ></textarea>
          </div>

          <button type="button" className="botao-enviar">
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
