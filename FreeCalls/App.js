import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ChatsScreen from "./SourceCode/screens/ChatScreen";
import ChatScreen from "./SourceCode/screens/DMScreen";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <ChatsScreen /> */}
      <ChatScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    paddingVertical: 25,
    justifyContent: "center",
  },
});