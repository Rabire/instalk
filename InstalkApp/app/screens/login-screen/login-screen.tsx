import React, { useState, useEffect } from "react"
import { View, Keyboard } from "react-native"
import { LoginForm, Button } from "../../components"
import { InstalkLogoBig } from "../../components/svg"
import { Screen, ButtonBox } from "./login-screen.styles"
import { SmallText } from "../../enum/styles"
import { vw } from "../../utils/viewport-units"

export const LoginScreen = () => {
  const [isKeyboardVisible, setKeyboardVisible] = useState(false)

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener("keyboardDidShow", () => {
      setKeyboardVisible(true)
    })
    const keyboardDidHideListener = Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardVisible(false)
    })

    return () => {
      keyboardDidHideListener.remove()
      keyboardDidShowListener.remove()
    }
  }, [])

  const connect = () => {
    console.log("connexion")
  }

  console.log({ isKeyboardVisible })

  return (
    <Screen preset="fixed" style={{ padding: vw(17) }}>
      <View>
        <InstalkLogoBig />
        <SmallText tx="loginScreen.blurryLogo" />
      </View>

      <LoginForm />

      <ButtonBox isKeyboardVisible={isKeyboardVisible}>
        <Button tx="loginScreen.connect" onPress={connect} />
      </ButtonBox>
    </Screen>
  )
}
