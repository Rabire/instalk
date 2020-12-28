import React, { useState } from "react"
import { ComponentBox, TouchableBox } from "./login-form.styles"
import { TextField } from "../"
import { SmallText } from "../../enum/styles"
import { TrollModal } from "./TrollModal"

interface LoginFormProps {
  setUsername: Function
  setPassword: Function
}

export function LoginForm(props: LoginFormProps) {
  const { setUsername, setPassword } = props

  const [isModalVisible, setIsModalVisible] = useState(false)

  return (
    <>
      <ComponentBox>
        <TextField setField={setUsername} i18nPlaceholder="loginScreen.username" />
        <TextField setField={setPassword} i18nPlaceholder="loginScreen.password" />

        <TouchableBox onPress={() => setIsModalVisible(true)}>
          <SmallText tx="loginScreen.passwordForgotten" />
          <SmallText tx="loginScreen.tooBadForYou" />
        </TouchableBox>
      </ComponentBox>

      <TrollModal isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} />
    </>
  )
}
