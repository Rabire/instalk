import React from "react"
import { LoginForm, Button } from "../../components"
import { InstalkLogoBig } from "../../components/svg"
import { Screen } from "./login-screen.styles"

export const LoginScreen = () => {
  const connect = () => {
    console.log("connextion")
  }

  return (
    <Screen preset="fixed" style={{ padding: 40 }}>
      <InstalkLogoBig />
      <LoginForm />
      <Button tx="common.next" onPress={connect} />
    </Screen>
  )
}
