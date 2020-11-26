
import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import {  colors, fonts } from './styles/BaseStyles'
import Constants from 'expo-constants';
import Navigator from './routes/Navigator'


// You can import from local files
// import Home from './components/Home';

// or any pure javascript modules available in npm
//import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
        <Navigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: Constants.statusBarHeight,
    backgroundColor: colors.white,
  },
});

 


