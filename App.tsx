import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';

import { Video } from 'expo-av'
import VideoPlayer from 'expo-video-player'
export default function App() {

  // video categories
  const [introduction, setVideos1] = React.useState(
    [
      {
        "name": "Main Menu"
      }
    ]
  )  

  const [floor_plan, setVideos2] = React.useState(
    [
      {
        "name": "Floor Plan Main Menu"
      },
      {
        "name": "2 Bedroom"
      },
      {
        "name": "1 Bedroom"
      }
    ]
  ) 

  const [amenities, setVideos3] = React.useState(
    [
      {
        "name": "Amenity Menu",
        "previewImage": "https://res.cloudinary.com/davhyl8f2/image/upload/v1539689606/pexels-photo-1481096_bknyjx.jpg",
        "id": "c1r342c2",
        "duration": "0:55",
        "url": "https://uploads-ssl.webflow.com/5e45b17b74507185e599a039/5f716fa43c67c778b286e5e3_Sample%20sizze%20reel%20(1)-transcode.mp4"

      },
      {
        "name": "24x7 Gym",
        "previewImage": "https://res.cloudinary.com/davhyl8f2/image/upload/v1539689606/pexels-photo-1480799_xe2h5h.jpg",
        "id": "432cr34r",
        "duration": "3:00",
        "url": "https://uploads-ssl.webflow.com/5e45b17b74507185e599a039/5f716fa43c67c778b286e5e3_Sample%20sizze%20reel%20(1)-transcode.mp4"

      },
      {
        "name": "Surround Theater",
        "previewImage": "https://res.cloudinary.com/davhyl8f2/image/upload/v1539689606/pexels-photo-1478477_bddfuv.jpg",
        "id": "43rcc3rd",
        "duration": "4:12",
        "url": "https://uploads-ssl.webflow.com/5e45b17b74507185e599a039/5f716fa43c67c778b286e5e3_Sample%20sizze%20reel%20(1)-transcode.mp4"
      }
    ]
  )

  const [thank_you, setVideos4] = React.useState(
    [
      {
        "name": "Thank you"
      }
    ]
  )  

  const [miscellaneous, setVideos5] = React.useState(
    [
      {
        "name": "Miscellaneous"
      }
    ]
  )  

  return (
    <ScrollView style={styles.WebViewContainer}>
      <Text style={styles.welcome}>Welcome</Text>
      
    <Text style={styles.section}>{"\n"}WELCOME{"\n"}</Text>
    {introduction.map(((video, idx) => {
      return (
        <>
        <View style={styles.container}>
          <View style={styles.column}>
            <View style={styles.buttonTitle}>
              <Button title={video.name}/>
            </View>
            <Text>{video.name}</Text>
          </View>
        </View>
        </>
      )
    }))}
      
        {/*
        <View style={styles.buttonTitle}>
          <Button title={videos.name}/>
        </View>
        */}
      <Text style={styles.horizontal_lines}>______________________________________________</Text>
      <Text style={styles.section}>FLOOR PLAN{"\n"}</Text>
      <View style={styles.container}>
        {floor_plan.map(((video, idx) => {
          return (
            <>
            <View style={styles.container}>
              <View style={styles.column}>
                <View style={styles.buttonTitle}>
                  <Button title={video.name}/>
                </View>
                <Text style={styles.names}>{video.name}</Text>
              </View>
            </View>
            </>
          )
        }))}
      </View>

      <Text style={styles.horizontal_lines}>______________________________________________</Text>
      <Text style={styles.section}>AMENITIES{"\n"}</Text>
      <View style ={styles.container}>
      {amenities.map(((video, idx) => {
        return (
          <>
          <View style ={styles.container}>
            <View style={styles.column}>
              <View style={styles.buttonTitle}>
                <Button title={video.name} />
              </View>
              <Text style={styles.names}>{video.name}</Text>
            </View>
          </View>
            {/* <View style={styles.buttonTitle}>
              <Button title={video.name} />
            </View> */}

            {/*<Text>{video.name}</Text>
            <Button title={video.name} />
            
            <VideoPlayer
              videoProps={{
                shouldPlay: false,
                resizeMode: Video.RESIZE_MODE_CONTAIN,
                source: {
                  uri: 'https://uploads-ssl.webflow.com/5e45b17b74507185e599a039/5f95fe348b955b74d1fb8704_commons-intro-transcode.mp4',
                },
              }}
              inFullscreen={false}
              height={250}
            />*/}
          </>
        );
      }))}
      </View>
      <StatusBar style="auto" />
      <View style = {styles.container}>
        <View style={styles.addButton}>
          <Button 
            style = {styles.plus} 
            title="+"></Button>
        
        </View>
      </View>
        <Text>Add New Floor Plan</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    //justifyContent: 'center',
    marginLeft: 10,
    flexDirection: 'row'
    
  },
  column: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  //WebViewContainer: {
  //  marginTop: (Platform.OS == 'android') ? 20 : 0,
  //},
  buttonTitle: {
    width: 100,
    height: 100,
    backgroundColor: "rgb(204, 209, 209)",
    flexDirection: 'row',
    justifyContent: 'flex-start',
    borderRadius: 10,
    //padding: 10,
  },
  addButton: {
    width: 100,
    height: 100,
    backgroundColor: "rgb(234, 236, 238)",
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  plus: {
    width: 100,
    height: 100,
    fontSize: 60,
    color: "rgb(33, 47, 61)",
    padding: 10,
  },
  section: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    //transform: [{rotate: '270deg'}],
    flex: 1,
    flexDirection: 'row',
    fontSize: 15,
    paddingLeft: 10,
    marginLeft: 10,
    marginTop: 1,
  },
  vertical_lines: {
    //borderWidth: 0.5,
    //borderColor:'black',
    borderLeftWidth: 1,
    borderLeftColor: 'black',
    margin: 20
  },
  horizontal_lines: {
    margin: 10,
  }, 
  welcome: {
    fontWeight:"bold",
    fontSize: 25,
    marginTop: 50,
    marginLeft: 10,
  },
  names: {
    justifyContent: 'center',
    alignItems: 'center',
    //transform: [{rotate: '270deg'}],
    flex: 1,
    flexDirection: 'row',
    fontSize: 15,
    //paddingLeft: 10,
  },
});
