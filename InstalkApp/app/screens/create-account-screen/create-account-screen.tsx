import React, { useEffect, useState } from "react"
import { Button, RegistrationForm } from "../../components"
import {
  ButtonBox,
  ScrollView,
  LogoBox,
  BellowButtonTextCustomStyles,
} from "./create-account-screen.styles"
import { InstalkLogoBig } from "../../components/svg"
import { SmallText, StretchedAndCenteredScreen } from "../../enum/styles"

export const CreateAccountScreen = () => {
  const [instalkUsername, setInstalkUsername] = useState(null)
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [passwordConfirmation, setPasswordConfirmation] = useState(null)
  const [penisSize, setPenisSize] = useState(null)
  const [gender, setGender] = useState(null)

  const [areFieldsMissing, setAreFieldsMissing] = useState(true)

  useEffect(() => {
    if (instalkUsername && email && password && penisSize) {
      setAreFieldsMissing(false)
    } else {
      setAreFieldsMissing(true)
    }
  }, [instalkUsername, email, password, penisSize])

  const sendRegisterFrom = () => {
    if (areFieldsMissing) return console.log("fields missing")
    if (password !== passwordConfirmation) return console.log("password do not match")
    if (password.length < 5) return console.log("password too short")

    console.log({
      instalkUsername,
      email,
      password,
      penisSize,
      gender,
    })
    return console.log("ok for sending to API")
  }

  return (
    <StretchedAndCenteredScreen preset="fixed">
      <ScrollView showsVerticalScrollIndicator={false}>
        <LogoBox>
          <InstalkLogoBig />
          <SmallText tx="loginScreen.blurryLogo" />
        </LogoBox>

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
          <Button isLoading={false} tx="loginScreen.register" onPress={sendRegisterFrom} />
          <SmallText tx="loginScreen.keepSecret" style={BellowButtonTextCustomStyles} />
        </ButtonBox>
      </ScrollView>
    </StretchedAndCenteredScreen>
  )
}
