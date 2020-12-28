import * as storage from "./storage"

const sfqToken = "SFQ_TOKEN"

export async function saveToken(token: string) {
  await storage.save(sfqToken, token)
  console.log(`token ${token} saved`)
}

export async function loadToken() {
  return await storage.load(sfqToken)
}

export async function clearToken() {
  await storage.remove(sfqToken)
}
