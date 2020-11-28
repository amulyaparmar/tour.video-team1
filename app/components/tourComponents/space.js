import React, {useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import { Video } from 'expo-av';
import { colors, margin, padding } from '../../styles/BaseStyles';


function Space({ videoId ,videoName, videoSource, aptId }){
    
    const [play,setPlay] = useState(false)
    

    return(
        <View style={styles.container}>
           <View style={styles.thumbNailContainer}>
           <TouchableOpacity onPress={() => setPlay(!play)}>
                <Video 
                    source = {{uri: videoSource}}
                    rate={1.0}
                    volume={1.0}
                    isMuted={false}
                    resizeMode="cover"
                    shouldPlay={play}
                    isLooping
                    style={styles.video}
                />
            </TouchableOpacity>   
            </View>
           <View style={styles.infoContainer}>
                <Text>TODO: Add Edit Icon</Text>
                <Text>TODO: Add Delete Icon</Text>
                <Text>TODO: Add Play Icon that will open a video in fullscreen</Text>
           </View>
        </View>
    )
    
}

export default Space

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        padding: padding.xsm
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