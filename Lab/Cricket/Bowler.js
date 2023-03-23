"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bowler = void 0;
var Player_1 = require("./Player");
//Sub Class
var Bowler = /** @class */ (function (_super) {
    __extends(Bowler, _super);
    //Constructor
    function Bowler(pId, pName, country, nMatches, numWickets) {
        var _this = _super.call(this, pId, pName, country, nMatches) || this;
        _this.numWickets = numWickets;
        return _this;
    }
    //Method Overriding
    Bowler.prototype.DisplayInfo = function () {
        _super.prototype.DisplayInfo;
        console.log("numWickets" + this.numWickets);
    };
    return Bowler;
}(Player_1.Player));
exports.Bowler = Bowler;
