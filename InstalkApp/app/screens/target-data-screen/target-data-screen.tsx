import React, { useEffect, useState } from "react"
import { Api } from "../../services/api"
import { LoadingWheel, Screen, Text } from "../../components"

interface TargetDataScreenProps {
  route: { params: { targetId: number } }
}

export const TargetDataScreen = (props: TargetDataScreenProps) => {
  const { route }: TargetDataScreenProps = props

  const [isLoading, setIsLoading] = useState(false)
  const [targetProfile, setTargetProfile] = useState(null)
  const [targetDatas, setTargetDatas] = useState([])

  const targetId = route?.params ? route.params.targetId : null

  const instalkApi = new Api()

  useEffect(() => {
    setIsLoading(true)

    instalkApi
      .getTargetDataById(targetId)
      .then((response) => {
        if (response.data) {
          setTargetDatas(response.data.target)
          setTargetDatas(response.data.targetDatas)
        } else {
          // setI18nError("errors.basicError")
        }
      })
      .catch(() => {
        // setI18nError("errors.basicError")
      })
      .finally(() => setIsLoading(false))
  }, [])

  return (
    <Screen preset="scroll">
      <Text text="targetDataScreen" />
      <LoadingWheel isVisible={isLoading} />
    </Screen>
  )
}
