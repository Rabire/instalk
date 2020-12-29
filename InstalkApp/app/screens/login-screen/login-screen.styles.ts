import styled from "styled-components/native"

export const ButtonBox = styled.View`
  width: 100%;
  align-items: center;
  position: ${(props) => (props.isKeyboardVisible ? "absolute" : "relative")};
  bottom: ${(props) => (props.isKeyboardVisible ? 15 : 0)}px;
`

export const LogoBox = styled.View`
  width: 100%;
`
