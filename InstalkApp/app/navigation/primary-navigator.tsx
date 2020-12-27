import React from "react"
import { createNativeStackNavigator } from "react-native-screens/native-stack"
import { WelcomeScreen, LoginScreen } from "../screens"

export type PrimaryParamList = {
  welcome: undefined
  login: undefined
}

const Stack = createNativeStackNavigator<PrimaryParamList>()

export function PrimaryNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="login"
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
      }}
    >
      <Stack.Screen name="login" component={LoginScreen} />
      <Stack.Screen name="welcome" component={WelcomeScreen} />
    </Stack.Navigator>
  )
}

const exitRoutes = ["login"]
export const canExit = (routeName: string) => exitRoutes.includes(routeName)
