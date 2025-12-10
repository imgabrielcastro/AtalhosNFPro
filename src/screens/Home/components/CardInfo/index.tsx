import { Text } from "react-native-paper";
import VStack from "../../../../components/Stacks/VStack";
import HStack from "../../../../components/Stacks/HStack";
import { SCREEN_WIDTH } from "../../../../constants";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { theme } from "../../../../theme/theme";

interface ICardInfoProps {
  title: string;
  value: string;
  icon: IconDefinition;
}

export default function CardInfo(props: ICardInfoProps) {
  const { title, value, icon } = props;
  return (
    <HStack
      style={{
        backgroundColor: theme.colors.surface,
        padding: 8,
        borderRadius: 10,
        width: SCREEN_WIDTH * 0.45,
        borderWidth: 1,
        borderColor: "#e0e0e0",
        alignItems: "center",
        justifyContent: "space-between",
        height: 80, 
      }}
    >
      <VStack style={{ gap: 12 }}>
        <Text variant="titleSmall">{title}</Text>
        <Text variant="titleMedium">
          {value}
        </Text>
      </VStack>
      <FontAwesomeIcon icon={icon} size={24} color={theme.colors.header} />
    </HStack>
  );
}
