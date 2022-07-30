import { getRepository } from 'typeorm'
import { Site } from '../entities/Site'

class GetAllSitesService {
  async execute() {
    const sites = await getRepository(Site)
      .createQueryBuilder('Sites')
      .select()
      .getMany()

      console.log(sites)
      return sites
  }
}

export { GetAllSitesService }
