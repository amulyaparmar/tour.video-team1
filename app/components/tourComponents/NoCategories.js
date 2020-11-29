import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons'; 
import {colors, margin, fonts, dimensions } from '../../styles/BaseStyles';
import { Text, View, StyleSheet} from 'react-native';

function NoCategories(){
        return(
            <View style={styles.container}>
                <FontAwesome5 name='door-closed' style={styles.icon} />
                <Text style={styles.text}>Error: No Categories Specified!</Text>
            </View>
        )
}

export default NoCategories;

const styles = StyleSheet.create({
    container: {
        height: dimensions.fullHeight/2,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 3,
        borderRadius: 10,
        borderColor: colors.gray,
        margin: margin.md
    },
    icon: {
        fontSize: fonts.xxl,
        color: colors.orange
    },
    text: {
        fontSize: fonts.md,
        color: colors.gray,
        margin: margin.lg,
        textAlign: 'center'
    }
})