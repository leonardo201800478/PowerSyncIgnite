import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { Pressable, ViewStyle } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import { Icon, Screen, Text } from "app/components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "app/models"

interface TodoListScreenProps extends AppStackScreenProps<"TodoList"> {}

export const TodoListScreen: FC<TodoListScreenProps> = function TodoListScreen({
  navigation,
  // We get the listId from the route params
  route: {
    params: { listId },
  },
}) {
  return (
    <Screen style={$root} preset="scroll" safeAreaEdges={["top"]}>
      <Pressable onPress={() => navigation.goBack()}>
        <Icon icon={"back"} size={50} />
      </Pressable>
      <Text preset={"heading"} text={listId} />
    </Screen>
  )
}

const $root: ViewStyle = {
  flex: 1,
}

const $backButton: ViewStyle = {
  height: 44,
}
