import mongoose from "mongoose"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import { IUser, IUserModel } from "../types/interfaces"

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  jmbg: {
    type: Number,
    required: true,
    unique: true
  },
  tokens: [{
    token: {
        type: String,
        required: true
    }
  }]
})

userSchema.pre('save', async function (next) {
  const user = this

  const salt = await bcrypt.genSalt(12)
  if(user.isModified('password')){
    user.password = await bcrypt.hash(user.password, salt)
  }    
  next()
})


userSchema.methods.generateAuthToken = async function () {
  const user = this as IUser
  const token = jwt.sign({ _id: user._id.toString(), jmbg: user.jmbg.toString() }, process.env.JWT_SECRET as string)

  user.tokens = user.tokens?.concat({ token })
  await user.save()

  return token
}

// Finding user by username and comparing passwords
userSchema.statics.findByCredentials = async (username: string, password: string) => {
  const user = await User.findOne({username})

  if(!user) {
    throw new Error('Could not find!')
  }

  const isMatch = await bcrypt.compare(password, user.password)
  
  if(!isMatch){
    throw new Error('Password incorrect')
  }

  return user
}

userSchema.methods.toJSON = function() {
  const user = this as IUser
  const userObject = user.toObject()
  delete userObject.password
  delete userObject.tokens
  return userObject
}
const User = mongoose.model<IUser, IUserModel>('User', userSchema)

export default User


// JMBG JE 13 BROJEVA!
// JMBG se ponasa kao JWT