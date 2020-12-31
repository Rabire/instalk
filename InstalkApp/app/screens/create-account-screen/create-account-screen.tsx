import React, { useEffect, useState } from "react"
import { Button, RegistrationForm, Text } from "../../components"
import {
  ButtonBox,
  ScrollView,
  LogoBox,
  BellowButtonTextCustomStyles,
} from "./create-account-screen.styles"
import { InstalkLogoBig } from "../../components/svg"
import { SmallText, StretchedAndCenteredScreen } from "../../enum/styles"
import { UserStore } from "../../models"
import { Api } from "../../services/api"
import { saveToken } from "../../utils/storage"
import { useNavigation } from "@react-navigation/native"
import { color } from "../../theme"

export const CreateAccountScreen = () => {
  const [username, setUsername] = useState(null)
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [passwordConfirmation, setPasswordConfirmation] = useState(null)
  const [penisSize, setPenisSize] = useState(null)
  const [gender, setGender] = useState(null)

  const [isLoading, setIsLoading] = useState(false)
  const [i18nError, setI18nError] = useState(null)

  const [areFieldsMissing, setAreFieldsMissing] = useState(true)

  useEffect(() => {
    if (username && email && password && penisSize) {
      setAreFieldsMissing(false)
    } else {
      setAreFieldsMissing(true)
    }
  }, [username, email, password, penisSize])

  const navigation = useNavigation()
  const instalkApi = new Api()

  const sendRegisterFrom = () => {
    if (areFieldsMissing) return setI18nError("errors.emptyFields")
    if (password !== passwordConfirmation) return setI18nError("errors.passwordsNotMatching")
    if (password.length < 5) return setI18nError("errors.shortPassword")

    const userToCreate = {
      username,
      email,
      password,
      penisSize,
      gender,
    }
    console.log({ userToCreate })

    setIsLoading(true)
    instalkApi
      .createAccount(userToCreate)
      .then(async (data) => {
        if (data.user) {
          await UserStore.clearUser()
          await saveToken(data.user.token)
          await UserStore.setUser(data.user)
          // await navigation.navigate("createInstagramCredentials")
          await console.log("goto createInstagramCredentials")
        } else {
          setI18nError("errors.userCreationError")
        }
      })
      .catch(() => {
        setI18nError("errors.userCreationError")
      })
      .finally(() => {
        setIsLoading(false)
        return
      })
  }

  return (
    <StretchedAndCenteredScreen preset="fixed">
      <ScrollView showsVerticalScrollIndicator={false}>
        <LogoBox>
          <InstalkLogoBig />
          <SmallText tx="loginScreen.blurryLogo" />
        </LogoBox>

        <RegistrationForm
          setInstalkUsername={setUsername}
          setEmail={setEmail}
          setPassword={setPassword}
          setPasswordConfirmation={setPasswordConfirmation}
          setPenisSize={setPenisSize}
          setGender={setGender}
          gender={gender}
          penisSize={penisSize}
        />

        {i18nError && (
          <SmallText
            tx={i18nError}
            style={{
              color: color.error,
              paddingBottom: 40,
            }}
          />
        )}

        <ButtonBox>
          <Button
            isLoading={isLoading}
            isNextArrowVisible={username && email && password && penisSize}
            tx="loginScreen.register"
            onPress={sendRegisterFrom}
          />
          <SmallText tx="loginScreen.keepSecret" style={BellowButtonTextCustomStyles} />
        </ButtonBox>
      </ScrollView>
    </StretchedAndCenteredScreen>
  )
}
