"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Player_1 = require("./Player");
var Batsman_1 = require("./Batsman");
var Bowler_1 = require("./Bowler");
//Create Array Of Objects
var b1 = new Batsman_1.Batsman(1, "Rohit", "India", 245, 3542);
var b2 = new Batsman_1.Batsman(2, "Virat", "India", 396, 4578);
var b3 = new Bowler_1.Bowler(10, "Shami", "India", 234, 200);
var b4 = new Bowler_1.Bowler(11, "Siraj", "India", 156, 150);
var TeamPlayerarr = [b1, b2, new Batsman_1.Batsman(3, "Hardik", "India", 396, 4578), new Bowler_1.Bowler(12, "Chahal", "India", 156, 150)];
TeamPlayerarr.push(new Player_1.Player(4, "Rahul", "India", 100));
for (var _i = 0, TeamPlayerarr_1 = TeamPlayerarr; _i < TeamPlayerarr_1.length; _i++) {
    var tr = TeamPlayerarr_1[_i];
    tr.DisplayInfo();
    console.log("------------------------");
}
console.log(b3);
var p1 = new Player_1.Player(5, "Rahul", "India", 100);
console.log(p1);
