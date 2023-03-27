import JmbgData from "../models/jmbgModel"
import { Request, Response } from "express";
import User from "../models/userModel";

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


export const jmbgController = {
  create,
  getData
}