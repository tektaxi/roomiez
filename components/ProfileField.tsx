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
const BioRow: React.FC<BioRowProps> = ({ label, value, leftSubtext, rightSubtext, workPageText,
  workPagePlaceholder,}) => {
    // const router = useRouter(); // Access the router object
    const [modalVisible, setModalVisible] = useState(false);

    const handleOpenModal = () => setModalVisible(true);
    const handleCloseModal = () => setModalVisible(false);


    return (
      <TouchableOpacity 
      style={styles.row} 
      onPress={handleOpenModal}// Navigate programmatically
      >
      {/* Modal with WorkPage */}
      <Modal
          animationType="none"
          transparent={true}
          visible={modalVisible}
          onRequestClose={handleCloseModal}
        >
          <WorkPage
            text={workPageText} // Pass the title dynamically
            placeholder={workPagePlaceholder} // Pass the placeholder dynamically
            onClose={handleCloseModal}
          />
        </Modal>
        
        <View style={styles.leftSection}>
          <Text style={styles.label}>{label}</Text>
          {leftSubtext && <Text style={styles.subtext}>{leftSubtext}</Text>} {/* Subtext below label */}
        </View>
        <View style={styles.rightSection}>
          <Text style={styles.value}>{value}</Text>
          {rightSubtext && <Text style={styles.subtext}>{rightSubtext}</Text>} {/* Subtext below value */}
          <Text style={styles.arrow}>›</Text>
        </View>
      </TouchableOpacity>
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
  
    // Update value from WorkPage
    const handleTextChange = (newValue: string) => {
      setValue(newValue);
    };
  
    return (
      <>
        {/* Touchable Row */}
        <TouchableOpacity style={styles.row} onPress={handleOpenModal}>
          <View style={styles.leftSection}>
            <Text style={styles.label}>{label}</Text>
          </View>
          <View style={styles.rightSection}>
            <Text style={styles.value}>{value}</Text>
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
            onTextChange={handleTextChange} // Pass the handler
          />
        </Modal>
      </>
    );
  };
  
// Main component
const ProfileField: React.FC = () => {
  return (
    <View style={styles.container}>
    <BioRow label="About me" value="" leftSubtext='I love cats and baking muffins. I would love a roommate to join me! Please do not eat my cats, but please do eat my muffins!' workPageText="About me" workPagePlaceholder="Tell us about yourself"/>
      <InfoRow label="Age" value="19" workPageText="Age" workPagePlaceholder="Add your age"/>
      <InfoRow label="Seeking in" value="Montreal" workPageText="Seeking in" workPagePlaceholder="Location"/>
      <InfoRow label="Budget" value="$700-900" workPageText="Budget" workPagePlaceholder="Add your age"/>
      <InfoRow label="School" value="McGill" workPageText="Age" workPagePlaceholder="Add your age"/>
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
