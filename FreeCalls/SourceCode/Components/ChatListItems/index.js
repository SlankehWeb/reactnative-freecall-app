import { StyleSheet, View, Text, Image } from "react-native";

const ChatListItem = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/commons/f/fe/Michelle_Borromeo_Actor_Headshots_30.jpg",
        }}
        style={styles.image}
      />

      <View style={styles.content}>
				<View style={styles.row}>
	        <Text style={styles.name} numberOfLines={1}>Name Holder</Text>
		      <Text style={styles.subTitle}>10:30</Text>
	      </View>

        <Text numberOfLines={2} style={styles.subTitle}>Massage Holder</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "stretch",
      marginHorizontal: 10,
      marginVertical: 5,
      height: 70,
    },
    image: {
      width: 60,
      aspectRatio: 1,
      borderRadius: 30,
      marginRight: 10,
    },
    content: {
      flex: 1,
      borderBottomColor: "lightgray",
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
    row: {
      flexDirection: "row",
      marginBottom: 5,
    },
    name: {
      fontWeight: "bold",
      flex: 1,
    },
    subTitle: {
      color: "grey",
    },
  });

export default ChatListItem;