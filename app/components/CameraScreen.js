import React, {useState, useRef, useEffect} from 'react';
import { View, Modal } from 'react-native';
import { Camera } from "expo-camera";
import uuid4 from "uuid4";

function CameraScreen({visibility}){

    return (
        <Modal visible={visibility}>
        </Modal>
    )
    
}

export default CameraScreen;