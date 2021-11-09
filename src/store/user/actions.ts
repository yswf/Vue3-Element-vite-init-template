import { IloginParams } from '@/types/user/loginParams'
import { Commit } from 'vuex'
import { USER } from './actionTypes'
import { login } from '@/api'
import { ElMessage } from 'element-plus'

interface ICtx {
  commit: Commit
}
export default{
  async [USER.LOGIN]({ commit }:ICtx,payload:IloginParams){

    const res = await login(payload)
    if (res.meta.code!==200) {
      return ElMessage.error(res.meta.msg)
    }
    commit(USER.LOGIN,res.data)


  }
}
