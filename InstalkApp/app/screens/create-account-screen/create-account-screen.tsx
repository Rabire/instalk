import React, { useState } from "react"
import { View } from "react-native"
import { Button, RegistrationForm } from "../../components"
import { ButtonBox } from "./create-account-screen.styles"
import { InstalkLogoBig } from "../../components/svg"
import { SmallText, StretchedAndCenteredScreen } from "../../enum/styles"

export const CreateAccountScreen = () => {
  const [instalkUsername, setInstalkUsername] = useState(null)
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [passwordConfirmation, setPasswordConfirmation] = useState(null)
  const [penisSize, setPenisSize] = useState(null)
  const [gender, setGender] = useState(null)

  return (
    <StretchedAndCenteredScreen preset="scroll">
      <View>
        <InstalkLogoBig />
        <SmallText tx="loginScreen.blurryLogo" />
      </View>

      <RegistrationForm
        setInstalkUsername={setInstalkUsername}
        setEmail={setEmail}
        setPassword={setPassword}
        setPasswordConfirmation={setPasswordConfirmation}
        setPenisSize={setPenisSize}
        setGender={setGender}
      />

      <ButtonBox>
        <Button
          isLoading={false}
          tx="loginScreen.connect"
          onPress={() => console.log("create account")}
        />
        <SmallText tx="loginScreen.becomeAStalker" style={{ marginTop: 10 }} />
      </ButtonBox>
    </StretchedAndCenteredScreen>
  )
}
