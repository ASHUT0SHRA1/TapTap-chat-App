import {
  Alert,
    KeyboardAvoidingView,
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    View,
  } from "react-native";
  import React, { useState ,useEffect} from "react";
  import { useNavigation } from "@react-navigation/native";
  import axios from "axios";
  import AsyncStorage from "@react-native-async-storage/async-storage";
  
  const LoginScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigation = useNavigation();
    // useEffect(() => {
    //   const checkLoginStatus = async () => {
    //     try {
    //       const token = await AsyncStorage.getItem("authToken");
  
    //       if (token) {
    //         navigation.replace("Home");
    //       } else {
    //         // token not found , show the login screen itself
    //       }
    //     } catch (error) {
    //       console.log("error", error);
    //     }
    //   };
  
    //   checkLoginStatus();
    // }, []);
   
    const handleLogin = async () => {
        try {
            const user = { email, password };
    
            const response = await axios.post("http://192.168.0.160:8000/login", user);
            console.log("response", response.data);
    
            const token = response.data.message;
            const userId = response.data.user;
    
            if (token) {
                console.log("Token:", token);
                await AsyncStorage.setItem("authToken", token);
                // setUserId(userId);
                navigation.navigate("Home");
            } else {
                console.error("Token is undefined");
                Alert.alert("Login failed", "Token is undefined");
            }
        } catch (error) {
            console.error("Login failed", error.message);
            Alert.alert("Login failed", error.message);
        }
    };
    
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "white",
          padding: 10,
          alignItems: "center",
        }}
      >
        <KeyboardAvoidingView>
          <View
            style={{
              marginTop: 100,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#4A55A2", fontSize: 17, fontWeight: "600" }}>
              Sign In
            </Text>
  
            <Text style={{ fontSize: 17, fontWeight: "600", marginTop: 15 }}>
              Sign In to Your Account
            </Text>
          </View>
  
          <View style={{ marginTop: 50 }}>
            <View>
              <Text style={{ fontSize: 18, fontWeight: "600", color: "gray" }}>
                Email
              </Text>
  
              <TextInput
                value={email}
                onChangeText={(text) => setEmail(text)}
                style={{
                  fontSize: email ? 18 : 16,
                  borderBottomColor: "gray",
                  borderBottomWidth: 1,
                  marginVertical: 10,
                  width: 300,
                }}
                placeholderTextColor={"black"}
                placeholder="Enter Your Email"
              />
            </View>
  
            <View style={{ marginTop: 10 }}>
              <Text style={{ fontSize: 18, fontWeight: "600", color: "gray" }}>
                Password
              </Text>
  
              <TextInput
                value={password}
                onChangeText={(text) => setPassword(text)}
                secureTextEntry={true}
                style={{
                  fontSize: password ? 18 : 16,
                  borderBottomColor: "gray",
                  borderBottomWidth: 1,
                  marginVertical: 10,
                  width: 300,
                }}
                placeholderTextColor={"black"}
                placeholder="Passowrd"
              />
            </View>
  
            <Pressable
              onPress={handleLogin}
              style={{
                width: 200,
                backgroundColor: "#4A55A2",
                padding: 15,
                marginTop: 50,
                marginLeft: "auto",
                marginRight: "auto",
                borderRadius: 6,
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 16,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Login
              </Text>
            </Pressable>
  
            <Pressable
              onPress={() => navigation.navigate("Register")}
              style={{ marginTop: 15 }}
            >
              <Text style={{ textAlign: "center", color: "gray", fontSize: 16 }}>
                Dont't have an account? Sign Up
              </Text>
            </Pressable>
          </View>
        </KeyboardAvoidingView>
      </View>
    );
  };
  
  export default LoginScreen;
  
  const styles = StyleSheet.create({
    buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  signUpLink: {
    marginTop: 20,
  },
  signUpText: {
    textAlign: "center",
    color: "gray",
    fontSize: 16,
  }
  });