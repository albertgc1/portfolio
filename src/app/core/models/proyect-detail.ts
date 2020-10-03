export class ProjectDetail {

    id: String
    title: String
    description: String
    photo: String
    vertical: Boolean

    constructor(title: String, description: String, photo: String, vertical: Boolean){
        this.title = title
        this.description = description
        this.photo = photo
        this.vertical = vertical
        this.id = this.getUrl()
    }

    getUrl(){
        return this.title.toLocaleLowerCase().replaceAll(' ', '-')
    }

}