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
    [X] - Não permite email repretido
    [X] - Não permite campo vazio (exceto img)

 * GET - '/congressista/${id}'
    
    response : user

 * POST - '/palestra'
  
        {
            congressista: x
            palestra: y
        }

