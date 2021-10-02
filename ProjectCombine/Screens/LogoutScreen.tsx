import * as React from 'react';
import { StyleSheet, Image } from 'react-native';

import EditScreenInfo from '../Components/EditScreenInfo';
import { Text, View } from '../Components/Themed';

export default function LogoutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Logout</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      
      {/* <EditScreenInfo path="/screens/LogoutScreen.tsx" /> */}
      <Text style={styles.title}>THIS IS THE LOGOUT SCREEN</Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
