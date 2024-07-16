import React, { useState } from 'react';
import { Alert, KeyboardAvoidingView, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import axios from 'axios';

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [image, setImage] = useState('');

  const handleRegister = async () => {
    const user = { name, email, password, image };

    try {
      const response = await axios.post("http://192.168.0.160:8000/register", user);
      console.log(response.data);
      Alert.alert("Registration successful");
      setName("");
      setEmail("");
      setPassword("");
      setImage("");
    } catch (error) {
      console.error("Registration failed", error.message);
      Alert.alert("Registration failed", error.message);
    }
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView behavior="padding" style={styles.inner}>
        <View style={styles.header}>
          <Text style={styles.title}>Register</Text>
          <Text style={styles.subtitle}>Register to your account</Text>
        </View>
        <View style={styles.form}>
          <View style={styles.formGroup}>
            <Text style={styles.label}>Name</Text>
            <TextInput
              style={styles.input}
              placeholder='Enter your Name'
              value={name}
              onChangeText={setName}
            />
          </View>
          <View style={styles.formGroup}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder='Enter your Email'
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
            />
          </View>
          <View style={styles.formGroup}>
            <Text style={styles.label}>Password</Text>
            <TextInput
              style={styles.input}
              placeholder='Password'
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
          </View>
          <View style={styles.formGroup}>
            <Text style={styles.label}>Image</Text>
            <TextInput
              style={styles.input}
              placeholder='Image URL'
              value={image}
              onChangeText={setImage}
            />
          </View>
          <Pressable
            onPress={handleRegister}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Register</Text>
          </Pressable>
          <Pressable style={styles.link} onPress={() => navigation.navigate('Login')}>
            <Text style={styles.linkText}>Already have an account? Sign in</Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  inner: {
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    marginBottom: 20,
    alignItems: 'center',
  },
  title: {
    color: '#4A55A2',
    fontSize: 17,
    fontWeight: "600",
  },
  subtitle: {
    marginTop: 15,
    fontSize: 17,
    fontWeight: '600',
    color: 'gray',
  },
  form: {
    width: '100%',
    marginTop: 30,
    paddingHorizontal: 20,
  },
  formGroup: {
    marginBottom: 15,
  },
  label: {
    fontSize: 18,
    fontWeight: '600',
    color: '#4A55A2',
    marginBottom: 5,
  },
  input: {
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    paddingVertical: 8,
    paddingHorizontal: 10,
    fontSize: 16,
    color: 'black',
  },
  button: {
    width: 200,
    backgroundColor: '#4A55A2',
    padding: 15,
    marginTop: 30,
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 6,
    alignItems: "center"
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 15,
    alignItems: 'center',
  },
  linkText: {
    color: 'gray',
    fontSize: 16,
  },
});
