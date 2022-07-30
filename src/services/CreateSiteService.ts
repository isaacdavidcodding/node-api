import { getRepository } from 'typeorm'

import { Site } from '../entities/Site'

interface ISite {
  id: string,
  endereco: string,
  descricao?: string
}

class CreateSiteService {
  async execute({ id, endereco, descricao}:ISite) {

    const site = await getRepository(Site)
      .createQueryBuilder()
      .insert()
      .into(Site)
      .values([
        { 
          id: id,
          endereco: endereco, 
          descricao: descricao 
        }
      ])
      .execute()

    return site.identifiers[0]
  }
}

export { CreateSiteService }
