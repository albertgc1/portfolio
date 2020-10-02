export class Project {

    title: String
    description: String
    tools: tools[]

    constructor(title: String, description: String){
        this.title = title
        this.description = description
        this.tools = []
    }

    addTools(tool){
        this.tools.push(tool)
    }

    getUrl(){
        return this.title.toLocaleLowerCase().replaceAll(' ', '-')
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
