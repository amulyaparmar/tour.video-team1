import * as React from 'react'
import {colors, padding, margin, fonts, dimensions} from '../../styles/BaseStyles'
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
/**
 * This is a single Apartment 
 * component as diplayed on the Home Page
 */
function Apartment({name, address, source}){
    return(
        <View style={styles.apartment_container}>
              <Image style={styles.thumbnail} source={source} />
              <View style={styles.info_container}>
                <Text style={styles.name}>{name}</Text>
                <Text>{address.street}</Text>
                <Text>{address.city} {address.state}. </Text>
                <Text>{address.postal}</Text>
                
                <View style={styles.menu}>
                    <TouchableOpacity onPress={() => alert("Coming Soon!")}>
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

export default Apartment

const styles = StyleSheet.create({
    apartment_container:{
      padding: padding.xxsm,
      flex: 1,
      flexWrap: 'wrap',
      flexDirection: 'row',
      borderBottomWidth: 1,
      borderBottomColor: colors.gray
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
    }

})