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
var Animal = /** @class */ (function () {
    function Animal() {
    }
    return Animal;
}());
var Pig = /** @class */ (function (_super) {
    __extends(Pig, _super);
    function Pig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Pig.prototype.Noise = function () {
        console.log("Pig Grunts");
    };
    return Pig;
}(Animal));
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.Noise = function () {
        console.log("Dog Barks");
    };
    return Dog;
}(Animal));
var Tiger = /** @class */ (function (_super) {
    __extends(Tiger, _super);
    function Tiger() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tiger.prototype.Noise = function () {
        console.log("Tiger Roars");
    };
    return Tiger;
}(Animal));
var arr = [new Pig(), new Dog()];
arr.push(new Tiger());
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var a = arr_1[_i];
    a.Noise();
}
