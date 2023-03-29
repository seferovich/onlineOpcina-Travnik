import 'express-async-errors'
import mongoose from "mongoose"
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

// Routers
app.use(userRouter)
app.use(jmbgRouter)

__dirname = path.resolve()
app.use(express.static(path.join(__dirname, './client/build')))

app.get('/*', (req: Request, res: Response) => {
 res.sendFile(path.join(__dirname, './client/build', 'index.html'))
})
const PORT = process.env.PORT || 9000
mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGODB_URL as string).then(() => {
    app.listen(PORT, () => console.log(`Server is up on port ${PORT}`))
}).catch((e) => console.log(`${e}, did not connect.`))

