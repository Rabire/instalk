import * as React from "react"
import { ViewStyle } from "react-native"
import { AddSvg } from "../svg"
import { ComponentBox, InnerText } from "./add-target.styles"

export interface AddTargetProps {
  style?: ViewStyle
}

export function AddTarget(props: AddTargetProps) {
  const {} = props

  return (
    <ComponentBox>
      <AddSvg />
      <InnerText tx="tracksScreen.addTarget" />
    </ComponentBox>
  )
}
