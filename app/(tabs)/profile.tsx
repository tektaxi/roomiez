import { View, Text, TextInput, StyleSheet, ScrollView, Button } from "react-native";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { IconSymbol } from "@/components/ui/IconSymbol";
import React, { useState } from 'react';
import UploadImage from '@/components/UploadImage';
import DividerView from "@/components/DividerView";
import { useContext } from 'react';
import { Divider, useTheme } from '@rneui/themed';
import ProfileField from "@/components/ProfileField";
import ProfileBiography from "@/components/ProfileBiography";


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
    
    <ScrollView style={styles.container}>
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Allenna</Text>
      </View>
      <View style={styles.container}>
        <UploadImage/>
      </View>
      <Divider/>

      <ProfileField/>

    </ScrollView>
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
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 10,
  },
  headerText: {
    fontSize: 20,
    color: '#3D405B',
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
  uploadImage: {
    padding:50,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  picker: {
    height: 50,
    width: '100%',
  },
  horizontal: {
    marginBottom: 10,
  },
  horizontalText: {
    textAlign: 'left',
    fontSize: 16,
    marginVertical: 10,
    fontWeight: 500,
    
  },
  horizontalSubtext: {
    textAlign: 'left',
    fontSize: 16,
    marginVertical: 10,
    fontWeight: 300,
    color: '98A8BA',
    
  },
});

export default ProfilePage;
