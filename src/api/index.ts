import { post } from '@/http/request'
import baseUrl from './baseUrl'
import { IloginParams } from '@/types/user/loginParams'

// 列表
export function login( params:IloginParams) {
  return post( baseUrl.postLogin, params)
}
