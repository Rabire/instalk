import React from "react"
import {} from "react-native"
import { Screen, Text, NavBar, AddTarget, TargetCard } from "../../components"
import { InstalkLogoMeduim } from "../../components/svg"
import { NavBarPlaceholder, ScrollView, InnerScrollViewBox } from "./tracks-screen.styles"

export const TracksScreen = () => {
  return (
    <Screen preset="fixed">
      <ScrollView>
        <InnerScrollViewBox>
          <InstalkLogoMeduim />

          <AddTarget />

          <TargetCard />
          <TargetCard />
          <TargetCard />
          <TargetCard />
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
