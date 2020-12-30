import styled from "styled-components/native"
import { color, typography } from "../../theme"
import { vw } from "../../utils/viewport-units"
import { Text } from "../"

export const ComponentBox = styled.View`
  width: ${vw(100) - vw(10) * 2}px;
  background-color: green;
  height: 100px;
  padding-horizontal: 20px;
  border-radius: 30px;
  overflow: hidden;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`

export const InnerText = styled(Text)`
  color: ${color.contrast};
  font-family: ${typography.primary};
  font-size: 18px;
  background-color: blue;
  text-align: center;
`

export const InnerHalfBox = styled.View`
  background-color: gold;
  align-items: center;
  width: 50%;
`
