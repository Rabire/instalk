import * as React from "react"
import { ViewStyle, ActivityIndicator } from "react-native"
import { color } from "../../theme"
import { ComponentBox } from "./loading-wheel.styles"

export interface LoadingWheelProps {
  customStyle?: ViewStyle
  isVisible: boolean
  wheelColor?: string
}

export function LoadingWheel(props: LoadingWheelProps) {
  const { customStyle, isVisible, wheelColor = color.secondary } = props

  return (
    <>
      {isVisible && (
        <ComponentBox style={customStyle}>
          <ActivityIndicator size="large" color={wheelColor} />
        </ComponentBox>
      )}
    </>
  )
}
