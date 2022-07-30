import { Router, Request, Response } from "express"

import { CreateSiteController } from "./controllers/CreateSiteController"
import { DeleteSiteController } from "./controllers/DeleteSiteController"
import { GetAllSiteController } from "./controllers/GetAllSiteController"
import { UpdateSiteController } from "./controllers/UpdateSiteController"

const router = Router()

const createSiteController = new CreateSiteController()
const getAllSiteController = new GetAllSiteController()
const updateSiteController = new UpdateSiteController()
const deleteSiteController = new DeleteSiteController()

router.get('/', (request: Request, response: Response) => {
  return response.json({mensagem: 'Olá amigos!'})
})

router.post('/sites', createSiteController.handle)
router.get('/sites', getAllSiteController.handle)
router.patch('/site', updateSiteController.handle)
router.delete('site/:id', deleteSiteController.handle)

export { router }
