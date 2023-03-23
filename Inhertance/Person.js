"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
var Person = /** @class */ (function () {
    //Constructor
    function Person(fn, gender, email) {
        this.fullName = fn;
        this.gender = gender;
        this.email = email;
    }
    //Member Function
    Person.prototype.ListDetails = function () {
        console.log("Name = " + this.fullName);
        console.log("Gender = " + this.gender);
        console.log("Email = " + this.email);
    };
    return Person;
}());
exports.Person = Person;
