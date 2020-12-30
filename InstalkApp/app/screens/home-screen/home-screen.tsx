import React from "react"
import { Screen, HomeItem, NavBar } from "../../components"
import { InstalkLogoMeduim } from "../../components/svg"
import { NavBarPlaceholder, ScreenStyles } from "./home-screen.styles"
import { HomeTrackSvg } from "../../components/svg"

export const HomeScreen = () => {
  return (
    <Screen preset="fixed" style={ScreenStyles}>
      <InstalkLogoMeduim />

      <HomeItem i18nInnerText="common.next" InnerSvg={<HomeTrackSvg />} />
      <HomeItem i18nInnerText="common.next" InnerSvg={<HomeTrackSvg />} />
      <HomeItem i18nInnerText="common.next" InnerSvg={<HomeTrackSvg />} />
      <HomeItem i18nInnerText="common.next" InnerSvg={<HomeTrackSvg />} />

      <NavBarPlaceholder />
      <NavBar activeScreen="home" />
    </Screen>
  )
}
