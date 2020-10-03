import { ProjectDetail } from './proyect-detail'

export class Project extends ProjectDetail {

    tools: Array<tools>

    constructor(title: String, description: String, photo: String= '', vertical: Boolean= false, tools: Array<tools> = []){
        super(title, description, photo, vertical)
        this.tools = tools
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
