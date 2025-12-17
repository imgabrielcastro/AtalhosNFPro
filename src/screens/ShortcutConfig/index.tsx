import React from "react";
import { TouchableOpacity, View } from "react-native";
import { theme } from "../../theme/theme";
import { useNavigation } from "@react-navigation/native";
import HeaderShortcut from "../ShortcutConfig/components/HeaderShortcut";
import VStack from "../../components/Stacks/VStack";
import { ScrollView } from "react-native-gesture-handler";
import PersonalizeShortcutsScreen from "./components/PersonalizeShortcutsScreen";

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
          <PersonalizeShortcutsScreen />
        </ScrollView>
      </VStack>
    </View>
  );
}
