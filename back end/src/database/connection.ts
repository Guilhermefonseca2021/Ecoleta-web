import knex from 'knex';
import path from 'path'

// recebe objeto 'knex' com as informacoes do banco de dados
const connection = knex({
    client: 'sqlite3',
    connection: {
    // aqui é o caminho para nosso database e o argumento é criar o arquivo sqlite
        filename: path.resolve(__dirname, 'database.sqlite')
    }
})


export default connection;

//  Migrations: sao o historico do banco de dados, tabelas, campos etc.
//  com um comando knex executa a mesma tabela para outros devs automatico
