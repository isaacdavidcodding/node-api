import { Request, Response } from 'express'
import { DeleteSiteService } from '../services/DeleteSiteService'

class DeleteSiteController {
  async handle(request: Request, response: Response) {
    const deleteSiteService = new DeleteSiteService()
    const { id } = request.params

    /* if (id.length === undefined) 
      return response.status(400).json({mensagem: 'Id não encontrado'}) */

    await deleteSiteService.execute({ id })

    return response.status(204).json()
  }
}

export { DeleteSiteController }
