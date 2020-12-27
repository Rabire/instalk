import React from "react"
import { LoginForm, Button } from "../../components"
import { InstalkLogoBig } from "../../components/svg"
import { Screen } from "./login-screen.styles"
import { vw } from "../../utils/viewport-units"

export const LoginScreen = () => {
  const connect = () => {
    console.log("connexion")
  }

  return (
    <Screen preset="fixed" style={{ padding: vw(17) }}>
      <InstalkLogoBig />
      <LoginForm />
      <Button tx="common.next" onPress={connect} />
    </Screen>
  )
}
