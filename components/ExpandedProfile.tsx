import { UserProfile } from '@/types';
import React, { useEffect, useRef }from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity,Animated ,StatusBar} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

interface ExpandedProfileProps {
  profile: UserProfile;
  onClose: () => void;
}

export default function ExpandedProfile({ profile, onClose }: ExpandedProfileProps) {
    const animation = useRef(new Animated.Value(0)).current;
    useEffect(() => {
        // Animate the expansion on mount
        Animated.timing(animation, {
          toValue: 1, // Fully expanded
          duration: 250, // Animation duration in ms
          useNativeDriver: true,
        }).start();
      }, []);
    
      const containerStyle = {
        ...styles.container,
        opacity: animation, // Fade in effect
        transform: [
          {
            scale: animation.interpolate({
              inputRange: [0, 1],
              outputRange: [0.5, 1], // Start slightly smaller, grow to full size
            }),
          },
        ],
      };
    

    return (
        <SafeAreaProvider>
        <Animated.View style={containerStyle}>
        <SafeAreaView style={styles.container} edges={['top']}>        
        
        <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        >
            
        <View style={styles.cardContainer}>
        <TouchableOpacity onPress={onClose} style={styles.closeButton}>
          <Text style={styles.closeText}>Close</Text>
        </TouchableOpacity>
        <Image source={profile.image} style={styles.image} />
        <Text style={styles.name}>{profile.name}</Text>
        <Text style={styles.detail}>Age: {profile.age}</Text>
        <Text style={styles.detail}>College: {profile.college}</Text>
        <Text style={styles.detail}>Major: {profile.major}</Text>
        <Text style={styles.bio}>Bio: {profile.bio}</Text>
        <Text style={styles.detail}>Religion: {profile.religion}</Text>
        <Text style={styles.detail}>Price range for apartments: ${profile.priceRangeLow} - ${profile.priceRangeHigh}</Text>
        <Text style={styles.preference}>
          Night Owl: {profile.preferences.nightOwl ? 'Yes' : 'No'}
        </Text>
        <Text style={styles.preference}>
          Smoking: {profile.preferences.smoking ? 'Yes' : 'No'}
        </Text>
        <Text style={styles.preference}>
          Pets: {profile.preferences.pets ? 'Yes' : 'No'}
        </Text>
        <Text style={styles.preference}>
          Drinking: {profile.preferences.drinking ? 'Yes' : 'No'}
        </Text>
        {/* Add more preferences if needed */}
        </View>
      </ScrollView>
      </SafeAreaView>
      </Animated.View>
      </SafeAreaProvider>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16, // Horizontal padding for entire view
        paddingTop:120,
        backgroundColor: '#f8f9fa',
        paddingBottom:30,
    },
    cardContainer:{
        width: '100%',
    maxWidth: 400, // Limit card width for better layout on larger screens
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16, // Inner padding for card content
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3, // For Android shadow
    },
    closeButton: {
        alignSelf: 'flex-end',
    padding: 10,
    marginRight: 16, // Space from the edge
    marginTop: 8, // Space below the status bar
    backgroundColor: '#ddd',
    borderRadius: 5,
    },
    closeText: {
      color: '#333',
    },
    scrollView: {
        flex: 1,
        backgroundColor: '#f8f9fa', // Match the container background
    },
      scrollContent: {
        alignItems: 'center', // Center content horizontally
        paddingVertical: 16, // Vertical padding for scroll content
      },
    image: {
      width: 200,
      height: 200,
      borderRadius: 100,
      marginBottom: 16,
    },
    name: {
      fontSize: 28,
      fontWeight: 'bold',
      marginBottom: 8,
    },
    detail: {
      fontFamily: 'Courier',
      fontSize: 15,
      marginBottom: 4,
    },
    bio: {
     fontFamily: 'Courier',
      fontSize: 16,
      marginTop: 8,
      marginBottom: 16,
      textAlign: 'center',
    },
    preference: {
      fontFamily: 'Courier',
      fontSize: 15,
      marginBottom: 4,
    },
    animatedContainer: {
        flex: 1,
        backgroundColor: '#f8f9fa',
      },
  });