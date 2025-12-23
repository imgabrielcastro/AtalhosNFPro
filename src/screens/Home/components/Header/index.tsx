import React from "react";
import { View } from "react-native";
import { Text, Avatar } from "react-native-paper";
import { theme } from "../../../../theme/theme";
import HStack from "../../../../components/Stacks/HStack";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faBell } from "@fortawesome/free-regular-svg-icons";

interface IHeaderUsuario {
  nome: string;
}

export default function HeaderUsuario({ nome }: IHeaderUsuario) {
  

  return (
    <View style={[{ backgroundColor: theme.colors.secondary, padding: 12 }]}>
      <HStack style={{ alignItems: "center", gap: 12, paddingTop: 40 }}>
        <Avatar.Image
          size={38}
          source={require("../../../../assets/images/woman.jpeg")}
        />
        <Text variant="titleLarge" style={{ color: theme.colors.text }}>
          Olá, <Text style={{ fontWeight: "bold", color: theme.colors.text }}>{nome}!</Text>
        </Text>
        <HStack style={{ marginLeft: "auto" }}>
          <FontAwesomeIcon icon={faBell} size={24} color={theme.colors.text} />
        </HStack>
      </HStack>
    </View>
  );
}
