import React, { useEffect, useState } from "react"
import { Api } from "../../services/api"
import { LoadingWheel, Screen, Text } from "../../components"
import { getNewAndMissing } from "../../utils/stats"

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

  console.log("----------------")

  const comparisonArray = []

  if (targetDatas.length >= 2) {
    // can do some stats
    for (let i = 1; i < targetDatas.length; i++) {
      const previousDataIndex = targetDatas.length - i - 1
      const recentDataIndex = targetDatas.length - i

      const followers = getNewAndMissing(
        targetDatas[previousDataIndex].followers,
        targetDatas[recentDataIndex].followers,
      )

      const following = getNewAndMissing(
        targetDatas[targetDatas.length - i - 1].following,
        targetDatas[targetDatas.length - i].following,
      )

      const comparison = {
        start: targetDatas[previousDataIndex].createdAt,
        end: targetDatas[recentDataIndex].createdAt,
        newFollowers: followers.new,
        missingFollowers: followers.missing,
        newFollowing: following.new,
        missingFollowing: following.missing,
      }

      comparisonArray.push(comparison)
    }

    console.log(comparisonArray)
  } else {
    // come back later, not inof exports
  }

  return (
    <Screen preset="scroll">
      <Text text="targetDataScreen" />
      <LoadingWheel isVisible={isLoading} />
    </Screen>
  )
}
