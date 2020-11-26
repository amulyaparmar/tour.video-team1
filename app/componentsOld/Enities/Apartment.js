/**
 * This class Modesl an Apartment Entity
 * Note: Inputs are not sanitized in these classes
 * so be careful when using them.
 */

 class Apartment {
     constructor(id, building_name, street, city, state, postal, image_source){
        this.id = id;
        this.building_name = building_name;
        this.address = new Address(street, city, state, postal)
        this.image_source = image_source
     }

     // Returns the string version of the address
     get address_string(){
         return JSON.stringify(this.address)
     }
 }

 class Address {
     constructor(street, city, state, postal){
         this.street = street;
         this.city = city;
         this.state = state;
         this.postal = postal;
     }
 }