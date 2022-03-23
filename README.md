
# Portfolio Gabriel Benedicto - Back-end

Aplicação back-end, estruturada com Node.js, Express.js, Json Web Tokens, Sequelize.js e Joi, onde posso consultar, criar, excluir ou editar, projetos e/ou tecnologias de meu portfolio pessoal, removendo a necessidade de alteração de código no portfolio a cada adição/alteração de projeto ou tecnologia.


## Stack utilizada

**Back-end:** Node.js, Express.js, Sequelize.js, Json Web Tokens, Joi

**DevOps:** Docker, Heroku

**Testes:** Mocha.js, Sinon.js, Chai.js


## Aprendizados

Fortifiquei meu aprendizado utilizando as stacks utilizadas para a estruturação da aplicação, junto com a validação de tokens, deixar a aplicação mais leve e multi-plataforma utilizando o docker, realizar a configuração e deploy no Heroku com o Docker.

## Funcionalidades

- Projects
  - Rota de criação de projeto em /projects (POST)
  - Rota de atualização de projeto em /projects/:id (PUT)
  - Rota de consulta de todos projetos em /projects (GET)
  - Rota de remoção de projeto em /projects/:id (DELETE)
- Technologies
  - Rota de criação de tecnologia em /technologies (POST)
  - Rota de atualização de tecnologia em /technologies/:id (PUT)
  - Rota de consulta de todos tecnologias em /technologies (GET)
  - Rota de remoção de tecnologia em /technologies/:id (DELETE)
- Login
  - Rota de requisição de token em /login (POST)

Aplicação feita para usuários serem adicionas diretamente ao banco de dados sem utilização de rotas.
O mesmo possuindo "conta" registrada no banco de dados, consegue logar utilizando a rota /login com email e senha, para alteração, criação ou remoção de projeto e/ou tecnologia

## Instalação

Instale Portfolio-Backend com npm

```bash
  npm install Portfolio-Backend
  cd Portfolio-Backend
```

## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env

`PASSWORD_POSTGRES=SENHA DO POSTGRES DO BANCO DE DADOS`

`HOST=LINK DO BANCO DE DADOS EM POSTGRES`

`DATABASE=postgres`

`DB_USERNAME=postgres`

`DB_PORT=PORTA DO BANCO DE DADOS EM POSTGRES`

`JWT_SECRET=CHAVE PARA CRYPTOGRAFAR JWT`

## Rodando localmente


Com as dependências instaladas, podemos inicializar o `sequelize` para criar as tabelas do banco de dados.

Iniciaremos criando o banco de dados (caso já tenha sido criado, pule esta parte)

```bash
  npx sequelize db:create
```

Com o banco criado, criaremos as tabelas

```bash
  npx sequelize db:migrate
```

E para finalizar colocaremos alguns projetos/tecnologias.

```bash
  npx sequelize db:seed:all
```

Com tudo criado podemos iniciar o servidor utilizando o comando abaixo

```bash
  npm start
```

Ou inicie utilizando o Docker

```bash
  docker build .
```

## Rodando os testes

Para rodar os testes, rode o seguinte comando

```bash
  npm run test
```

## FAQ

#### O projeto está terminado?

Não, ele ainda está em construção, mas já é possível utiliza-lo

#### Posso fazer melhorias e/ou ajudar em algo?

Sim! Fique a vontade para criar um `fork`, e realizar as melhoras ou mudanças que achar melhor.

#### Posso usar em meu portfolio?

Pode! Lembre-se somente de editar os projetos/tecnologias com as que utiliza, pelo sequelize criar algumas.


## Autores
### Gabriel

| [![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:gabrielpbenedicto@gmail.com) | [![Linkedin](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/gabrielbenedicto/) | [![Telegram](https://img.shields.io/badge/Telegram-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white)](https://t.me/gabrielbenedicto) |
| ------|-------|-----|
