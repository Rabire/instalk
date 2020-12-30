import React from "react"
import Svg, { Path } from "react-native-svg"
import { color } from "../../theme"

interface HomeNavbarSvgProps {
  isActive?: boolean
}

export const HomeNavbarSvg = (props: HomeNavbarSvgProps) => {
  const { isActive = false } = props

  return (
    <Svg width="36" height="33" fill="none" viewBox="0 0 36 33">
      <Path
        fill={isActive ? color.secondary : color.contrast}
        d="M34.25 19.288c-.325 0-.65-.128-.91-.384L17.935 3.8 2.66 18.776a1.27 1.27 0 01-1.82 0c-.52-.512-.52-1.28 0-1.792L17.025 1.048a1.27 1.27 0 011.82 0L35.16 17.112c.52.512.52 1.28 0 1.792-.26.256-.585.384-.91.384z"
      ></Path>
      <Path
        fill={isActive ? color.secondary : color.contrast}
        d="M31.26 32.536h-9.165c-.715 0-1.3-.576-1.3-1.28v-5.312h-5.46v5.312c0 .704-.585 1.28-1.3 1.28H4.61c-.715 0-1.3-.576-1.3-1.28V15.448h2.6v14.464h6.825V24.6c0-.704.585-1.28 1.3-1.28h8.06c.715 0 1.3.576 1.3 1.28v5.312h6.565V15.448h2.6v15.744c0 .768-.585 1.344-1.3 1.344zM32.56 14.68h-2.6V6.616h-3.055v2.496h-2.6V5.336c0-.704.585-1.28 1.3-1.28h5.655c.715 0 1.3.576 1.3 1.28v9.344z"
      ></Path>
    </Svg>
  )
}
