import React from "react"
import { Screen, HomeItem } from "../../components"
import { InstalkLogoMeduim } from "../../components/svg"
import { ScreenStyles } from "./home-screen.styles"
import { HomeTrackSvg, HomeCompareSvg, HomeInteractionsSvg } from "../../components/svg"
import { useNavigation } from "@react-navigation/native"

export const HomeScreen = () => {
  const navigation = useNavigation()

  return (
    <Screen preset="fixed" style={ScreenStyles}>
      <InstalkLogoMeduim customStyles={{ marginBottom: 80 }} />

      <HomeItem
        i18nInnerText="tracksScreen.sectionName"
        InnerSvg={<HomeTrackSvg />}
        onPress={() => navigation.navigate("tracks")}
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
    </Screen>
  )
}
