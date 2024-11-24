import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Modal } from 'react-native';

import { useRouter } from "expo-router";
import WorkPage from "@/components/WorkPage";

// Define types for the BioRow props
interface BioRowProps {
    label: string;
    value: string;
    leftSubtext?: string; // Optional text under the label
    rightSubtext?: string; // Optional text under the value
    workPageText: string; // Title of the WorkPage
    workPagePlaceholder: string; // Placeholder for the WorkPage input
  }

// Define types for the InfoRow props
interface InfoRowProps {
    label: string; // Label displayed on the row
    value: string; // Value displayed on the row
    workPageText: string; // Title of the WorkPage
    workPagePlaceholder: string; // Placeholder for the WorkPage input
  }
  


// Reusable BioRow component
const BioRow: React.FC<BioRowProps> = ({
  label,
  value,
  leftSubtext: initialValue,
  rightSubtext,
  workPageText,
  workPagePlaceholder,
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [leftSubtext, setValue] = useState(initialValue);

  const handleOpenModal = () => setModalVisible(true);
  const handleCloseModal = () => setModalVisible(false);

  const handleTextChange = (newText: string) => {
    setValue(newText); // Update the displayed value when the WorkPage sends it back
  };

  return (
    <>
      <TouchableOpacity style={styles.row} onPress={handleOpenModal}>
        <View style={styles.leftSection}>
          <Text style={styles.label}>{label}</Text>
          {leftSubtext && <Text style={styles.subtext}>{leftSubtext}</Text>} {/* Optional subtext */}
        </View>
        <View style={styles.rightSection}>
          <Text style={styles.value}>{value}</Text>
          {rightSubtext && <Text style={styles.subtext}>{rightSubtext}</Text>} {/* Optional subtext */}
          <Text style={styles.arrow}>›</Text>
        </View>
      </TouchableOpacity>

      {/* Modal with WorkPage */}
      <Modal
        animationType="none"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleCloseModal}
      >
        <WorkPage
          text={workPageText}
          placeholder={workPagePlaceholder}
          onClose={handleCloseModal}
          onChangeText={handleTextChange} // Pass handler for object update
        />
      </Modal>
    </>
  );
};

  const InfoRow: React.FC<InfoRowProps> = ({
    label,
    value: initialValue,
    workPageText,
    workPagePlaceholder,
  }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [value, setValue] = useState(initialValue);
  
    const handleOpenModal = () => setModalVisible(true);
    const handleCloseModal = () => setModalVisible(false);
  
    const handleTextChange = (newText: string) => {
      setValue(newText); // Update the displayed value when the WorkPage sends it back
    };
  
    return (
      <>
        <TouchableOpacity style={styles.row} onPress={handleOpenModal}>
          <View style={styles.leftSection}>
            <Text style={styles.label}>{label}</Text>
          </View>
          <View style={styles.rightSection}>
            <Text style={styles.value}>{value}</Text>
            <Text style={styles.arrow}>›</Text>
          </View>
        </TouchableOpacity>
  
        <Modal
          animationType="none"
          transparent={true}
          visible={modalVisible}
          onRequestClose={handleCloseModal}
        >
          <WorkPage
            text={workPageText}
            placeholder={workPagePlaceholder}
            onClose={handleCloseModal}
            onChangeText={handleTextChange} // Pass the handler to update InfoRow's value
          />
        </Modal>
      </>
    );
  };
  
// Main component
const ProfileField: React.FC = () => {
  return (
    <View style={styles.container}>
        <InfoRow label="Age range" value="19-25" workPageText="Age range" workPagePlaceholder="Add the age range you are interested in"/>
      <InfoRow label="Cleaning habits" value="Moderately clean" workPageText="Cleaning habits" workPagePlaceholder="Add the cleaning habits you are interested in"/>
      <InfoRow label="Smoking habits" value="No smoking" workPageText="Smoking habits" workPagePlaceholder="Add the smoking habits you are interested in"/>
      <InfoRow label="Guest policy " value="Occasionally" workPageText="Guest policy" workPagePlaceholder="Enter how often you would like to have guests"/>
      <InfoRow label="Noise tolerance" value="Any" workPageText="Noise tolerance" workPagePlaceholder="Add your noise tolerance"/>
    </View>
  );
};

// Stylesheet
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#f9f9f9',
  },
  header: {
    fontSize: 16,
    fontWeight: '600',
    color: '#888',
    padding: 16,
    paddingBottom: 8,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#fff',
  },
  leftSection: {
    flex: 1,
  },
  label: {
    fontSize: 16,
    color: '#000',
    fontWeight: '500',
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  value: {
    fontSize: 14,
    color: '#888',
    marginRight: 8,
  },
  arrow: {
    fontSize: 18,
    color: '#888',
  },
  
  subtext: {
    fontSize: 14,
    color: '#888',
    marginRight: 8,
    marginTop: 4, // Space between main text and subtext
  },
});

export default ProfileField;