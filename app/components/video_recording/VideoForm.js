import React, {useState} from 'react'
import { TextInput, Text, StyleSheet } from 'react-native';


function VideoForm() {
    const [videoInfo, setVideoInfo] = useState(videos)
    const [saved, setSaved] = useState(false)
    const [error, setError] = useState(false)

    useEffect(()=>{
        videos.push(videoInfo)
        fs.writeFile('../../data.json', JSON.stringify(videos), err => {
            if (err) {
                setError(true)    
                throw err
            }else{
                console.log('Media Saved!')
                setSaved(true)
            }
        })

    }, videoInfo)

    function handleInput(input){
        if(input !== ''){
            setVideoInfo(true)
        }
    }
    if (!saved){
        return(
            <View style={styles.container}>
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={text => handleInput(text)}
                    value={value}
                />
            </View>
        )
    }else{
        return(
            <View style={styles.container}>
                <Text style={styles.confirmation}>Saved!</Text>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={() => navigation.navigate('Videos')}
                >
                <Text style={styles.buttonLabel}>Open Library</Text></TouchableOpacity>
            </View>
        )
    }
}
export default VideoForm

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
  },

  confirmation:{
    fontSize: 12
  },

  button:{
    color: '#69bdd2',
    backgroundColor: '#ddd',
    margin: 10,
    padding: 10,
    borderRadius: 10
  },
  buttonLabel:{
    color:'#222',
    fontSize: 24
  }

})