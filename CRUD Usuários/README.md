# CRUD usuários

## Descrição
API com o padrão REST para 5 funções de cadastro.
##### obs: Todos os itens com **"?"** são opicionais.
#

## Create
- Cadastro de  novos usuários.

> POST /user

- Json
  - [ ] name : String
  - [ ] username : String
  - [ ] email : String
  - [ ] password : String

#
## Read
- Mostrar usuário.
  
> GET /user
  - Retorna todos os usuários

> GET /user/:ID
  - Retorna um usuário pelo ID
  
#
## Update
- Atualizar um usuário.

> PUT /user/:ID
- Json
  - [ ] ?name : String
  - [ ] ?username : String
  - [ ] ?email : String
  - [ ] ?password : String

#
## Delete
- Deleta um usuário

> DELETE /user/:ID

#
Desenvolvido por [Pedro Melém.](https://mrmelem.github.io/site-portfolio)