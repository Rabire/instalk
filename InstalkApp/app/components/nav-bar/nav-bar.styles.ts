import styled from "styled-components/native"
import { color } from "../../theme"

export const ComponentBox = styled.View`
  background-color: red;
  width: 100%;
  height: 65px;
  flex-direction: row;
  justify-content: space-between;
  border-top-width: 2px;
  border-color: ${color.contrast};
  position: absolute
  bottom: 0
`

export const ButtonBox = styled.TouchableOpacity`
  flex: 1;
  background-color: green;
  align-items: center;
  justify-content: center;
`
