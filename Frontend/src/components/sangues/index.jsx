import React from 'react'
import './index.scss'

const sangueCompativeis = [
  { type: "A+", canDonate: ["A+", "AB+"], canReceive: ["A+", "A-", "O+", "O-"] },
  { type: "A-", canDonate: ["A+", "A-", "AB+", "AB-"], canReceive: ["A-", "O-"] },
  { type: "B+", canDonate: ["B+", "AB+"], canReceive: ["B+", "B-", "O+", "O-"] },
  { type: "B-", canDonate: ["B+", "B-", "AB+", "AB-"], canReceive: ["B-", "O-"] },
  { type: "AB+", canDonate: ["AB+"], canReceive: ["Todos"] },
  { type: "AB-", canDonate: ["AB+", "AB-"], canReceive: ["AB-", "A-", "B-", "O-"] },
  { type: "O+", canDonate: ["A+", "B+", "AB+", "O+"], canReceive: ["O+", "O-"] },
  { type: "O-", canDonate: ["Todos"], canReceive: ["O-"] },
];

export function Sangues() {
  return (
    <section className="Container-sangues">
      <div className="container">
        <div className="textos-center">
          <h2 className="titulo">Compatibilidade Sanguínea</h2>
          <p className="sub">
            Entenda quem pode receber e doar para cada tipo sanguíneo
          </p>
        </div>
        
        <div className="cards">
          {sangueCompativeis.map((sangue) => (
            <div key={sangue.type} className="card">
              <div className="card-badge">
                <span>{sangue.type}</span>
              </div>

              <div className="card-content">
                <p className="card-label">Pode doar para:</p>
                <div className="badge-list">
                  {sangue.canDonate.map((type, idx) => (
                    <span key={idx} className="tag">{type}</span>
                  ))}
                </div>
              </div>

              <div className="card-content">
                <p className="card-label">Pode receber de:</p>
                <div className="badge-list">
                  {sangue.canReceive.map((type, idx) => (
                    <span key={idx} className="tag">{type}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sangues;