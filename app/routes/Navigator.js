import React from 'react'
import { NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import {  colors, fonts  } from '../styles/BaseStyles';
import Home from '../components/Home'
import Tour from '../components/Tour'

function Navigator() {
  const Stack = createStackNavigator();
  return(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
              name="Home" 
              component={Home} 
              options={{
                title: 'Lease Magnets',
                headerStyle: {
                  backgroundColor: colors.orange,
                },
                  headerTintColor: '#fff',
                  headerTitleStyle: {
                    fontWeight: 'bold',
                    fontSize: fonts.sm
                  },
                }}
          />
          <Stack.Screen 
              name="Tour" 
              component={Tour} 
              options={{
                title: 'Tour',
                headerStyle: {
                  backgroundColor: colors.orange,
                },
                  headerTintColor: '#fff',
                  headerTitleStyle: {
                    fontWeight: 'normal',
                  },
                }}
          />
        </Stack.Navigator> 
      </NavigationContainer>
  )
  
}

export default Navigator