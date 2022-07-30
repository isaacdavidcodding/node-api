import { CreateSiteService } from '../services/CreateSiteService'
import { v4 as uuid } from 'uuid'

class FakeData {
  createSiteService = new CreateSiteService()

  async execute() {
    await this.createSiteService.execute({
      id: uuid(),
      endereco: 'site do teste getAll',
      descricao: 'descricao do getAll'
    })
    
    await this.createSiteService.execute({
      id: uuid(),
      endereco: 'site do teste getAll-2',
      descricao: ''
    })
  }

  async createSite() {
    const site = await this.createSiteService.execute({
      id: uuid(),
      endereco: 'site do teste getAll',
      descricao: 'descricao do getAll'
    })

    return site
  }
}

export { FakeData }
