import cadastro from "./src/controller/cadastroController.js";

export function Rotas(app){
    app.use(cadastro)
}