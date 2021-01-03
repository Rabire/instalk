import React, { useEffect, useState } from "react"
import { Api } from "../../services/api"
import { LoadingWheel, Screen, NavBar } from "../../components"
import { InstalkLogoMeduim } from "../../components/svg"
import {
  NavBarPlaceholder,
  ScrollView,
  InnerScrollViewBox,
  DateText,
  FollowUnfollowText,
  RedText,
  GreenText,
} from "./target-data-screen.styles"
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
          setTargetProfile(response.data.target)
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
  } else {
    // come back later, not inof exports
  }

  return (
    <Screen preset="fixed">
      <ScrollView>
        <InnerScrollViewBox>
          <InstalkLogoMeduim customStyles={{ marginBottom: 30 }} />

          <LoadingWheel isVisible={isLoading} />

          {comparisonArray.map((comparison) => {
            return (
              <>
                <DateText text={comparison.start} />

                {comparison.missingFollowers.map((follower) => (
                  <FollowUnfollowText key={follower}>
                    <RedText>{follower}</RedText> s’est désabonné à @{targetProfile.username}
                  </FollowUnfollowText>
                ))}

                {comparison.newFollowers.map((follower) => (
                  <FollowUnfollowText key={follower}>
                    <GreenText>{follower}</GreenText> s’est abonné à @{targetProfile.username}
                  </FollowUnfollowText>
                ))}
              </>
            )
          })}

          <NavBarPlaceholder />
        </InnerScrollViewBox>
      </ScrollView>

      <NavBar activeScreen="home" />
    </Screen>
  )
}
