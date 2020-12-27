import { Platform } from "react-native"

export const typography = {
  primary: Platform.select({ ios: "Saira-Regular", android: "Saira-Regular" }),
  primaryBold: Platform.select({ ios: "Saira-Bold", android: "Saira-Bold" }),
  secondary: Platform.select({ ios: "Arial", android: "sans-serif" }),

  default: Platform.select({ ios: "Courier", android: "monospace" }),
}
