import AddressEntity from './AddressEntity'

class ApartmentEntity {
     constructor(id, building_name, street, city, state, postal, image_source){
        this.id = id;
        this.building_name = building_name;
        this.address = new AddressEntity(street, city, state, postal)
        this.image_source = image_source
     }

     // Returns the string version of the address
     get address_string(){
         return JSON.stringify(this.address)
     }
 }


export default ApartmentEntity
