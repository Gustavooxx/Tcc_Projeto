import endpoints from "./src/controller/agendamentoController.js";
import cadastro from "./src/controller/cadastroController.js";
import logarController from'./src/controller/loginController.js'
import voluntarios from "./src/controller/voluntariosController.js";

export function Rotas(app){
    app.use(cadastro)
    app.use(endpoints)
    app.use(logarController)
    app.use(voluntarios)
}