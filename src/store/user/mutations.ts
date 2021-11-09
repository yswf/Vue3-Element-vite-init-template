import { IuserInfo } from '@/types/user/loginParams'
import { setToken } from '@/utils/auth'
import { USER } from './actionTypes'

export default{
  [USER.LOGIN](state,userInfo:IuserInfo){
    state.userInfo=userInfo
    setToken(userInfo.token)
    window.location.href = '#/index/'
  }
}
