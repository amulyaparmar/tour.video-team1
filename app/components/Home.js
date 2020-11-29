import React from 'react';
import { colors , dimensions, fonts, margin } from '../styles/BaseStyles';
import { View, StyleSheet, TouchableOpacity, Dimensions} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import ApartmentList from './homeComponents/ApartmentList'
import apartments from '../data/apartments'

export default function Home({navigation}) {
  
  // Navigates to the Tour Page
   const handleTakeTour = (name, source, apt_id) => {  
      navigation.navigate('Tour', {name, source, apt_id}); // Pass the list of spaces
   }  

  return (
    <View style={styles.container}>
      <ApartmentList style={styles.apartments} apartments={apartments} handleTakeTour={handleTakeTour}/>   
      <View style={styles.menu}>
        <TouchableOpacity style={styles.button} onPress={() => alert("Coming Soon!")}>
          <AntDesign style={styles.plusIcon} name='pluscircle'/>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderTopWidth: 1,
    borderTopColor: colors.gray

  },
  menu: {
    borderWidth: 1,
    borderRadius: 40,
    borderColor: colors.gray,
    margin: margin.sm,
    alignItems: "flex-end"
  },
  plusIcon : {
    fontSize: fonts.xxl,
    color: colors.orange,
  },
  button:{
    width: dimensions.fullWidth/6,
    margin: margin.md
  }
});
