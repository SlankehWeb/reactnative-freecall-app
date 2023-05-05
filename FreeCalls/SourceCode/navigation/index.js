import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ChatsScreen from "../screens/ChatScreen";
import ChatScreen from "../screens/DMScreen";
import MainTabNavigator from "./MainTabNavigator";

const Stack = createNativeStackNavigator();

const Navigator = () => {
    return (
      <NavigationContainer >
        <Stack.Navigator>
        <Stack.Screen
  name="Main"
  component={MainTabNavigator}
  options={{ headerShown: false }}
/>
          <Stack.Screen name="Chats" component={ChatsScreen} />
          <Stack.Screen name="Chat" component={ChatScreen}  />
        </Stack.Navigator>
      </NavigationContainer>
    );
  };


export default Navigator;