import { palette } from "./palette"

export const color = {
  palette,

  transparent: "rgba(0, 0, 0, 0)",
  background: palette.blackRussian,
  contrast: palette.white,

  primary: palette.blackRussian,
  primaryLighter: palette.vulcan,

  secondary: palette.summerSky,
  tertiary: palette.heliotrope,

  refused: palette.pastelRed,
  accepted: palette.pastelGreen,

  error: palette.angry,

  line: palette.offWhite,
  text: palette.white,
  defaultText: palette.greenYellow,
  dim: palette.lightGrey,

  storybookDarkBg: palette.black,
  storybookTextColor: palette.black,
}
