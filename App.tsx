import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';

import { Video } from 'expo-av'
import VideoPlayer from 'expo-video-player'

export default function App() {

  const [videos, setVideos] = React.useState(
    [
      {
        "name": "Sea trip",
        "previewImage": "https://res.cloudinary.com/davhyl8f2/image/upload/v1539689606/pexels-photo-1481096_bknyjx.jpg",
        "id": "c1r342c2",
        "duration": "0:55",
        "url": "https://uploads-ssl.webflow.com/5e45b17b74507185e599a039/5f716fa43c67c778b286e5e3_Sample%20sizze%20reel%20(1)-transcode.mp4"

      },
      {
        "name": "In mountains 123",
        "previewImage": "https://res.cloudinary.com/davhyl8f2/image/upload/v1539689606/pexels-photo-1480799_xe2h5h.jpg",
        "id": "432cr34r",
        "duration": "3:00",
        "url": "https://uploads-ssl.webflow.com/5e45b17b74507185e599a039/5f716fa43c67c778b286e5e3_Sample%20sizze%20reel%20(1)-transcode.mp4"

      },
      {
        "name": "At work",
        "previewImage": "https://res.cloudinary.com/davhyl8f2/image/upload/v1539689606/pexels-photo-1478477_bddfuv.jpg",
        "id": "43rcc3rd",
        "duration": "4:12",
        "url": "https://uploads-ssl.webflow.com/5e45b17b74507185e599a039/5f716fa43c67c778b286e5e3_Sample%20sizze%20reel%20(1)-transcode.mp4"
      }
    ]
  )


  return (
    <ScrollView style={styles.WebViewContainer}>
      <Text style={{fontWeight:"bold", fontSize: 25}}>Welcome</Text>
      <Text style={{ color: "#fff" }}>Hi Everyone 212</Text>

      <Text style={styles.section}>AMENITIES</Text>
      {videos.map(((video, idx) => {


        return (
          <>

            <View style={styles.buttonTitle}>
              <Button title={video.name} />
            </View>
            <Text>{video.name}</Text>
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
            />
          </>
        );
      }))}
      <StatusBar style="auto" />
      <View style={styles.addButton}>
        <Text style={styles.plus}>+</Text>
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
    justifyContent: 'center',
  },
  //WebViewContainer: {
  //  marginTop: (Platform.OS == 'android') ? 20 : 0,
  //},
  buttonTitle: {
    width: 100,
    height: 100,
    backgroundColor: "rgb(204, 209, 209)",
    borderRadius: 10
  },
  addButton: {
    width: 100,
    height: 100,
    backgroundColor: "rgb(234, 236, 238)",
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  plus: {
    fontSize: 60,
    color: "rgb(33, 47, 61)",
  },
  section: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    fontSize: 15,
  }
});