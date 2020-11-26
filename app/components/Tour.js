import * as React from 'react'
import {  colors ,dimensions, padding, margin, fonts } from '../styles/BaseStyles';
import { Text, View, StyleSheet, Image, ScrollView , TouchableOpacity} from 'react-native';
import { AntDesign } from '@expo/vector-icons';


function Tour({route}){
    return(
      <View style={styles.container}>
        <Text style={styles.text}>{route.params.name}</Text>
      </View>
    )

}

export default Tour

const styles = StyleSheet.create({
    container: {
      flex:1,
      justifyContent: 'center',
      alignItems: 'center',  
      margin: margin.md,
      borderRadius: 10,
      backgroundColor: 'black', 
    },
    text: {
      fontSize: fonts.lg,
      color: colors.orange
    }
})