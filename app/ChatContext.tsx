import React, { createContext, useState, useContext } from 'react';

type ChatContextType = {
  chatProfiles: { id: string; title: string }[];
  addChatProfile: (profile: { id: string; title: string }) => void;
};

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export const ChatProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [chatProfiles, setChatProfiles] = useState<{ id: string; title: string }[]>([]);

  const addChatProfile = (profile: { id: string; title: string }) => {
    setChatProfiles((prevProfiles) => {
      // Prevent duplicate entries
      if (prevProfiles.some((p) => p.title === profile.title)) return prevProfiles;
      return [...prevProfiles, profile];
    });
  };

  return (
    <ChatContext.Provider value={{ chatProfiles, addChatProfile }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChatContext = () => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error('useChatContext must be used within a ChatProvider');
  }
  return context;
};
