import endpoints from "./src/controller/agendamentoController.js";
import cadastro from "./src/controller/cadastroController.js";
import logarController from'./src/controller/loginController.js'

export function Rotas(app){
    app.use(cadastro)
    app.use(endpoints)
    app.use(logarController)
}