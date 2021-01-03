import React, { useEffect, useState } from "react"
import {} from "react-native"
import { Screen, NavBar, AddTarget, TargetCard, LoadingWheel } from "../../components"
import { InstalkLogoMeduim } from "../../components/svg"
import { NavBarPlaceholder, ScrollView, InnerScrollViewBox } from "./tracks-screen.styles"
import { Api } from "../../services/api"
import { SmallText } from "../../enum/styles"
import { color } from "../../theme"

export const TracksScreen = () => {
  const [trackedUsers, setTrackedUsers] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [i18nError, setI18nError] = useState(null)

  const instalkApi = new Api()

  useEffect(() => {
    setIsLoading(true)

    instalkApi
      .getMyTracks()
      .then((data) => {
        if (data.targets) {
          setTrackedUsers(data.targets)
        } else {
          setI18nError("errors.basicError")
        }
      })
      .catch(() => setI18nError("errors.basicError"))
      .finally(() => setIsLoading(false))
  }, [])

  return (
    <Screen preset="fixed">
      <ScrollView>
        <InnerScrollViewBox>
          <InstalkLogoMeduim />

          <AddTarget />

          <LoadingWheel isVisible={isLoading} />

          {i18nError && <SmallText tx={i18nError} style={{ color: color.error }} />}

          {trackedUsers.length > 0
            ? trackedUsers.map((track, index) => {
                return (
                  <TargetCard
                    key={track.id}
                    track={track}
                    type={index % 2 ? "secondary" : "primary"}
                  />
                )
              })
            : !isLoading &&
              !i18nError && (
                <SmallText tx="tracksScreen.anyTracks" style={{ color: color.contrast }} />
              )}

          <NavBarPlaceholder />
        </InnerScrollViewBox>
      </ScrollView>

      <NavBar activeScreen="home" />
    </Screen>
  )
}
