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

  const [displayInputsError, setDisplayInputsError] = useState(false)

  const sendRegisterFrom = () => {
    console.log("sendRegisterFrom")
    setDisplayInputsError(true)

    console.log({
      instalkUsername,
      email,
      password,
      passwordConfirmation,
      penisSize,
      gender,
    })

    if (password !== passwordConfirmation) {
      console.log("password do not match")
      return
    }

    if (instalkUsername && email && password && penisSize) {
      console.log("ok for sending to API")
    } else {
      console.log("fields missing")
      return
    }
  }

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
        gender={gender}
        penisSize={penisSize}
      />

      <ButtonBox>
        <Button isLoading={false} tx="loginScreen.connect" onPress={sendRegisterFrom} />
        <SmallText tx="loginScreen.keepSecret" style={{ marginTop: 10 }} />
      </ButtonBox>
    </StretchedAndCenteredScreen>
  )
}
