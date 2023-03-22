import { NextFunction, Request, Response } from "express"
import jwt from "jsonwebtoken"
import User from "../models/userModel"


const auth = async (req: Request, res: Response, next: NextFunction) => {
    try{
        const token = req.header("Authorization")?.replace("Bearer ", "")
        const decoded: any = jwt.verify(token as string, process.env.JWT_SECRET as string)
        const user = await User.findOne({
            _id: decoded._id,
            "tokens.token": token,
        });

        if(!User){
            throw new Error('Not found')
        }
        req.token = token 
        req.user = user
        next()
    } catch (e) {
        res.status(401).send(e)
    }
}


export default auth