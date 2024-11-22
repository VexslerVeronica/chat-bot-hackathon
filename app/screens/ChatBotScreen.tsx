import React, { useEffect, useRef, useState } from "react";
import {
  View,
  TextInput,
  ScrollView,
  Text,
  StyleSheet,
  Pressable,
} from "react-native";
import useApi from "../hooks/useApi";
import ConversationService from "../services/conversation-service";
import { axiosClient } from "../api/axiosClient";

const enum SENDER {
  user = "user",
  bot = "bot",
}

const Chatbot = () => {
  const [userInput, setUserInput] = useState("");
  const scrollViewRef = useRef();
  const defaultMessage = [
    {
      sender: SENDER.bot,
      text: "Hello! I'm bp Chatbot. How can I help you?",
    },
  ];
  const [messages, setMessages] = useState<{ sender: SENDER; text: string }[]>(
    []
  );
  const { fetchData } = useApi(
    {
      request: () => ConversationService.getResponse(axiosClient, userInput),
    },
    axiosClient
  );

  useEffect(() => {
    if (messages.length > 0) {
      scrollViewRef.current?.scrollToEnd({ animated: true });
    }
  }, [messages]);

  useEffect(() => {
    setMessages(defaultMessage);
  }, []);

  const sendMessage = async () => {
    if (!userInput.trim()) return;

    const newMessages = [...messages, { sender: SENDER.user, text: userInput }];
    setMessages(newMessages);
    setUserInput("");
    if (userInput) {
      try {
        fetchData().then((response) => {
          const data = response?.data;
          setMessages([
            ...newMessages,
            {
              sender: SENDER.bot,
              text: data,
            },
          ]);
        });
      } catch (error) {
        console.error("Error:", error);
        setMessages([
          ...newMessages,
          {
            sender: SENDER.bot,
            text: "Something went wrong. Please try again.",
          },
        ]);
      }
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.chatBox} ref={scrollViewRef}>
        {messages.map((message, index) => (
          <Text
            key={index}
            style={
              message.sender === "user" ? styles.userMessage : styles.botMessage
            }
          >
            {message.text}
          </Text>
        ))}
      </ScrollView>
      <TextInput
        style={styles.input}
        value={userInput}
        onSubmitEditing={sendMessage}
        onChangeText={setUserInput}
        placeholder="Type your message..."
        placeholderTextColor="#A9A9A9"
        multiline={true}
      />
      <View style={styles.buttonContainer}>
        <Pressable
          style={styles.button}
          onPress={() => setMessages(defaultMessage)}
        >
          <Text style={styles.buttonText}>Clear</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={sendMessage}>
          <Text style={styles.buttonText}>Send</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
    width: "100%",
  },
  chatBox: {
    flex: 1,
    marginBottom: 16,
    maxHeight: 600,
  },
  userMessage: {
    textAlign: "right",
    marginVertical: 4,
    backgroundColor: "#72cbf4",
    padding: 14,
    borderRadius: 45,
    borderBottomRightRadius: 5,
    marginLeft: "25%",
  },
  botMessage: {
    textAlign: "left",
    marginVertical: 4,
    backgroundColor: "#a2fd2b",
    padding: 14,
    borderRadius: 45,
    borderBottomLeftRadius: 5,
    marginRight: "25%",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 8,
    paddingHorizontal: 8,
  },
  button: {
    backgroundColor: "#000096",
    padding: 10,
    borderRadius: 45,
    width: "50%",
    margin: 2,
  },
  buttonText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 16,
  },
});

export default Chatbot;
