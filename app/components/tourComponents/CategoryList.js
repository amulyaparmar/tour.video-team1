import React, {useState}from 'react';
import { ScrollView, StyleSheet, View, TextInput, Text } from 'react-native';
import NoCategories from './NoCategories';
import Category from './Category';
import { categories } from '../../data/videos'
import { colors, margin, padding } from '../../styles/BaseStyles';
/**
 * Reminder: Might want to consider using useState to update and save videos
 * @param {} param0 
 */


function CategoryList({spaceVideos, building_id, handleGoToVideoScreen, thumbnail_source}){
    const [search, setSearch] = useState('')

    // Gets Videos By Category
    const getVideosByCategory = (category) => {
        if(building_id == null){
            console.error("buildingId Missing: Check CategoryList File ")
        }
     
       return spaceVideos.filter(video => {
          return video.category === category && video.building_id === building_id;
       });   
    }


    if(categories === null){
        return (
            <ScrollView>
                <NoCategories />
            </ScrollView>
        )
    }else{

        // Might want to use useState ?
        const videoCategories = Object.values(categories).map(category => {
            const videoOfThisCategory = getVideosByCategory(category);
            return (
                <Category 
                    key={category} 
                    category={category} 
                    videos={videoOfThisCategory} 
                    building_id={building_id} 
                    handleGoToVideoScreen={handleGoToVideoScreen}
                    thumbnail_source={thumbnail_source} 
                />
            )
        })
        return(
            <View style={styles.container}>
                <View style={styles.searchBoxContainer}>
                    <TextInput
                        placeholder='  Search all categories'
                        value={search}
                        onChangeText={(text)=> {
                        setSearch(text)
                    }}
                    style={styles.searchBox}
                />
                </View>
                <View style={styles.categoryList}>
                    {videoCategories}
                </View>
            </View>
        )
    }
}

export default CategoryList;
const styles = StyleSheet.create({
    categoryList:{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
        marginLeft: 25,
    },
    container:{
        flex:1
    },
    searchBoxContainer:{
        marginLeft: margin.md
    },
    searchBox:{
        borderWidth: 1,
        backgroundColor: 'rgb(234, 236, 238)',
        borderColor: colors.black,
        width: 345,
        margin: 15,
        borderRadius: 7,
        height: 35,
        justifyContent: 'center',
        paddingLeft: 20
    }
})