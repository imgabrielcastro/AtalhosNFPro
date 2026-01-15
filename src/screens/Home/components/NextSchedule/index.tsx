import VStack from "../../../../components/Stacks/VStack";
import HStack from "../../../../components/Stacks/HStack";
import { Text } from "react-native-paper";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faBarsStaggered,
  faPeopleGroup,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { theme } from "../../../../theme/theme";

interface INextSchedule {
  start: string;
  end: string;
  modality: string;
  instructor: string;
  date: string;
  maxCapacity: number;
  currentCapacity: number;
}

export default function NextSchedule({
  start,
  end,
  modality,
  instructor,
  date,
  maxCapacity,
  currentCapacity,
}: INextSchedule) {
  return (
    <VStack style={{ flex: 1, padding: 4, gap: 12}}>
      <Text variant="titleMedium">Próxima agenda</Text> 
      <VStack
        style={{
          backgroundColor: theme.colors.surface,
          borderRadius: 12,
          padding: 18,
          gap: 8,
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.2,
          shadowColor: "#000",
          elevation: 2,
        }}
      >
        <HStack style={{ justifyContent: "space-between", width: "100%" }}>
          <HStack style={{ alignItems: 'center'}}>
            <FontAwesomeIcon icon={faClock} size={16} />
            <Text variant="titleMedium" style={{ marginLeft: 4 }}>
              {start} às {end}
            </Text>
          </HStack>
          <HStack style={{ alignItems: 'center', gap: 4}}>
            <FontAwesomeIcon icon={faPeopleGroup} size={22} />
            <Text variant="titleMedium">
              {currentCapacity}/{maxCapacity}
            </Text>
          </HStack>
        </HStack>

        <HStack style={{ alignItems: 'center', gap: 4}}>
          <FontAwesomeIcon icon={faBarsStaggered} />
          <Text variant="titleMedium">{modality}</Text>
        </HStack>

        <HStack style={{ justifyContent: "space-between", width: "100%" }}>
          <HStack style={{ alignItems: 'center', gap: 4}}>
            <FontAwesomeIcon icon={faUser} />
            <Text variant="titleSmall">{instructor}</Text>
          </HStack>

          <HStack style={{ alignItems: 'center', gap: 4}}>
            <Text variant="titleSmall">{date}</Text>
          </HStack>
        </HStack>
      </VStack>
    </VStack>
  );
}