import React from "react"
import { View } from "react-native"
import { LoginForm, Button } from "../../components"
import { InstalkLogoBig } from "../../components/svg"
import { Screen } from "./login-screen.styles"
import { SmallText } from "../../enum/styles"
import { vw } from "../../utils/viewport-units"

export const LoginScreen = () => {
  const connect = () => {
    console.log("connexion")
  }

  return (
    <Screen preset="fixed" style={{ padding: vw(17) }}>
      <View>
        <InstalkLogoBig />
        <SmallText tx="loginScreen.blurryLogo" />
      </View>

      <LoginForm />
      <Button tx="common.next" onPress={connect} />
    </Screen>
  )
}
