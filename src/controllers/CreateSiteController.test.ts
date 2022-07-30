import { getConnection } from 'typeorm'
import createConnection from '../database'
import { CreateSiteController } from './CreateSiteController'
import { Request } from 'express'
import { makeMockResponse } from '../utils/mocks/mockResponse'

describe('CreateSiteController', () => {
  beforeAll(async () => {
    const connection = await createConnection()
    await connection.runMigrations()
  })

  afterAll(async () => {
    const connection = getConnection()
    await connection.query('DELETE FROM Sites')
    await connection.close()
  })

  const createSiteController = new CreateSiteController()
  const response = makeMockResponse()

  it('Must return status 201 when the site is created', async () => {
    const request = {
      body: {
        endereco: 'Endereco teste',
        descricao: 'Descricao teste'
      }
    } as Request

    await createSiteController.handle(request, response)

    expect(response.state.status).toBe(201)
  })

  it('Must return status 400 when the adress was not informed', async () => {
    const request = {
      body: {
        endereco: '',
        descricao: 'Descricao teste'
      }
    } as Request

    await createSiteController.handle(request, response)

    expect(response.state.status).toBe(400)
  })

  it('Must return status 201 when the descricao was not informed', async () => {
    const request = {
      body: {
        endereco: 'site.com',
        descricao: ''
      }
    } as Request

    await createSiteController.handle(request, response)

    expect(response.state.status).toBe(201)
  })
})
