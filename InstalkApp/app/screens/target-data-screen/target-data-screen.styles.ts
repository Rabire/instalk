import styled from "styled-components/native"
import { vw } from "../../utils/viewport-units"
import { Text } from "../../components"
import { color, typography } from "../../theme"

export const NavBarPlaceholder = styled.View`
  height: 65px;
  margin-top: ${vw(17)}px;
  background-color: red;
`

export const ScrollView = styled.ScrollView`
  flex: 1;
  width: 100%;
  padding-vertical: ${vw(17)}px;
  margin-bottom: 65px;
`

export const ContentBox = styled.View`
  width: 100%;
`

export const InnerScrollViewBox = styled.View`
  align-items: center;
  flex: 1;
`

export const DateText = styled(Text)`
  background-color: ${color.primaryLighter};
  width: 100%;
  text-align: center;
  padding: 8px;
  color: ${color.tertiary};
  font-family: ${typography.primary};
  font-size: 12px;
  margin-vertical: 13px;
`

const commonText = `padding-horizontal: ${vw(10)}px;
width: 100%;
color: ${color.contrast};
font-family: ${typography.primary};
font-size: 12px;
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
