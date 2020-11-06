import React from "react";
import HomeScreen from './components/HomeScreen'
import CameraScreen from './components/video_recording/CameraScreen'
import { NavigationContainer, StackActions } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'


const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen 
              name="Home" 
              component={HomeScreen} 
              options={{title: 'Welcome'}}
          />
          <Stack.Screen 
              name="Camera" 
              component={CameraScreen} 
              options={{title: 'Camera'}}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

 


