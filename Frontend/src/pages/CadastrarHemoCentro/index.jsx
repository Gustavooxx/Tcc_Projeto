import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.scss";

export default function CadastrarHemoCentro() {
  const navigate = useNavigate();

  return (
    <div className="hemo-container">
      <header className="hemo-header">
        <div className="logo" onClick={() => navigate("/")}>
          HemoControl
        </div>
        <div className="user-info">User:</div>
      </header>

      <div className="hemo-content">
        <aside className="sidebar">
          <button onClick={() => navigate("/cadastrar")}>Cadastrar HemoCentro</button>
          <button onClick={() => navigate("/buscar")}>Buscar HemoCentro</button>
          <button onClick={() => navigate("/agendamentos")}>Agendamentos</button>
          <button onClick={() => navigate("/relatorios")}>Relatórios</button>
          <button onClick={() => navigate("/configuracoes")}>Configurações</button>
        </aside>

        <main className="dashboard">
          <h2>Cadastrar HemoCentro</h2>
          <form className="cadastro-form">
            <input type="text" placeholder="Nome do Hemocentro" />
            <input type="text" placeholder="Endereço" />
            <input type="text" placeholder="Telefone" />
            <input type="email" placeholder="E-mail" />
            <button type="submit">Salvar</button>
          </form>
        </main>
      </div>
    </div>
  );
}
