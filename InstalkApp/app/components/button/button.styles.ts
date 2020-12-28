import styled from "styled-components/native"
import { Text } from "../../components"
import { color, typography } from "../../theme"

export const PressableText = styled(Text)`
  background-color: ${color.tertiary};
  padding: 12px;
  border-radius: 25px;
  width: 60%;
  text-align: center;
  font-size: 15px;
  font-family: ${typography.primaryBold};
  color: ${color.contrast};
`

export const WheelBox = styled.View`
  position: absolute;
  height: 100%;
  justify-content: center;
`
