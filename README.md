# Projeto Todo List

## Pré-requisitos

Antes de iniciar, certifique-se de ter os seguintes pré-requisitos instalados:

- Node.js: [Instalação do Node.js](https://nodejs.org/)
- Git: [Instalação do Git](https://git-scm.com/)
- Docker: [Instalação do Docker](https://www.docker.com/)

## Configuração do Projeto

1. Clone este repositório:
`git clone https://github.com/fullstacks-tech-org/test-nest-mysql`

2. Acesse o diretório do projeto:
`cd test-nest-mysql`

3. Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis de ambiente:
DATABASE_HOST=db
DATABASE_USERNAME=root
DATABASE_PASSWORD=my-secret-pw
DATABASE_NAME=todolist
JWT_ACCESS_SECRET=my-access-secret
JWT_EXPIRES_IN=1h
JWT_REFRESH_SECRET=my-refresh-secret
THROTTLE_LIMIT_SHORT=10
THROTTLE_TTL_SHORT=60
THROTTLE_LIMIT_MEDIUM=100
THROTTLE_TTL_MEDIUM=3600
THROTTLE_LIMIT_LONG=1000
THROTTLE_TTL_LONG=86400

## Execução do Projeto

1. Para iniciar o servidor de desenvolvimento, execute o seguinte comando:
`docker-compose up`

- O servidor estará disponível em [http://localhost:3000](http://localhost:3000).

## Testes de Unidade

1. Para executar os testes de unidade, utilize o seguinte comando:
`npm test`

## Documentação dos Endpoints

A documentação dos endpoints pode ser acessada em [http://localhost:3000/api](http://localhost:3000/api).

Antes de acessar os endpoints protegidos, é necessário criar um usuário usando o endpoint de signup e utilizar o token de autenticação na parte superior da página para autenticar e acessar os endpoints fechados. Para criar um usuário administrador, inclua `{ "role": "admin" }` junto com os dados de cadastro.

## Conceitos Trabalhados

- **Autenticação com JWT:** Os endpoints de autenticação são abertos, mas os demais endpoints possuem middleware para verificar a permissão correta do usuário.
- **TypeORM:** Utilizado como ORM para acesso aos dados do banco de dados.
- **Arquitetura em Camadas:** Repositórios, Services e Controllers são separados para uma melhor organização e manutenção do código.
