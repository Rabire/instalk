import React from "react"
import { View } from "react-native"
import { Screen, Button, RegistrationForm } from "../../components"
import { ButtonBox } from "./create-account-screen.styles"
import { InstalkLogoBig } from "../../components/svg"
import { SmallText } from "../../enum/styles"

export const CreateAccountScreen = () => {
  return (
    <Screen preset="fixed">
      <View>
        <InstalkLogoBig />
        <SmallText tx="loginScreen.blurryLogo" />
      </View>

      <RegistrationForm />

      <ButtonBox>
        <Button
          isLoading={false}
          tx="loginScreen.connect"
          onPress={() => console.log("create account")}
        />
        <SmallText tx="loginScreen.becomeAStalker" style={{ marginTop: 10 }} />
      </ButtonBox>
    </Screen>
  )
}
