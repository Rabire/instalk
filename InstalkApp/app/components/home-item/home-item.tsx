import { t } from "i18n-js"
import React from "react"
import { capitalizeFirstLetter } from "../../utils/format"
import { ComponentBox, InnerText, InnerHalfBox } from "./home-item.styles"

interface HomeItemProps {
  type?: "primary" | "secondary"
  InnerSvg: any
  i18nInnerText: string
  onPress: Function
}

export function HomeItem(props: HomeItemProps) {
  const { InnerSvg, i18nInnerText, type = "primary", onPress } = props

  const isPrimaryType = type === "primary"

  return (
    <ComponentBox isPrimaryType={isPrimaryType} onPress={onPress}>
      <InnerHalfBox>
        {isPrimaryType ? InnerSvg : <InnerText text={capitalizeFirstLetter(t(i18nInnerText))} />}
      </InnerHalfBox>

      <InnerHalfBox>
        {isPrimaryType ? <InnerText text={capitalizeFirstLetter(t(i18nInnerText))} /> : InnerSvg}
      </InnerHalfBox>
    </ComponentBox>
  )
}
