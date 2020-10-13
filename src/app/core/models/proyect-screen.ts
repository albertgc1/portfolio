export class ProjectScreen {

    id: String
    title: String
    description: String
    createdAt: Number
    photos: Array<String>

    constructor(title: String='', description: String='', photos: Array<String>=[]){
        this.title = title
        this.description = description
        this.createdAt = Date.now()
        this.photos = photos
        this.id = this.getUrl()
    }

    getUrl(){
        return this.title.toLocaleLowerCase().split(' ').join('-')
    }

}