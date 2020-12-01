import React from 'react'
import {colors, padding, margin, fonts } from '../../styles/BaseStyles'
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

/**
 * This is a single Apartment 
 * component as diplayed on the Home Page
 */
function Building({ building_id , name, address, source, handleGoToCatScreen }){      
  
    return(
        <View style={styles.apartment_container}>
              <Image style={styles.thumbnail} source={source} />
              <View style={styles.info_container}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.text}>{address.street}</Text>
                <Text style={styles.text}>{address.city} {address.state}. </Text>
                <Text style={styles.text}>{address.postal}</Text>
                
                <View style={styles.menu}>
                    <TouchableOpacity onPress={() => handleGoToCatScreen(name, source, building_id)}>
                      <FontAwesome5 style={styles.menuIcon} name='door-open' />
                    </TouchableOpacity>
                   <TouchableOpacity onPress={() => alert("Sorry, you are not allowed to delete this.")} >
                      <FontAwesome5 style={styles.menuIcon} name='trash'/>
                    </TouchableOpacity>
                  </View>
              </View>
        </View>
    )
}

export default Building

const styles = StyleSheet.create({
    apartment_container:{
      padding: padding.xxsm,
      flex: 1,
      flexWrap: 'wrap',
      flexDirection: 'row',
      borderBottomWidth: 1,
      borderBottomColor: colors.gray,
      borderRadius: 5
    },
    info_container :{
      flex: 1,
    },
    thumbnail: {
       height: 120,
       width: 120,
       borderRadius: 3,
       marginRight: margin.sm,
    },
    menu: {
      padding: padding.sm,
      borderRadius: 3,
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    name: {
      fontWeight: 'bold',
      fontSize: fonts.md
    },
    menuIcon: {
      fontSize: fonts.lg,
      color: colors.orange
    },
    text: {
      color: colors.black
    }

})