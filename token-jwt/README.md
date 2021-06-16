# Token JWT

## Descrição
API com autenticação de rotas utlizando a library Json WEB token.
- Dependências:
    - Cors.
    - Express.
    - jsonwebtoken.

## Login
- Retorna um token JWT

> GET /public

## Private
- Só é possível acessar essa rota passando um token JWT válido via Bearer Token.

> GET /private

    Status 200: Você conseguiu acessar.
    Status 403: Você não tem permissão para acessar essa página.

#
Desenvolvido por [Pedro Melém.](https://mrmelem.github.io/site-portfolio)