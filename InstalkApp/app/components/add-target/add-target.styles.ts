import styled from "styled-components/native"
import { Text } from "../"
import { color } from "../../theme"

export const ComponentBox = styled.TouchableOpacity`
  width: 100%;
  background-color: ${color.primaryLighter};
  margin-vertical: 40px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding-vertical: 13px;
  border-radius: 6px;
  overflow: hidden;
`

export const InnerText = styled(Text)`
  width: 70%;
  color: ${color.contrast};
`
