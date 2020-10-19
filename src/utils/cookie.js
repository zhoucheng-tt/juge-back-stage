import Cookies from 'js-cookie'

const AUTH_TOKEN = "token"

export function getToken() {
  return Cookies.get(AUTH_TOKEN) || ""
}

export function setToken(token) {
  return Cookies.set(AUTH_TOKEN, token)
}

export function removeToken() {
  return Cookies.remove(AUTH_TOKEN)
}
