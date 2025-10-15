// src/components/VoluntarioForm/index.jsx
import React from "react";
import "./index.scss";

const VoluntarioForm = ({onClose}) => {
 return (
    <div className="register-overlay">
      <div className="register-modal">
        <button className="close-btn" onClick={onClose}>×</button>

        <div className="modal-header">
          <h2>Cadastre-se e receba mais informações</h2>
        </div>

        <form className="register-form">
          <div className="form-group">
            <label>Nome completo</label>
            <input type="text" placeholder="Digite seu nome" />
          </div>

          <div className="form-group">
            <label>E-mail</label>
            <input type="email" placeholder="Digite seu e-mail" />
          </div>

          <div className="form-group">
            <label>Telefone</label>
            <input type="tel" placeholder="(00) 00000-0000" />
          </div>

          <div className="form-group">
            <label>Disponibilidade</label>
            <input
              type="text"
              placeholder="Ex: Segunda a Sexta - 9h às 18h"
            />
          </div>

          <div className="form-group">
            <label>Mensagem</label>
            <textarea
              rows="3"
              placeholder="Escreva aqui sua mensagem..."
            ></textarea>
          </div>

          <button type="button" className="submit-btn">
            Enviar
          </button>
        </form>

        <p className="footer-text">
          Ao enviar, você concorda com nossos{" "}
          <a href="#">termos de uso</a> e <a href="#">política de privacidade</a>.
        </p>
      </div>
    </div>
  );
};

export default VoluntarioForm;
