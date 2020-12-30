import styled from "styled-components/native"
import { color } from "../../theme"

export const ComponentBox = styled.View`
  width: 100%;
  height: 65px;
  flex-direction: row;
  border-top-width: 2px;
  border-color: ${color.contrast};
  position: absolute;
  flex: 1;
  bottom: 0;
`

export const ButtonBox = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;
`
