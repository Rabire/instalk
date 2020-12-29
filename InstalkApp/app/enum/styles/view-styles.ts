import styled from "styled-components/native"
import { Screen as ScreenComponent } from "../../components"
import { vw } from "../../utils/viewport-units"

export const StretchedAndCenteredScreen = styled(ScreenComponent)`
  align-items: center;
  justify-content: space-around;
  padding: ${vw(17)}px;
`
