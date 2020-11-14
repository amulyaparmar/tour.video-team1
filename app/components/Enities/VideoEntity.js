
class VideoEntity{
    constructor(id, name, source){
        this.id = id
        this.name = name
        this.source = source
        this.timestamp = Date.now()
    }
}

export default VideoEntity