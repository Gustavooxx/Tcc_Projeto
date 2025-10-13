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

export async function doadorToken(token, id){
const comando = `
insert ignore into tokens (token,id_doador) 
values
(?,?)
`
const [info] = await connection.query(comando,[token,id]);
return info.affectedRows;

}





