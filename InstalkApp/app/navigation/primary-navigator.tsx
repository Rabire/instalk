import React from "react"
import { createNativeStackNavigator } from "react-native-screens/native-stack"
import { LoginScreen } from "../screens"

export type PrimaryParamList = {
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
    </Stack.Navigator>
  )
}

const exitRoutes = ["login"]
export const canExit = (routeName: string) => exitRoutes.includes(routeName)
