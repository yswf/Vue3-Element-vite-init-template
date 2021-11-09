import { USER } from '@/store/user/actionTypes'
import { IloginParams, IuserInfo } from '@/types/user/loginParams'
import { Store, useStore } from 'vuex'
interface IuserLogin{
  setUserInfo:(userFrom:IloginParams)=>Promise<void>
  getUserInfo:()=>IuserInfo
  logout:()=>void
}
interface IuseSessionStorage{
  getSessionUserInfo:()=>IuserInfo
  setSessionUserInfo:(info:IuserInfo)=>void
  clearSessionUserInfo:()=>void
}
function useUserInfo():IuserLogin {
  const store: Store<any> = useStore()
  const { getSessionUserInfo,setSessionUserInfo ,clearSessionUserInfo }=useSessionStorage()
  async function setUserInfo(userFrom:IloginParams):Promise<void> {
    await store.dispatch(USER.LOGIN,userFrom)
    setSessionUserInfo(store.state.userInfo)
  }
  function getUserInfo():IuserInfo {
    return getSessionUserInfo()
  }
  function logout():void {
    clearSessionUserInfo()
    window.location.href = '#/index/'
  }
  return{
    setUserInfo,
    getUserInfo,
    logout
  }
}

function useSessionStorage(): IuseSessionStorage {
  function getSessionUserInfo(): IuserInfo {
    return JSON.parse(window.sessionStorage.getItem('userInfo') || '{}')
  }
  function setSessionUserInfo(info:IuserInfo ): void {
    window.sessionStorage.setItem('userInfo', JSON.stringify(info))
  }
  function clearSessionUserInfo( ): void {
    window.sessionStorage.clear()
  }
  return {
    getSessionUserInfo,
    setSessionUserInfo,
    clearSessionUserInfo
  }
}
export { useUserInfo }
