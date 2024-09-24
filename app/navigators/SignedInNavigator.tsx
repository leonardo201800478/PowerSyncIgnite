// app/navigators/SignedInNavigator.tsx

import { createNativeStackNavigator } from "@react-navigation/native-stack"
import React from "react"
import { observer } from "mobx-react-lite"
import { useColorScheme } from "react-native"
import { DarkTheme, DefaultTheme, NavigationContainer } from "@react-navigation/native"
import { WelcomeScreen, AuthScreen, TodoListScreen } from "app/screens" // Importando suas telas
import { colors } from "app/theme"


// Definir os tipos de rotas e parâmetros para o Signed In Navigator
export type SignedInNavigatorParamList = {
  Welcome: undefined
  Auth: undefined // Auth screen não requer parâmetros
  TodoList: { listId: string } // Parâmetro necessário para a tela de TodoList
}

// Criar o Stack Navigator usando o SignedInNavigatorParamList
const Stack = createNativeStackNavigator<SignedInNavigatorParamList>()

const SignedInStack = observer(function SignedInStack() {
  // Use LocalFirstData hook para sincronização de dados com PowerSync
    // const { sync } = useLocalFirstData()

  return (
    <Stack.Navigator screenOptions={{ headerShown: false, navigationBarColor: colors.background }}>
      {/* Adicione as telas que estarão disponíveis para o usuário autenticado */}
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Auth" component={AuthScreen} />
      <Stack.Screen name="TodoList" component={TodoListScreen} />
      {/* Outras telas logadas podem ser adicionadas aqui */}
    </Stack.Navigator>
  )
})

export const SignedInNavigator = observer(function SignedInNavigator() {
  const colorScheme = useColorScheme()

  return (
    <NavigationContainer theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <SignedInStack />
    </NavigationContainer>
  )
})
