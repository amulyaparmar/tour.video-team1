import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity } from 'react-native'

/**************
 * Home Screen
 */

 function HomeScreen({ navigation }){
    return (
        <View style={styles.container}>
   
            <TouchableOpacity 
                style={styles.button}
                onPress={() => navigation.navigate('Camera')}
            >
            <Text style={styles.buttonLabel}>Record Video</Text></TouchableOpacity>
             <TouchableOpacity 
                style={styles.button}
                onPress={() => navigation.navigate('Videos')}
            >
            <Text style={styles.buttonLabel}>View Videos</Text></TouchableOpacity>
        </View>
    )
 }

 export default HomeScreen
 
 const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button:{
    color: '#69bdd2',
    backgroundColor: '#FF4500',
    margin: 10,
    padding: 10,
    borderRadius: 10
  },
  buttonLabel:{
    color:'#fff',
    fontSize: 24
  }

})