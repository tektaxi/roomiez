import React from "react";
import TinderCard from "react-tinder-card";
import { useState, useRef, useMemo } from "react";
import {
  Image,
  StyleSheet,
  Platform,
  View,
  Text,
  TouchableOpacity,
  Animated,
} from "react-native";

import Profile from "@/components/ProfileCard";
import { blue } from "react-native-reanimated/lib/typescript/Colors";
import { profileData } from "@/constants/Profiles";

export default function HomeScreen() {
  const [currentProfiles, setCurrentProfiles] = useState(profileData);

  const cardRefs = useRef(new Map());

  const handleSwipe = (direction: string, index: number) => {
    console.log(
      `Swiped ${direction} on profile: ${currentProfiles[index].name}`
    );

    if (direction === "left" || direction === "right") {
      setTimeout(() => {
        setCurrentProfiles((prev) => prev.filter((_, i) => i !== index));
      }, 300);
    }
  };

  const handleCardLeftScreen = (index: number) => {
    console.log(`${currentProfiles[index].name} left the screen`);
  };

  const handleSwipeLeft = (index: number) => {
    const card = cardRefs.current.get(index); // Get the specific card ref
    if (card) {
      card.swipe("left"); // Programmatically swipe left
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Swipe Profiles</Text>
      <View style={styles.cardContainer}>
        {currentProfiles.map((profile, index) => (
          <TinderCard
            key={profile.name}
            ref={(ref) => cardRefs.current.set(index, ref)}
            onSwipe={(direction) => handleSwipe(direction, index)}
            onCardLeftScreen={() => handleCardLeftScreen(index)}
            swipeRequirementType="position"
            preventSwipe={["up", "down"]}
          >
            <View style={styles.card}>
              <View
                style={[
                  { position: "absolute", width: "100%", alignSelf: "center" },
                ]}
              >
                <Profile
                  profile={profile}
                  handleSwipeLeft={() => handleSwipeLeft(index)}
                />
              </View>
            </View>
          </TinderCard>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: -250,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  cardContainer: {
    marginLeft: -60,
    width: "100%",
    height: "100%",
    maxWidth: 260,
    maxHeight: 300,
    position: "relative",
  },
  header: {
    color: "#000",
    fontSize: 30,
    marginBottom: 30,
    marginTop: 0,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  card: {
    position: "absolute",
    backgroundColor: "#fff",
    maxWidth: 260,
    height: 300,
    shadowColor: "black",
    shadowOpacity: 0.2,
    shadowRadius: 20,
    borderRadius: 20,
    resizeMode: "cover",
  },
});
