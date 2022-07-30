import createConnection from '../database'
import { getConnection } from 'typeorm'
import { makeMockRequest } from '../utils/mocks/mockRequest' 
import { makeMockResponse } from '../utils/mocks/mockResponse'
import { FakeData } from '../utils/FakeData'
import { DeleteSiteController } from './DeleteSiteController'

describe('DeleteSiteController', () => {
  beforeAll(async() => {
    const connection = await createConnection()
    await connection.runMigrations()
  })

  afterAll(async() => {
    const connection = getConnection()
    await connection.close()
  })

  const fakeData = new FakeData()

  it('Should return status 204 when the site is deleted', async() => {
    const mockSite = await fakeData.createSite()
    
    const deleteSiteController = new DeleteSiteController()

    const request = makeMockRequest({
      params: {
        id: mockSite.id
      }
    })

    const response = makeMockResponse()

    await deleteSiteController.handle(request, response)

    expect(response.state.status).toBe(204)
  })
})

