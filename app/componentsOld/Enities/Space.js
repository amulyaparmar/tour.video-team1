/**
 * This class Models a space Entity AKA Video Entity
 */


class Space{
    constructor(id, apt_id, space_name, source){
        this.id = id;
        this.apt_id = apt_id;
        this.space_name = space_name;
        this.source = source;
        this.timestamp = Date.now()
    }
}

export default Space