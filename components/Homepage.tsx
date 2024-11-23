import React from "react";
import type { UserProfile } from "../types";
import {
  Instagram,
  Send,
  MessageCircle,
  X,
  Moon,
  Cigarette,
  CigaretteOff,
  Wine,
  WineOff,
  Sparkles,
} from "lucide-react-native";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from "react-native";

interface ProfileCardProps {
  profile: UserProfile;
}

export function ProfileCard1({ profile }: ProfileCardProps) {
  return (
    <div className="relative w-[320px] h-[480px] bg-white rounded-2xl shadow-xl overflow-hidden">
      <img
        src={profile.image}
        alt={profile.name}
        className="w-full h-auto max-h-1/2 object-contain"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

      <div className="absolute bottom-0 w-full p-4 text-white">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-2xl font-bold">
            {profile.name}, {profile.age}
          </h2>
          <div className="flex gap-2">
            {profile.socialLinks.instagram && (
              <a
                href={profile.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>

        <div className="mb-3">
          <p className="text-sm opacity-90">{profile.college}</p>
          <p className="text-sm opacity-90">
            {profile.major} • {profile.year}
          </p>
        </div>

        <div className="flex gap-2 mb-3">
          {profile.preferences.nightOwl && <Moon className="w-4 h-4" />}
          {profile.preferences.smoking && <Cigarette className="w-4 h-4" />}
          <div className="flex items-center">
            <Sparkles className="w-4 h-4 mr-1" />
            <span className="text-sm">{profile.preferences.cleanliness}/5</span>
          </div>
        </div>

        <p className="text-sm opacity-90 line-clamp-3">{profile.bio}</p>
      </div>
    </div>
  );
}

export default function ProfileCard({ profile }: ProfileCardProps) {
  return (
    <View style={styles.card}>
      {/* Profile Image */}
      <Image
        source={{ uri: profile.image }}
        style={styles.profileImage}
        resizeMode="contain"
      />
      <View style={styles.overlay} />

      <View style={styles.content}>
        {/* Name and Social Links */}
        <View style={styles.header}>
          <Text style={styles.name}>
            {profile.name}, {profile.age}
          </Text>
          <View style={styles.socialLinks}>
            {profile.socialLinks.instagram && (
              <TouchableOpacity
                onPress={() => Linking.openURL(profile.socialLinks.instagram)}
              >
                <Instagram width={20} height={20} color="white" />
              </TouchableOpacity>
            )}
          </View>
        </View>

        {/* College and Major */}
        <View style={styles.details}>
          <Text style={styles.text}>{profile.college}</Text>
          <Text style={styles.text}>
            {profile.major} • {profile.year}
          </Text>
        </View>

        {/* Preferences */}
        <View style={styles.preferences}>
          {profile.preferences.nightOwl && (
            <Moon width={16} height={16} color="white" />
          )}
          {profile.preferences.smoking && (
            <Cigarette width={16} height={16} color="white" />
          )}
          <View style={styles.cleanliness}>
            <Sparkles width={16} height={16} color="white" />
            <Text style={styles.text}>{profile.preferences.cleanliness}/5</Text>
          </View>
        </View>

        {/* Bio */}
        <Text style={[styles.text, styles.bio]}>{profile.bio}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    position: "relative",
    width: 320,
    height: 480,
    backgroundColor: "#fff",
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    overflow: "hidden",
  },
  profileImage: {
    width: "100%",
    height: "50%",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
  content: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    padding: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  socialLinks: {
    flexDirection: "row",
    gap: 8,
  },
  details: {
    marginBottom: 12,
  },
  text: {
    fontSize: 14,
    color: "#fff",
    opacity: 0.9,
  },
  preferences: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
    marginBottom: 12,
  },
  cleanliness: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  bio: {
    lineHeight: 20,
    height: 60, // To limit bio height
    overflow: "hidden",
  },
});
