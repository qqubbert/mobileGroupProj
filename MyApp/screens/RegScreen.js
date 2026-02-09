import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useState, useContext } from 'react';
import { API_URL } from '../MainApp';
import { UserContext } from '../context/userData';

export default function RegScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const {setUserData, setIsLogged} = useContext(UserContext);

  const handleRegister = async () => {
  // TODO

  };

  // ADD RETURN
}

// ADD STYLES