import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { fonts, colors, margin, padding } from '../../styles/BaseStyles'

function VideoHeader({category, thumbnail_source}){

    return(
        <View style={styles.container}>
            <Image style={styles.imageThumbNail} source={thumbnail_source} />
            <Text style={styles.text}>{category}</Text>
        </View>
    )
}

export default VideoHeader;

const styles = StyleSheet.create({
    container : {
        padding: padding.xsm,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: colors.gray,
        borderRadius: 5
    },
    imageThumbNail:{
        width: 50,
        height: 50,
        borderRadius: 200,
    },
    text :{
        color: colors.gray,
        fontWeight: 'bold'
    }
})