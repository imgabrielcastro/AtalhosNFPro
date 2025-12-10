import React from "react";
import HeaderUsuario from "./components/Header";
import VStack from "../../components/Stacks/VStack";
import { ScrollView } from "react-native";
import HStack from "../../components/Stacks/HStack";
import CardInfo from "./components/CardInfo";
import { faArrowUpRightDots } from "@fortawesome/free-solid-svg-icons";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { Text } from "react-native-paper";
import { theme } from "../../theme/theme";

export default function HomePage() {
  return (
    <VStack style={{ flex: 1, backgroundColor: theme.colors.header }}>
      <HeaderUsuario nome="Gabriel" />
      <VStack
        style={{
          flex: 1,
          backgroundColor: theme.colors.background,
          borderTopLeftRadius: 28,
          borderTopRightRadius: 28,
          borderTopWidth: 1,
        }}
      >
        <ScrollView>
          <VStack style={{ gap: 12, padding: 12 }}>
            <Text variant="titleMedium">Clientes</Text>
            <HStack style={{ gap: 12, justifyContent: "center" }}>
              <CardInfo title="Ativos" value="11" icon={faUserGroup} />
              <CardInfo title="Novos" value="7" icon={faArrowUpRightDots} />
            </HStack>
          </VStack>
        </ScrollView>
      </VStack>
    </VStack>
  );
}
