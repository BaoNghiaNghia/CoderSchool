import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Tabbar from './src/components/Tabbar';

export default function App() {
  return (
    <View style={styles.container}>
      <Tabbar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ea3345',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  text: {
    color: 'white'
  }
});
