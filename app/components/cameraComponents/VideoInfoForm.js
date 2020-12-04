import React, {useState, useEffect} from 'react'
import { colors , dimensions, fonts, margin, padding } from '../../styles/BaseStyles';
import { View, StyleSheet, TouchableOpacity, Dimensions, Button, Text, TextInput} from 'react-native';
import Constants from 'expo-constants';
import keys from '../../data/testingDB'
import VideoEntity from '../../entities/VideoEntity';
import uuid4 from "uuid4";
import AsyncStorage from '@react-native-community/async-storage';


function VideoInfoForm({source, default_name, category, building_id, navigateTo}){
    const [videoName, setVideoName] = useState('');
    const [videos, setVideos] = useState([])

    // Queries previously saved videos
    useEffect(() => {
        AsyncStorage.getItem(keys.VIDEOS).then((saved_videos) => {
            if(saved_videos){
                setVideos(JSON.parse(saved_videos));
            }
        })
    }, [])

    // This Function adds a single video to the 
    // the list of previously saved videos
    const saveVideo = async () => {
        try {
            const newVideo = createNewVideo();
            setVideos([...videos, newVideo])
            await AsyncStorage.setItem(keys.VIDEOS, JSON.stringify([...videos, newVideo]));

        } catch (error) {
            console.log(error)
        } finally{
            
             navigateTo("Tour");
        }
        
    }

    // id, building_id, video_name, category ,source
    const createNewVideo = () => {
        if(videoName == ''){
            alert("Please enter a video name!");
            return
        }
        return new VideoEntity(uuid4(), building_id, videoName, category, source);
    }

    return(
        <View style={styles.formContainer}>
            <View>
                <TextInput
                    placeholder='Please provide a video name.'
                    value={videoName}
                    maxLength={40}
                    onChangeText={(text) => {
                        setVideoName(text)
                    }}
                />
            </View>
            <TouchableOpacity style={styles.saveButton} onPress={() => saveVideo(videoName)}>
                <Text style={styles.text}>Save</Text>
            </TouchableOpacity>
        </View>
    )
}

export default VideoInfoForm;



const styles = StyleSheet.create({
    formContainer: {
        paddingTop: Constants.statusBarHeight,
        marginTop: margin.lg,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputBox: {
        borderWidth: 1,
        
        borderColor: colors.orange,
        width: 345,
        margin: 15,
        borderRadius: 7,
        height: 35,
        padding: padding.md,
    },
    saveButton: {
        backgroundColor: colors.orange,
        color: colors.white,
        padding: padding.sm,
        margin: margin.md,
        borderRadius: 4 
    },
    text:{
        color: colors.white
    }

})
