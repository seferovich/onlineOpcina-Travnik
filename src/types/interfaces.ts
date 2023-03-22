import mongoose from "mongoose";

export interface IUser extends mongoose.Document {
  username: string,
  password: string,
  jmbg: number,
  tokens: {token: string}[],
  _id: mongoose.Types.ObjectId,
  generateAuthToken(): string,
}

export interface IUserModel extends mongoose.Model<IUser> {
  // here we decalre statics
  findByCredentials(username: string, password: string): IUser
}

export interface IJmbg extends mongoose.Document {
  name: string,
  dob: string,
  pob: string,
  jmbg: number
  
}