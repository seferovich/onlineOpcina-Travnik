import mongoose from "mongoose"
import { IJmbg } from "../types/interfaces"



const jmbgSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  dob: {
    type: String,
    required: true
  },
  pob: {
    type: String,
    required: true
  },
  jmbg: {
    type: Number,
    required: true
  }
})

const JmbgData = mongoose.model<IJmbg>('JmbgData', jmbgSchema)

export default JmbgData