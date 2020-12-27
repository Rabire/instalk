import * as React from "react"
import { View, ViewStyle } from "react-native"
import { color, typography } from "../../theme"
import { Text } from "../"

export interface ButtonProps {
  customStyle?: ViewStyle
}

export function Button(props: ButtonProps) {
  const { customStyle } = props

  return (
    <View style={customStyle}>
      <Text>Hello</Text>
    </View>
  )
}
