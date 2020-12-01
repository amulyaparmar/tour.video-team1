/**
 * This is some dummy data for testing
 */

const categories = {
  WELCOME :'Welcome',
  FLOOR_PLAN: 'Floor Plan',
  AMENITIES: 'Amenities',
  THANK_YOU: 'Thank You',
  MISCELLANOUS: 'Miscellanous'
}

const videos = [
      {
        id: 1,
        building_id: 1,
        category: categories.WELCOME,
        video_name: 'Welcome',
        source: 'https://storage.googleapis.com/leasemagnets-cloud-storage/sample-intro.mp4',
        timestamp: 1606349860620
      },
      {
        id: 2,
        building_id: 1,
        category: categories.FLOOR_PLAN,
        video_name: '2 Bedrooms',
        source: 'https://storage.googleapis.com/leasemagnets-cloud-storage/2bedroom-sample.mp4',
        timestamp: 1606349860620
      },
      {
        id: 3,
        building_id: 1,
        category: categories.FLOOR_PLAN,
        video_name: '2 Bedrooms',
        source: 'https://storage.googleapis.com/leasemagnets-cloud-storage/2bedroom-sample.mp4',
        timestamp: 1606349860620
      },
      {
        id: 4,
        building_id: 2,
        category: categories.WELCOME,
        video_name: 'Welcome',
        source: 'https://storage.googleapis.com/leasemagnets-cloud-storage/sample-intro.mp4',
        timestamp: 1606349860620
      },
      {
        id: 5,
        building_id: 2,
        category: categories.FLOOR_PLAN,
        video_name: '2 Bedrooms',
        source: 'https://storage.googleapis.com/leasemagnets-cloud-storage/2bedroom-sample.mp4',
        timestamp: 1606349860620
      },
      {
        id: 6,
        building_id: 2,
        category: categories.FLOOR_PLAN,
        video_name: '2 Bedrooms',
        source: 'https://storage.googleapis.com/leasemagnets-cloud-storage/2bedroom-sample.mp4',
        timestamp: 1606349860620
      },
      {
        id: 7,
        building_id: 3,
        category: categories.WELCOME,
        video_name: 'Welcome',
        source: 'https://storage.googleapis.com/leasemagnets-cloud-storage/sample-intro.mp4',
        timestamp: 1606349860620
      },
      {
        id: 8,
        building_id: 3,
        category: categories.FLOOR_PLAN,
        video_name: '2 Bedrooms',
        source: 'https://storage.googleapis.com/leasemagnets-cloud-storage/2bedroom-sample.mp4',
        timestamp: 1606349860620
      },
      {
        id: 9,
        building_id: 3,
        category: categories.FLOOR_PLAN,
        video_name: '2 Bedrooms',
        source: 'https://storage.googleapis.com/leasemagnets-cloud-storage/2bedroom-sample.mp4',
        timestamp: 1606349860620
      },
]

export {
  videos,
  categories
}