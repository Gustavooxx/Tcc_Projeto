import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.scss";

export default function Agendamentos() {
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
          <h2>Agendamentos</h2>
          <table className="tabela-agendamentos">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Data</th>
                <th>Hora</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Maria Silva</td>
                <td>18/10/2025</td>
                <td>09:00</td>
                <td>Confirmado</td>
              </tr>
            </tbody>
          </table>
        </main>
      </div>
    </div>
  );
}
