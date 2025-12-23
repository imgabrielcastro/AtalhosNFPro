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
  const ITEM_WIDTH = SCREEN_WIDTH * 0.2;

  return (
    <VStack
      style={{
        width: ITEM_WIDTH,
        alignItems: "center",
        gap: 6,
      }}
    >
      <VStack
        style={{
          padding: 24,
          backgroundColor: theme.colors.surface,
          width: "100%",
          borderRadius: 12,
          alignItems: "center",
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.2,
        }}
      >
        <FontAwesomeIcon icon={icon} size={24} color={theme.colors.secondary} />
      </VStack>

      <Text
        variant="bodySmall"
        numberOfLines={2}
        style={{
          textAlign: "center",
          width: "100%",
          flexShrink: 1,
        }}
      >
        {label}
      </Text>
    </VStack>
  );
}
