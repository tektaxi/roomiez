import React from 'react';
import {View, FlatList, StyleSheet, Text, StatusBar, TouchableOpacity} from 'react-native';
import {MessageCirclePlusIcon} from 'lucide-react-native';

import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Tavi',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Bill',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Braden',
  },
];

type ItemProps = {title: string};

const Item = ({title}: ItemProps) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
     <MessageCirclePlusIcon color="black" size={24} />
  </View>
);

const App = () => (
  <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
      <Text style={styles.message}>
        Your Messages
      </Text>
      <FlatList
        data={DATA}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  </SafeAreaProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  item: {
    backgroundColor: '#f8f9fa',
    padding: 35,
    marginVertical: 0.5,
    marginHorizontal:10,
    //marginRight:40,
    // shadowColor: '#000',
    // shadowOpacity: 0.1,
    // shadowRadius: 6,
    elevation: 3,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center', // Vertically align icon and text
  },
  title: {
    fontSize: 15,
    fontWeight:'bold',
    marginBottom:10,
  },
  message:{
    alignItems:'flex-start',
    marginVertical: 30,
    marginHorizontal:10,
    fontSize:40,
    fontWeight:'bold',
  },

});

export default App;