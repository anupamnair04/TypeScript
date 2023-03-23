"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person_1 = require("./Person");
//Object Creation
var p1 = new Person_1.Person("John", "Male", "john@mail.com");
var p2 = new Person_1.Person("Walker", "Male", "walker@mail.com");
var p3 = new Person_1.Person("Pal", "Female", "pal@mail.com");
//Array Of Objects
var people = [p1, p2];
people.push(p3);
people.push(new Person_1.Person("Kia", "Female", "kia@MediaList.com"));
for (var _i = 0, people_1 = people; _i < people_1.length; _i++) {
    var p = people_1[_i];
    p.ListDetails();
    console.log("-------------------------");
}
//toString Method is Called Implicitly
console.log(p1);
