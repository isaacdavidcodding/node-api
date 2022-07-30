import createConnection from '../database'
import { getConnection } from 'typeorm'
import { FakeData } from '../utils/FakeData'
import { DeleteSiteService } from './DeleteSiteService'

describe('DeleteSiteService', () => {
  beforeAll(async() => {
    const connection = await createConnection()
    await connection.runMigrations()
  })

  afterAll(async() => {
    const connection = getConnection()
    await connection.close()
  })

  const fakeData = new FakeData()

  it('Should return a void array when the site is deleted', async() => {
    const mockSite = await fakeData.createSite()
    const deleteSiteService = new DeleteSiteService()

    const result = await deleteSiteService.execute({id: mockSite.id})
    
    expect(result.raw).toHaveLength(0)
  })
})
