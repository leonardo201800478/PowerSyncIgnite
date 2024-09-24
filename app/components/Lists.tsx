// app/components/Lists.tsx
import { NavigationProp, useNavigation } from "@react-navigation/native"
import { AddList, Icon, ListItem, Text } from "app/components"
import { AppStackParamList } from "app/navigators"
import { useLists } from "app/services/database/use-lists"
import React, { useCallback } from "react"
import { FlatList, TextStyle, View, ViewStyle } from "react-native"
import { colors, spacing } from "../theme"

export function Lists() {
  // use our hook to fetch the lists
  const { lists, deleteList } = useLists()
  const navigation = useNavigation<NavigationProp<AppStackParamList>>()

  // This function tells FlatList how to render each item
  const renderItem = useCallback(({ item }: { item: { id: string; name: string | null } }) => {
    return (
      <ListItem
        textStyle={$listItemText}
        onPress={() => {
          navigation.navigate("TodoList", { listId: item.id })
          console.log("Pressed: ", item.name)
        }}
        text={`${item.name ?? "Unnamed List"}`}
        RightComponent={
          <View style={$deleteListIcon}>
            {/* Let users delete lists */}
            <Icon icon={"x"} onPress={() => deleteList(item.id)} />
          </View>
        }
      />
    )
  }, [])

  return (
    <View style={$container}>
      <Text preset={"heading"}>Lists</Text>
      <View style={$card}>
        <AddList />
      </View>
      <View style={[$list, $card]}>
        <Text preset={"subheading"}>Your Lists</Text>
        <FlatList
          style={$listContainer}
          // pass in our lists
          data={lists}
          // pass in our renderItem function
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={() => <View style={$separator} />}
          // show a message if the list is empty
          ListEmptyComponent={<Text style={$emptyList}>No lists found</Text>}
        />
      </View>
    </View>
  )
}

// STYLES
const $separator: ViewStyle = { height: 1, backgroundColor: colors.border }
const $emptyList: TextStyle = {
  textAlign: "center",
  color: colors.textDim,
  opacity: 0.5,
  padding: spacing.lg,
}
const $card: ViewStyle = {
  shadowColor: colors.palette.neutral800,
  shadowOffset: { width: 0, height: 1 },
  shadowRadius: 2,
  shadowOpacity: 0.35,
  borderRadius: 8,
}
const $listContainer: ViewStyle = {
  backgroundColor: colors.palette.neutral100,
  paddingHorizontal: spacing.md,
  height: "100%",
  borderColor: colors.border,
  borderWidth: 1,
}
const $list: ViewStyle = {
  flex: 1,
  marginVertical: spacing.md,
  backgroundColor: colors.palette.neutral200,
  padding: spacing.md,
}
const $container: ViewStyle = {
  flex: 1,
  display: "flex",
  flexGrow: 1,
  padding: spacing.md,
}
const $listItemText: TextStyle = {
  height: 44,
  width: 44,
}
const $deleteListIcon: ViewStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: 44,
  marginVertical: spacing.xxs,
}
