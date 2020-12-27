import styled from "styled-components/native"
import { Text } from "../../components"
import { color, typography } from "../../theme"

export const SmallText = styled(Text)`
  color: ${color.contrast};
  font-family: ${typography.primary};
  font-size: 12px;
  text-align: center;
`
