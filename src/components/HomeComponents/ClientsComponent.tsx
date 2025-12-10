import React from "react";
import { View } from "react-native";
import ClientsContainer from "./ClientsContainer";

export default function ClientsList() {
  return (
    <View style={{ flex: 1 }}>
      <ClientsContainer />
    </View>
  );
}
