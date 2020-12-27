import styled from "styled-components/native"
import { Text } from "../../components"
import { color } from "../../theme"

export const PressableText = styled(Text)`
  background-color: ${color.tertiary};
  padding: 12px;
  border-radius: 25px;
  width: 50%;
  text-align: center;
  font-size: 15px;
`
