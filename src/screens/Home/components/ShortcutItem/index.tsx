// ShortcutItem.tsx
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import VStack from "../../../../components/Stacks/VStack";
import { Text } from "react-native-paper";
import { theme } from "../../../../theme/theme";
import { SCREEN_WIDTH } from "../../../../constants";

interface Props {
  icon: any;
  label: string;
}

export function ShortcutItem({ icon, label }: Props) {
  return (
    <VStack>
      <VStack
        style={{
          padding: 32,
          backgroundColor: theme.colors.surface,
          width: SCREEN_WIDTH * 0.2,
          borderRadius: 12,
          alignItems: "center",
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.2,
        }}
      >
        <FontAwesomeIcon icon={icon} size={24} color={theme.colors.header} />
      </VStack>

      <Text style={{ textAlign: "center" }} variant="titleSmall">
        {label}
      </Text>
    </VStack>
  );
}
