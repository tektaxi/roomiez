import { ImageSourcePropType } from "react-native";

export interface UserProfile {
    name: string;
    age: number;
    college: string;
    ethnicity: string;
    major: string;
    year: number;
    bio: string;
    image: ImageSourcePropType;
    socialLinks: {
      instagram: string;
      spotify?: string;
    };
    preferences: {
      smoking: boolean;
      drinking: boolean;
      pets: boolean;
      vegan:boolean;
      nightOwl: boolean;
      cleanliness: number;
    };
  }