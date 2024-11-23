import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, Button } from 'react-native';


const ProfilePage = () => {
  // State for the form values
  const [biography, setBiography] = useState('');
  const [lookingFor, setLookingFor] = useState('');
  const [age, setAge] = useState('');
  const [area, setArea] = useState('');
  const [school, setSchool] = useState('');
  const [major, setMajor] = useState('');
  const [ethnicity, setEthnicity] = useState('');
  const [religion, setReligion] = useState('');
  const [diet, setDiet] = useState('');
  const [cleaningPreferences, setCleaningPreferences] = useState('');
  const [sleepingSchedule, setSleepingSchedule] = useState('');
  const [smokingDrugsDrinking, setSmokingDrugsDrinking] = useState('');
  const [socialMedias, setSocialMedias] = useState('');

  return (
    <View style={styles.container}>
      {/* Fixed Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Allenna</Text>
      </View>
    
    <ScrollView style={styles.container}>
      {/* Biography */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Biography</Text>
        <TextInput
          style={styles.input}
          placeholder="Write your biography"
          value={biography}
          onChangeText={setBiography}
          multiline
        />
      </View>

      {/* What you're looking for */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>What you're looking for</Text>
        <TextInput
          style={styles.input}
          placeholder="What are you looking for?"
          value={lookingFor}
          onChangeText={setLookingFor}
        />
      </View>

      {/* Age */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Age</Text>
        <TextInput
          style={styles.input}
          placeholder="Your age"
          value={age}
          onChangeText={setAge}
          keyboardType="numeric"
        />
      </View>

      {/* Area */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Area</Text>
        <TextInput
          style={styles.input}
          placeholder="Your area"
          value={area}
          onChangeText={setArea}
        />
      </View>

      {/* School */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>School</Text>
        <TextInput
          style={styles.input}
          placeholder="School name"
          value={school}
          onChangeText={setSchool}
        />
      </View>

      {/* Major of Study */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Major of Study</Text>
        <TextInput
          style={styles.input}
          placeholder="Your major"
          value={major}
          onChangeText={setMajor}
        />
      </View>

      {/* Ethnicity */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Ethnicity</Text>
        <TextInput
          style={styles.input}
          placeholder="Your ethnicity"
          value={ethnicity}
          onChangeText={setEthnicity}
        />
      </View>

      {/* Religion */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Religion</Text>
        <TextInput
          style={styles.input}
          placeholder="Your religion"
          value={religion}
          onChangeText={setReligion}
        />
      </View>

      {/* Diet Type */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Diet Type</Text>
        <TextInput
          style={styles.input}
          placeholder="Your diet type"
          value={diet}
          onChangeText={setDiet}
          />
      </View>

      {/* Cleaning Preferences */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Cleaning Preferences</Text>
        <TextInput
          style={styles.input}
          placeholder="Your cleaning preferences"
          value={cleaningPreferences}
          onChangeText={setCleaningPreferences}
        />
      </View>

      {/* Sleeping Schedule */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Sleeping Schedule</Text>
        <TextInput
          style={styles.input}
          placeholder="Your sleeping schedule"
          value={sleepingSchedule}
          onChangeText={setSleepingSchedule}
        />
      </View>

      {/* Smoking / Drugs / Drinking */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Smoking / Drugs / Drinking</Text>
        <TextInput
          style={styles.input}
          placeholder="Your preferences"
          value={smokingDrugsDrinking}
          onChangeText={setSmokingDrugsDrinking}
        />
      </View>

      {/* Social Medias */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Social Medias</Text>
        <TextInput
          style={styles.input}
          placeholder="Your social media links"
          value={socialMedias}
          onChangeText={setSocialMedias}
        />
      </View>

      {/* Submit Button */}
      <Button title="Save Profile" onPress={() => console.log('Profile saved')} />
    </ScrollView>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    height: 60,
    backgroundColor: '#6200ee',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 10,
  },
  headerText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
    paddingLeft: 10,
  },
  picker: {
    height: 50,
    width: '100%',
  },
});

export default ProfilePage;
