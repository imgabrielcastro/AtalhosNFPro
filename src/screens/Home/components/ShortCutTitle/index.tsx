import { Text } from "react-native-paper";
import VStack from "../../../../components/Stacks/VStack";
import HStack from "../../../../components/Stacks/HStack";

export default function TitleShortcut() {
  return (
    <HStack>
      <Text variant="titleMedium">Atalhos</Text>

      <Text
        variant="titleMedium"
        style={{ marginLeft: "auto", fontWeight: "bold" }}
      >
        Personalizar
      </Text>
    </HStack>
  );
}
