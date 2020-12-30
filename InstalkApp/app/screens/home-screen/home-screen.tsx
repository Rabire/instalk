import React from "react"
import { Screen, Text, NavBar } from "../../components"
import { InstalkLogoMeduim } from "../../components/svg"
import { LogoBox, ButtonsBox } from "./home-screen.styles"

export const HomeScreen = () => {
  return (
    <Screen preset="fixed" style={{ alignItems: "center" }}>
      <LogoBox>
        <InstalkLogoMeduim />
      </LogoBox>

      <ButtonsBox>
        <Text text="lkjsfdhf" />
        <Text text="lkjsfdhf" />
        <Text text="lkjsfdhf" />
        <Text text="lkjsfdhf" />
      </ButtonsBox>

      <NavBar activeScreen="home" />
    </Screen>
  )
}
