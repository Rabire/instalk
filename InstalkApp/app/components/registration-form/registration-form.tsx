import * as React from "react"
import { View } from "react-native"
import { Text, TextField, PasswordField } from "../"

interface RegistrationFormProps {}

export function RegistrationForm(props: RegistrationFormProps) {
  const {} = props

  return (
    <View>
      <Text>Hello</Text>
      <TextField setField={() => null} i18nPlaceholder="loginScreen.username" />
      <TextField setField={() => null} i18nPlaceholder="loginScreen.username" />
      <TextField setField={() => null} i18nPlaceholder="loginScreen.username" />

      <PasswordField setField={() => null} />
      <PasswordField setField={() => null} />

      <TextField setField={() => null} i18nPlaceholder="loginScreen.username" />
    </View>
  )
}
