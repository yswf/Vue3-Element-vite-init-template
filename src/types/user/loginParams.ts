export interface IloginParams{
  username:string
  password:string
}

export interface IuserInfo {
  id: number
  rid: number
  username: string
  mobile: string
  email: string
  token: string
}


export interface IResult {
  data?: IuserInfo|null
  meta?: IMeta
}


interface IMeta {
  msg: string
  status: number
}
