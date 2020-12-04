
import React, {useState, useEffect} from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { padding, margin } from '../../styles/BaseStyles';
import NoVideos from './NoVideos'
import Video from './Video';
import AsyncStorage from '@react-native-community/async-storage';
import keys from '../../data/testingDB';


function VideoList({spaceVideos}){

      // This function clears all the saved videos
    const clearAllVideos = async () => {
        try {
            await AsyncStorage.removeItem(keys.VIDEOS)
        } catch (error) {
            console.error(error)
        }
    }

    if(spaceVideos.length === 0){
        return (
            <ScrollView>
                <NoVideos />
            </ScrollView>
        )
    }else{
        const videos = spaceVideos.map(video => {
            return(
                <Video key={video.id} videoId={video.id} videoName={video.video_name} videoSource={video.source} buildingId={video.building_id} />
            )  
        })
        return(
            <ScrollView>
                {videos}
                <TouchableOpacity onPress={() => clearAllVideos()}>
                    <Text></Text>
                </TouchableOpacity>
            </ScrollView>
        )
    }
}

export default VideoList;

const styles = StyleSheet.create({
    clear : {
        padding: padding.sm,
        margin: margin.md
    }
})