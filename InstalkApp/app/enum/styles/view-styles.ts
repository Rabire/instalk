import styled from "styled-components/native"
import { Screen as ScreenComponent } from "../../components"
import { vw } from "../../utils/viewport-units"
import { ViewStyle } from "react-native"

export const StretchedAndCenteredScreen = styled(ScreenComponent)`
  align-items: center;
  justify-content: space-around;
  padding-horizontal: ${vw(17)}px;
  height: 100%;
`

export const screenStyle: ViewStyle = {
  alignItems: "center",
  marginHorizontal: vw(13),
  paddingVertical: vw(13),
}
