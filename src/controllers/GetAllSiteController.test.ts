import createConnection from '../database'
import { getConnection } from 'typeorm'
import { makeMockRequest } from '../utils/mocks/mockRequest'
import { makeMockResponse } from '../utils/mocks/mockResponse'
import { GetAllSiteController } from './GetAllSiteController'
import { FakeData } from '../utils/FakeData'

describe('GetAllSiteController', () => {
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
  it('Should return status 200 when get all sites', async() => {
    await fakeData.execute()

    const getAllSiteController = new GetAllSiteController()
    
    const request = makeMockRequest({})
    const response = makeMockResponse()

    await getAllSiteController.handle(request, response)
    
    expect(response.state.status).toBe(200)

  })
})
