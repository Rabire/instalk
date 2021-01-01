import * as React from "react"
import { View } from "react-native"
import { ComponentBox, PrimaryText, SecondaryText } from "./target-card.styles"
import { Text } from "../"
import { TrackObject } from "../../utils/types"
import moment from "moment"

interface TargetCardProps {
  track: TrackObject
}

export function TargetCard(props: TargetCardProps) {
  const { track } = props

  const diffInDays = moment().diff(track.createdAt, "days")
  const dateLabel = `tracké(e) depuis ${diffInDays} jours`

  return (
    <ComponentBox>
      <View>
        <PrimaryText text={track.target.fullname} />
        <SecondaryText text={track.target.username} />
        <SecondaryText text={dateLabel} />
      </View>

      <Text text="IMG" />
    </ComponentBox>
  )
}
