import uva from '../images/uva.jpg'
import quad from '../images/quad.jpg'
import mesacommons from '../images/mesacomons.jpg'

const buildings = [
  {
    id: 1,
    building_name: 'University Village',
    address: {
      street: '555 Campus View',
      city: 'San Diego',
      state: 'CA',
      postal: '92117'
    },
    image_source: uva
  },
  {
    id: 2,
    building_name: 'Mesa Commons',
    address: {
      street: '6470 El Cajon Blvd',
      city: 'San Diego',
      state: 'CA',
      postal: '92117'
    },
    image_source: quad
  },
  {
    id: 3,
    building_name: 'Quad',
    address: {
      street: '554 Campus View',
      city: 'San Diego',
      state: 'CA',
      postal: '92115'
    },
    image_source: mesacommons
  }
]

export default buildings;