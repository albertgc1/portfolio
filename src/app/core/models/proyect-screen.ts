export class ProjectScreen {

    id: String
    title: String
    description: String
    photo: String
    createdAt: Number
    photos: Array<String>

    constructor(title: String, description: String, photo: String, photos: Array<String>){
        this.title = title
        this.description = description
        this.photo = photo
        this.createdAt = Date.now()
        this.photos = photos
        this.id = this.getUrl()
    }

    getUrl(){
        return this.title.toLocaleLowerCase().split(' ').join('-')
    }

}