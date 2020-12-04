import React, {useState} from 'react'
import { View, StyleSheet, Dimensions, TouchableOpacity, Text } from 'react-native'
import { Video } from 'expo-av'

function VideoPlayer({source}){
    const [play, setPlay] = useState(true)

    return (
        <View>
            <TouchableOpacity onPress={() => setPlay(!play)}>
                <Video 
                    source = {{uri: source}}
                    rate={1.0}
                    volume={1.0}
                    isMuted={false}
                    resizeMode="cover"
                    shouldPlay={play}
                    isLooping
                    style={ {width: Dimensions.get('screen').width, height: Dimensions.get('screen').height}}
                />
            </TouchableOpacity>
        </View>
    )
}

export default  VideoPlayer