import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";

// Define types for the InfoRow props
interface InfoRowProps {
  label: string;
  value: string;
  leftSubtext?: string; // Optional text under the label
  rightSubtext?: string; // Optional text under the value
}

// Reusable InfoRow component
const InfoRow: React.FC<InfoRowProps> = ({
  label,
  value,
  leftSubtext,
  rightSubtext,
}) => {
  return (
    <TouchableOpacity style={styles.row}>
      <View style={styles.leftSection}>
        <Text style={styles.label}>{label}</Text>
        {leftSubtext && <Text style={styles.subtext}>{leftSubtext}</Text>}{" "}
        {/* Subtext below label */}
      </View>
      <View style={styles.rightSection}>
        <Text style={styles.value}>{value}</Text>
        {rightSubtext && (
          <Text style={styles.subtext}>{rightSubtext}</Text>
        )}{" "}
        {/* Subtext below value */}
        <Text style={styles.arrow}>›</Text>
      </View>
    </TouchableOpacity>
  );
};

// Main component
const ProfileField: React.FC = () => {
  return (
    <View style={styles.container}>
      <InfoRow
        label="About Me"
        value=""
        leftSubtext="I love cats and making muffins! I'm looking for someone to do that with. Please don't eat my cats, but help yourself to my muffins."
      />
    </View>
  );
};

// Stylesheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start", // Align items at the top
    paddingHorizontal: 16,
    paddingVertical: 12, // Reduce vertical padding
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    backgroundColor: "#fff",
  },
  leftSection: {
    flex: 1,
  },
  label: {
    fontSize: 16,
    color: "#000",
    fontWeight: "500",
  },
  rightSection: {
    flexDirection: "row",
    alignItems: "center", // Align content vertically in the center
    justifyContent: "flex-end", // Align content to the right
    flex: 0, // Prevent the section from stretching
  },
  value: {
    fontSize: 14,
    color: "#888",
  },
  arrow: {
    fontSize: 18,
    color: "#888",
  },

  subtext: {
    fontSize: 14,
    color: "#888",
    marginRight: 8,
    marginTop: 4, // Space between main text and subtext
  },
});

export default ProfileField;
