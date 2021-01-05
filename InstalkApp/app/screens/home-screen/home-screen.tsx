import React from "react"
import { Screen, HomeItem } from "../../components"
import { InstalkLogoMeduim, GearSvg } from "../../components/svg"
import { ScreenStyles, GearBox } from "./home-screen.styles"
import { SmallText } from "../../enum/styles"
import { HomeTrackSvg, HomeCompareSvg, HomeInteractionsSvg } from "../../components/svg"
import { useNavigation } from "@react-navigation/native"

export const HomeScreen = () => {
  const navigation = useNavigation()

  return (
    <Screen preset="fixed" style={ScreenStyles}>
      <InstalkLogoMeduim />
      <SmallText tx="loginScreen.blurryLogo" style={{ marginBottom: 50 }} />

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

      <GearBox onPress={() => console.log("goto parameters/profile")}>
        <GearSvg />
      </GearBox>
    </Screen>
  )
}
