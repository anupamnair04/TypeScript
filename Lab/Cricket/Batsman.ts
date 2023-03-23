import {Player} from "./Player";

//Sub Class
export class Batsman extends Player{
    numRuns:number;

//Constructor
constructor(pId:number,pName:string,country:string,nMatches:number,numRuns:number){
    super(pId,pName,country,nMatches);
    this.numRuns = numRuns;
}

//Method Overriding
DisplayInfo(): void {
    super.DisplayInfo;
    console.log("numRuns"+this.numRuns);
}
}