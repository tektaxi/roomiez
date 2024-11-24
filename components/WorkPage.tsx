import React, { useEffect, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Animated,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

interface WorkPageProps {
  text: string; // Title of the page
  placeholder: string; // Placeholder for the input
  onClose: () => void; // Close callback
  onChangeText: (newText: string) => void; // Callback to pass back the text
}
const WorkPage: React.FC<WorkPageProps> = ({
  text,
  placeholder,
  onClose,
  onChangeText,
}) => {
  const slideAnim = useRef(new Animated.Value(400)).current; // Start off-screen (right side)
  const [inputValue, setInputValue] = React.useState("");

  const handleInputChange = (text: string) => {
    setInputValue(text); // Update local state as the user types
  };

  const handleSubmit = () => {
    onChangeText(inputValue); // Pass the final input value back to the parent
    onClose(); // Close the modal
  };

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: 0, // Slide to position 0 (fully visible)
      duration: 300, // Animation duration in ms
      useNativeDriver: true, // Use native driver for better performance
    }).start();
  }, [slideAnim]);

  const handleClose = () => {
    Animated.timing(slideAnim, {
      toValue: 400, // Slide back off-screen
      duration: 300,
      useNativeDriver: true,
    }).start(onClose); // Trigger the `onClose` prop after animation
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <Animated.View
        style={[
          styles.animatedContainer,
          { transform: [{ translateX: slideAnim }] },
        ]}
      >
        <View style={styles.header}>
          <TouchableOpacity onPress={handleClose}>
            <Text style={styles.backText}>←</Text>
          </TouchableOpacity>
          <Text style={styles.title}>{text}</Text>
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder={placeholder}
            placeholderTextColor="#ccc"
            onChangeText={handleInputChange} // Handle text input changes
            value={inputValue}
          />
        </View>

        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitText}>Submit</Text>
        </TouchableOpacity>
      </Animated.View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  animatedContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 50,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  backText: {
    fontSize: 20,
    color: "#000",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginBottom: 20,
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 10,
    outlineStyle: "none", // Removes outline for web and other platforms
  },
  submitButton: {
    backgroundColor: "#fff", // White background
    borderWidth: 1, // Thin border
    borderColor: "#000", // Black outline
    paddingVertical: 10,
    alignItems: "center",
    borderRadius: 5,
    marginTop: 10,
  },

  submitText: {
    color: "#000", // White text for contrast
    fontSize: 16,
    fontWeight: "500",
  },
});

export default WorkPage;
