import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { Lists, SignOutButton } from "app/components"
import { observer } from "mobx-react-lite"
import React, { FC } from "react"
import { ViewStyle } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { SignedInNavigatorParamList } from "../navigators/SignedInNavigator"
import { colors } from "../theme"

interface WelcomeScreenProps
  extends NativeStackScreenProps<SignedInNavigatorParamList, "Welcome"> {}

export const WelcomeScreen: FC<WelcomeScreenProps> = observer(function WelcomeScreen() {
  return (
    <SafeAreaView style={$container}>
      {/* Lists component renders the user's data */}
      <Lists />

      {/* SignOutButton allows user to log out */}
      <SignOutButton />
    </SafeAreaView>
  )
})

// Styles for the container, using flex to adjust the layout
const $container: ViewStyle = {
  flex: 1, // Ensures the container takes up full screen height
  backgroundColor: colors.palette.neutral300,
  justifyContent: "flex-start", // Align items to the top
  paddingHorizontal: 16, // Adds horizontal padding for better spacing
  paddingVertical: 24, // Adds vertical padding
}
