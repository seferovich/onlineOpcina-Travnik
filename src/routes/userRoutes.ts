import express from "express"
import { userController } from "../controllers/userController"
import auth from "../middleware/auth"
const userRouter = express.Router()

userRouter.post('/api/user/create', userController.register)
userRouter.post('/api/user/login', userController.login)
userRouter.post('/api/user/logout', auth, userController.logout)
userRouter.delete('/api/user/delete', auth, userController.remove)
userRouter.get('/api/user/get', auth, userController.getUser)


export default userRouter