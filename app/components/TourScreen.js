import React, {useState, useEffect} from 'react'
import { colors , margin, fonts, dimensions, padding } from '../styles/BaseStyles';
import { View, StyleSheet, TouchableOpacity, Modal, Text} from 'react-native';
import { Entypo } from '@expo/vector-icons'; 
import CategoryList from './tourComponents/CategoryList';
import TourHeader from './tourComponents/TourHeader';
import { videos } from '../data/videos';
import Constants from 'expo-constants';
import * as ImagePicker from 'expo-image-picker';
/**
 * TODO: Move Image Funtionalities to another file
 * @param {} param0 
 */


function TourScreen({route, navigation}){
  const [spaceVideos, setSpaceVideos] = useState([])
  const [addModalOpen, setAddModelOpen] = useState(false)

  // Loads all the existing videos
  useEffect(() =>{
    setSpaceVideos(videos.filter(video => video.building_id == route.params.building_id))
  }, [])

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
  }, []);

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
  const handleCreateVideo = () => {
      // TODO: Implement this
  }

  // Uploads Video from camera roll
  const handleUploadVideo = async () => {
    const videoPicked = await pickVideo();
    console.log(videoPicked)
  }

   // Navigates to the VideoList
   const handleGoToVideoScreen = (category, videos, building_id, thumbnail_source) => {  
      navigation.navigate('Video', {category, videos, building_id, thumbnail_source}); 
   } 

  return (
    <View style={styles.container}>
      <TourHeader 
        name={route.params.name} 
        source={route.params.source} 
      />
      
      <CategoryList 
        spaceVideos={spaceVideos} 
        building_id={route.params.building_id} 
        handleGoToVideoScreen={handleGoToVideoScreen}
        thumbnail_source={route.params.source}
      />

      <View style={styles.menu}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
          <Entypo style={styles.menuIcon} name="home" />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default TourScreen;

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
  test:{
    margin: margin.xxl
  }
});