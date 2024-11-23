export interface UserProfile {
    name: string;
    age: number;
    college: string;
    ethnicity: string;
    major: string;
    year: number;
    bio: string;
    image: string;
    diet: string;
    socialLinks: {
      instagram: string;
      spotify?: string;
    };
    preferences: {
      smoking: boolean;
      drinking: boolean;
      pets: boolean;
      nightOwl: boolean;
      cleanliness: number;
    };
  }