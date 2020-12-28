import { types } from "mobx-state-tree"

export const emptyUser = {
  id: 0,
  username: null,
  email: null,
  password: null,
  gender: null,
  penisSize: null,
  token: null,
  tokenExpiration: null,
  createdAt: null,
  updatedAt: null,
}

export const UserStore = types
  .model("UserStore", {
    id: types.number,
    username: types.maybeNull(types.string),
    email: types.maybeNull(types.string),
    password: types.maybeNull(types.string),
    gender: types.maybeNull(types.string),
    penisSize: types.maybeNull(types.number),
    token: types.maybeNull(types.string),
    tokenExpiration: types.maybeNull(types.string),
    createdAt: types.maybeNull(types.string),
    updatedAt: types.maybeNull(types.string),
  })

  .actions((self) => ({
    setUser(newUserObject) {
      Object.assign(self, newUserObject)
    },
  }))

  .actions((self) => ({
    clearUser() {
      self.setUser(emptyUser)
    },
  }))

  .create(emptyUser)
