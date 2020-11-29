import React, {useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import { Video } from 'expo-av';
import { padding } from '../../styles/BaseStyles';
import { categories, videos } from '../../data/videos';

// categoryName, videos, buildingId
function Category({ category , videos, building_id, handleGoToVideoScreen, thumbnail_source }){
    
    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={() => handleGoToVideoScreen(category, videos, building_id, thumbnail_source)}>
                <Text>{videos.length} {category} videos</Text>
            </TouchableOpacity>   
        </View>
    )
    
}

export default Category

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        padding: padding.lg,
        justifyContent: 'center'
    },
    video: {
        height: 120,
        width: 120,
        borderRadius: 3,
    },
    infoContainer: {
        padding: padding.md,
    }
})