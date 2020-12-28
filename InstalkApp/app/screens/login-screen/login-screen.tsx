import React, { useState, useEffect } from "react"
import { View, Keyboard } from "react-native"
import { LoginForm, Button } from "../../components"
import { InstalkLogoBig } from "../../components/svg"
import { Screen, ButtonBox } from "./login-screen.styles"
import { SmallText } from "../../enum/styles"
import { vw } from "../../utils/viewport-units"
import { UserStore } from "../../models"
import { Api } from "../../services/api"
import { saveToken } from "../../utils/storage"
import { useNavigation } from "@react-navigation/native"
import { color } from "../../theme"

export const LoginScreen = () => {
  const [username, setUsername] = useState(null)
  const [password, setPassword] = useState(null)
  const [isKeyboardVisible, setKeyboardVisible] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [i18nError, setI18nError] = useState(null)

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

  const navigation = useNavigation()
  const instalkApi = new Api()

  const sendCredentials = () => {
    setIsLoading(true)
    setI18nError(null)
    instalkApi
      .login({ username: username?.trim().toLowerCase(), password })
      .then(async (data) => {
        if (data.user) {
          await UserStore.clearUser()
          await saveToken(data.user.token)
          await UserStore.setUser(data.user)
          await navigation.navigate("home")
        } else if (data === "one or multiple required fields are empty") {
          setI18nError("errors.emptyFields")
        } else if (data === "unknown username or password") {
          setI18nError("errors.badCredentials")
        } else {
          setI18nError("errors.loginError")
        }
      })
      .catch(() => setI18nError("errors.loginError"))
      .finally(() => setIsLoading(false))
  }

  return (
    <Screen preset="fixed" style={{ padding: vw(17) }}>
      <View>
        <InstalkLogoBig />
        <SmallText tx="loginScreen.blurryLogo" />
      </View>

      <LoginForm setUsername={setUsername} setPassword={setPassword} login={sendCredentials} />

      {i18nError && <SmallText tx={i18nError} style={{ color: color.error }} />}

      <ButtonBox isKeyboardVisible={isKeyboardVisible}>
        <Button isLoading={isLoading} tx="loginScreen.connect" onPress={sendCredentials} />
      </ButtonBox>
    </Screen>
  )
}
