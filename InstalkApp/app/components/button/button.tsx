import * as React from "react"
import { ViewStyle } from "react-native"
import { PressableText } from "./button.styles"
import { translate } from "../../i18n"
import { capitalizeFirstLetter } from "../../utils/format"

interface ButtonProps {
  tx: string
  onPress: Function
  customStyle?: ViewStyle
}

export function Button(props: ButtonProps) {
  const { customStyle, tx, onPress } = props

  return (
    <PressableText
      text={capitalizeFirstLetter(translate(tx))}
      onPress={onPress}
      style={customStyle}
    />
  )
}
