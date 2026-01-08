import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomePage from "../screens/Home";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons/faHome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-regular-svg-icons/faCalendar";
import Menu from "../screens/Menu";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import NextFitPay from "../screens/NextFitPay";
import Clients from "../screens/Clientes";

const Tab = createBottomTabNavigator();

import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

const AppTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => {
        const routeName = getFocusedRouteNameFromRoute(route)
          ? getFocusedRouteNameFromRoute(route)
          : "";
        return {
          headerShown: false,
          tabBarLabelStyle: { fontWeight: "bold", fontSize: 12 },
        };
      }}
    >
      <Tab.Screen
        name="Inico"
        component={HomePage}
        options={{
          tabBarLabel: "Início",
          tabBarActiveTintColor: "#000",
          tabBarIcon: () => (
            <FontAwesomeIcon icon={faHome} size={20} />
          ),
        }}
      />

      <Tab.Screen
        name="Clients"
        component={Clients}
        options={{
          tabBarLabel: "Clientes",
          tabBarActiveTintColor: "#000",
          tabBarIcon: () => <FontAwesomeIcon icon={faUsers} size={20} />,
        }}
      />
      <Tab.Screen
        name="NextFitPay"
        component={NextFitPay}
        options={{
          tabBarLabel: "Next Fit Pay",
          tabBarActiveTintColor: "#000",
          tabBarIcon: () => <FontAwesomeIcon icon={faCalendar} size={20} />,
        }}
      />

      <Tab.Screen
        name="Menu"
        component={Menu}
        options={{
          tabBarLabel: "Menu",
          tabBarActiveTintColor: "#000",
          tabBarIcon: () => <FontAwesomeIcon icon={faBars} size={20} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default AppTabs;
