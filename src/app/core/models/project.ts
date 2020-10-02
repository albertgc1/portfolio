import Tool from "./tool"

export class Project {

    id: Number
    title: String
    description: String
    tools: Tool[]

    constructor(id: Number, title: String, description: String){
        this.id = id
        this.title = title
        this.description = description
        this.tools = []
    }

    addTools(tool: Tool){
        this.tools.push(tool)
    }

}
