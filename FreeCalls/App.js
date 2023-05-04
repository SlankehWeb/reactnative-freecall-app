import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ChatListItem from "./SourceCode/Components/ChatListItems";

const chat = {
  id: "1",
  user: {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/f/fe/Michelle_Borromeo_Actor_Headshots_30.jpg",
    name: "girl a",
  },
  lastMessage: {
    text: "okay",
    time: "10:30",
  },
};

export default function App() {
  return (
    <View style={styles.container}>
      <ChatListItem chat={chat} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});