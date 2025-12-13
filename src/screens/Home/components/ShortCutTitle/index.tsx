import { Text } from "react-native-paper";
import VStack from "../../../../components/Stacks/VStack";
import HStack from "../../../../components/Stacks/HStack";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function TitleShortcut() {
  const navigation = useNavigation<any>();
  return (
    <HStack style={{ justifyContent: "space-between", paddingHorizontal: 4 }}>
      <Text variant="titleMedium">Atalhos</Text>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("ShortcutConfig");
        }}
      >
        <Text
          variant="titleMedium"
          style={{ marginLeft: "auto", fontWeight: "bold" }}
        >
          Personalizar
        </Text>
      </TouchableOpacity>
    </HStack>
  );
}
