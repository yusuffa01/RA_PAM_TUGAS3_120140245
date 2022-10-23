import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Detail from "./Detail";
import Home from "./Home";
import FontAwesome from "react-native-vector-icons/FontAwesome5";

const Stack = createNativeStackNavigator();

const ScreenStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={"Home1"}
      screenOptions={{
        headerShown: true,
        headerTitleAlign: "center",
        headerTintColor: "white",
        headerStyle: {
          backgroundColor: "#808000",
        },
      }}
    >
      <Stack.Screen
        name="Home1"
        component={Home}
        options={{
          title: "HILLING.ID",
          headerLeft: () => <FontAwesome name="bars" size={25} color="white" />,
          headerRight: () => (
            <FontAwesome name="user-alt" size={25} color="white" />
          ),
        }}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{
          title: "HILLING.ID",
          headerRight: () => (
            <FontAwesome name="user-alt" size={30} color="00ffff" />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default ScreenStack;
