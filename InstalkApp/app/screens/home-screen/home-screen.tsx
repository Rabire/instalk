import React from "react"
import { Screen, HomeItem, NavBar } from "../../components"
import { InstalkLogoMeduim } from "../../components/svg"
import { NavBarPlaceholder, ScreenStyles } from "./home-screen.styles"
import { HomeTrackSvg, HomeCompareSvg, HomeInteractionsSvg } from "../../components/svg"

export const HomeScreen = () => {
  return (
    <Screen preset="fixed" style={ScreenStyles}>
      <InstalkLogoMeduim />

      <HomeItem i18nInnerText="common.next" InnerSvg={<HomeTrackSvg />} />
      <HomeItem i18nInnerText="common.next" InnerSvg={<HomeCompareSvg />} />
      <HomeItem i18nInnerText="common.next" InnerSvg={<HomeInteractionsSvg />} />

      <NavBarPlaceholder />
      <NavBar activeScreen="home" />
    </Screen>
  )
}
