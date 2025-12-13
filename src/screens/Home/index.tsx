import React from "react";
import HeaderUsuario from "./components/Header";
import VStack from "../../components/Stacks/VStack";
import { ScrollView, Image } from "react-native";
import HStack from "../../components/Stacks/HStack";
import CardInfo from "./components/CardInfo";
import { faArrowUpRightDots } from "@fortawesome/free-solid-svg-icons";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { Text } from "react-native-paper";
import { theme } from "../../theme/theme";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../../constants";
import TitleShortcut from "./components/ShortCutTitle";
import ShortcutList from "./components/ShortcutList";

export default function HomePage() {
  return (
    <VStack style={{ flex: 1, backgroundColor: theme.colors.header }}>
      <HeaderUsuario nome="Gabriel" />
      <VStack
        style={{
          flex: 1,
          backgroundColor: theme.colors.background,
          borderTopLeftRadius: 24,
          borderTopRightRadius: 24,
          borderTopWidth: 1,
        }}
      >
        <ScrollView>
          <VStack style={{ gap: 12, paddingHorizontal: 12 }}>
            <VStack style={{ alignItems: "center" }}>
              <Image
                source={require("../../assets/images/mensalidadeFree.png")}
                style={{ width: SCREEN_WIDTH * 0.96, height: 180 }}
                resizeMode="contain"
              />
            </VStack>

            <TitleShortcut />
            <ShortcutList />
            <Text variant="titleMedium" style={{ paddingHorizontal: 4 }}>
              Clientes
            </Text>
            <HStack
              style={{
                gap: 12,
                justifyContent: "center",
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.2,
                shadowColor: "#000",
                elevation: 2,
              }}
            >
              <CardInfo title="Ativos" value="11" icon={faUserGroup} />
              <CardInfo title="Novos" value="7" icon={faArrowUpRightDots} />
            </HStack>
          </VStack>
        </ScrollView>
      </VStack>
    </VStack>
  );
}
