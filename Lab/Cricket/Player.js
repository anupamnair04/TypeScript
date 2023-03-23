"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
var Player = /** @class */ (function () {
    //Constructor
    function Player(pId, pName, country, nMatches) {
        this.pId = pId;
        this.pName = pName;
        this.country = country;
        this.nMatches = nMatches;
    }
    //Member Function
    Player.prototype.DisplayInfo = function () {
        console.log("Player Id = " + this.pId);
        console.log("player Name = " + this.pName);
        console.log("Country = " + this.country);
        console.log("Number of Matches = " + this.nMatches);
    };
    return Player;
}());
exports.Player = Player;
