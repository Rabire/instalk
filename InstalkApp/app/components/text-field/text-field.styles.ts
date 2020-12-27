import styled from "styled-components/native"
import { Text } from "../../components"
import { color, typography } from "../../theme"

export const ComponentContainer = styled.View`
  background-color: pink;
`

export const TextInput = styled.TextInput`
  background-color: red;
  padding-horizontal: 0px;
  padding-vertical: 2px
  color: ${color.contrast};
  border-bottom-width: 1px;
  border-color: ${color.contrast};
`
