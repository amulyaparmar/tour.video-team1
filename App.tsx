import { StatusBar } from 'expo-status-bar';
import React, { useState, useRef } from 'react';
import { Platform, Picker, StyleSheet, Text, View, Button, ScrollView, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Modal } from 'react-native';
import { v4 as uuidv4 } from 'uuid'
//import Modal from 'react-native-modal'
//import {Picker} from '@react-native-picker/picker';

import { Video } from 'expo-av'
import VideoPlayer from 'expo-video-player'
export default function App() {

  interface videoEntity {
    "name" : string,
    "id" : string,
    "url" : string,
    "category" : string,
  }

  /*

  Welcome 
  video.filter((vid)=> vid.category === "Welcome").map((vid, idx )  ...

  Miscellaneous 
  video.filter((vid)=> vid.category === "Miscellaneous").map((vid, idx )  ...

  */

  const [video, setVideoList] = useState<any[]>([])
  const newCategory = useRef()
  const [newObject, setNewObject] = useState({
    name: '',
    id: '',
    url: '',
    category: ''
  })

  const categories = ['Welcome', 'Floor Plan', 'Amenities', 'Thank You', 'Miscellaneous']

  // We built
  /*
  1. This view for video list  & categories
  2. Styling fo rthe project, that you want to carry through to the rest of the app
  3. You want to make when you clikc an video /// video editing screen
  4. Additionally, you want a nice navigation for new video 
  */

  const renderNewInput=()=> {
    return(
    <>
    <Text>Video name: </Text>
    <TextInput
      onChangeText={text => setNewObject({...newObject, 'name': text})}
      value={newObject['name']}
      style={styles.inputBox}
    />
    <Text>Id: </Text>
    <TextInput
      style={styles.inputBox}
      value={newObject['id']}
    />
    <Text>Url: </Text>
    <TextInput
      onChangeText={text => setNewObject({...newObject, 'url': text})}
      value={newObject['url']}
      style={styles.inputBox}
    />

    <Picker onValueChange={(itemValue, itemIndex) => setNewObject({...newObject, 'category': itemValue})}>
      {categories.map((category, index)=>{
        return(
          <Picker.Item label={category} value={category}>
          </Picker.Item>
        )
      })}
    </Picker>

    <Button onPress={addVideo}
      title='Finish'
    />
    </>
    )
  }

   
  function addVideo() {
    const nameInput = newObject['name']
    //const IDInput = uuidv4()
    const urlInput = newObject['url']

    if (nameInput === '') return;
    setVideoList([...video, {"name": nameInput, "id": uuidv4(), "url": "https://uploads-ssl.webflow.com/5e45b17b74507185e599a039/5f716fa43c67c778b286e5e3_Sample%20sizze%20reel%20(1)-transcode.mp4", "category": "Welcome"}])

    setNewObject({name: '',
    id: '',
    url: '',
    category: ''})
  }


  {/* FOR MODAL POP-UP WINDOW
  function WrapperComponent() {
    return(
      <View>
        <Modal isVisible={true}>
          <View
            style={{ flex: 1 }}>
            <Text>I am the modal content!</Text>
          </View>
        </Modal>
      </View>
    )
  }

  function ModalTester() {
    const [isModalVisible, setModalVisible] = useState(false);
    
    const toggleModal = () => {
      setModalVisible(!isModalVisible);
    }
  }

*/}
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
      <View style={styles.redView}>
        <Text style={styles.welcome}>LeaseMagnets Welcome</Text>
      </View>
      
      {/* SEARCH BOX */}
      <View style={styles.searchBox}>
        <View style={styles.searchText}>
          <TextInput
            placeholder='  Search'>
          </TextInput>
        </View>
      </View>

      {/* WELCOME SECTION */}
      <Text style={styles.section}>{"\n"}WELCOME{"\n"}</Text>
      {video.filter((vid)=> vid.category === "Welcome").map((vid, idx )  => {
            return (
              <>
              <View key={idx} style={styles.container}>
                <View style={styles.column}>
                  <View style={styles.buttonTitle}>
                    <Button title={vid.name}/>
                  </View>
                <Text>{vid.name}</Text>
                </View>
              </View>
              </>
            );


      })}
     {/* {introduction.map(((video, idx) => { 
      //   return (
      //     <>
      //     <View key={idx} style={styles.container}>
      //       <View style={styles.column}>
      //         <View style={styles.buttonTitle}>
      //           <Button title={video.name}/>
      //         </View>
      //       <Text>{video.name}</Text>
      //       </View>
      //     </View>
      //     </>
      //   )
      // }))} 
      */}
      

      {/* FLOOR PLAN SECTION */}
      <Text style={styles.horizontal_lines}>______________________________________________</Text>
      <Text style={styles.section}>FLOOR PLAN{"\n"}</Text>
      <View style={styles.container}>
        {floor_plan.map(((video, idx) => {
          return (
            <>
            <View key={idx}  style={styles.container}>
              <View style={styles.column}>
                <View style={styles.videoView}>
                  <VideoPlayer
                    width= {100}
                    height= {125}
                    videoProps={{
                      shouldPlay: true,
                      resizeMode: Video.RESIZE_MODE_CONTAIN,
                      source: {
                        uri: 'https://uploads-ssl.webflow.com/5e45b17b74507185e599a039/5f95fe348b955b74d1fb8704_commons-intro-transcode.mp4',
                        },
                      }}
                    inFullscreen={false}
                  />
                </View>
                <Text>{video.name}</Text>
              </View>
            </View>
            </>
            )
          }))}
      </View>


      {/* AMENITIES SECTION */}
      <Text style={styles.horizontal_lines}>______________________________________________</Text>
      <Text style={styles.section}>AMENITIES{"\n"}</Text>
      <View style ={styles.container}>
        {amenities.map(((video, idx) => {
        return (
          
          <View key={idx}  style ={styles.container}>
            <View style={styles.column}>
              <View style={styles.videoView}>
                <VideoPlayer
                  width={100}
                  height={125}
                  videoProps={{
                    shouldplay: true,
                    resizeMode: video.RESIZE_MODE_CONTAIN,
                    source:{
                      uri: 'https://uploads-ssl.webflow.com/5e45b17b74507185e599a039/5f95fe348b955b74d1fb8704_commons-intro-transcode.mp4',   
                    },
                  }}
                inFullscreen={false}
                />
                <Text style={styles.names}>{video.name}</Text>
              </View>
            </View>
          </View>

        );
        }))}
      </View>
      

      {/* THANK YOU SECTION */}
      <Text style={styles.horizontal_lines}>______________________________________________</Text>
      <Text style={styles.section}>THANK YOU{"\n"}</Text>
      <View style={styles.container}>
      {thank_you.map(((video, idx) => {
        return (
          <View key={idx} style ={styles.container}>
            <View style={styles.column}>
              <View style={styles.videoView}>
                <VideoPlayer  
                  width= {100}
                  height={125}
                  videoProps={{
                    shouldPlay: false,
                    resizeMode: Video.RESIZE_MODE_CONTAIN,
                    source: {
                      uri: 'https://uploads-ssl.webflow.com/5e45b17b74507185e599a039/5f95fe348b955b74d1fb8704_commons-intro-transcode.mp4', 
                    },
                  }}
                  inFullscreen={false}
                />
                <Text style={styles.names}>{video.name}</Text>
              </View>
            </View>
          </View>
        )
      }))}
      </View>


      {/* MISCELLANEOUS SECTION */}
      <Text style={styles.horizontal_lines}>______________________________________________</Text>
      <Text style={styles.section}>MISCELLANEOUS{"\n"}</Text>
      <View style={styles.container}>
      {miscellaneous.map(((video, idx) => {
        return (
          <View style ={styles.container}>
            <View style={styles.column}>
              <View style={styles.videoView}>
                <VideoPlayer 
                  width= {100}
                  height= {125}
                  videoProps={{
                    shouldPlay: true,
                    resizeMode: Video.RESIZE_MODE_CONTAIN,
                    source: {
                      uri: 'https://uploads-ssl.webflow.com/5e45b17b74507185e599a039/5f95fe348b955b74d1fb8704_commons-intro-transcode.mp4',
                    },
                  }} 
                inFullscreen={false}
                />
                <Text style={styles.names}>{video.name}</Text>
              </View>
            </View>
          </View>
        )
      }))}
      </View>
      {/* <NewInput /> */}
      {renderNewInput()}
    <StatusBar style="auto" />
    <Text style={styles.horizontal_lines}>______________________________________________</Text>
    <View style = {styles.container}>
      
      <View style={styles.addButton}>
        <Button 
          style = {styles.plus} 
          title="+"></Button>
      </View>
    </View>
    <Button 
      onPress={addVideo}
      title="Add a video">    
    </Button>
    <Text>Add New Floor Plan</Text>
    {/*
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <>
        <Text>Video name: </Text>
        <TextInput
          style={styles.inputBox}
          placeholder= 'e.g. Main Bedroom'
        />
        </>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
    */}
      {/*
    onChangeText={text => setText(text)}
    value={text}

    <Text>Url: </Text>
    <TextInput
      onChangeText={text => setText(text)}
      value={text}
    />
    <Button onClick={addVideo}>Finish</Button>
    */}
    
  
    {/* ERR0RS WITH TOGGLE MODAL
      <View style={{flex: 1}}>
        <Button 
          title = "Show modal"
          onPress={toggleModal}
        />
        <Modal isVisible={isModalVisible}>
          <View style={{flex: 1}}>
            <Text>Hello!</Text>
            <Button 
              title="Hide modal"
              onPress={toggleModal}
            />
          </View>
        </Modal>
      </View>
    */}
    </ScrollView> 
  )
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    //justifyContent: 'center',
    marginLeft: 7,
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
    justifyContent: 'center',
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
    flex: 1,
    flexDirection: 'row',
    fontSize: 16,
    paddingLeft: 10,
    marginLeft: 10,
    marginTop: 1,
    fontWeight: 'bold',
  },
  horizontal_lines: {
    margin: 7,
  }, 
  welcome: {
    fontWeight:"bold",
    color: 'white',
    fontSize: 25,
    marginTop: 50,
    marginLeft: 15,
  },
  names: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    fontSize: 15,
    //paddingLeft: 10,
  },
  redView: {
    width: 450,
    height: 90,
    backgroundColor: "rgb(255, 47, 47)",
  },
  videoView:{
    width: 100,
    height: 125,
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 10,
    fontSize: 10,
  },
  inputBox: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 8,
    margin: 10,
    width: 200,
  },
  searchBox: {
    borderWidth: 1,
    backgroundColor: 'rgb(234, 236, 238)',
    borderColor: 'rgb(234, 236, 238)',
    width: 345,
    margin: 15,
    borderRadius: 7,
    height: 35,
  },
  searchText: {
    fontSize: 35,
    color: 'rgb(128, 139, 150)',
    margin: 8,
  },
});
