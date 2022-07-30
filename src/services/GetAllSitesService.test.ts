import { getConnection } from 'typeorm'

import createConnection from '../database'
import { GetAllSitesService } from './GetAllSitesService'
import { FakeData } from '../utils/FakeData'

describe('GetAllSitesService', () => {
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

  it('Should return all the sites created', async() => {
    await fakeData.execute()    

    const answer = [
      { endereco: 'site do teste getAll', descricao: 'descricao do getAll' }, 
      { endereco: 'site do teste getAll-2', descricao: '' }
    ]

    const getAllSitesService = new GetAllSitesService()
    const result = await getAllSitesService.execute()

    expect(result).toMatchObject(answer)
  })
})
