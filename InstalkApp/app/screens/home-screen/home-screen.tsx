import React from "react"
import { Screen, HomeItem, NavBar } from "../../components"
import { InstalkLogoMeduim } from "../../components/svg"
import { NavBarPlaceholder } from "./home-screen.styles"

export const HomeScreen = () => {
  return (
    <Screen preset="fixed" style={{ alignItems: "center", justifyContent: "space-around" }}>
      <InstalkLogoMeduim />

      <HomeItem />
      <HomeItem />
      <HomeItem />
      <HomeItem />

      <NavBarPlaceholder />
      <NavBar activeScreen="home" />
    </Screen>
  )
}
