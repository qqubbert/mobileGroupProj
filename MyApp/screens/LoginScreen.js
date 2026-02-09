import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useState, useContext } from 'react';
import { API_URL } from '../MainApp';
import { UserContext } from '../context/userData';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {isLogged, setIsLogged, userData, setUserData} = useContext(UserContext);

  const handleLogin = async () => {
    // TODO
  };

  // ADD RETURN
}

// ADD STYLES