import React from "react";
import HomeScreen from './components/HomeScreen'
import CameraScreen from './components/video_recording/CameraScreen'
import VideoScreen from './components/video_recording/VideoScreen'
import VideoForm from './components/video_recording/VideoForm'
import VideoPreview from './components/video_recording/VideoPreview'
import { NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen 
              name="Home" 
              component={HomeScreen} 
              options={{
                title: 'Home',
                headerStyle: {
                  backgroundColor: '#222',
                },
                  headerTintColor: '#fff',
                  headerTitleStyle: {
                    fontWeight: 'normal',
                  },
                }}
          />
          <Stack.Screen 
              name="Videos" 
              component={VideoScreen}
              options={{
               title: 'Videos',
               headerStyle: {
                  backgroundColor: '#222',
                },
                  headerTintColor: '#fff',
                  headerTitleStyle: {
                    fontWeight: 'normal',
                  },
                }}
          />
          <Stack.Screen 
              name="Camera" 
              component={CameraScreen}
              options={{
               title: 'Camera',
                headerStyle: {
                  backgroundColor: '#222',
                },
                  headerTintColor: '#fff',
                  headerTitleStyle: {
                    fontWeight: 'normal'
                  },
              }} 
          />
          <Stack.Screen 
              name="VideoInfo" 
              component={VideoForm} 
              options={{
                title: 'Video Info',
                headerStyle: {
                  backgroundColor: '#042f66',
                },
                  headerTintColor: '#fff',
                  headerTitleStyle: {
                    fontWeight: 'bold',
                  },
              }}
          />
          <Stack.Screen 
              name="VideoPreview" 
              component={VideoPreview} 
              options={{
                title: '',
                headerStyle: {
                  backgroundColor: '#042f66',
                },
                  headerTintColor: '#fff',
                  headerTitleStyle: {
                    fontWeight: 'normal',
                  },
              }}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

 


