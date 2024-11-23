import React from 'react';
import type { UserProfile } from '../types';
import { Instagram,X, Moon, Cigarette,CigaretteOff,Wine,WineOff, Sparkles, MessageCircleIcon,Vegan,Sun} from 'lucide-react-native';
import { View, Text, Image, StyleSheet, TouchableOpacity,Linking,Animated,TextInput,Dimensions,KeyboardAvoidingView,Platform, TouchableWithoutFeedback, Keyboard} from 'react-native';
import { useState } from 'react';
import { AnimatedView } from 'react-native-reanimated/lib/typescript/component/View';
import ChatBox from './Chatbox';

interface ProfileCardProps {
  profile: UserProfile;
  handleSwipeLeft: () => void; 
  handleSwipeRight: () => void; 
}


export default function ProfileCard({ profile,handleSwipeLeft,handleSwipeRight}: ProfileCardProps) {

  const [isChatboxVisible, setChatboxVisible] = useState(false);
  const [message, setMessage] = useState('');

  const toggleChatbox = () => {
    setChatboxVisible(!isChatboxVisible);
  };

  const handleSendMessage = (message: string) => {
    console.log(`Message to ${profile.name}:`, message);
    setMessage('');
    setChatboxVisible(false); // Close the chatbox
    handleSwipeRight(); // Trigger the swipe right animation
  };

    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.card}>
        {/* Profile Image */}
        <Image
          source={profile.image}
          style={styles.profileImage}
          
        />
        <View style={styles.overlay} />
  
        <View style={styles.content}>
          {/* Name and Social Links */}
          <View style={styles.header}>
            <Text style={styles.name}>
              {profile.name}
            </Text>
            <View style={styles.socialLinks}>
              {profile.socialLinks.instagram && (
                <TouchableOpacity
                  onPress={() =>
                    Linking.openURL(profile.socialLinks.instagram)
                  }
                >
                  <Instagram width={24} height={24} color="white" />
                </TouchableOpacity>
              )}
            </View>
          </View>
  
          {/* College and Major */}
          <View style={styles.details}>
            <Text style={styles.text}>Age:{profile.age}</Text>
            <Text style={styles.text}>{profile.college}</Text>
            <Text style={styles.text}>
              {profile.major} • {getSuffix(profile.year)}
            </Text>
            {/* <Text style={styles.text}>
              {profile.ethnicity}
            </Text> */}
          </View>
  
          {/* Preferences */}
          <View style={styles.preferences}>
            {profile.preferences.nightOwl ?(
              <Moon width={16} height={16} color="white" />
            ):(<Sun width={16} height={16} color="white" />)}
            {profile.preferences.smoking?(
              <Cigarette width={16} height={16} color="white" />
            ):(<CigaretteOff width={16} height={16} color="white"/>)}
            {profile.preferences.drinking ? (
              <Wine width={16} height={16} color="white" />
            ):(<WineOff width={16} height={16} color="white" />)}
            {profile.preferences.vegan&&(<Vegan width={16} height={16} color="white" />)}
            <View style={styles.cleanliness}>
              <Sparkles width={16} height={16} color="white" />
              <Text style={styles.text}>{profile.preferences.cleanliness}/5</Text>
            </View>
          </View>
  
          {/* Bio */}
          <Text style={[styles.text, styles.bio]}>{profile.bio}</Text>

          {/* Buttons */}
          <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.iconButton} onPress={handleSwipeLeft}>
            <X width={24} height={24} color="white" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconButton} onPress={toggleChatbox}>
            <MessageCircleIcon width={24} height={24} color="white" />
          </TouchableOpacity>          
            {isChatboxVisible && (
              <ChatBox onClose={toggleChatbox} onSend={handleSendMessage} />
              )}
          </View>
        </View>
      </View>
      </TouchableWithoutFeedback>
    );
  }
  
  function getSuffix(year: number): string{
    if(year===1) return year+'st';
    if(year===2) return year+'nd';
    if(year===3) return year+'rd';
    return '${year}th';
  }

  const styles = StyleSheet.create({
    container:{
      flex:1
    },
    card: {
      position: 'relative',
      width: 320,
      height: 500,
      backgroundColor: '#fff',
      borderRadius: 16,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 4,
      alignItems:'center',
      justifyContent: 'center',
      overflow: 'hidden',
    },
    profileImage: {
      width: '100%',
      height: '100%',
    },
    overlay: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: 'rgba(0, 0, 0, 0.3)',
    },
    content: {
      position: 'absolute',
      bottom: 0,
      width: '100%',
      padding: 16,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 8,
    },
    name: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#fff',
    },
    socialLinks: {
      flexDirection: 'row',
      gap: 8,
    },
    details: {
      marginBottom: 12,
    },
    text: {
      fontSize: 14,
      color: '#fff',
      opacity: 0.9,
    },
    preferences: {
      flexDirection: 'row',
      gap: 8,
      alignItems: 'center',
      marginBottom: 12,
    },
    cleanliness: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 4,
    },
    bio: {
      lineHeight: 20,
      height: 60, // To limit bio height
      overflow: 'hidden',
    },
    buttonContainer:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    iconButton:{
      padding: 12,
      backgroundColor: '#444',
      borderRadius: 24,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });