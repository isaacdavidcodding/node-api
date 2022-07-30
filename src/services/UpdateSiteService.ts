import { getRepository } from 'typeorm'
import { Site } from '../entities/Site'

interface ISite {
  id: string,
  endereco: string,
  descricao?: string
}

class UpdateSiteService {
  async execute({ id, endereco, descricao }: ISite) {
    const site = await getRepository(Site)
      .createQueryBuilder()
      .update()
      .set({ endereco: endereco, descricao: descricao })
      .where('id = :id', { id })
      .execute()

    return site.raw
  }
}

export { UpdateSiteService }
