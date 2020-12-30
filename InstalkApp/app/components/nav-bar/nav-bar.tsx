import * as React from "react"
import { Linking } from "react-native"
import { ComponentBox, ButtonBox } from "./nav-bar.styles"
import { InstagramNavbarSvg, HomeNavbarSvg, ProfileNavbarSvg } from "../../components/svg"

interface NavBarProps {
  activeScreen: "home" | "profile"
}

export function NavBar(props: NavBarProps) {
  const { activeScreen } = props

  return (
    <ComponentBox>
      <ButtonBox onPress={() => Linking.openURL("instagram://user?username=aroufgangsta91o")}>
        <InstagramNavbarSvg />
      </ButtonBox>
      <ButtonBox>
        <HomeNavbarSvg />
      </ButtonBox>
      <ButtonBox>
        <ProfileNavbarSvg />
      </ButtonBox>
    </ComponentBox>
  )
}
