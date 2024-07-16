import { StyleSheet, Text, View, Pressable, Image } from "react-native";

const UserFriends = ({ item }) => {
    return (
        <Pressable style={{ flexDirection: "row", alignItems: "center", marginVertical: 10 }}>
          <View>
            <Image
              style={{ width: 50, height: 50, borderRadius: 25, resizeMode: "cover" }}
              source={{ uri: item.image }}
            />
          </View>
          <View style={{ marginLeft: 12, flex: 1 }}>
            <Text style={{ fontWeight: "bold" }}>{item?.name}</Text>
            <Text style={{ marginTop: 4, color: "gray" }}>{item?.email}</Text>
          </View>
        </Pressable>
      );
    }

export default UserFriends;

const styles = StyleSheet.create({});