import { Request, Response } from 'express'
import { UpdateSiteService } from '../services/UpdateSiteService'

class UpdateSiteController {
  async handle(request: Request, response: Response) {
    const updateSiteService = new UpdateSiteService()
    
    const { id, endereco, descricao } = request.body

    if (id.length === 0)
      return response.status(400).json({mensagem: 'Id não informado'})
    
    else if (endereco.length === 0)
      return response.status(400).json({mensagem: 'O endereco deve ser informado'})

    await updateSiteService.execute({ id, endereco, descricao })
    
    return response.status(204).json()
  }
}

export { UpdateSiteController }
