import React from "react"
import {} from "react-native"
import { Screen, Text, NavBar, AddTarget, TargetCard } from "../../components"
import { InstalkLogoMeduim } from "../../components/svg"
import { NavBarPlaceholder, ScrollView, InnerScrollViewBox } from "./tracks-screen.styles"

const mockTracks = [
  {
    id: 1,
    stalkerId: 1,
    targetId: 1,
    createdAt: "2020-12-26T19:02:20.000Z",
    updatedAt: "2020-12-26T19:02:20.000Z",
    stalker: {
      id: 1,
      username: "superadmin",
      email: "rabireh69@gmail.com",
      password: "$2b$10$pz/sbDny9N8gHI/96aTt/eijuu1TsoFHd598KT5Kjuhk4Ap9Fe/8m",
      gender: null,
      penisSize: 50,
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTYwOTU0Mjg5OX0.AkTG9tGfWFezkcAfe0JqMHQSGB3URx7IICOU4IPSKhE",
      tokenExpiration: "2021-01-02T23:14:59.000Z",
      createdAt: "2020-12-26T19:02:20.000Z",
      updatedAt: "2021-01-01T23:14:59.000Z",
    },
    target: {
      id: 1,
      instagramId: "2621480436",
      username: "rabire_",
      fullname: "Rabire",
      pictureUrl:
        "https://scontent-cdt1-1.cdninstagram.com/v/t51.2885-19/s320x320/120454079_343851196725862_4052356271230671259_n.jpg?_nc_ht=scontent-cdt1-1.cdninstagram.com&_nc_ohc=suMXCo0XzEUAX9VpBbu&tp=1&oh=c7b908f5b297f516796987a780570d04&oe=600FDAC9",
      credentialsToAccessId: 1,
      createdAt: "2020-10-26T19:02:20.000Z",
      updatedAt: "2020-12-26T19:02:20.000Z",
    },
  },
  {
    id: 2,
    stalkerId: 1,
    targetId: 1,
    createdAt: "2020-11-26T19:02:20.000Z",
    updatedAt: "2020-12-26T19:02:20.000Z",
    stalker: {
      id: 1,
      username: "superadmin",
      email: "rabireh69@gmail.com",
      password: "$2b$10$pz/sbDny9N8gHI/96aTt/eijuu1TsoFHd598KT5Kjuhk4Ap9Fe/8m",
      gender: null,
      penisSize: 50,
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTYwOTU0Mjg5OX0.AkTG9tGfWFezkcAfe0JqMHQSGB3URx7IICOU4IPSKhE",
      tokenExpiration: "2021-01-02T23:14:59.000Z",
      createdAt: "2020-12-26T19:02:20.000Z",
      updatedAt: "2021-01-01T23:14:59.000Z",
    },
    target: {
      id: 1,
      instagramId: "2621480436",
      username: "rabire_",
      fullname: "Rabire",
      pictureUrl:
        "https://scontent-cdt1-1.cdninstagram.com/v/t51.2885-19/s320x320/120454079_343851196725862_4052356271230671259_n.jpg?_nc_ht=scontent-cdt1-1.cdninstagram.com&_nc_ohc=suMXCo0XzEUAX9VpBbu&tp=1&oh=c7b908f5b297f516796987a780570d04&oe=600FDAC9",
      credentialsToAccessId: 1,
      createdAt: "2020-12-26T19:02:20.000Z",
      updatedAt: "2020-12-26T19:02:20.000Z",
    },
  },
]

export const TracksScreen = () => {
  return (
    <Screen preset="fixed">
      <ScrollView>
        <InnerScrollViewBox>
          <InstalkLogoMeduim />

          <AddTarget />
          {mockTracks.map((track) => (
            <TargetCard key={track.id} track={track} />
          ))}
          {/* <TargetCard />
          <TargetCard />
          <TargetCard />
          <TargetCard /> */}

          <Text text="zbi" />
          <Text text="zbi" />
          <Text text="zbi" />
          <Text text="zb0" />

          <NavBarPlaceholder />
        </InnerScrollViewBox>
      </ScrollView>

      <NavBar activeScreen="home" />
    </Screen>
  )
}
