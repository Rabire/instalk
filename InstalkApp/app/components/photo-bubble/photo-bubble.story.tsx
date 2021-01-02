import * as React from "react"
import { storiesOf } from "@storybook/react-native"
import { StoryScreen, Story, UseCase } from "../../../storybook/views"
import { PhotoBubble } from "./photo-bubble"

storiesOf("PhotoBubble", module)
  .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
  .add("Style Presets", () => (
    <Story>
      <UseCase text="PhotoBubble">
        <PhotoBubble />
      </UseCase>
    </Story>
  ))
