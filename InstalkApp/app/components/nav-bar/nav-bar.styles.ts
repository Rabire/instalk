import styled from "styled-components/native"
import { color } from "../../theme"

export const ComponentBox = styled.View`
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
  align-items: center;
  justify-content: center;
`
