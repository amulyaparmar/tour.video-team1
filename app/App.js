import React from "react";
import CameraPage  from './components/video_recording/CameraPage'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <CameraPage />
  );
}
/*
 <View style={styles.container}>
      
      <Text>Hello World</Text>
      <StatusBar style="auto" />
    </View>
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})*/