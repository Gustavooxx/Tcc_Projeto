import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.scss";

export default function Relatorios() {
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
          <h2>Relatórios</h2>
          <div className="relatorio-container">
            <p>Selecione o tipo de relatório para gerar:</p>
            <select>
              <option>Doações por período</option>
              <option>Estoque de sangue</option>
              <option>Agendamentos realizados</option>
            </select>
            <button>Gerar Relatório</button>
          </div>
        </main>
      </div>
    </div>
  );
}
