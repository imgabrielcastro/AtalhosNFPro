import React from "react";
import { TouchableOpacity, View } from "react-native";
import { Text } from "react-native-paper";
import { theme } from "../../theme/theme";
import HStack from "../../components/Stacks/HStack";
import { useNavigation } from "@react-navigation/native";
import HeaderShortcut from "./components/HeaderShortcut";
import VStack from "../../components/Stacks/VStack";
import { ScrollView } from "react-native-gesture-handler";

export default function ShortcutConfig() {
  const navigation = useNavigation<any>();
  return (
    <View
      style={[
        { backgroundColor: theme.colors.header, paddingVertical: 12, flex: 1 },
      ]}
    >
      <VStack style={{ flex: 1, backgroundColor: theme.colors.header }}>
        <HeaderShortcut />
        <ScrollView
          style={{
            backgroundColor: theme.colors.background,
            borderTopLeftRadius: 24,
            borderTopRightRadius: 24,
            borderTopWidth: 1,
            flex: 1,
          }}
        >
          <Text style={{ textAlign: "center" }} variant="titleLarge">
            Atalhos
          </Text>
        </ScrollView>
      </VStack>
    </View>
  );
}
