import React from "react";

import { Image, StyleSheet, Platform, View, Text } from "react-native";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

import Profile from "@/components/ProfileCard";
import { blue } from "react-native-reanimated/lib/typescript/Colors";

const profileData = {
  name: "Braden",
  image:
    "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80",
  college: "McGill University",
  major: "Computer Science",
  year: 3,
  age: 19,
  ethnicity: "asian",

  bio: "A passionate developer who loves React Native!",
  socialLinks: {
    instagram: "abc",
    spotify: "abc",
  },
  preferences: {
    nightOwl: true,
    smoking: false,
    drinking: false,
    pets: false,
    vegan: false,
    cleanliness: 5,
  },
};

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.blue}>Swipe!</Text>
      <Profile profile={profileData} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  blue: {
    color: " baby blue",
    fontWeight: "bold",
    fontSize: 30,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
