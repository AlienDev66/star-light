import React, { FC } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "./style/colors";
import StarPeople from "./pages/starPeople";
import StarPlanets from "./pages/starPlanets";

const { Navigator, Screen } = createBottomTabNavigator();

const Routes: FC = () => (
  <NavigationContainer>
    <Navigator
      tabBarOptions={{
        style: {
          height: 60,
          backgroundColor: colors.primary,
          borderTopWidth: 0,
        },
        tabStyle: {
          alignItems: "center",
          justifyContent: "center",
        },
        iconStyle: {
          flex: 0,
          width: 20,
          height: 20,
        },
        labelStyle: {
          fontFamily: "roboto_400",
          fontSize: 11,
          marginTop: 5,
        },
        inactiveTintColor: colors.black,
        activeTintColor: colors.purple,
      }}>
      <Screen
        name="People"
        component={StarPeople}
        options={{
          tabBarIcon: ({ size, focused }) => {
            return (
              <Ionicons
                name="md-people"
                size={size}
                color={focused ? colors.purple : colors.black}
              />
            );
          },
        }}
      />
      <Screen
        name="Planets"
        component={StarPlanets}
        options={{
          tabBarIcon: ({ size, focused }) => {
            return (
              <Ionicons
                name="md-planet"
                size={size}
                color={focused ? colors.purple : colors.black}
              />
            );
          },
        }}
      />
    </Navigator>
  </NavigationContainer>
);

export default Routes;
