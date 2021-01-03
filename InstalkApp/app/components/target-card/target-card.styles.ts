import styled from "styled-components/native"
import { Text } from "../../components"
import { color, typography } from "../../theme"

export const ComponentBox = styled.TouchableOpacity`
  background-color: ${(props) => (props.isPrimaryType ? color.secondary : color.tertiary)};
  margin-vertical: 15px;
  flex-direction: row;
  width: 100%;
  padding: 15px;
  justify-content: space-around;
  align-items: center;
  border-radius: 25px;
  overflow: hidden;
`

export const PrimaryText = styled(Text)`
  color: ${color.contrast};
  font-family: ${typography.primaryBold};
  font-size: 18px;
  text-align: center;
`

export const SecondaryText = styled(Text)`
  color: ${color.contrast};
  font-family: ${typography.primary};
  font-size: 12px;
  text-align: center;
`
