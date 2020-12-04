import React from 'react'
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {  colors, fonts  } from '../styles/BaseStyles';
import HomeScreen from '../components/HomeScreen';
import TourScreen from '../components/TourScreen';
import VideoListScreen from '../components/VideoListScreen';
import CameraScreen from '../components/CameraScreen';
/**
 * Reference Notes
 * After creating a navigator, each component defined in the stack nvigator
 * automatically gets additional props such as:
 * 
 * navigation: to move around pages
 * route: to collect parameters etc ...
 * 
 * See: https://reactnavigation.org/docs/navigation-prop/
 */
function Navigator() {
  const Stack = createStackNavigator();
  return(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
              name="Home" 
              component={HomeScreen} 
              options={{
                title: 'Lease Magnets',
                headerStyle: {
                  backgroundColor: colors.orange,
                },
                  headerTintColor: '#fff',
                  headerTitleStyle: {
                    fontWeight: 'bold',
                    fontSize: fonts.md
                  },
                }}
          />
          <Stack.Screen 
              name="Tour" 
              component={TourScreen} 
              options={{
                title: 'Tour',
                headerStyle: {
                  backgroundColor: colors.orange,
                },
                   headerTintColor: '#fff',
                   headerTitleStyle: {
                   fontWeight: 'bold',
                   fontSize: fonts.md
                  },
                }}
          />
          <Stack.Screen 
              name="Video" 
              component={VideoListScreen} 
              options={{
                title: 'Videos',
                headerStyle: {
                  backgroundColor: colors.orange,
                },
                   headerTintColor: '#fff',
                   headerTitleStyle: {
                   fontWeight: 'bold',
                   fontSize: fonts.md
                  },
              }}
          />
          <Stack.Screen 
              name="Camera" 
              component={CameraScreen} 
              options={{
                title: "Camera",
                headerStyle: {
                  backgroundColor: colors.orange,
                },
                   headerTintColor: '#fff',
                   headerTitleStyle: {
                   fontWeight: 'bold',
                   fontSize: fonts.md
                  },
              }}
          />
        </Stack.Navigator> 
      </NavigationContainer>
  )
  
}

export default Navigator