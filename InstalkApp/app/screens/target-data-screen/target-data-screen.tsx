import React from "react"
import { Screen, Text } from "../../components"

interface TargetDataScreenProps {
  route: { params: { targetId: number } }
}

export const TargetDataScreen = (props: TargetDataScreenProps) => {
  const { route }: TargetDataScreenProps = props

  const targetId = route?.params ? route.params.targetId : null

  console.log({ targetId })

  return (
    <Screen preset="scroll">
      <Text text="targetDataScreen" />
    </Screen>
  )
}
