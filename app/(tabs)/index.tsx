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
  SafeAreaView,
} from "react-native";

import Profile from "@/components/ProfileCard";
import { blue } from "react-native-reanimated/lib/typescript/Colors";
import ExpandedProfile from "@/components/ExpandedProfile";
import type { UserProfile } from "../../types";

import { useChatContext } from "../ChatContext";
import { SafeAreaProvider } from "react-native-safe-area-context";

const profileData = [
  {
    name: "Braden",
    image: require("../../assets/images/braden.jpg"),
    college: "McGill University",
    major: "Computer Science",
    year: 3,
    age: 19,
    ethnicity: "asian",

    bio: "A passionate developer who loves React Native!",
    socialLinks: {
      instagram: "https://www.instagram.com/braden_wei/",
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
  },
  {
    name: "Alenna",
    image: require("../../assets/images/allena.jpg"),
    college: "McGill University",
    major: "Computer Science",
    year: 2,
    age: 20,
    ethnicity: "asian",

    bio: "Hello World!",
    socialLinks: {
      instagram: "https://www.instagram.com/allennatang",
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
  },
  {
    name: "Bill",
    image: require("../../assets/images/bill.jpg"),
    college: "McGill University",
    major: "Computer Science",
    year: 2,
    age: 20,
    ethnicity: "asian",

    bio: "Hello World!",
    socialLinks: {
      instagram: "https://www.instagram.com/bill.skills.01",
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
  },
  {
    name: "Tavi",
    image: require("../../assets/images/tavi.jpg"),
    college: "McGill University",
    major: "Computer Science",
    year: 2,
    age: 20,
    ethnicity: "asian",
    religion: "non",
    bio: "Passionate software developer with a love for solving complex problems. Adept at building user-friendly applications using React Native and JavaScript. Enthusiastic about AI, open-source, and collaborative teamwork. Enjoys hiking, photography, and exploring creative hobbies. Lifelong learner eager to innovate and contribute to impactful projects in technology and beyond.Hello World!",
    priceRangeLow: 1000,
    priceRangeHigh: 2000,
    socialLinks: {
      instagram: "https://www.instagram.com/tavi_river",
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
  },
];

export default function HomeScreen() {
  //Swipe Features
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
      card.swipe("left"); // Programmatically swipe left when X
    }
  };

  const handleSwipeRight = (index: number) => {
    const card = cardRefs.current.get(index); // Get the specific card ref
    if (card) {
      card.swipe("right"); // Programmatically swipe right when chat
    }
  };

  //Profile expand

  const [expandedProfile, setExpandedProfile] = useState<UserProfile | null>(
    null
  );

  const handleProfilePress = (profile: UserProfile) => {
    setExpandedProfile(profile); // Expand the clicked profile
  };
  const handleCloseExpandedProfile = () => {
    setExpandedProfile(null); // Close the expanded view
  };

  return (
    <View style={styles.container}>
      {expandedProfile ? (
        <ExpandedProfile
          profile={expandedProfile}
          onClose={handleCloseExpandedProfile} // Close the expanded view
        />
      ) : (
        <>
          {currentProfiles.length > 0 && (
            <Text style={styles.header}>Find your match!</Text>
          )}
          <View style={styles.cardContainer}>
            {currentProfiles.length > 0 ? (
              currentProfiles.map((profile, index) => (
                <TinderCard
                  key={profile.name}
                  ref={(ref) => cardRefs.current.set(index, ref)}
                  onSwipe={(direction) => handleSwipe(direction, index)}
                  onCardLeftScreen={() => handleCardLeftScreen(index)}
                  swipeRequirementType="position"
                  preventSwipe={["up", "down", "right"]}
                >
                  <View style={styles.card}>
                    <View
                      style={[
                        {
                          position: "absolute",
                          width: "100%",
                          alignSelf: "center",
                        },
                      ]}
                    >
                      <Profile
                        profile={profile}
                        handleSwipeLeft={() => handleSwipeLeft(index)}
                        handleSwipeRight={() => handleSwipeRight(index)}
                        handleProfilePress={handleProfilePress}
                      />
                    </View>
                  </View>
                </TinderCard>
              ))
            ) : (
              <View style={styles.endPage}>
                <Text style={styles.endTitle}>You are living alone!😢</Text>
              </View>
            )}
          </View>
        </>
      )}
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
  endPage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  endTitle: {
    fontSize: 50,
    fontWeight: "bold",
    color: "#444",
  },
  expandedProfileContainer: {
    flex: 1,
    padding: 16,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  expandedName: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 8,
  },
  expandedDetails: {
    fontSize: 16,
    marginVertical: 4,
  },
  closeButton: {
    alignSelf: "flex-end",
    padding: 10,
    backgroundColor: "#ddd",
    borderRadius: 5,
    marginBottom: 20,
  },
  closeButtonText: {
    fontSize: 14,
    color: "#333",
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
});
