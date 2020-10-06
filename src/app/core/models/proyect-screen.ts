export class ProjectScreen {

    id: String
    title: String
    description: String
    photo: String
    vertical: Boolean
    createdAt: Number

    constructor(title: String, description: String, photo: String, vertical: Boolean){
        this.title = title
        this.description = description
        this.photo = photo
        this.vertical = vertical
        this.id = this.getUrl()
        this.createdAt = Date.now()
    }

    getUrl(){
        return this.title.toLocaleLowerCase().split(' ').join('-')
    }

}