import User from "../models/userModel";
import { Request, Response } from "express";

const register = async (req: Request, res: Response) => {
    const user = new User(req.body)
    try{
        await user.save()
        const token = await user.generateAuthToken()
        res.status(201).send({user, token})
    }catch(e){
        res.status(400).send(e)
    }
}

const login = async (req: Request, res: Response) => {   
    try{
        const user = await User.findByCredentials(req.body.email, req.body.password)
        const token = await user.generateAuthToken()
        return res.status(200).send({user, token})
    }catch(e){
        return res.status(500).send(`Netačna lozinka ili email!`)
    }
}

const logout = async (req: Request, res: Response) => {
    try{
        req.user.tokens = req.user.tokens?.filter((token: any) => {
            return token.token !== req.token
        })
        await req.user.save()
        res.send('Logged out')
    }catch(e){
        res.status(500).send(e)
    }
        
}

const getUser = async (req: Request, res: Response) => {
    try{
        res.status(200).send(req.user)
    }catch(e){
        res.status(500).send(e)
    }
        
}

const remove = async (req: Request, res: Response) => {
    try {
        await req.user.remove()
        res.send(req.user)
    } catch (e) {
        res.status(500).send(e)
    }
}


export const userController = {
    register,
    login,
    logout,
    getUser,
    remove
}