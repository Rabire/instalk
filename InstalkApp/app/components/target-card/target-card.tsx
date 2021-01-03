import * as React from "react"
import { View } from "react-native"
import { ComponentBox, PrimaryText, SecondaryText } from "./target-card.styles"
import { PhotoBubble } from "../"
import { TrackObject } from "../../utils/types"
import moment from "moment"
import { useNavigation } from "@react-navigation/native"

interface TargetCardProps {
  track: TrackObject
  type?: "primary" | "secondary"
}

export function TargetCard(props: TargetCardProps) {
  const { track, type = "primary" } = props

  const diffInDays = moment().diff(track.createdAt, "days")
  const dateLabel = `Tracké(e) depuis ${diffInDays} jours`

  const isPrimaryType = type === "primary"

  const textHalf = (
    <View>
      <PrimaryText text={track.target.fullname} />
      <SecondaryText text={track.target.username} />
      <SecondaryText text={dateLabel} />
    </View>
  )

  const imageHalf = <PhotoBubble source={track.target.pictureUrl} diameter={75} />

  const navigation = useNavigation()

  const goToProfile = () =>
    navigation.navigate("targetData", {
      targetId: track.target.id,
    })

  return (
    <ComponentBox isPrimaryType={isPrimaryType} onPress={goToProfile}>
      {isPrimaryType ? textHalf : imageHalf}
      {isPrimaryType ? imageHalf : textHalf}
    </ComponentBox>
  )
}
