export class Player{

    //Data Members
    pId:number;
    pName:string;
    country:string;
    nMatches:number;

    //Constructor
    constructor(pId:number,pName:string,country:string,nMatches:number){
        this.pId = pId;
        this.pName = pName;
        this.country = country;
        this.nMatches = nMatches;
    }

    //Member Function
    DisplayInfo():void{
        console.log("Player Id = "+this.pId);
        console.log("player Name = "+this.pName);
        console.log("Country = "+this.country);
        console.log("Number of Matches = "+this.nMatches);
    }
}