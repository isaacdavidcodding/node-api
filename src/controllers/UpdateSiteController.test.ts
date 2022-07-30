import createConnection from '../database'
import { getConnection } from 'typeorm'
import { Request } from 'express'
import { makeMockResponse } from '../utils/mocks/mockResponse'
import { UpdateSiteController } from './UpdateSiteController'
import { FakeData } from '../utils/FakeData'
import { response } from 'express'

describe('UpdateSiteController', () => {
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

  it('Should return status 204 when the site is edited', async() => {
    const mockSite = await fakeData.createSite()
    const updateSiteController = new UpdateSiteController()
    
    const request = {
      body: {
        id: mockSite.id,
        endereco: 'endereco editado update',
        descricao: 'descricao editada update'
      }
    } as Request

    const response = makeMockResponse()

    await updateSiteController.handle(request, response)

    expect(response.state.status).toBe(204)
  })
})

