import * as React from "react"
import { ViewStyle } from "react-native"
import { LoadingWheel } from "../"
import { PressableText, WheelBox, PressableBox } from "./button.styles"
import { translate } from "../../i18n"
import { capitalizeFirstLetter } from "../../utils/format"
import { color } from "../../theme"
import NextArrowSvg from "./NextArrowSvg"

interface ButtonProps {
  tx: string
  onPress: Function
  customStyle?: ViewStyle
  isLoading?: boolean
  isNextArrowVisible?: boolean
}

export function Button(props: ButtonProps) {
  const { customStyle, tx, onPress, isLoading = false, isNextArrowVisible = false } = props

  return (
    <PressableBox onPress={isLoading ? () => null : onPress} style={customStyle}>
      <PressableText text={isLoading ? "" : capitalizeFirstLetter(translate(tx))} />
      {isNextArrowVisible && !isLoading && <NextArrowSvg />}
      <WheelBox>
        <LoadingWheel isVisible={isLoading} wheelColor={color.contrast} />
      </WheelBox>
    </PressableBox>
  )
}
