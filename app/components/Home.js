import React from 'react';
import { colors , fonts, margin } from '../styles/BaseStyles';
import { View, StyleSheet, TouchableOpacity} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import ApartmentList from './homeComponents/ApartmentList'
import apartments from '../data/apartments'

export default function Home({navigation}) {
   const handleTakeTour = (name) => {  
    navigation.navigate('Tour', {name: name})
   }  

  return (
    <View style={styles.container}>
      <ApartmentList style={styles.apartments} apartments={apartments} handleTakeTour={handleTakeTour}/>   
      <View style={styles.menu}>
        <TouchableOpacity onPress={() => alert("Coming Soon!")}>
          <AntDesign style={styles.plusIcon} name='pluscircle'/>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  apartments: {
    flex: 4,
  },
  menu: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderRadius: 2
  },
  plusIcon : {
    fontSize: fonts.xxl,
    color: colors.orange,
    marginRight: margin.xl
  }
});
