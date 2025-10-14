import React from 'react'
import './index.scss'

const perguntas = [
  {
    question: "Quanto tempo dura o processo de doação?",
    answer: "O processo completo de doação de sangue dura entre 30 e 40 minutos, incluindo o cadastro, triagem, coleta e lanche. A coleta em si leva apenas cerca de 10 minutos.",
  },
  {
    question: "Quantas vezes posso doar por ano?",
    answer: "Homens podem doar a cada 2 meses (máximo 4 vezes ao ano) e mulheres a cada 3 meses (máximo 3 vezes ao ano). É importante respeitar esse intervalo para garantir a recuperação completa do organismo.",
  },
  {
    question: "A doação de sangue dói?",
    answer: "A picada da agulha causa apenas um pequeno desconforto inicial, similar a um exame de sangue comum. Após isso, você não sentirá dor durante a doação. Nossos profissionais são altamente treinados para tornar o processo o mais confortável possível.",
  },
  {
    question: "Preciso estar em jejum?",
    answer: "Não! É importante estar bem alimentado antes de doar sangue. Evite apenas alimentos muito gordurosos nas 4 horas anteriores. Você pode tomar café da manhã ou almoçar normalmente antes da doação.",
  },
  {
    question: "Posso dirigir após doar sangue?",
    answer: "Sim, você pode dirigir após a doação, desde que esteja se sentindo bem. Recomendamos que espere pelo menos 15 minutos descansando e fazendo o lanche oferecido antes de ir embora.",
  },
  {
    question: "Quanto sangue é retirado na doação?",
    answer: "São coletados cerca de 450ml de sangue por doação, o que representa menos de 10% do volume total de sangue do corpo. Essa quantidade é rapidamente reposta pelo organismo.",
  },
];

export function Perguntas() {
  return (

    <section id="perguntas" className="container-perguntas">
      <div className="container">
        <div className="textos-center">
          <h2 className="titulo">Perguntas Frequentes</h2>
          <p className="subtitulo">Tire suas dúvidas sobre doação de sangue</p>
        </div>

        <div className="detalhes">
          {perguntas.map((pergunta, index) => (
            <details key={index} className="detalhe-item">
              <summary className="detalhe-pergunta">{pergunta.question}</summary>
              <div className="detalhe-resposta">{pergunta.answer}</div>
            </details>
          ))}
        </div>
      </div>
    </section>

  );
}

export default Perguntas;
