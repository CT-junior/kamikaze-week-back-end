# kamikaze-week-back-end
Sistema de inscrições nas palestras


## Rotas

 * POST - '/congressista'
  
            user: {
                firstName:
                lastName:
                email:
                imageUrl:
                id: firstName.lastName
            }
            
    response : 201 created 
        {
            id
        }
    
    [X] - Criar congressistas
    [X] - Não permite email repetido
    [X] - Não permite campo vazio (exceto img)

 * GET - '/congressista/${id}'
    
    response : user

    [X] - retorna user
    [X] - Não retorna user que não existe

 * POST - '/palestra'
  
        {
            congressista: x
            palestra: y
        }
    
    [X] - fazer inscrição
    [X] - verificar se o usuário existe
    [X] - verificar se a palestra existe
    [X] - verificar se o usuário já está na palestra

