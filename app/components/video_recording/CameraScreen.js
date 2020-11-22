// @refresh reset
import React, { useState, useRef, useEffect } from 'react'
import {
  StyleSheet,             // For styling 
  Dimensions,             // For Screen Dimensions
  View,                   // For User Interface 
  Text,                   // For texts
  TouchableOpacity,       // To make views respond properly to touches
  SafeAreaView,           // For user interface
} from "react-native";    // Keep these in this file
import AsyncStorage from '@react-native-community/async-storage'
import { Camera } from "expo-camera";
import { Video } from "expo-av";
import VideoEntity from "../Enities/VideoEntity"
import uuid4 from "uuid4";

const STORAGE_KEY = '@videos'
const WINDOW_HEIGHT = Dimensions.get("window").height;
const closeButtonSize = Math.floor(WINDOW_HEIGHT * 0.032);
const captureSize = Math.floor(WINDOW_HEIGHT * 0.09);

function CameraScreen() {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);
  const [isPreview, setIsPreview] = useState(false);
  const [isCameraReady, setIsCameraReady] = useState(false);
  const [isVideoRecording, setIsVideoRecording] = useState(false);
  const [videoSource, setVideoSource] = useState(null);
  const [videos, setVideos] = useState([]); 
  const cameraRef = useRef();

  // UseEffect gets run once to load the video list
  useEffect(() => {
    (async () => {
      try {
        const stored_videos = await AsyncStorage.getItem(STORAGE_KEY)
        if (stored_videos != null) setVideos(JSON.parse(stored_videos))
      } catch (error) {
        console.error(error)      
      }
    })();
  },[])

  // Gets Access Permission From The Phone
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  },[]);

   //Save the video to Async Storage | TODO: Ongoing feature
  const saveVideos = async () => {
    try {
      console.log("\n\n\n" + JSON.stringify(videos) + "\n\n\n")
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(videos))  
      alert('Video Saved Successfully')
    } catch (e) {
      alert('Failed to save the video')
    }
  }

  const testUpdateVideos = async (videos) => {
      setVideos(videos)
      return
  }

  // Adds a new video
  const handleAddNewVideo = async ( source ) => {
      setVideoSource(source);
      if (source != null){
        const new_video = new VideoEntity(uuid4(), 'Video Demo', source)  // New video Created
        //setVideos([...videos, new_video])
        await testUpdateVideos([new_video, ...videos])
        saveVideos() // Save the video
      }
  }

  // Sets the camera to ready
  const onCameraReady = () => {
    setIsCameraReady(true);
  };

  /* Takes a picture
  const takePicture = async () => {
    if (cameraRef.current) {
      const options = { quality: 0.5, base64: true, skipProcessing: true };
      const data = await cameraRef.current.takePictureAsync(options);
      const source = data.uri;
      
      if (source) {
        await cameraRef.current.pausePreview();
        setIsPreview(true);
        console.log("picture source", source);
      }
    }
  };*/

  // Record a video
  const recordVideo = async () => {
    console.log("Recording has Started")
    if (cameraRef.current) {
      try {
        const videoRecordPromise = cameraRef.current.recordAsync();
        if (videoRecordPromise) {
          setIsVideoRecording(true);
          const data = await videoRecordPromise;
          const source = data.uri;
          if (source != null) {
            setIsPreview(true);
            handleAddNewVideo( source );
          }
        }
      } catch (error) {
        console.warn(error);
      }
    }
    console.log("Recording has ended")
  };

  // Stops the recording
  const stopVideoRecording = () => {
    if (cameraRef.current) {
      setIsPreview(false);
      setIsVideoRecording(false);
      cameraRef.current.stopRecording();

    }
  };

  // Flips the camera
  const switchCamera = () => {
    if (isPreview) {
      return;
    }
    setCameraType((prevCameraType) =>
      prevCameraType === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    );
  };

  // Cancels preview
  const cancelPreview = async () => {
    await cameraRef.current.resumePreview();
    setIsPreview(false);
    setVideoSource(null);
  };

  // Adds a cancel preview button
  const renderCancelPreviewButton = () => (
    <TouchableOpacity onPress={cancelPreview} style={styles.closeButton}>
      <View style={[styles.closeCross, { transform: [{ rotate: "45deg" }] }]} />
      <View
        style={[styles.closeCross, { transform: [{ rotate: "-45deg" }] }]}
      />
    </TouchableOpacity>
  );
  
  // Plays the video
  const renderVideoPlayer = () => (
    <Video
      source={{ uri: videoSource }}
      shouldPlay={true}
      style={ {width: Dimensions.get('screen').width, height: Dimensions.get('screen').height}}
    />
  );
  
 // Indicates that video is being recorded
  const renderVideoRecordIndicator = () => (
    <View style={styles.recordIndicatorContainer}>
      <View style={styles.recordDot} />
      <Text style={styles.recordTitle}>{"Recording..."}</Text>
    </View>
  );

  const renderCaptureControl = () => (
    <View style={styles.control}>
      <TouchableOpacity disabled={!isCameraReady} onPress={switchCamera}>
        <Text style={styles.text}>{"Flip"}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.9}
        disabled={!isCameraReady}
        onLongPress={recordVideo}
        onPressOut={stopVideoRecording}
        //onPress={takePicture}  Not Pictures Allowed ATM
        style={styles.capture}
      />
    </View>
  );
  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text style={styles.text}>No access to camera</Text>;
  }
  return (
    <SafeAreaView style={styles.container}>
      <Camera
        ref={cameraRef}
        style={styles.container}
        type={cameraType}
        flashMode={Camera.Constants.FlashMode.on}
        onCameraReady={onCameraReady}
        onMountError={(error) => {
          console.log("camera error", error);
        }}
      />
      <View style={styles.container}>
        {isVideoRecording && renderVideoRecordIndicator()}
        {videoSource && renderVideoPlayer()}
        {isPreview && renderCancelPreviewButton()}
        {!videoSource && !isPreview && renderCaptureControl()}
      </View>
    </SafeAreaView>
  )
};

export default CameraScreen


const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  closeButton: {
    position: "absolute",
    top: 35,
    left: 15,
    height: closeButtonSize,
    width: closeButtonSize,
    borderRadius: Math.floor(closeButtonSize / 2),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#c4c5c4",
    opacity: 0.7,
    zIndex: 2,
  },
  media: {
   ...StyleSheet.absoluteFill,
  },
  closeCross: {
    width: "68%",
    height: 1,
    backgroundColor: "black",
  },
  control: {
    position: "absolute",
    flexDirection: "row",
    bottom: 38,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  capture: {
    backgroundColor: "#f5f6f5",
    borderRadius: 5,
    height: captureSize,
    width: captureSize,
    borderRadius: Math.floor(captureSize / 2),
    marginHorizontal: 31,
  },
  recordIndicatorContainer: {
    flexDirection: "row",
    position: "absolute",
    top: 25,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    opacity: 0.7,
  },
  recordTitle: {
    fontSize: 14,
    color: "#ffffff",
    textAlign: "center",
  },
  recordDot: {
    borderRadius: 3,
    height: 6,
    width: 6,
    backgroundColor: "#ff0000",
    marginHorizontal: 5,
  },
  text: {
    color: "#fff",
  },
});
