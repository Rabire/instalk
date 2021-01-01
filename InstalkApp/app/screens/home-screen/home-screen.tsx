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
        i18nInnerText="tracksScreen.sectionName"
        InnerSvg={<HomeTrackSvg />}
        onPress={() => console.log("Utilisateurs trackés")}
      />
      <HomeItem
        i18nInnerText="compareScreen.sectionName"
        InnerSvg={<HomeCompareSvg />}
        onPress={() => console.log("Comparer des utilisateurs")}
        type="secondary"
      />
      <HomeItem
        i18nInnerText="interactionScreen.sectionName"
        InnerSvg={<HomeInteractionsSvg />}
        onPress={() => console.log("Interactions")}
      />

      <NavBarPlaceholder />
      <NavBar activeScreen="home" />
    </Screen>
  )
}
