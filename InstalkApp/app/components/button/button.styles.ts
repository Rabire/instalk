import styled from "styled-components/native"
import { Text } from "../../components"
import { color, typography } from "../../theme"

export const PressableText = styled(Text)`
  background-color: ${color.tertiary};
  text-align: center;
  font-size: 15px;
  font-family: ${typography.primaryBold};
  color: ${color.contrast};
`

export const PressableBox = styled.TouchableOpacity`
  background-color: ${color.tertiary};
  padding: 12px;
  border-radius: 25px;
  overflow: hidden;
  width: 60%;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`

export const WheelBox = styled.View`
  position: absolute;
`
