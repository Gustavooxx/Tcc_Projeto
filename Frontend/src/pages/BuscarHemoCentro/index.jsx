import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.scss";

export default function BuscarHemoCentro() {
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
          <h2>Buscar HemoCentro</h2>
          <div className="busca-container">
            <input type="text" placeholder="Digite o nome do Hemocentro" />
            <button>Buscar</button>
          </div>

          <div className="resultado-busca">
            <p>Nenhum resultado encontrado.</p>
          </div>
        </main>
      </div>
    </div>
  );
}
