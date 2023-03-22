import express from "express"
import { jmbgController } from "../controllers/jmbgController"
import auth from "../middleware/auth"
const jmbgRouter = express.Router()

jmbgRouter.post('/api/jmbgData/create', jmbgController.create)
jmbgRouter.get('/api/jmbgData/getData', auth, jmbgController.getData)

export default jmbgRouter
