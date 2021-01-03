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
  ContentBox,
} from "./target-data-screen.styles"
import { color } from "../../theme"
import { SmallText } from "../../enum/styles"
import { getNewAndMissing } from "../../utils/stats"
import moment from "moment"

interface TargetDataScreenProps {
  route: { params: { targetId: number } }
}

export const TargetDataScreen = (props: TargetDataScreenProps) => {
  const { route }: TargetDataScreenProps = props

  const [isLoading, setIsLoading] = useState(false)
  const [targetProfile, setTargetProfile] = useState(null)
  const [targetDatas, setTargetDatas] = useState([])
  const [i18nError, setI18nError] = useState(null)
  const [comparisonArray, setComparisonArray] = useState([])

  const targetId = route?.params ? route.params.targetId : null

  const instalkApi = new Api()

  // console.log({ targetProfile })

  useEffect(() => {
    console.log("useEffect")

    setIsLoading(true)

    instalkApi
      .getTargetDataById(targetId)
      .then((response) => {
        if (response.data) {
          setTargetProfile(response.data.target)
          setTargetDatas(response.data.targetDatas)
        } else {
          setI18nError("errors.basicError")
        }
      })
      .catch(() => {
        setI18nError("errors.basicError")
      })
      .finally(() => setIsLoading(false))
  }, [])

  useEffect(() => {
    if (targetDatas.length >= 2) {
      console.log("IFFFFFFFFFF")
      const _comparisonArray = []
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

        _comparisonArray.push(comparison)
        setComparisonArray([..._comparisonArray])

        console.log({ _comparisonArray })
        console.log({ comparisonArray })
      }
    }
  }, [targetDatas])

  return (
    <Screen preset="fixed">
      <ScrollView>
        <InnerScrollViewBox>
          <InstalkLogoMeduim customStyles={{ marginBottom: 30 }} />

          <LoadingWheel isVisible={isLoading} />
          {i18nError && <SmallText tx={i18nError} style={{ color: color.error }} />}

          {targetDatas.length < 2 && !isLoading && !i18nError && (
            <SmallText tx="tracksScreen.notEnoughData" style={{ color: color.dim }} />
          )}

          {comparisonArray.map((comparison) => (
            <ContentBox key={comparison.start}>
              <DateText text={`${moment(comparison.start).format("L")}`} />

              {comparison.missingFollowers.map((follower) => (
                <FollowUnfollowText key={follower}>
                  <RedText text={follower} /> s’est désabonné à @{targetProfile.username}
                </FollowUnfollowText>
              ))}

              {comparison.newFollowers.map((follower) => (
                <FollowUnfollowText key={follower}>
                  <GreenText text={follower} /> s’est abonné à @{targetProfile.username}
                </FollowUnfollowText>
              ))}

              {comparison.missingFollowing.map((follower) => (
                <FollowUnfollowText key={follower}>
                  @{targetProfile.username} a arrêter de suivre <RedText text={follower} />
                </FollowUnfollowText>
              ))}

              {comparison.newFollowing.map((follower) => (
                <FollowUnfollowText key={follower}>
                  @{targetProfile.username} a commencer à suivre <GreenText text={follower} />
                </FollowUnfollowText>
              ))}
            </ContentBox>
          ))}

          <NavBarPlaceholder />
        </InnerScrollViewBox>
      </ScrollView>

      <NavBar activeScreen="home" />
    </Screen>
  )
}