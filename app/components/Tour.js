import React, {useState, useEffect} from 'react'
import { colors , margin, fonts, dimensions, padding } from '../styles/BaseStyles';
import { View, StyleSheet, TouchableOpacity, Modal, Text} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons'; 
import SpaceList from './tourComponents/SpaceList';
import TourHeader from './tourComponents/TourHeader';
import spaces from '../data/spaces';
import Constants from 'expo-constants';
import * as ImagePicker from 'expo-image-picker';
/**
 * TODO: Move Image Funtionalities to another file
 * @param {} param0 
 */


function Tour({route, navigation}){
  const [spaceVideos, setSpaceVideos] = useState([])
  const [addModalOpen, setAddModelOpen] = useState(false)

  // Loads all the existing videos
  useEffect(() =>{
    setSpaceVideos(spaces.filter(space => space.apt_id == route.params.apt_id))
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

  return videoPicked
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

  return (
    <View style={styles.container}>
      <TourHeader name={route.params.name} source={route.params.source} />
      <Modal visible={addModalOpen} animationType='slide'>
        <View style={styles.modalContainer}>
          <TourHeader name={route.params.name} source={route.params.source} />
          <TouchableOpacity onPress={()=> setAddModelOpen(!addModalOpen)}>
              <AntDesign name="close" style={styles.close} />
          </TouchableOpacity>
          <View style={styles.modal}>
            <TouchableOpacity style={styles.option} onPress={()=> setAddModelOpen(!addModalOpen)}>
              <Text style={styles.text}>Create Video</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option} onPress={handleUploadVideo}>
                <Text style={styles.text} >Upload Video</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <SpaceList spaceVideos={spaceVideos} />
      <View style={styles.menu}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
          <Entypo style={styles.menuIcon} name="home" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=> setAddModelOpen(!addModalOpen)}>
          <AntDesign style={styles.menuIcon} name='pluscircle'/>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Tour;

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