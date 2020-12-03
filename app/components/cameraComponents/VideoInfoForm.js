import React, {useState, useEffect} from 'react'
import { colors , dimensions, fonts, margin, padding } from '../../styles/BaseStyles';
import { View, StyleSheet, TouchableOpacity, Dimensions, Button, Text, TextInput} from 'react-native';
import Constants from 'expo-constants';


function VideoInfoForm({source, default_name, category, building_id}){
    const [videoName, setVideoName] = useState('');

    return(
        <View style={styles.formContainer}>
            <Text>Please provide a name for the video: </Text>
            <TextInput
                placeholder='Video Name'
                value={videoName}
                onChangeText={(text)=> {
                    setVideoName(text)
                }}
                style={styles.inputBox}
          />
        <Text>{videoName}</Text>
        <Text>{category}</Text>
            <TouchableOpacity style={styles.saveButton} onPress={() => alert("Video Saved")}>
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
        backgroundColor: 'rgb(234, 236, 238)',
        borderColor: 'rgb(234, 236, 238)',
        width: 345,
        margin: 15,
        borderRadius: 7,
        height: 35,
        padding: padding.md
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
