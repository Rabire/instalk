import * as React from "react"
import { ViewStyle } from "react-native"
import { BubbleView, Image } from "./photo-bubble.styles"
import { color } from "../../theme"

interface PhotoBubbleProps {
  customStyle?: ViewStyle
  source: string
  diameter?: number
  borderColor?: string
}

export function PhotoBubble(props: PhotoBubbleProps) {
  const { customStyle, source, diameter = 50, borderColor = color.contrast } = props

  return (
    <BubbleView borderColor={borderColor} diameter={diameter} style={customStyle}>
      {!!source && <Image diameter={diameter} source={{ uri: source }} />}
    </BubbleView>
  )
}
