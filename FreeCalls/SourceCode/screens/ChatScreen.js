import { FlatList, ImageBackground, StyleSheet, } from "react-native";
import ChatListItem from "../Components/ChatListItems";
import chats from "../../assets/data/chats.json";
import bg from "../../assets/images/acafb3e0d487ebf412f8d118fc54b486.jpg";


const ChatsScreen = () => {
  return (
        <ImageBackground source={bg} style={styles.bg}>
    
    <FlatList
      data={chats}
      renderItem={({ item }) => <ChatListItem chat={item} />}
    />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  bg: {
    flex: 1,
  },
});

export default ChatsScreen;