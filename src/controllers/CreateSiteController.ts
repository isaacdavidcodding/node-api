import { Request, Response } from 'express'
import { v4 as uuid } from 'uuid'

import { CreateSiteService } from '../services/CreateSiteService'

class CreateSiteController {
  async handle(request: Request, response: Response) {
    const createSiteService = new CreateSiteService()
    
    const endereco = request.body.endereco
    const descricao = request.body.descricao
    const id = uuid()

    if (endereco.length === 0) 
      return response.status(400).json({mensagem: 'The adress is required'})

    const idSite = await createSiteService.execute({ id, endereco, descricao })

    return response.status(201).json(idSite)
  }
}

export { CreateSiteController }
