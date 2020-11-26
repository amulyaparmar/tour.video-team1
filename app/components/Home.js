import * as React from 'react';
import {  colors ,dimensions, padding, margin } from '../styles/BaseStyles';
import { Text, View, StyleSheet, Image, ScrollView , TouchableOpacity} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import ApartmentList from './homeComponents/ApartmentList'
import apartments from '../data/apartments'

export default function Home() {
  return (
    <View style={styles.container}>
      <ApartmentList style={styles.apartments} apartments={apartments} />   
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
    fontSize: 60,
    color: colors.orange,
    marginRight: margin.xl
  }
});
