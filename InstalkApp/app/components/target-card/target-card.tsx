import * as React from "react"
import { View, ViewStyle } from "react-native"
import { ComponentBox } from "./target-card.styles"
import { Text } from "../"

export interface TargetCardProps {
  style?: ViewStyle
}

export function TargetCard(props: TargetCardProps) {
  const {} = props

  return (
    <ComponentBox>
      <View>
        <Text>Hello</Text>
        <Text>Hello</Text>
        <Text>Hello</Text>
      </View>

      <Text>IMG</Text>
    </ComponentBox>
  )
}
