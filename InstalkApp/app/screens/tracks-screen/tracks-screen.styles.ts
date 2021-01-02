import styled from "styled-components/native"
import { vw } from "../../utils/viewport-units"

export const NavBarPlaceholder = styled.View`
  height: 65px;
  margin-top: ${vw(17)}px;
  background-color: red;
`

export const ScrollView = styled.ScrollView`
  flex: 1;
  width: 100%;
  padding: ${vw(17)}px;
  margin-bottom: 65px;
`

export const InnerScrollViewBox = styled.View`
  align-items: center;
  flex: 1;
`
