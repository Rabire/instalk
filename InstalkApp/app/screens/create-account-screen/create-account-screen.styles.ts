import styled from "styled-components/native"
import { vw } from "../../utils/viewport-units"

export const ButtonBox = styled.View`
  width: 100%;
  align-items: center;
`

export const ScrollView = styled.ScrollView`
  width: 100%;
`

export const LogoBox = styled.View`
  padding-top: ${vw(17)}px;
`

export const BellowButtonTextCustomStyles = {
  marginTop: 10,
  paddingBottom: vw(17),
}
