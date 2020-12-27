import * as React from "react"
import { ComponentContainer, TextInput } from "./text-field.styles"
import { Text } from "../"
import { SmallText } from "../../enum/styles"

interface TextFieldProps {}

export function TextField(props: TextFieldProps) {
  const {} = props

  return (
    <ComponentContainer>
      <Text text="label" />
      <TextInput />
      <SmallText text="blablabnlablabalba" />
    </ComponentContainer>
  )
}
