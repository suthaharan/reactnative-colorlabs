import React from "react";
import ColorList from "./components/ColorList";
import ColorDetails from "./components/ColorDetails";
import UserList from "./components/UserList";
import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack";

const { Navigator, Screen } = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Navigator>
          <Screen name="Home" options={{title: "Color List"}} component={ColorList} />
          <Screen name="Details" options={{title: "Color Details"}} component={ColorDetails} />
          <Screen name="Users" options={{title: "User List"}} component={UserList} />
      </Navigator>
    </NavigationContainer>
  );
}

