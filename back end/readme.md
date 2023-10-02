<h3> iniciando Node e banco de dados </h3>

-npm install knex
-npm install sqlite 


<h3> Conexao com database padrao MVC </h3>

1. migrations (pasta de criacao de tabelas no nosso banco de dados, historico do banco de dados.)
2. routes (todas nossas rotas e endpoints)
3. database (connection file para padronizar nosso caminhos, e conexao com sqlite)
4. seeds (enves de usuario cadastrar informacoes, nossas seeds sao os dados cadastrados no servidor para o usuario escolher na aplicacao, sao dados padraoes)
5. knexfile (declaro pastas da seed, connectio com database e migrations.) 