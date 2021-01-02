import * as React from "react"
import { View } from "react-native"
import { ComponentBox, PrimaryText, SecondaryText } from "./target-card.styles"
import { PhotoBubble } from "../"
import { TrackObject } from "../../utils/types"
import moment from "moment"

interface TargetCardProps {
  track: TrackObject
}

export function TargetCard(props: TargetCardProps) {
  const { track } = props

  const diffInDays = moment().diff(track.createdAt, "days")
  const dateLabel = `Tracké(e) depuis ${diffInDays} jours`

  return (
    <ComponentBox onPress={() => console.log(`go to taret activity ${track.target.id}`)}>
      <View>
        <PrimaryText text={track.target.fullname} />
        <SecondaryText text={track.target.username} />
        <SecondaryText text={dateLabel} />
      </View>

      <PhotoBubble source={track.target.pictureUrl} diameter={75} />
    </ComponentBox>
  )
}
