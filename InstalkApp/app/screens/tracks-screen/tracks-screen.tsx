import React from "react"
import {} from "react-native"
import { Screen, Text, NavBar } from "../../components"
import { InstalkLogoMeduim } from "../../components/svg"
import { NavBarPlaceholder, ScrollView, InnerScrollViewBox } from "./tracks-screen.styles"
import { vw } from "../../utils/viewport-units"

export const TracksScreen = () => {
  return (
    <Screen preset="fixed">
      <ScrollView>
        <InnerScrollViewBox>
          <InstalkLogoMeduim customStyles={{ marginBottom: vw(17) }} />

          <Text text="zbi" />
          <Text text="zbi" />
          <Text text="zbi" />
          <Text text="zbi" />
          <Text text="zbi" />
          <Text text="zbi" />
          <Text text="zbi" />
          <Text text="zbi" />
          <Text text="zbi" />
          <Text text="zbi" />
          <Text text="zbi" />
          <Text text="zbi" />
          <Text text="zbi" />
          <Text text="zbi" />
          <Text text="zbi" />
          <Text text="zbi" />
          <Text text="zbi" />
          <Text text="zbi" />
          <Text text="zbi" />
          <Text text="zbi" />
          <Text text="zbi" />
          <Text text="zbi" />
          <Text text="zbi" />
          <Text text="zbi" />
          <Text text="zbi" />
          <Text text="zbi" />

          <Text text="zbi" />
          <Text text="zbi" />
          <Text text="zbi" />
          <Text text="zbi" />
          <Text text="zbi" />
          <Text text="zbi" />
          <Text text="zbi" />
          <Text text="zbi" />
          <Text text="zbi" />
          <Text text="zbi" />

          <Text text="zbi" />
          <Text text="zbi" />
          <Text text="zbi" />
          <Text text="zb0" />

          <NavBarPlaceholder />
        </InnerScrollViewBox>
      </ScrollView>

      <NavBar activeScreen="home" />
    </Screen>
  )
}
