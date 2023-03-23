//Provider Class
var Cat = /** @class */ (function () {
    function Cat() {
    }
    Cat.prototype.Noise = function () {
        console.log("Cat Meows");
    };
    return Cat;
}());
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.Noise = function () {
        console.log("Car Run");
    };
    return Car;
}());
var washinMachine = /** @class */ (function () {
    function washinMachine() {
    }
    washinMachine.prototype.Noise = function () {
        console.log("washinMachine woosh");
    };
    return washinMachine;
}());
//Caller Code
var obj1 = new Cat();
var obj2 = new Car();
var obj3 = new washinMachine();
var arr = [obj1, obj2, obj3];
arr.push(new washinMachine());
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var ob = arr_1[_i];
    ob.Noise();
}
