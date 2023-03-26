export interface IRegisterData {
  email: string,
  password: string,
  password2?: string,
  jmbg: number
}

export interface ILoginData {
  email: string,
  password: string,
}

export interface IJmbgData {
  name: string,
  dob: string,
  pob: string,
  jmbg: number
}