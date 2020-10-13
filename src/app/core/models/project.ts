import { ProjectScreen } from './proyect-screen'

export class Project extends ProjectScreen {

    tools: Array<tools>
    github: String
    type: String
    photo: String

    constructor(title: String='', description: String='', photo: String= '', tools: Array<tools> = [],
                type: String = 'desk', github: String= ''){
        super(title, description)
        this.tools = tools
        this.github = github
        this.type = type
        this.photo = photo
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
    vue = 'Vue'
}
