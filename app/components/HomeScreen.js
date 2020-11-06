import React from 'react'
import {View, Text, StyleSheet, Button } from 'react-native'

/**************
 * Home Screen
 */

 function HomeScreen({ navigation }){
    return (
        <View style={styles.container}>
            <Text>Home Screen!</Text>
            <Button 
                title='Got to Camera' 
                onPress={() => navigation.navigate('Camera')}
            />
        </View>
    )
 }

 export default HomeScreen
 
 const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})