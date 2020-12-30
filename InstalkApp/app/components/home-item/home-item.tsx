import * as React from "react"
import { ComponentBox, InnerText, InnerHalfBox } from "./home-item.styles"

interface HomeItemProps {}

export function HomeItem(props: HomeItemProps) {
  const {} = props

  return (
    <ComponentBox>
      <InnerHalfBox>
        <InnerText>Utilisateurs trackés</InnerText>
      </InnerHalfBox>
      <InnerHalfBox>
        <InnerText>SVG</InnerText>
      </InnerHalfBox>
    </ComponentBox>
  )
}
