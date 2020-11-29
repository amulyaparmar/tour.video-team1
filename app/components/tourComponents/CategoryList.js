import React from 'react';
import { ScrollView, useState, useEffect} from 'react-native';
import NoCategories from './NoCategories';
import Category from './Category';
import { categories } from '../../data/videos'
/**
 * Reminder: Might want to consider using useState to update and save videos
 * @param {} param0 
 */


function CategoryList({spaceVideos, building_id, handleGoToVideoScreen, thumbnail_source}){

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
            <ScrollView>
                {videoCategories}
            </ScrollView>
        )
    }
}

export default CategoryList;