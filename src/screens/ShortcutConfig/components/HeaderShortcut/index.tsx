import React from "react";
import { TouchableOpacity, View } from "react-native";
import { Text } from "react-native-paper";
import { theme } from "../../../../theme/theme";
import HStack from "../../../../components/Stacks/HStack";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigation } from "@react-navigation/native";

export default function HeaderShortcut() {
  const navigation = useNavigation<any>();
  return (
    <HStack
      style={{
        gap: 28,
        marginLeft: 12,
        paddingTop: 45,
        alignItems: "center",
        backgroundColor: theme.colors.header,
        padding: 16,
      }}
    >
      <HStack>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <FontAwesomeIcon
            icon={faArrowLeft}
            size={24}
            color={theme.colors.text}
          />
        </TouchableOpacity>
      </HStack>
      <Text variant="titleLarge" style={{ color: theme.colors.text }}>
        Personalizar
      </Text>
    </HStack>
  );
}
