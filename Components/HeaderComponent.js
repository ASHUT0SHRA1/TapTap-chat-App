import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useNavigation } from "@react-navigation/native";

const HeaderComponent = () => {
  const navigation = useNavigation(); 
  return (
    <View style={styles.container}>
      <Text style={styles.title}>TapTap</Text>
      <View style={styles.innerContainer}>
        <Pressable onPress={() => navigation.navigate('Chats')}>
          <Image style={styles.icon} source={require('../Assets/mail.png')} />
        </Pressable>
        <Pressable onPress={() => navigation.navigate('Friends')}>
          <Image style={styles.icon} source={require('../Assets/friends.png')} />
        </Pressable>
      </View>
    </View>
  );
};

export default HeaderComponent;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 60, 
    backgroundColor: "#4A90E2", // Updated background color
    justifyContent: "space-between",
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingTop: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5, // Adds a shadow for Android
  },
  title: {
    fontSize: 22, // Increased font size
    fontWeight: 'bold',
    color: "#FFF", // White color for the title
    letterSpacing: 1.5, // Added letter spacing
  },
  innerContainer: {
    flexDirection: 'row', 
  },
  icon: {
    height: 35, 
    width: 35,
    marginHorizontal: 10,
    // tintColor: "#FFF", // Makes the icon white
  }
});
