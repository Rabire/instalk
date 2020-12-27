import { Dimensions } from "react-native"

const window = Dimensions.get("window")

export const vw = (v) => Math.floor((window.width / 100) * v)
export const vh = (h) => Math.floor((window.height / 100) * h)
