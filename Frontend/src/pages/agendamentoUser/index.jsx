import { Link } from "react-router";
import "./index.scss";

export default function AgendamentoUser() {
    return (
        <div className="agendamentoUser">
            <div className="cabelho">
                <div className="logo-usuario">

                    <img src="/assets/images/logoTcc.webp" alt="" />
                    <div className="usuario">
                        <h1>Nome do usuário</h1>
                        <p>membro desde...</p>
                    </div>
                </div>
                <button> <img src="/assets/images/sair.png" alt="" /> Sair</button>
            </div>

            <div className="grupos-agendamentos">

                <div className="grupo">

                    <h2>Total de agendamentos</h2>
                    <h3>4</h3>
                    {/*
                 {
                    totalAgend.map(() => {
                        
                        })
                        }
                        
                        */}
                </div>
                <div className="grupo">
                    <h2>concluidos</h2>
                    <h3>4</h3>
                </div>
                <div className="grupo">

                </div>
            </div>

            <div className="proximo-agendamento">

                <h2>Meus agendamentos</h2>

                <div className="informacoes">
                    <h3>nome hemo</h3>
                    <p> <img src="/assets/images/pin.png" alt="" height='20px' />local</p>
                    <p> <img src="/assets/images/cronograma(1).png" alt="" height='20px' />data</p>
                    <p><img src="/assets/images/relogio.png" alt="" height='20px' />horario</p>
                    {/*
                {
                    proximosAgendamentos.map(() => {
                        
                        })
                        }
                        
                        */}

                    <div className="botoes">
                        <button>cancelar</button>

                        <span>

                        <button>editar</button>
                        </span>
                    </div>
                </div>

            </div>

            <div className="perfil">

                <h2>Informações pessoais</h2>
                <p>atualize suas Informações de perfil</p>

                <div className="editar-informacoes">
                    <div className="informacoes">
                        <label htmlFor=""> Nome</label>
                        <input type="text"
                            placeholder="Nome"
                            name="nome" />
                    </div>
                    <div className="informacoes">
                        <label htmlFor="">Email</label>
                        <input type="text"
                            placeholder="Email"
                            name="email" />
                    </div>

                    <div className="informacoes">
                        <label htmlFor="">Telefone</label>
                        <input type="text"
                            placeholder="(11) 99999-9999"
                            name="telefone" />
                    </div>

                    <button>Salvar alterações</button>

                    <span>
                    <button>Cancelar</button>
                    </span>
                </div>
            </div>
        </div>
    );
}