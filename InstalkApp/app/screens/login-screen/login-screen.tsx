import React from "react"
import { Text, Button } from "../../components"
import { InstalkLogoBig } from "../../components/svg"
import { Screen } from "./login-screen.styles"

export const LoginScreen = () => {
  const connect = () => {
    console.log("connextion")
  }

  return (
    <Screen preset="fixed">
      <InstalkLogoBig />
      <Text text="Login form" />
      <Button tx="common.next" onPress={connect} />
    </Screen>
  )
}
