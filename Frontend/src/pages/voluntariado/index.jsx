// src/components/VoluntarioForm/index.jsx
import React from "react";
import "./index.scss";

const VoluntarioForm = () => {
  return (
    <div className="voluntario-container">
      <h1>Cadastro de Voluntário</h1>
      <p>Junte-se a nós para fazer a diferença!</p>

      <form
        action="https://formspree.io/f/mayvzzlz"
        method="POST"
        className="voluntario-form"
      >
        <label htmlFor="nome">Nome completo *</label>
        <input type="text" id="nome" name="nome" required />

        <label htmlFor="email">E-mail *</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="telefone">Telefone *</label>
        <input type="tel" id="telefone" name="telefone" required />

        <label htmlFor="interesse">Área de interesse *</label>
        <select id="interesse" name="interesse" required>
          <option value="">Selecione...</option>
          <option value="Saúde">Saúde</option>
          <option value="Educação">Educação</option>
          <option value="Eventos">Eventos</option>
          <option value="Campanhas">Campanhas de arrecadação</option>
          <option value="Outro">Outro</option>
        </select>

        <label htmlFor="disponibilidade">Disponibilidade *</label>
        <textarea
          id="disponibilidade"
          name="disponibilidade"
          placeholder="Ex: Fins de semana, manhãs, tardes..."
          required
        ></textarea>

        <label htmlFor="mensagem">Mensagem (opcional)</label>
        <textarea
          id="mensagem"
          name="mensagem"
          placeholder="Conte um pouco sobre você ou deixe uma mensagem."
        ></textarea>

        <button type="submit">Quero ser voluntário</button>
      </form>

      <div className="voluntario-footer">
        © 2025 Projeto Voluntário. Juntos somos mais fortes.
      </div>
    </div>
  );
};

export default VoluntarioForm;
