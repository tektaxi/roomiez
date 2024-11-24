import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import { MessageCirclePlusIcon } from 'lucide-react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { useChatContext } from '../ChatContext';

const Item = ({ title }: { title: string }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <Text></Text>
    <MessageCirclePlusIcon color="black" size={24} />
  </View>
);

const ChatScreen = () => {
  const { chatProfiles } = useChatContext();

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Text style={styles.message}>Your Messages</Text>
        {chatProfiles.length > 0 ? (
          <FlatList
            data={chatProfiles}
            renderItem={({ item }) => <Item title={item.title} />}
            keyExtractor={(item) => item.id}
          />
        ) : (
          <Text style={styles.emptyMessage}>No chats yet! Start a conversation.</Text>
        )}
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  item: {
    backgroundColor: '#f8f9fa',
    padding: 35,
    marginVertical: 0.5,
    marginHorizontal: 10,
    elevation: 3,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  message: {
    marginVertical: 30,
    marginHorizontal: 10,
    fontSize: 40,
    fontWeight: 'bold',
  },
  emptyMessage: {
    textAlign: 'center',
    fontSize: 20,
    marginTop: 20,
    color: '#888',
  },
});

export default ChatScreen;
