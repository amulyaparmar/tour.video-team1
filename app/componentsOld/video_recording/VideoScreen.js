import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Text, StatusBar, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import VideoPreview from './VideoPreview'


const STORAGE_KEY = '@videos'
/**
 * Video Screen Component
 */
function VideoScreen() {
    const [videos, setVideos] = useState([])
    const [videoSource, setVideoSource] = useState(null)
    const [videoReady, setVideoReady] = useState(false)
    let videos_found = false

    // When a video is clicked, the following side effect gets run
    useEffect(() => {
        if (videoSource){
            setVideoReady(true)
        }
    }, [videoSource])


    // Loads all the videos from local storage
    useEffect(() => {
        (async () => {
            try {
                const stored_videos = await AsyncStorage.getItem(STORAGE_KEY)
                if(stored_videos){
                   setVideos(JSON.parse(stored_videos))
                }
            } catch (error) {
                console.error(error)     
            }
        })();
    }, [])

    // Deletes all videos from local storage 
    const clearAllVideos = async () => {
        try {
            await AsyncStorage.removeItem(STORAGE_KEY)
            setVideos([])
        } catch (error) {
            console.error(error)
        }
    }

    // If a video has been clicked then render it
    if (videoReady && videoSource !== null){
        return (
            <VideoPreview source={videoSource} />
        )
    }else if(videos.length > 0){
        return (
            <View style={styles.container}>
                <Text style={styles.numberOfVideos}>You currently have {videos.length} videos</Text>
                {videos.map(video =>{
                    console.log(video)
                    return (
                        <TouchableOpacity onPress={() => setVideoSource(video.source)}>
                            <VideoItem name={video.name}  key={video.id}/>
                        </TouchableOpacity>
                    )
                })}
                <TouchableOpacity style={styles.button} onPress={() => clearAllVideos()}>
                    <Text style={styles.buttonLabel}>Clear all</Text>
                </TouchableOpacity>
            </View>
        )
    }else{   // If there are no videos recorded, show a message
        return(
            <View style={styles.container}>
                <Text style={styles.message}>No Videos Yet</Text>
            </View> 
        )
    } 
}

function playVideo(){
    return (
        <VideoPreview />
    )
}

/**
 * A single video list item
 * @param { name } param0 
 */
const VideoItem = ({ name }) => {
    return (
        <View style={styles.item} >
            <Text style={styles.name}>{name}</Text>
        </View>
    )
}

export default VideoScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    paddingTop: 15,
    backgroundColor: '#ddd',
  },
  item: {
    backgroundColor: '#FF4500',
    borderRadius: 10,
    padding: 15,
    marginVertical: 2,
    marginHorizontal: 16,
  },
  name: {
    fontSize: 20,
    color: 'white'
  },
  media: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  message: {
      fontSize: 20,
      color: '#000',
      padding: 20
  },
  button:{
    color: '#69bdd2',
    backgroundColor: '#666',
    margin: 15,
    padding: 10,
    marginLeft: 100,
    marginRight: 100,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonLabel:{
    color:'#fff',
    fontSize: 20
  },
  numberOfVideos: {
      textAlign: 'center'
  }
});


