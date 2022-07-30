import { Request, Response } from 'express'
import { GetAllSitesService } from '../services/GetAllSitesService'

class GetAllSiteController {
  async handle(request: Request, response: Response) {
    const getAllSitesService = new GetAllSitesService()

    const sites = await getAllSitesService.execute()

    return response.status(200).json(sites)
  }
}

export { GetAllSiteController }
