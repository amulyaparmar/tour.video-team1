import React from 'react'
import { View, StyleSheet, Dimensions, TouchableOpacity, Text } from 'react-native'
import { Video } from 'expo-av'

function VideoPreview({source}){
    console.log("Video Invoqued")
    return(
        <View style={styles.videoContainer}>
            <Video 
                source = {{uri: source}}
                rate={1.0}
                volume={1.0}
                isMuted={false}
                resizeMode="cover"
                shouldPlay={true}
                isLooping
                style={{width: Dimensions.get('screen').width, height: 300}}
            />
            <TouchableOpacity style={styles.button} onPress={() => alert("Coming Soon!")}>
                <Text style={styles.text}>Edit Video</Text>
            </TouchableOpacity>
        </View>
    )
}

export default VideoPreview


const styles = StyleSheet.create({
    videoContainer : {
        alignItems: 'center',
        backgroundColor: '#000',
        ...StyleSheet.absoluteFill
    },
    button :{
        backgroundColor: '#222',
        padding: 10,
        color:'#FF4500',
        borderRadius: 10,
        marginTop: 20
    },
    text: {
        color: '#FF4500'
    }
})