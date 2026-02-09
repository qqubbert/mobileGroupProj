import { View, Text, StyleSheet, ScrollView } from 'react-native';
import ChatCard from '../entities/chatCard';
// import { API_URL } from '@env';
import { API_URL, WS_URL } from '../MainApp';
import { useState, useEffect, useContext, useCallback, useRef } from 'react';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { UserContext } from '../context/userData';

export default function ChatsScreen() {
  const [chatsArr, setChatsArr] = useState([]);
  const navigation = useNavigation();
  const {userData} = useContext(UserContext)
  const ws = useRef(null);

  async function getChats() {
    // TODO
  }

  useFocusEffect(
    useCallback(() => {
      getChats();
      wsConnect();
    }, [])
  );

  useEffect(()=>{
    getChats();
  }, [])

  const wsConnect = () => {
    // TODO
  }

  // ADD RETURN
}

// ADD STYLES
