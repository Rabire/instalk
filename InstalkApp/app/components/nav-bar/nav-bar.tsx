import * as React from "react"
import { Linking } from "react-native"
import { ComponentBox, ButtonBox } from "./nav-bar.styles"
import { InstagramNavbarSvg, HomeNavbarSvg, ProfileNavbarSvg } from "../../components/svg"
import { useNavigation } from "@react-navigation/native"

interface NavBarProps {
  activeScreen: "home" | "profile"
}

export function NavBar(props: NavBarProps) {
  const { activeScreen } = props

  const navigation = useNavigation()

  const openInstagram = () => Linking.openURL("instagram://user?username=juldetp")
  const goToHome = () => console.log('navigation.navigate("home")')
  const goToProfile = () => console.log('navigation.navigate("profile")')

  return (
    <ComponentBox>
      <ButtonBox onPress={openInstagram}>
        <InstagramNavbarSvg />
      </ButtonBox>
      <ButtonBox onPress={goToHome}>
        <HomeNavbarSvg isActive={activeScreen === "home"} />
      </ButtonBox>
      <ButtonBox onPress={goToProfile}>
        <ProfileNavbarSvg isActive={activeScreen === "profile"} />
      </ButtonBox>
    </ComponentBox>
  )
}
