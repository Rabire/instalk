import * as React from "react"
import { ComponentBox, RowBox, Button } from "./registration-form.styles"
import { TextField, PasswordField } from "../"
import { color } from "../../theme"
import { capitalizeFirstLetter } from "../../utils/format"
import { translate } from "../../i18n"

interface RegistrationFormProps {
  setInstalkUsername: Function
  setEmail: Function
  setPassword: Function
  setPasswordConfirmation: Function
  setPenisSize: Function
  setGender: Function
  gender: "MALE" | "FEMALE" | null
  penisSize: number
}

export function RegistrationForm(props: RegistrationFormProps) {
  const {
    setInstalkUsername,
    setEmail,
    setPassword,
    setPasswordConfirmation,
    setPenisSize,
    setGender,
    gender,
    penisSize,
  } = props

  return (
    <ComponentBox>
      <TextField setField={setInstalkUsername} i18nPlaceholder="user.instalkUsername" />
      <TextField setField={setEmail} i18nPlaceholder="user.email" />

      <PasswordField setField={setPassword} />
      <PasswordField setField={setPasswordConfirmation} />

      <TextField setField={setPenisSize} i18nPlaceholder="user.gender.sexe" />

      {penisSize && (
        <RowBox>
          <Button
            text={capitalizeFirstLetter(translate("user.gender.male"))}
            onPress={() => setGender("MALE")}
            color={color.secondary}
            isSelected={gender === "MALE"}
          />
          <Button
            text={capitalizeFirstLetter(translate("user.gender.female"))}
            onPress={() => setGender("FEMALE")}
            color={color.tertiary}
            isSelected={gender === "FEMALE"}
          />
        </RowBox>
      )}
    </ComponentBox>
  )
}
