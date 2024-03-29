import React, { MutableRefObject, useState } from "react"
import { TextInput as RNTextInput } from "react-native"
import { ComponentContainer, TextInput, SizeText } from "./text-field.styles"
import { SmallText } from "../../enum/styles"
import { translate } from "../../i18n"
import { capitalizeFirstLetter } from "../../utils/format"
import { color } from "../../theme"

interface TextFieldProps {
  setField: Function
  i18nPlaceholder?: string
  isRequired?: boolean
  isErrorDisplayed?: boolean
  i18nSubText?: string
  onSubmitEditing?: Function
  isTextHidden?: boolean
  setRef?: Function
  ref?: MutableRefObject<RNTextInput>
  keyboardType?: string
  isSizeField?: boolean
}

export function TextField(props: TextFieldProps) {
  const {
    setField,
    i18nPlaceholder,
    isRequired = false,
    isErrorDisplayed = false,
    i18nSubText,
    onSubmitEditing,
    isTextHidden = false,
    ref,
    setRef = () => null,
    keyboardType = "default",
    isSizeField = false,
  } = props

  const [text, setText] = useState("")

  const handleTextChange = (txt) => {
    setField(txt)
    setText(txt)
  }

  let label = capitalizeFirstLetter(translate(i18nPlaceholder))
  if (isRequired) label += "*"

  const fieldColor = isErrorDisplayed ? color.error : color.contrast

  return (
    <ComponentContainer>
      <SmallText text={!!text ? label : ""} style={{ textAlign: "left", marginBottom: -7 }} />
      <TextInput
        ref={ref ? ref : (input) => setRef(input)}
        onChangeText={handleTextChange}
        placeholder={label}
        placeholderTextColor={fieldColor}
        fieldColor={fieldColor}
        onSubmitEditing={onSubmitEditing}
        secureTextEntry={isTextHidden}
        keyboardType={keyboardType}
      />
      {isSizeField && !!text && <SizeText text="cm" leftSpace={text.length * 11} />}

      {i18nSubText && <SmallText tx={i18nSubText} style={{ textAlign: "left" }} />}
    </ComponentContainer>
  )
}
