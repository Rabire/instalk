import React, { useState } from "react"
import { View } from "react-native"
import { TouchableEyeBox } from "./password-field.styles"
import { EyeSvg } from "./EyeSvg"
import { TextField } from "../"

interface PasswordFieldProps {
  setField: Function
  onSubmitEditing?: Function
}

export function PasswordField(props: PasswordFieldProps) {
  const { setField, onSubmitEditing } = props

  const [isTextHidden, setIsTextHidden] = useState(true)

  return (
    <View>
      <TextField
        setField={setField}
        i18nPlaceholder="loginScreen.password"
        onSubmitEditing={onSubmitEditing}
        isTextHidden={isTextHidden}
      />
      <TouchableEyeBox onPress={() => setIsTextHidden(!isTextHidden)}>
        <EyeSvg isCrossed={!isTextHidden} />
      </TouchableEyeBox>
    </View>
  )
}
