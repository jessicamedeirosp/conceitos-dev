# Criando projeto node

## Iniciando o Yarn e instalando Express
```
yarn init  -y //iniciar yarn
yarn add express //instalar express, biblioteca para rotas
```

## Formas de executar um arquivo node e Instalação do Nodemon

```
node index.js //executar arquivo node
yarn add nodemon -D /* instalar nodemon - executa node executando sempre-
como dependencia de desenvolvimento*/
yarn nodemon src/index.js // executar nodemon 
```
ou add no package.json  o script 
```
  "main": "src/index.js",  
  "scripts": {
    "dev": "nodemon"
  },
```
# Informações Importantes sobre API
* API d deve retornar  um vetor ou um objeto

## Métodos HTTP
* GET: Busca registros do backend
* POST: Criar um registros no back-end
* PUT: Alterar todas as  informações de algum registro  no back-end
* PATCH: Alterar uma informação de algun registro no back-end
* DELETE: Deletar um registros no back-end

## Tipos de parâmetros
* Query Params: Filtros e paginação (?title=React&owner=Diego)
* Route Params: Identificar recursos (atualizar/deletar)
* Request Body: Contéudo na hora de criar ou editar um recurso (JSON)

# Instalando uuidv4
```
yarn add uuidv4
```

# Middleware:
Interceptador de requisições que pode interromper totalmente a requisição ou 
alterar dados da requisição.
usado quando algum trecho de codigo seja disparado de forma automatica em uma
ou mais rota da aplicação.

## Formato Middleware
```
function logRequests(request, response, next) {
  const { method, url } = request;
  const logLabel = `[${method.toUpperCase()}] ${url}`;
  console.log(logLabel);
  return next(); // chama próximo middleware
}
app.use(logRequests);
```



