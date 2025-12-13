import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppTabs from "./AppTabs";
import ShortcutConfig from "../screens/ShortcutConfig";
const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Home"
        component={AppTabs}
        options={{ gestureEnabled: false }}
      />

    <Stack.Screen
        name="ShortcutConfig"
        component={ShortcutConfig}
        options={{ gestureEnabled: false }}
      />


    </Stack.Navigator>
  );
};

export default AuthStack;
