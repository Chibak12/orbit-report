export class Satellite {
    name: string;
    orbitType: string;
    type:string;
    operational: boolean;
    launchDate:string;

    constructor(name:string, type:string,operational:boolean,orbitType:string,launchDate:string){
        this.name=name;
        this.type=type;
        this.operational=operational;
        this.orbitType=orbitType;
        this.launchDate=launchDate;
    }

    shouldShowWarning(): boolean {
        return this.type === 'Space Debris';

    }

    
}