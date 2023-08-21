import knex from 'knex';
import path from 'path'

// aqui recebe nosso objeto 'knex' q tem as informacoes do banco de dados
const connection = knex({
    client: 'sqlite3',
    connection: {
    // qro q no nosso caminho pegue variavel global e dirname e deixe no diretorio databse
        filename: path.resolve(__dirname, 'database.sqlite')
    }
})

export default connection;
