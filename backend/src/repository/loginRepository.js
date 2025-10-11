import connection from "./connetion.js";

export async function verificarSenha(senha){
    const comando = `
    select *from login_codigo
where codigo = ?;
    `
    let [quant] = await connection.query(comando,[senha]);

 
    return quant[0];

}