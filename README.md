# kamikaze-week-back-end

Sistema de inscrições nas palestras

## Rotas

- '/congressista'

  - POST

  Recebe um objeto no body com esse formato:

           congressista:
           {
               clientId: "kamikaze.12W",
               nome: "kamikaze",
               email: "kamikazw@gmail.com",
               imagemUrl: "http://sakkdkalkl",
               telefone: "123456789",
           }

  - [x] criar congressistas
  - [x] não permite email repetido
  - [x] não permite campo vazio (exceto img)

  - GET - '/congressista/{id}'

    Retorna um objeto congressista. Código de erro 400

    - [x] retorna user
    - [x] não retorna user que não existe

  - GET

    Retorna a um array com todos os congressistas

          [
              {
                  clientId: "kamikaze.12W",
                  nome: "kamikaze",
                  email: "kamikazw@gmail.com",
                  imagemUrl: "http://sakkdkalkl",
                  telefone: "123456789",
              },
              {
                  clientId: "kamikaze.13W",
                  nome: "kamikaze2",
                  email: "kamikaze2@gmail.com",
                  imagemUrl: "http://sakkdkalkl",
                  telefone: "123456789",
              }
          ]

  - DELETE: 'congressista/{id_congressista}'

    Remove um usuário da lista de congressistas

- '/palestra'

  - POST

    Faz o cadastro de um usuário em uma palestra, recebe no body um objeto com as informações

            {
                congressista: x
                palestraId: y
            }

    - [x] fazer inscrição
    - [x] não permite usuário inexistente
    - [x] não permite palestra inexistente
    - [x] não permite cadastrar usuário que já está na palestra

  - GET: 'palestra/{palestraid}'

    Recebe no parâmetro da rota o id da palestra e retorna um objeto com todos os inscritos na palestra

    - [x] verificar se a palestra existe
    - [x] retornar todos os usuários na palestra
    - [ ] formatar array
