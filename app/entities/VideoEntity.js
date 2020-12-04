class VideoEntity{
    constructor(id, building_id, video_name, category ,source){
        this.id = id;
        this.building_id = building_id;
        this.video_name = video_name;
        this.category = category;
        this.source = source;
        this.timestamp = Date.now()
    }
}

export default VideoEntity