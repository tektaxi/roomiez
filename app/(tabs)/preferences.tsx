import { StyleSheet, Image, Platform, Button } from "react-native";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { writeData } from "@/firebaseConfig";
import { profileData } from "@/constants/Profiles";

export default function PrefsScreen() {
  const handleAddData = async () => {
    try {
      const key = await writeData("users/", profileData); // Add data to the "users/" path
      console.log("Data added successfully with key:", key);
    } catch (error) {
      console.error("Error adding data:", error);
    }
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Preferences</ThemedText>
      </ThemedView>
      <ThemedView style={styles.titleContainer}>
        <Button title="Add Data" onPress={handleAddData} />
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
