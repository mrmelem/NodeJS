# Token JWT

## Descrição
Uma API mais complexa, com o princípio de uma loja virtual.

#### Todos os itens com **?** são opicionais.
#### Rotas com # requerem autenticação.
- Dependências:
    - Bcrypt
    - Cors.
    - Express.
    - Json Web Token.
    - mongoose
    - Morgan
    - Multer

## Registro
- Retorna um token JWT.

> POST /register

    {
        "name" : String.
        "username" : String,
        "email" : String,
        "password" : String,
    }

## Login
- Retorna um token JWT.

> POST /login

    {
        "user" : String,
        "password" : String
    }

## Listar produtos
- Retorna todos os produtos cadastrados

> GET /products

## Editar usuário
- Altera as informações de um usuário.

> PUT /products

    {
        "title" : String,
        "images" : Array [
            "url" : String
        ]
    }

## Cadastrar produto
- Cadastra no banco de dados.

> POST /products

    {
        "title" : String,
        "images" : Array [
            "url" : String
        ]
    }

## Editar produto
- Altera as informação de um produto.

> PUT /products/:ID

    {
        "title" : String ?,
        "images" : Array ? [
            "url" : String
        ]
    }

## Excluir produto
- Exclui um produto do banco de dados.

> DELETE /products/:ID

## Indexar imagem
- Faz o upload da imagem.

> PUT /upload/image

#
Desenvolvido por [Pedro Melém.](https://mrmelem.github.io/site-portfolio)