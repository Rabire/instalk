import styled from "styled-components/native"
import { color, typography } from "../../theme"
import { vw } from "../../utils/viewport-units"
import { Text } from "../"

export const ComponentBox = styled.TouchableOpacity`
  width: ${vw(100) - vw(10) * 2}px;
  background-color: ${(props) => (props.isPrimaryType ? color.secondary : color.tertiary)};
  height: 100px;
  padding-horizontal: 20px;
  border-radius: 30px;
  overflow: hidden;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-vertical: 20px;
`

export const InnerText = styled(Text)`
  color: ${color.contrast};
  font-family: ${typography.primaryBold};
  font-size: 18px;
  text-align: center;
`

export const InnerHalfBox = styled.View`
  align-items: center;
  width: 50%;
`
