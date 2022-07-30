import { getRepository } from 'typeorm'
import { Site } from '../entities/Site'

interface ISite {
  id: string
}

class DeleteSiteService {
  async execute({ id }: ISite) {
    const site = await getRepository(Site)
      .createQueryBuilder()
      .delete()
      .from(Site)
      .where('id = :id', { id })
      .execute()

    return site
  }
}

export { DeleteSiteService }
