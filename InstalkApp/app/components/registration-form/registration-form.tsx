import * as React from "react"
import { ComponentBox, RowBox } from "./registration-form.styles"
import { TextField, PasswordField } from "../"
import { Button } from "../button/button"
import { color } from "../../theme"

interface RegistrationFormProps {
  setInstalkUsername: Function
  setEmail: Function
  setPassword: Function
  setPasswordConfirmation: Function
  setPenisSize: Function
  setGender: Function
}

export function RegistrationForm(props: RegistrationFormProps) {
  const {
    setInstalkUsername,
    setEmail,
    setPassword,
    setPasswordConfirmation,
    setPenisSize,
    setGender,
  } = props

  return (
    <ComponentBox>
      <TextField setField={() => null} i18nPlaceholder="loginScreen.username" />
      <TextField setField={() => null} i18nPlaceholder="loginScreen.username" />
      <TextField setField={() => null} i18nPlaceholder="loginScreen.username" />

      <PasswordField setField={() => null} />
      <PasswordField setField={() => null} />

      <TextField setField={() => null} i18nPlaceholder="loginScreen.username" />

      <RowBox>
        <Button
          tx="user.gender.male"
          onPress={() => setGender("MALE")}
          customStyle={{ backgroundColor: color.secondary, width: "48%" }}
        />
        <Button
          tx="user.gender.female"
          onPress={() => setGender("FEMALE")}
          customStyle={{ width: "48%" }}
        />
      </RowBox>
    </ComponentBox>
  )
}
