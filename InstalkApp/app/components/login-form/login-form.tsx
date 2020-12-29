import React, { useState } from "react"
import { ComponentBox, TouchableBox } from "./login-form.styles"
import { PasswordField } from "../"
import { TextField } from "../"
import { SmallText } from "../../enum/styles"
import { TrollModal } from "./TrollModal"
import { color } from "../../theme"

interface LoginFormProps {
  setUsername: Function
  setPassword: Function
  login: Function
  i18nError: string
}

export function LoginForm(props: LoginFormProps) {
  const { setUsername, setPassword, login, i18nError } = props

  const [isModalVisible, setIsModalVisible] = useState(false)
  const [passwordInput, setPasswordInput] = useState(null)

  return (
    <>
      <ComponentBox>
        <TextField
          setField={setUsername}
          i18nPlaceholder="loginScreen.username"
          onSubmitEditing={() => {
            passwordInput.focus()
          }}
        />

        <PasswordField setField={setPassword} onSubmitEditing={login} setRef={setPasswordInput} />

        {i18nError && <SmallText tx={i18nError} style={{ color: color.error }} />}

        <TouchableBox onPress={() => setIsModalVisible(true)}>
          <SmallText tx="loginScreen.passwordForgotten" />
          <SmallText tx="loginScreen.tooBadForYou" />
        </TouchableBox>
      </ComponentBox>

      <TrollModal isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} />
    </>
  )
}
