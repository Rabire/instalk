import React from "react"
import { Text } from "../../components"
import { InstalkLogoBig } from "../../components/svg"
import { Screen } from "./login-screen.styles"

export const LoginScreen = () => {
  return (
    <Screen preset="fixed">
      <InstalkLogoBig />
      <Text text="Login form" />
      <Text text="Login Button" />
    </Screen>
  )
}
