import React, {useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, BackHandler} from 'react-native';
import { Video } from 'expo-av';
import { colors, margin, padding, dimensions } from '../../styles/BaseStyles';
import { categories, videos } from '../../data/videos';

// categoryName, videos, buildingId
function Category({ category , videos, building_id, handleGoToVideoScreen, thumbnail_source }){
    
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={() => handleGoToVideoScreen(category, videos, building_id, thumbnail_source)}>
                <Text style={styles.text}>{category}</Text>
            </TouchableOpacity>   
        </View>
    )
    
}

export default Category

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        marginTop: margin.sm,
    },
    video: {
        height: 120,
        width: 120,
        borderRadius: 3
    },
    infoContainer: {
        padding: padding.md,
    },
    button: {
        width: 100,
        height: 100,
        backgroundColor: "rgb(234, 236, 238)",
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        margin: 10,
        borderWidth: 1,
        borderColor: colors.gray
    },
    text:{
        color: colors.black,
        fontWeight: 'bold'
    }
})