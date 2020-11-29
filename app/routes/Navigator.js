import React from 'react'
import { NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import {  colors, fonts  } from '../styles/BaseStyles';
import Home from '../components/Home'
import Tour from '../components/Tour'
/**
 * Reference Notes
 * After creating a navigator, each component defined in the stack nvigator
 * automatically gets additional props succh as:
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
              component={Home} 
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
              component={Tour} 
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
        </Stack.Navigator> 
      </NavigationContainer>
  )
  
}

export default Navigator