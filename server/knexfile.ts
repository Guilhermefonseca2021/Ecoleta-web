import path from 'path'

module.exports = {
    client: 'sqlite3',
    connection: {
    // dirname sempre retorna a variavel onde nosso diretorio esta hospedado.
        filename: path.resolve(__dirname, 'src', 'database', 'database.sqlite')
    },
    migration: {
        directory: path.resolve(__dirname, 'src', 'database','migrations')
    }
};