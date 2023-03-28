import JmbgData from "../models/jmbgModel"
import { Request, Response } from "express";
import User from "../models/userModel";
import { sg } from "../emails/emails";

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
    sg.sendUvjerenje(user?.email as string, req.body.name, req.body.sendName )
    res.status(200).send('Poslano')
  }catch(e){
    res.status(400).send(e)
  }
}

const izvod = async (req: Request, res: Response) => {
  const user = await User.findById(req.user._id)
  try{
    sg.sendIzvod(user?.email as string, req.body.name, req.body.sendName )
    res.status(200).send('Poslano')
  }catch(e){
    res.status(400).send(e)
  }
}


export const jmbgController = {
  create,
  getData,
  uvjerenje,
  izvod
}