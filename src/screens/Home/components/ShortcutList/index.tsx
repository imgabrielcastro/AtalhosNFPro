import { FlatList } from "react-native";
import VStack from "../../../../components/Stacks/VStack";
import HStack from "../../../../components/Stacks/HStack";
import { Icon } from "react-native-paper";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { theme } from "../../../../theme/theme";
import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import { Text } from "react-native-paper";
import { SCREEN_WIDTH } from "../../../../constants";

export default function ShortcutList() {
  return (
    <HStack style={{ gap: 12, justifyContent: "center" }}>
      <VStack>
        <VStack
          style={{
            padding: 32,
            backgroundColor: "red",
            width: SCREEN_WIDTH * 0.2,
          }}
        >
          <FontAwesomeIcon
            icon={faPeopleGroup}
            size={24}
            color={theme.colors.header}
          />
        </VStack>
        <Text variant="titleMedium">Clientes</Text>
      </VStack>

      <VStack>
        <VStack
          style={{
            padding: 32,
            backgroundColor: "red",
            width: SCREEN_WIDTH * 0.2,
          }}
        >
          <FontAwesomeIcon
            icon={faPeopleGroup}
            size={24}
            color={theme.colors.header}
          />
        </VStack>
        <Text variant="titleMedium">Clientes</Text>
      </VStack>

      <VStack>
        <VStack
          style={{
            padding: 32,
            backgroundColor: "red",
            width: SCREEN_WIDTH * 0.2,
          }}
        >
          <FontAwesomeIcon
            icon={faPeopleGroup}
            size={24}
            color={theme.colors.header}
          />
        </VStack>
        <Text variant="titleMedium">Clientes</Text>
      </VStack>

      <VStack>
        <VStack
          style={{
            padding: 32,
            backgroundColor: "red",
            width: SCREEN_WIDTH * 0.2,
          }}
        >
          <FontAwesomeIcon
            icon={faPeopleGroup}
            size={24}
            color={theme.colors.header}
          />
        </VStack>
        <Text variant="titleMedium">Clientes</Text>
      </VStack>
    </HStack>
  );
}
