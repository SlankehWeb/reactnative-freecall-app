import { ImageBackground, StyleSheet, FlatList } from "react-native";
import bg from "../../assets/images/acafb3e0d487ebf412f8d118fc54b486.jpg";
import Message from "../Components/Messages";
import messages from "../../assets/data/messages.json";

const ChatScreen = () => {
  return (
    <ImageBackground source={bg} style={styles.bg}>
      <FlatList
        data={messages}
        renderItem={({ item }) => <Message message={item} />}
				style={{ padding: 10 }}
				inverted
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
    bg: {
      flex: 1,
    },
  });
  
  export default ChatScreen;