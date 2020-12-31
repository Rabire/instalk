import styled from "styled-components/native"
import { Text } from "../"
import { color, typography } from "../../theme"

export const ComponentBox = styled.View`
  width: 100%;
  padding-top: 50px;
  padding-bottom: 40px;
`

export const Button = styled(Text)`
  background-color: ${(props) => props.color || color.secondary};
  padding-top: 12px;
  padding-bottom: 8px;
  border-radius: 25px;
  overflow: hidden;
  width: 48%;
  text-align: center;
  font-size: 15px;
  font-family: ${typography.primaryBold};
  color: ${color.contrast};
  border-color: ${(props) => (props.isSelected ? color.contrast : props.color)};
  border-width: 3px;
`

export const RowBox = styled.View`
  flex-direction: row;
  justify-content: space-between;
`
