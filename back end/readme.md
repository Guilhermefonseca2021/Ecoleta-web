// rota; endereco da request
// recurso; qual entidade estamos acessando no sistema


// GET; smp q inicia a rota comeca com request get
// POST; criar uma nova informacao no back end
// PUT; atualizae informacao existente(endereco do usuario)
// DELETE; (remover informacao)


const users = [
    'Guilherme', 
    'Pedro',     
    'Mika',      
    'Daniel'     
]

// 2 pontos significa o parametro q to passando como sendo acesscivel

app.get('/users/:getid', (request, response) => {
    // pg 'request' os 'parametros' posicao da minha rota e passo para dentro do 'seuId'.
    const id = Number(request.params.getid);

    const user = users[id];

    return response.json(user);
});


app.post('/users', (request, response) => {
    const user = {
        name: 'Diego',
        email: 'diego@rocketseat.com.br'
    }

    // preciso retornar resposta ao nosso (usuario); 
    // importante return para forcar envio parar requisicao
    return response.json(user);
});



<!-- -------------------------------------------------- -->

Request: param; parametros que vem na propria rota que identificam um recurso
---parametro obrigatorio
(filtrar paginacao '/users/cadastro'  

Query param; parametros que vem na rota opcional.
---parametro opcional filtrar expecifico 
'users?search=on'    

Request Bodoy; parametros para cricao/atualizacao de informacao



<!-- ---------------------------------------------------- -->

const users = [
    'Guilherme', 
    'Pedro',     
    'Mika',      
    'Daniel'     
]

app.get('/users', (request, response) => {
    // 'requisito' meu 'valor' e passo para 'search
    const search = String(request.query.search);

    // dos meus user 'liste' o que tem o valor da requisicao
    const fileteredUsers = search ? users.filter(user => user.includes(search)) : users;

    console.log('listagem de usuario')
    console.log(fileteredUsers); 

    return response.json(users);
});

app.get('/users/:getid', (request, response) => {
    // pg 'request' os 'parametros' da minha rota e passo para dentro do 'seuId'.
    const id = Number(request.params.getid);

    const user = users[id];

    return response.json(user);
});


app.post('/users', (request, response) => {
    const data = request.body;

    console.log(data);

    const user = {
        name: data.name,
        email: data.email
    }

    return response.json(user);
});


<!-- ----------------------------------------- -->

banco de dados SQL selecionando;
SELECT + FROM users WHERE name - 'Diego';


banco noSQL que vamos usar para selecionar;
knox('users').where('name', 'Diego').select('*')    esse * é tudo dentro


<!-- ------------------------------------------------- -->

para o banco de dados usamos o npm install knex para conexcao com nosso sqlite. q nao precisa instalar nada.
.
e para caminhos que vamos declarar a biblioteca path
.
.
nocao geral

migrations = historico de banco de dados
.
.
.
.
create table point
create table users


<!-- ------------------------------------------------- -->

npx knex migrate:latest --knexfile ... (qual a pagina q ele ta) no caso  knexfile.ts
