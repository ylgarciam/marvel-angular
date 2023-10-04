export class Character {
    id:string;
    name:string;
    description:string;
    modified:string;

    constructor(id:string, name:string, description:string, modified:string){
        this.id = id;
        this.name = name;
        this.description = description;
        this.modified = modified;

    }
}