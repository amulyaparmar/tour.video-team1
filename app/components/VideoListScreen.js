import React, {useState, useEffect} from 'react'
import { colors , margin, fonts, dimensions, padding } from '../styles/BaseStyles';
import { View, StyleSheet, TouchableOpacity, Modal, Text} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 
import VideoList from './videoListComponents/VideoList';
import VideoHeader from './videoListComponents/VideoHeader';
import Constants from 'expo-constants';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-community/async-storage';
import keys from '../data/testingDB';
import uuid4 from "uuid4";


function VideoListScreen({route, navigation}){
  const [spaceVideos, setSpaceVideos] = useState(route.params.videos);
  const [addModalOpen, setAddModelOpen] = useState(false);


  useEffect(() => {
    AsyncStorage.getItem(keys.VIDEOS).then((saved_videos) =>{
      if(saved_videos){
        const filtered_videos =  JSON.parse(saved_videos).filter((video) => {
          return (video.category == route.params.category && video.building_id == route.params.building_id)
        })
        setSpaceVideos([...spaceVideos, ... filtered_videos]);
      }
    })
  },[])


  
  // Getting permission to access camera roll
  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  },[]);

  // Video Picker
  const pickVideo = async () => {
    let videoPicked = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Videos,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
  });
  if (!videoPicked.cancelled) {
      console.log("Evevrything ran Smoothly!")
  }

  return videoPicked;
 }

  // Records a new video
  const handleGoCameraScreen = (category, default_name, building_id) => { 
      navigation.navigate('Camera', {category, default_name, building_id}); // Navigates to the Camera page
      setAddModelOpen(!addModalOpen); // Closes the modal
   } 

  // Uploads Video from camera roll
  const handleUploadVideo = async () => {
    const videoPicked = await pickVideo();
    console.log(videoPicked)
  }

  return (
    <View style={styles.container}>
      <VideoHeader category={route.params.category} thumbnail_source={route.params.thumbnail_source} />
      <Modal visible={addModalOpen} animationType='slide'>
        <View style={styles.modalContainer}>
          <VideoHeader category={route.params.category} thumbnail_source={route.params.thumbnail_source} />
          <TouchableOpacity onPress={() => setAddModelOpen(!addModalOpen)}>
              <AntDesign name="close" style={styles.close} />
          </TouchableOpacity>
          <View style={styles.modal}>
            <TouchableOpacity style={styles.option} onPress={() => handleGoCameraScreen(route.params.category, "N/A", 1)}>
              <Text style={styles.text}>Create Video</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option} onPress={handleUploadVideo}>
                <Text style={styles.text}>Upload Video</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <VideoList spaceVideos={spaceVideos} />
      <View style={styles.menu}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
          <Entypo style={styles.menuIcon} name="home" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Tour')}>
          <FontAwesome5 style={styles.menuIcon} name="list-ul" />
        </TouchableOpacity>
        <TouchableOpacity  style={styles.button} onPress={()=> setAddModelOpen(!addModalOpen)}>
          <AntDesign style={styles.menuIcon} name='pluscircle'/>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default VideoListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  menu: {
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: 40,
    borderColor: colors.gray,
    margin: margin.sm,
    alignItems: "center",
    justifyContent: "space-around"
  },

  menuIcon : {
    fontSize: fonts.xl,
    color: colors.orange,
  },

  button:{
    margin: margin.md
  },

  // Modal Styles
  modalContainer:{
    paddingTop: Constants.statusBarHeight,
  },

  modal:{
    padding: padding.md,
    margin: margin.lg,
    borderWidth: 1,
    borderColor: colors.gray,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  option:{
    backgroundColor: colors.orange,
    padding: padding.sm,
    margin: margin.sm,
    borderRadius: 10
  },
  text:{
    fontSize: fonts.md,
    color: colors.white,
    fontWeight: 'bold' 
  },
  close: {
     fontSize: fonts.lg,
     color: colors.orange,
     alignSelf: 'flex-end',
     margin: margin.lg
  },
});