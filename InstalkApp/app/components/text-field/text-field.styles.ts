import styled from "styled-components/native"
import { color, typography } from "../../theme"

export const ComponentContainer = styled.View`
  margin-vertical: 10px;
`

export const TextInput = styled.TextInput`
  padding-horizontal: 0px;
  padding-vertical: 2px
  margin-bottom: 2px
  color: ${color.contrast};
  border-bottom-width: 1px;
  font-size: 15px;
  font-family: ${typography.primary};
  border-color: ${(props) => props.fieldColor};
`
