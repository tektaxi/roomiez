import React, { useRef } from 'react';
import { Animated, StyleSheet, Easing,View,Text} from 'react-native';
import TinderCard from 'react-tinder-card';

interface SwipeContainerProps {
    children: React.ReactNode;
    onSwipe: () => void; 
  }
  export default function SwipeContainer({ children, onSwipe }: SwipeContainerProps) {
    const translateX = useRef(new Animated.Value(0)).current; // Animation value for horizontal movement
  
    const handleSwipeLeft = () => {
      Animated.timing(translateX, {
        toValue: -400, // Move the card off-screen to the left
        duration: 300, // Animation duration in milliseconds
        easing: Easing.ease, // Smooth animation
        useNativeDriver: true, // Optimized animations
      }).start(() => {
        onSwipe(); // Trigger removal after animation completes
      });
    };
  
    
  }
  
  const styles = StyleSheet.create({
    swipeable: {
      width: '100%',
    },
  });