import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.scss";

export default function Configuracoes() {
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

        <main className="dashboard configuracoes">
          <h2>Configurações</h2>

          <div className="config-options">
            <button>Deletar Hemocentro</button>
            <button>Localizar e editar dados do Hemocentro</button>
            <button>Atualizar manualmente os relatórios</button>
            <button>Buscar cadastros de doadores</button>
          </div>
        </main>
      </div>
    </div>
  );
}

