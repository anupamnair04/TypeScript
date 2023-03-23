import {Player} from "./Player";
import {Batsman} from "./Batsman";
import {Bowler} from "./Bowler";

//Create Array Of Objects
let b1:Batsman = new Batsman(1,"Rohit","India",245,3542);
let b2:Batsman = new Batsman(2,"Virat","India",396,4578);

let b3:Bowler = new Bowler(10,"Shami","India",234,200);
let b4:Bowler = new Bowler(11,"Siraj","India",156,150);

let TeamPlayerarr:Player[]=[b1,b2,new Batsman(3,"Hardik","India",396,4578),new Bowler(12,"Chahal","India",156,150)]
    
TeamPlayerarr.push(new Player(4,"Rahul","India",100));

for (let tr of TeamPlayerarr){
    tr.DisplayInfo();
    console.log("------------------------");
}
console.log(b3);

let p1:Player = new Player(5,"Rahul","India",100);
console.log(p1);