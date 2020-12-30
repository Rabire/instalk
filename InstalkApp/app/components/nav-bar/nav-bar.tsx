import * as React from "react"
import { View } from "react-native"
import { Text } from "../"
import { ComponentBox, ButtonBox } from "./nav-bar.styles"

interface NavBarProps {}

export function NavBar(props: NavBarProps) {
  const {} = props

  return (
    <ComponentBox>
      <ButtonBox>
        <Text>IG SVG</Text>
      </ButtonBox>
      <ButtonBox>
        <Text>HOME SVG</Text>
      </ButtonBox>
      <ButtonBox>
        <Text>PROFILE</Text>
      </ButtonBox>
    </ComponentBox>
  )
}
