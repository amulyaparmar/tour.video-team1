import React from 'react';
import { colors , dimensions, fonts, margin } from '../styles/BaseStyles';
import { View, StyleSheet, TouchableOpacity, Dimensions} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import BuildingList from './homeComponents/BuildingList'
import buildings from '../data/buildings'

function HomeScreen({navigation}) {
  
  // Navigates to the Tour Page
   const handleGoToCatScreen = (name, source, building_id) => {  
      navigation.navigate('Tour', {name, source, building_id});
   }  

  return (
    <View style={styles.container}>
      <BuildingList style={styles.buildings} buildings={buildings} handleGoToCatScreen={handleGoToCatScreen}/>   
      <View style={styles.menu}>
        <TouchableOpacity style={styles.button} onPress={() => alert("Coming Soon!")}>
          <AntDesign style={styles.plusIcon} name='pluscircle'/>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default HomeScreen;

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
    fontSize: fonts.xl,
    color: colors.orange,
  },
  button:{
    width: dimensions.fullWidth/6,
    margin: margin.md
  }
});
