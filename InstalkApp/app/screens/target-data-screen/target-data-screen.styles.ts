import styled from "styled-components/native"
import { vw } from "../../utils/viewport-units"
import { Text } from "../../components"
import { color, typography } from "../../theme"
import { ViewStyle } from "react-native"

export const screenStyle: ViewStyle = {
  alignItems: "center",
  paddingVertical: vw(13),
}

export const ContentBox = styled.View`
  width: 100%;
`

export const DateText = styled(Text)`
  background-color: ${color.primaryLighter};
  width: 100%;
  text-align: center;
  padding: 8px;
  color: ${color.tertiary};
  font-family: ${typography.primary};
  font-size: 14px;
  margin-vertical: 13px;
`

const commonText = `padding-horizontal: ${vw(10)}px;
width: 100%;
color: ${color.contrast};
font-family: ${typography.primary};
font-size: 14px;
margin-vertical: 3px;
`

export const FollowUnfollowText = styled(Text)`
  ${commonText}
`

export const RedText = styled(Text)`
  ${commonText}
  color: ${color.refused};
`

export const GreenText = styled(Text)`
  ${commonText}
  color: ${color.accepted}; ;
`

export const TargetDataBox = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`

export const TargetTextBox = styled.View`
  align-items: center;
  margin-left: 30px;
`
