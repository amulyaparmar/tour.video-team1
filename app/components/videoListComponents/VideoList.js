
import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import NoVideos from './NoVideos'
import Video from './Video'

function VideoList({spaceVideos}){
    if(spaceVideos.length === 0){
        return (
            <ScrollView>
                <NoVideos />
            </ScrollView>
        )
    }else{
        const videos = spaceVideos.map(spaceVideo => {
            return(
                <Video key={spaceVideo.id} videoId={spaceVideo.id} videoName={spaceVideo.space_name} videoSource={spaceVideo.source} buildingId={spaceVideo.building_id} />
            )  
        })
        return(
            <ScrollView>
                {videos}
            </ScrollView>
        )
    }
}

export default VideoList;