# Rotas Públicas e Privadas

## Descrição
API com rotas públicas e privadas.
- Dependências:
    - Cors.
    - Express.
#

## Rota Pública
- Retorna uma rota que não querer autenticação.

> GET /

#

## Rota privada
- Retorna uma rota que requer autenticação. alterando o middleware [authRoute]('./src/middlewares/authRoute.js'), é possível alterar a lógica de programação conforme a regra de negócio. Por padrão, a rota está difinida como **true**, se definida como **false**, a rota não exibirá o conteúdo, apenas retornará o status 403.
  
> GET /private

#
Desenvolvido por [Pedro Melém.](https://mrmelem.github.io/site-portfolio)