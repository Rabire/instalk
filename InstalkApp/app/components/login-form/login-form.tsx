import React, { useState } from "react"
import { ComponentBox, TouchableBox } from "./login-form.styles"
import { TextField } from "../"
import { SmallText } from "../../enum/styles"

interface LoginFormProps {}

export function LoginForm(props: LoginFormProps) {
  const {} = props

  const [username, setUsername] = useState(null)
  const [password, setPassword] = useState(null)
  const [displayErrors, setDisplayErrors] = useState(false)

  return (
    <ComponentBox>
      <TextField
        setField={setUsername}
        i18nPlaceholder="loginScreen.username"
        isErrorDisplayed={!username && displayErrors}
      />
      <TextField
        setField={setPassword}
        i18nPlaceholder="loginScreen.password"
        isErrorDisplayed={!password && displayErrors}
      />

      <TouchableBox onPress={() => console.log("toz")}>
        <SmallText tx="loginScreen.passwordForgotten" />
        <SmallText tx="loginScreen.tooBadForYou" />
      </TouchableBox>
    </ComponentBox>
  )
}
