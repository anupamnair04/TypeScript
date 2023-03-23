import {Player} from "./Player";

//Sub Class
export class Bowler extends Player{
    numWickets:number;

//Constructor
constructor(pId:number,pName:string,country:string,nMatches:number,numWickets:number){
    super(pId,pName,country,nMatches);
    this.numWickets = numWickets;
}

//Method Overriding
DisplayInfo(): void {
    super.DisplayInfo;
    console.log("numWickets"+this.numWickets);
}
}