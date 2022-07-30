import createConnection from '../database'
import { getConnection } from 'typeorm'
import { UpdateSiteService } from './UpdateSiteService'
import { FakeData } from '../utils/FakeData'

describe('UpdateSiteService', () => {
  beforeAll(async() => {
    const connection = await createConnection()
    await connection.runMigrations()
  })

  afterAll(async() => {
    const connection = getConnection()
    await connection.query('DELETE FROM Sites')
    await connection.close()
  })

  const fakeData = new FakeData()

  it('Should edit the address of the site', async() => {
    const mockSite = await fakeData.createSite()

    const updateSiteService = new UpdateSiteService()

    const result = await updateSiteService.execute({
      id: mockSite.id,
      endereco: 'Endereco outro editado',
      descricao: mockSite.descricao
    })

    // console.log(result)

    expect(result).toHaveLength(0)
  })
})
