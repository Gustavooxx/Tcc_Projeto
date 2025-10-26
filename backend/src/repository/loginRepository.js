import connection from "./connetion.js";


export async function logarDoador(cadastro){
    const comando = `
    select * from cadastro_users 
    where email = ?
    and senha = MD5(?)

    `

    const [registros] = await connection.query(comando, [cadastro.email, cadastro.senha]);
    return registros[0];

}







