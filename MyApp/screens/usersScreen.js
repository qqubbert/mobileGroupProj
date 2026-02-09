import { View, StyleSheet, ScrollView } from 'react-native';
import UserCard from '../entities/userCard';
import { API_URL, WS_URL } from '../MainApp';
import { useState, useEffect, useContext, useCallback, useRef } from 'react';
import { UserContext } from '../context/userData';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

export default function UsersScreen({}) { 
  const [usersArr, setUsersArr] = useState([]);
  const { userData } = useContext(UserContext);
  const navigation = useNavigation();

  const currentUserId = userData.id;
  const ws = useRef(null);

  const handleUserPress = async (targetUser) => {
    // TODO
  };

  async function getUsers() {
    // TODO
  };

  useFocusEffect(
    useCallback(() => {
      getUsers();
      wsConnect();
    }, [])
  );

  const wsConnect = () => {
    // TODO
    
  }

  // ADD RETURN
}

// ADD STYLES
