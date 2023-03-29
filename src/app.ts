import 'express-async-errors'
import express from "express"
import 'express-async-errors'
import dotenv from "dotenv"
import helmet from "helmet"
import cors from "cors" 
import jmbgRouter from './routes/jmbgRoutes'
import userRouter from './routes/userRoutes'
import path from "path"
import {Request, Response} from "express"
// Config
dotenv.config()
const app = express()
app.use(express.json())
app.use(helmet())
app.use(cors())
app.use(helmet.contentSecurityPolicy({
  directives: {
    ...helmet.contentSecurityPolicy.getDefaultDirectives(),
    'img-src': ["'self'", 'data:', 'https://live.staticflickr.com']
  }
}))
// Routers
app.use(userRouter)
app.use(jmbgRouter)

__dirname = path.resolve()
app.use(express.static(path.join(__dirname, './client/build')))

app.get('/*', (req: Request, res: Response) => {
 res.sendFile(path.join(__dirname, './client/build', 'index.html'))
})


export default app