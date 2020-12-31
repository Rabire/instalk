import React from "react"
import { Screen, HomeItem, NavBar } from "../../components"
import { InstalkLogoMeduim } from "../../components/svg"
import { NavBarPlaceholder, ScreenStyles } from "./home-screen.styles"
import { HomeTrackSvg, HomeCompareSvg, HomeInteractionsSvg } from "../../components/svg"

export const HomeScreen = () => {
  return (
    <Screen preset="fixed" style={ScreenStyles}>
      <InstalkLogoMeduim />

      <HomeItem
        i18nInnerText="common.next"
        InnerSvg={<HomeTrackSvg />}
        onPress={() => console.log("Utilisateurs trackés")}
      />
      <HomeItem
        i18nInnerText="common.next"
        InnerSvg={<HomeCompareSvg />}
        onPress={() => console.log("Comparer des utilisateurs")}
        type="secondary"
      />
      <HomeItem
        i18nInnerText="common.next"
        InnerSvg={<HomeInteractionsSvg />}
        onPress={() => console.log("Interactions")}
      />

      <NavBarPlaceholder />
      <NavBar activeScreen="home" />
    </Screen>
  )
}
