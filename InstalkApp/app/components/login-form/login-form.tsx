import * as React from "react"
import { ComponentBox } from "./login-form.styles"
import { Text } from "../"

interface LoginFormProps {}

export function LoginForm(props: LoginFormProps) {
  const {} = props

  return (
    <ComponentBox>
      <Text>Identifiant</Text>
      <Text>Mot de passe</Text>
    </ComponentBox>
  )
}
