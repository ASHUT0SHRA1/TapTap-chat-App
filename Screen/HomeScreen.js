import { ScrollViewBase, StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import jwt_decode from "jwt-decode";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import User from "./User";
import HeaderComponent from "../Components/HeaderComponent";
import { UserType } from "../UserContext";

const HomeScreen = () => {
  const { userId, setUserId } = useContext(UserType);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = await AsyncStorage.getItem("authToken");
        if (!token) {
          console.log("No token found");
          return;
        }
        console.log("Token retrieved:", token);

        const decodedToken = jwtDecode(token);
        console.log("Decoded token:", decodedToken);

        const userId = decodedToken.userId;
        if (!userId) {
          console.log("No userId in token");
          return;
        }
        setUserId(userId);
        await axios.get(`http://192.168.0.160:8000/users/${userId}`).then((response)=>{
            setUsers(response.data);
        }).catch((err)=>{
            console.log("fetching error" , err);
        })
      } catch (error) {
        console.log("Error fetching user:", error);
      }
    };
    fetchUser();
  }, []);

  console.log("Users" , users);

  return (
    <View>
      <HeaderComponent />
      <View style={{ padding: 10 }}>
      {users.map((item, index) => (
          <User key={index} item={item} />
        ))}
      </View>
      
    </View>

  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
