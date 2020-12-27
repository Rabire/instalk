import React from "react"
import { Screen, Text } from "../../components"
import { InstalkLogoBig } from "../../components/svg"
import { RedText } from "./login-screen.styles"
import { color } from "../../theme"

export const LoginScreen = () => {
  return (
    <Screen preset="fixed" style={{ alignItems: "center", justifyContent: "space-around" }}>
      <InstalkLogoBig />
      <Text text="loginScreen" />
      <Text tx="common.next" style={{ color: color.secondary }} />
      <RedText tx="common.next" />
    </Screen>
  )
}
