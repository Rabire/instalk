import React, { useState } from "react"
import { View } from "react-native"
import { TouchableEyeBox } from "./password-field.styles"
import { EyeSvg } from "./EyeSvg"
import { TextField } from "../"

interface PasswordFieldProps {
  setField: Function
  onSubmitEditing?: Function
  setRef?: Function
  i18nPlaceholder?: string
}

export function PasswordField(props: PasswordFieldProps) {
  const { setField, onSubmitEditing, setRef, i18nPlaceholder = "loginScreen.password" } = props

  const [isTextHidden, setIsTextHidden] = useState(true)

  return (
    <View>
      <TextField
        setField={setField}
        i18nPlaceholder={i18nPlaceholder}
        onSubmitEditing={onSubmitEditing}
        isTextHidden={isTextHidden}
        setRef={setRef}
      />
      <TouchableEyeBox onPress={() => setIsTextHidden(!isTextHidden)}>
        <EyeSvg isCrossed={!isTextHidden} />
      </TouchableEyeBox>
    </View>
  )
}
