import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  Button,
} from "react-native";
import React, { useState } from "react";
import UploadImage from "@/components/UploadImage";
import DividerView from "@/components/DividerView";
import { Divider } from "@rneui/themed";
import ProfileField from "@/components/ProfileField";

const PreferencesPage = () => {
  // State for preferences
  const [preferredRoommateAge, setPreferredRoommateAge] = useState("");
  const [preferredCleaningHabits, setPreferredCleaningHabits] = useState("");
  const [preferredSmokingHabits, setPreferredSmokingHabits] = useState("");
  const [preferredSleepingSchedule, setPreferredSleepingSchedule] =
    useState("");
  const [dietPreferences, setDietPreferences] = useState("");
  const [noiseTolerance, setNoiseTolerance] = useState("");
  const [guestPolicy, setGuestPolicy] = useState("");

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Preferences</Text>
      </View>

      {/* Divider */}
      <Divider />

      {/* Preferences Form */}
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Text style={styles.horizontalText}>Preferred Roommate Age</Text>
          <TextInput
            style={styles.input}
            placeholder="e.g., 20-30"
            value={preferredRoommateAge}
            onChangeText={setPreferredRoommateAge}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.horizontalText}>Cleaning Habits</Text>
          <TextInput
            style={styles.input}
            placeholder="e.g., Weekly Cleaning"
            value={preferredCleaningHabits}
            onChangeText={setPreferredCleaningHabits}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.horizontalText}>Smoking Habits</Text>
          <TextInput
            style={styles.input}
            placeholder="e.g., Non-Smoker"
            value={preferredSmokingHabits}
            onChangeText={setPreferredSmokingHabits}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.horizontalText}>Sleeping Schedule</Text>
          <TextInput
            style={styles.input}
            placeholder="e.g., Night Owl"
            value={preferredSleepingSchedule}
            onChangeText={setPreferredSleepingSchedule}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.horizontalText}>Diet Preferences</Text>
          <TextInput
            style={styles.input}
            placeholder="e.g., Vegetarian"
            value={dietPreferences}
            onChangeText={setDietPreferences}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.horizontalText}>Noise Tolerance</Text>
          <TextInput
            style={styles.input}
            placeholder="e.g., Low Tolerance"
            value={noiseTolerance}
            onChangeText={setNoiseTolerance}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.horizontalText}>Guest Policy</Text>
          <TextInput
            style={styles.input}
            placeholder="e.g., No Overnight Guests"
            value={guestPolicy}
            onChangeText={setGuestPolicy}
          />
        </View>
      </View>

      {/* Divider */}
      <Divider />

      {/* Save Button */}
      <View style={styles.buttonContainer}>
        <Button
          title="Save Preferences"
          onPress={() => alert("Preferences Saved!")}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
    marginTop: 60,
    marginBottom: 80,
  },
  header: {
    height: 60,
    fontSize: 100,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingTop: 10,
  },
  headerText: {
    fontSize: 20,
    color: "#3D405B",
    fontWeight: "bold",
  },
  inputContainer: {
    marginBottom: 20,
  },
  horizontalText: {
    textAlign: "left",
    fontSize: 16,
    marginVertical: 10,
    fontWeight: "500",
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 4,
    paddingLeft: 10,
  },
  buttonContainer: {
    marginTop: 20,
    alignItems: "center",
  },
});

export default PreferencesPage;
