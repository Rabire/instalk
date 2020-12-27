import styled from "styled-components/native"
import { Screen as ScreenComponent } from "../../components"

export const Screen = styled(ScreenComponent)`
  align-items: center;
  justify-content: space-around;
`

export const ButtonBox = styled.View`
  width: 100%;
  align-items: center;
  position: ${(props) => (props.isKeyboardVisible ? "absolute" : "relative")};
  bottom: ${(props) => (props.isKeyboardVisible ? 15 : 0)}px;
`
