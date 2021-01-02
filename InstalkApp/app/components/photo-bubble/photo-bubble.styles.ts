import styled from "styled-components/native"
import { color } from "../../theme"

export const BubbleView = styled.View`
  border-radius: ${(props) => Math.floor(props.diameter * 0.5)}px;
  overflow: hidden;
  height: ${(props) => props.diameter}px;
  width: ${(props) => props.diameter}px;
  border-color: ${(props) => props.borderColor};
  border-width: 2px;
  background-color: ${color.dim};
`

export const Image = styled.Image`
  flex: 1;
  border-radius: 100px;
  overflow: hidden;
  width: ${(props) => props.diameter - 4}px;
  resize-mode: cover;
`
