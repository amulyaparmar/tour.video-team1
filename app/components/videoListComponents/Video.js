import React, {useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Modal} from 'react-native';
import { Video } from 'expo-av';
import { colors, fonts, margin, padding, dimensions } from '../../styles/BaseStyles';
import { Feather } from '@expo/vector-icons'; 
import VideoPlayer from './VideoPlayer';
import { AntDesign } from '@expo/vector-icons';
import Constants from 'expo-constants';

function VideoComp({ videoId ,videoName, videoSource, buildingId }){
    
    const [play,setPlay] = useState(false)
    const [fullScreen, setFullScreen] = useState(false)
    return(
        <View style={styles.container}>
             <Modal visible={fullScreen} animationType='slide'>
                <View style={styles.modalContainer}>
                        <TouchableOpacity onPress={() => setFullScreen(!fullScreen)}>
                            <AntDesign name="close" style={styles.close} />
                        </TouchableOpacity>
                    <VideoPlayer source={videoSource} />
                </View>
            </Modal> 


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
                <View style={styles.videoNameContainer}>
                    <Text style={styles.videoName}>{videoName}</Text>
                </View>
                <View style={styles.optionContainer}>
                    <TouchableOpacity onPress={() => setFullScreen(!fullScreen)}>
                        <Feather style={styles.icons} name="play"/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Feather style={styles.icons} name="edit"/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Feather style={styles.icons} name="trash"/>
                    </TouchableOpacity>
                </View>
           </View>
        </View>
    )
}

export default VideoComp;

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        padding: padding.xsm,
        backgroundColor: colors.light_gray,
        marginTop: margin.sm,
        marginLeft: margin.sm,
        marginRight: margin.sm,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: colors.gray
    },
    optionContainer:{
        flex: 1, 
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderRadius: 5,
        borderBottomColor: colors.gray
    },
    icons:{
        fontSize: fonts.lg,
        color: colors.gray
    },
    video: {
        height: 120,
        width: 120,
        borderWidth: 1,
        borderColor: colors.gray,
        borderRadius: 6,
    },
    infoContainer: {
        flex: 1,
        padding: padding.xxsm,
        paddingLeft: padding.sm
    },
    videoNameContainer:{
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: colors.orange,
        padding: 4,
        borderRadius: 10
    },
    videoName :{
        fontSize: fonts.md,
        fontWeight: 'bold',
        color: colors.white
    },
    close: {
        fontSize: fonts.lg,
        color: colors.orange,
        alignSelf: 'flex-end',
        margin: margin.lg
    },
    modalContainer:{
        paddingTop: Constants.statusBarHeight,
        backgroundColor: colors.black
    },

})