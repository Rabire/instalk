import React from "react"
import { Screen, Text, NavBar } from "../../components"
import { InstalkLogoMeduim } from "../../components/svg"
import { StretchedAndCenteredScreen } from "../../enum/styles"

export const HomeScreen = () => {
  return (
    <Screen preset="fixed">
      <InstalkLogoMeduim />
      <NavBar />
    </Screen>
  )
}
