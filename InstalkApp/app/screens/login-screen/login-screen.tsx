import React from "react"
import { Screen, Text } from "../../components"
import { color } from "../../theme"

export const LoginScreen = () => {
  return (
    <Screen preset="scroll">
      <Text text="loginScreen" />
      <Text tx="common.next" style={{ color: color.secondary }} />
      <Text tx="common.next" style={{ color: color.tertiary }} />
    </Screen>
  )
}
