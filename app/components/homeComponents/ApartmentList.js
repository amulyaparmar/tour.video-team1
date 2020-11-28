import React from 'react';
import { ScrollView } from 'react-native';
import Apartment  from './Apartment'
import NoApartment from './NoApartments'

function ApartmentList({ apartments, handleTakeTour }){
  
  // If there is at least one apartments return apartments in a list 
  // otherwise return a message
  if(apartments.length > 0){
      apartments = apartments.map(apartment => {
        return <Apartment key={apartment.id}
                          apt_id={apartment.id} 
                          name={apartment.building_name} 
                          address={apartment.address} 
                          source={apartment.image_source}
                          handleTakeTour={handleTakeTour} />
      });
      return (
        <ScrollView>
          {apartments}
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
   
  

export default ApartmentList