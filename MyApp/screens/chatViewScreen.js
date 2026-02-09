import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import MessageCard from '../entities/messageCard';
// import { API_URL } from '@env';
import { API_URL } from '../MainApp';
import { WS_URL } from '../MainApp';
import { useState, useEffect, useContext, useRef, useCallback } from 'react';
import { UserContext } from '../context/userData';
import { useFocusEffect } from '@react-navigation/native';

export default function ChatViewScreen({ route }) {
  const { chatId, chatName } = route.params;
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const {userData} = useContext(UserContext);

  const ws = useRef(null);

  async function getMessages() {
    // TODO
  }

  const wsConnect = () => {
    // TODO

  }

  useFocusEffect(
    useCallback(() => {
      wsConnect();
    }, [])
  );

  async function sendMessage() {
    // TODO
  }

  useEffect(()=>{
    getMessages();
  }, [])

  // ADD RETURN
}

// ADD STYLES