# Back-end - Criando projeto node

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
# Front-end

## Iniciando yarn e instalando react 

```
yarn init -y
yarn add react react-dom // instalando react para web
```

## Babel
Converte (transpila) código do React para um código que o browser entenda
(Loaders: babel-loader, css-loader, image-loader)

## Webpack 
Para cada tipo de arquivo (.js, .css, .png) converte o código de uma maneira diferente

### Instalando Babel e Webpack

```
yarn add @babel/core @babel/preset-env @babel/preset-react @babel/cli webpack webpack-cli
yarn add babel-loader
yarn webpack -mode development
yarn webpack-dev-server -D
yarn webpack-dev-server --mode development
```

# React

* Componentes
* Propriedade: hierarquia, passar de um componente pai para um componente filho
* Estado e Imutabilidade
  * O estado não pode ser modificado
  * Deve sempre ser criado uma nova informação
  * quem faz esse processo é o useState 
* Fragmentação: <></>

## UseState
*  retorna um array com 2 posições
  1. Variável com o seu valor inicial
  2. Função para atualizarmos esse valor  

## UseEffect
* recebe 2 parametros 
  1. Função que será disparada, 
  2. Quando a função será executada

## Carregar arquivos  .css e image no js

```
yarn add style-loader css-loader // carrega o css 
 yarn add file-loader // carregar imagens
```

# Conectando Back-end com Front-end

```
yarn add axios  
yarn add cors 
yarn add @babel/plugin-transform-runtime -D // suporte a funções async 
```

# React Native

API:
* iOS com emulador: localhost
* iOS com físico: ip da máquina
* Android com emulador: localhost (add reverse)
  * adb reverse tcp:3333 tcp:3333
* Android com emulador 10.0.2.2 (android studio)
* Android com emulador 10.0.2.3 (Genymotion)