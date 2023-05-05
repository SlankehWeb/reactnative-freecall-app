import { useEffect } from "react";
import {
  ImageBackground,
  StyleSheet,
  FlatList,
  KeyboardAvoidingView,
} from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import bg from "../../assets/images/acafb3e0d487ebf412f8d118fc54b486.jpg";
import Message from "../Components/Messages";
import messages from "../../assets/data/messages.json";
import InputBox from "../Components/InputBox";

const ChatScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();

  useEffect(() => {
    navigation.setOptions({ title: route.params.name });
  }, [route.params]);
  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 90}
      style={styles.bg}
    >
      <ImageBackground source={bg} style={styles.bg}>
        <FlatList
          data={messages}
          renderItem={({ item }) => <Message message={item} />}
          style={{ padding: 10 }}
          inverted
        />
        <InputBox />
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  bg: {
    flex: 1,
  },
});

export default ChatScreen;
