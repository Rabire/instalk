import * as React from "react"
import { storiesOf } from "@storybook/react-native"
import { StoryScreen, Story, UseCase } from "../../../storybook/views"
import { Button } from "./button"

storiesOf("Button", module)
  .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
  .add("Style Presets", () => (
    <Story>
      <UseCase text="Some buttons">
        <Button tx="common.cancel" onPress={() => null} />
        <Button tx="common.cancel" onPress={() => null} />
        <Button tx="common.cancel" onPress={() => null} />
      </UseCase>
    </Story>
  ))
