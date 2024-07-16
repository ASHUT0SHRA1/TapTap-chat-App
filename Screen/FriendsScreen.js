import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useContext, useState } from "react";
import axios from "axios";
import { UserType } from "../UserContext";
import FriendRequest from "../Components/FriendRequest";
import UserFriends from "../Components/UserFriends";

const FriendsScreen = () => {
  const { userId, setUserId } = useContext(UserType);
  const [friendRequests, setFriendRequests] = useState([]);
  useEffect(() => {
    fetchFriendRequests();
  }, []);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        await axios.get(`http://192.168.0.160:8000/users/${userId}`).then((response) => {
          setUsers(response.data);
        })
      } catch (err) {
        console.log("fetching error", err);
      }
    };
    fetchUser();
  }, []);


  const fetchFriendRequests = async () => {
    try {
      const response = await axios.get(
        `http://192.168.0.160:8000/friend-request/${userId}`
      );
      if (response.status === 200) {
        const friendRequestsData = response.data.map((friendRequest) => ({
          _id: friendRequest._id,
          name: friendRequest.name,
          email: friendRequest.email,
          image: friendRequest.image,
        }));

        setFriendRequests(friendRequestsData);
      }
    } catch (err) {
      console.log("error message", err);
    }
  };

  const [userFriends, setUserFriends] = useState([]);

  useEffect(() => {
    const fetchUserFriends = async () => {
      try {
        const response = await fetch(`http://192.168.0.160:8000/friends/${userId}`);

        const data = await response.json();

        if (response.ok) {
          setUserFriends(data);
        } else {
          console.log("error retrieving user friends", response.status);
        }
      } catch (error) {
        console.log("Error message", error);
      }
    };

    fetchUserFriends();
  }, []);

  console.log("user friends", userFriends);


  console.log(friendRequests);

  const userFriendss = users.filter(user => userFriends.includes(user._id));
  return (
    <View style={{ padding: 10, marginHorizontal: 12 }}>
      {friendRequests.length > 0 && <Text>Your Friend Requests!</Text>}

      {friendRequests.map((item, index) => (
        <FriendRequest
          key={index}
          item={item}
          friendRequests={friendRequests}
          setFriendRequests={setFriendRequests}
        />
      ))}
      <View>
        <Text> Your Friends</Text>
        {
          userFriendss.length > 0 ? (
            userFriendss.map((item, index) => (
              <UserFriends key={index} item={item} />
            ))
          ) : (
            <Text>No friends found.</Text>
          )
        }
      </View>
    </View>
  );
};

export default FriendsScreen;

const styles = StyleSheet.create({});
