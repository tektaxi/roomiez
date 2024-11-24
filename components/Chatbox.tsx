import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
} from "react-native";

export default function ChatBox({
  onClose,
  onSend,
}: {
  onClose: () => void;
  onSend: (message: string) => void;
}) {
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    onSend(message);
    setMessage(""); // Clear the input
    onClose(); // Close the chatbox
  };

  return (
    <View style={styles.chatboxContainer}>
      <View style={styles.chatbox}>
        <TextInput
          style={styles.textInput}
          placeholder="Type your message..."
          placeholderTextColor="#aaa"
          value={message}
          onChangeText={setMessage}
          multiline
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSendMessage}>
          <Text style={styles.sendText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  chatboxContainer: {
    position: "absolute",
    top: -350,
    width: "100%",
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    padding: 5,
  },
  chatbox: {
    opacity: 0.5,
    flexDirection: "row",
    alignItems: "center",
  },
  textInput: {
    flex: 1,
    height: 50,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginRight: 10,
    backgroundColor: "#f9f9f9",
  },
  sendButton: {
    backgroundColor: "#007bff",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
  },
  sendText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
