import React from 'react';
import { ScrollView } from 'react-native';
import Building  from './Building'
import NoApartment from './NoBuildings'

function BuildingList({ buildings, handleGoToCatScreen }){
  
  // If there is at least one Buildings return Buildings in a list 
  // otherwise return a message
  if(buildings.length > 0){
      buildings = buildings.map(building => {
        return <Building key={building.id}
                          building_id={building.id} 
                          name={building.building_name} 
                          address={building.address} 
                          source={building.image_source}
                          handleGoToCatScreen={handleGoToCatScreen} />
      });
      return (
        <ScrollView>
          {buildings}
        </ScrollView>
      );
  }else{
      return(
        <ScrollView>
          <NoApartment />
        </ScrollView>
    );
  } 
}
   
  

export default BuildingList