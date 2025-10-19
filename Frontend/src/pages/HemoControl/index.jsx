import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.scss";

export default function HemoControl() {
  const navigate = useNavigate();

  return (
    <div className="hemo-container">
      {/* Top bar */}
      <header className="hemo-header">
        <div className="logo" onClick={() => navigate("/")}>
          HemoControl
        </div>
        <div className="user-info">User:</div>
      </header>

      <div className="hemo-content">
        {/* Sidebar */}
        <aside className="sidebar">
          <button onClick={() => navigate("/cadastrar")}>
            Cadastrar HemoCentro
          </button>
          <button onClick={() => navigate("/buscar")}>
            Buscar HemoCentro
          </button>
          <button onClick={() => navigate("/agendamentos")}>
            Agendamentos
          </button>
          <button onClick={() => navigate("/relatorios")}>
            Relatórios
          </button>
          <button onClick={() => navigate("/configuracoes")}>
            Configurações
          </button>
        </aside>

        {/* Dashboard */}
        <main className="dashboard">
          <div className="card">
            <div className="card-title">Doadores Cadastrados</div>
            <div className="card-value">9.999</div>
          </div>

          <div className="card">
            <div className="card-title">Doações (Últimos 7 dias)</div>
            <div className="card-value">99</div>
          </div>

          <div className="card">
            <div className="card-title">Agendados para Hoje</div>
            <div className="card-value">99</div>
          </div>

          <div className="card">
            <div className="card-title">Estoque Crítico</div>
            <div className="card-value">99</div>
          </div>
        </main>
      </div>
    </div>
  );
}
