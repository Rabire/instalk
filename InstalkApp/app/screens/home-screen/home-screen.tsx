import React from "react"
import { Screen, Text } from "../../components"
import { UserStore } from "../../models"

export const HomeScreen = () => {
  console.log({ UserStore })
  return (
    <Screen preset="scroll">
      <Text text="homeScreen" />
    </Screen>
  )
}
