import React from "react"
import { Screen, Text } from "../../components"
import { InstalkLogoBig } from "../../components/svg/InstalkLogoBig"

import { color } from "../../theme"

export const LoginScreen = () => {
  return (
    <Screen preset="fixed" style={{ alignItems: "center", justifyContent: "space-around" }}>
      <InstalkLogoBig />
      <Text text="loginScreen" />
      <Text tx="common.next" style={{ color: color.secondary }} />
      <Text tx="common.next" style={{ color: color.tertiary }} />
    </Screen>
  )
}
