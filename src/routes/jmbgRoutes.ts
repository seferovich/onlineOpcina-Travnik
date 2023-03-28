import express from "express"
import { jmbgController } from "../controllers/jmbgController"
import auth from "../middleware/auth"
const jmbgRouter = express.Router()

jmbgRouter.post('/api/jmbgData/create', jmbgController.create)
jmbgRouter.get('/api/jmbgData/getData', auth, jmbgController.getData)
jmbgRouter.post('/api/jmbgData/sendUvjerenje', auth, jmbgController.uvjerenje)
jmbgRouter.post('/api/jmbgData/sendIzvod', auth, jmbgController.izvod)

export default jmbgRouter
