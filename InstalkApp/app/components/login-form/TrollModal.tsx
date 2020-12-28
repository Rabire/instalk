import React from "react"
import { Modal, TouchableOpacity } from "react-native"
import { ModalImage } from "./login-form.styles"

interface TrollModalProps {
  isModalVisible: boolean
  setIsModalVisible: Function
}

export const TrollModal = (props: TrollModalProps) => {
  const { isModalVisible, setIsModalVisible } = props

  return (
    <Modal transparent visible={isModalVisible} animationType="slide">
      <TouchableOpacity onPress={() => setIsModalVisible(false)}>
        <ModalImage source={require("./seum.jpg")} />
      </TouchableOpacity>
    </Modal>
  )
}
