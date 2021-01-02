import * as storage from "./storage"

const instalkToken = "INSTALK_TOKEN"

export async function saveToken(token: string) {
  await storage.save(instalkToken, token)
  console.log(`token ${token} saved`)
}

export async function loadToken() {
  return await storage.load(instalkToken)
}

export async function clearToken() {
  await storage.remove(instalkToken)
}
