import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './Screen/LoginScreen';
import RegisterScreen from './Screen/RegisterScreen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import HomeScreen from './Screen/HomeScreen';
import FriendsScreen from './Screen/FriendsScreen';
import ChatsScreen from './Screen/ChatsScreen';
import ChatMessagesScreen from './Screen/ChatMessagesScreen';
import HeaderComponent from './Components/HeaderComponent';
const Stack = createNativeStackNavigator();
const StackNavigation = () => {
  return (
    <GestureHandlerRootView>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Friends" component={FriendsScreen} />
          <Stack.Screen name="Homeheader" component={HeaderComponent} options={{headerShown : false}}/>
          <Stack.Screen name="Chats" component={ChatsScreen} />
          <Stack.Screen name="Messages" component={ChatMessagesScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  )
}


export default StackNavigation

const styles = StyleSheet.create({})