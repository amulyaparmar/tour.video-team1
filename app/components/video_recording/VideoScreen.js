import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Text, StatusBar, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const STORAGE_KEY = '@videos'
const VideoItem = ({ id ,name, source }) => {
    return (
        <View style={styles.item}>
            <Text style={styles.name}>{name}</Text>
        </View>
    )
}

function VideoScreen() {
    const [videos, setVideos] = useState([])
    let videos_found = false

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

    const clearAllVideos = async () => {
        try {
            await AsyncStorage.removeItem(STORAGE_KEY)
            setVideos([])
            alert('Cleared')
        } catch (error) {
            console.error(error)
        }
    }

    if(videos.length > 0){
        return (
            <View style={styles.container}>
                {videos.map(video =>{
                    console.log(video)
                    return (
                        <VideoItem name={video.name} source={video.source} key={video.id} />
                    )
                })}
                <TouchableOpacity style={styles.button} onPress={() => clearAllVideos()}>
                <Text style={styles.buttonLabel}>Clear all</Text>
                </TouchableOpacity>
            </View>
        )
    }else{
        return(
            <View style={styles.container}>
                <Text style={styles.message}>No Videos Yet</Text>
            </View> 
        )
    } 
}

export default VideoScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: '#ddd',
  },
  item: {
    backgroundColor: '#FF4500',
    borderRadius: 10,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  name: {
    fontSize: 32,
    color: 'white'
  },

  message: {
      fontSize: 25,
      color: '#000',
      padding: 20
  },
  button:{
    color: '#69bdd2',
    backgroundColor: '#c4b345',
    marginLeft: 130,
    marginRight: 130,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonLabel:{
    color:'#fff',
    fontSize: 24
  }
});


