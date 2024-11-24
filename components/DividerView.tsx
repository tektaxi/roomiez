import React, { useContext } from 'react';
import { Text, Divider, useTheme } from '@rneui/themed';
import { ScrollView, StyleSheet, View } from 'react-native';

type DividerViewTypes = {};

const DividerView: React.FunctionComponent<DividerViewTypes> = (props) => {
const { theme } = useTheme();
return (
  <>

      <View style={styles.horizontal}>
        <Text style={styles.horizontalText}>Horizontal Divider</Text>
        <Divider />
      </View>

  </>
);
};

const styles = StyleSheet.create({
subHeader: {
  backgroundColor : "#2089dc",
  color : "white",
  textAlign : "center",
  paddingVertical : 5,
  marginBottom : 10
},
horizontal: {
  marginBottom: 10,
},
horizontalText: {
  textAlign: 'left',
  fontSize: 16,
  marginVertical: 10,
},
vertical: {
  marginBottom: 10,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-evenly',
},
});

export default DividerView;