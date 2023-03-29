import JmbgData from "../models/jmbgModel"
import { Request, Response } from "express";
import User from "../models/userModel";
import { sendIzvod, sendUvjerenje } from "../emails/emails";

const create = async (req: Request, res: Response) => {
  const jmbgData = new JmbgData(req.body)
  try{
      await jmbgData.save()
      res.status(201).send(jmbgData)
  }catch(e){
      res.status(400).send(e)
  }
}

const getData = async (req: Request, res: Response) => {
  const user = await User.findById(req.user._id)
  try{
    const jmbgData = await JmbgData.find({'jmbg': user!.jmbg})
    res.status(200).send(jmbgData)
  }catch(e){
    res.status(400).send(e)
  }
}

const uvjerenje = async (req: Request, res: Response) => {
  const user = await User.findById(req.user._id)
  try{
    sendUvjerenje(user?.email as string, req.body.name, req.body.sendName )
    res.status(200).send('Poslano')
  }catch(e){
    res.status(400).send(e)
  }
}

const izvod = async (req: Request, res: Response) => {
  
  try{
    const user = await User.findById(req.user._id)
    sendIzvod(user?.email as string, req.body.name, req.body.sendName )
    res.status(200).send('Poslano')
  }catch(e: any){
    res.status(400).send(e.body)
  }
}


export const jmbgController = {
  create,
  getData,
  uvjerenje,
  izvod
}