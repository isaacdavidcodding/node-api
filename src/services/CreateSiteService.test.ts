import { getConnection } from 'typeorm'
import createConnection from '../database'
import { CreateSiteService } from './CreateSiteService'

describe('CreateSiteService', () => {
  beforeAll(async () => {
    const connection = await createConnection()
    await connection.runMigrations()
  })

  afterAll(async() => {
    const connection = getConnection()
    await connection.query('DELETE FROM Sites')
    await connection.close()
  })

  it('Must return the id of the site created', async() => {
    const createSiteService = new CreateSiteService()

    const result = await createSiteService.execute({
      id: '39374316-5d7e-4dc5-83ad-ae5839015957',
      endereco: 'site básico service',
      descricao: 'desc básica service'
    })

    expect(result).toHaveProperty('id')
  })
})

