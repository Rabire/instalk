import { t } from "i18n-js"
import React from "react"
import { capitalizeFirstLetter } from "../../utils/format"
import { ComponentBox, InnerText, InnerHalfBox } from "./home-item.styles"

interface HomeItemProps {
  InnerSvg: any
  i18nInnerText: string
}

export function HomeItem(props: HomeItemProps) {
  const { InnerSvg, i18nInnerText } = props

  return (
    <ComponentBox>
      <InnerHalfBox>
        <InnerText text={capitalizeFirstLetter(t(i18nInnerText))} />
      </InnerHalfBox>

      <InnerHalfBox>{InnerSvg}</InnerHalfBox>
    </ComponentBox>
  )
}
