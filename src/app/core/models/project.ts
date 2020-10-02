export class Project {

    id: Number
    title: String
    description: String
    tools: tools[]

    constructor(id: Number, title: String, description: String){
        this.id = id
        this.title = title
        this.description = description
        this.tools = []
    }

    addTools(tool){
        this.tools.push(tool)
    }

}

export enum tools {
    angular = 'Angular',
    bootstrap = 'Bootstrap',
    css = 'Bss',
    html5 = 'Html5',
    java = 'Java',
    js = 'Js',
    laravel = 'Laravel',
    node = 'Node',
    php = 'Php',
    react = 'React',
    vue = 'Vue',
}
