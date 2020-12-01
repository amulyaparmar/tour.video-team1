class SpaceEntity{
    constructor(id, building_id, video_name, source){
        this.id = id;
        this.building_id = building_id;
        this.video_name = video_name;
        this.source = source;
        this.timestamp = Date.now()
    }
}

export default SpaceEntity