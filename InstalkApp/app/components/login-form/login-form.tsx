import React, { useState } from "react"
import { ComponentBox } from "./login-form.styles"
import { TextField } from "../"

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
        i18nPlaceholder="common.next"
        isErrorDisplayed={!username && displayErrors}
      />
      <TextField
        setField={setPassword}
        i18nPlaceholder="common.next"
        i18nSubText="common.ok"
        isErrorDisplayed={!password && displayErrors}
      />

      <TextField
        setField={setPassword}
        i18nPlaceholder="common.next"
        isErrorDisplayed={!password && displayErrors}
      />
    </ComponentBox>
  )
}
