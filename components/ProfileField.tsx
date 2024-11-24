import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";

// Define types for the BioRow props
interface BioRowProps {
  label: string;
  value: string;
  leftSubtext?: string; // Optional text under the label
  rightSubtext?: string; // Optional text under the value
}

// Define types for the InfoRow props
interface InfoRowProps {
  label: string;
  value: string;
}

// Reusable InfoRow component
const BioRow: React.FC<BioRowProps> = ({
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

// Reusable InfoRow component
const InfoRow: React.FC<InfoRowProps> = ({ label, value }) => {
  return (
    <TouchableOpacity style={styles.row}>
      <View style={styles.leftSection}>
        <Text style={styles.label}>{label}</Text>
      </View>
      <View style={styles.rightSection}>
        <Text style={styles.value}>{value}</Text>
        <Text style={styles.arrow}>›</Text>
      </View>
    </TouchableOpacity>
  );
};

// Main component
const ProfileField: React.FC = () => {
  return (
    <View style={styles.container}>
      <BioRow
        label="About me"
        value=""
        leftSubtext="I love cats and baking muffins. I would love a roommate to join me! Please do not eat my cats, but please do eat my muffins!"
      />
      <InfoRow label="Age" value="19" />
      <InfoRow label="Seeking in" value="Montreal" />
      <InfoRow label="Budget" value="$700-900" />
      <InfoRow label="School" value="McGill" />
      <InfoRow label="Religious Beliefs" value="Hidden" />
      <InfoRow label="Hometown" value="Hidden" />
      <InfoRow label="Hometown" value="Hidden" />
      <InfoRow label="Hometown" value="Hidden" />
    </View>
  );
};

// Stylesheet
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#f9f9f9",
  },
  header: {
    fontSize: 16,
    fontWeight: "600",
    color: "#888",
    padding: 16,
    paddingBottom: 8,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
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
    alignItems: "center",
  },
  value: {
    fontSize: 14,
    color: "#888",
    marginRight: 8,
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
