import * as React from 'react';
import { ScrollView} from 'react-native';
import Apartment  from './Apartment'

function ApartmentList({ apartments }){

  // Create the List of Apartments in JSX form
  const apartmentList = apartments.map(apartment => {
      return <Apartment key={apartment.id} name={apartment.building_name} address={apartment.address} source={apartment.image_source} />
  })

  // Returns the list within a ScrollView
  return (
    <ScrollView>
        {apartmentList}
   </ScrollView>
  )
}

export default ApartmentList