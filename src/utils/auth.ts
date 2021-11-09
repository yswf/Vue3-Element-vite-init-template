
export function getToken(): string {
  return window.sessionStorage.getItem('token') || ''
}

export function setToken(token: string): void {
  window.sessionStorage.setItem('token',token)
}

export function removeToken(): void {
  window.sessionStorage.setItem('token','')
}
