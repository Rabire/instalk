import * as React from "react"
import { ViewStyle } from "react-native"
import { LoadingWheel } from "../"
import { PressableText, WheelBox } from "./button.styles"
import { translate } from "../../i18n"
import { capitalizeFirstLetter } from "../../utils/format"
import { color } from "../../theme"

interface ButtonProps {
  tx: string
  onPress: Function
  customStyle?: ViewStyle
  isLoading?: boolean
}

export function Button(props: ButtonProps) {
  const { customStyle, tx, onPress, isLoading } = props

  return (
    <>
      <PressableText
        text={isLoading ? "" : capitalizeFirstLetter(translate(tx))}
        onPress={isLoading ? () => null : onPress}
        style={customStyle}
      />
      <WheelBox>
        <LoadingWheel isVisible={isLoading} wheelColor={color.contrast} />
      </WheelBox>
    </>
  )
}
