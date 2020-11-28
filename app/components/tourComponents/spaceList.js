import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import NoSpaces from './NoSpaces'
import Space from './Space'

function SpaceList({spaceVideos}){
    if(spaceVideos.length === 0){
        return (
            <ScrollView>
                <NoSpaces />
            </ScrollView>
        )
    }else{
        const videos = spaceVideos.map(spaceVideo => {
            return(
                <Space key={spaceVideo.id} videoId={spaceVideo.id} videoName={spaceVideo.space_name} videoSource={spaceVideo.source} aptId={spaceVideo.aptId} />
            )  
        })
        return(
            <ScrollView>
                {videos}
            </ScrollView>
        )
    }
}

export default SpaceList;