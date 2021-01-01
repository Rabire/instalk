import * as React from "react"
import { View, ViewStyle } from "react-native"
import { Text } from "../"
import { ComponentBox } from "./add-target.styles"

export interface AddTargetProps {
  style?: ViewStyle
}

export function AddTarget(props: AddTargetProps) {
  const {} = props

  return (
    <ComponentBox>
      {/*  SVG */}
      <Text>Hello</Text>
      <Text>Hello</Text>
    </ComponentBox>
  )
}
