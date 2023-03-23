"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Student_1 = require("./Student");
//Create Array Of Objects
var s1 = new Student_1.Student("Aryan", "Male", "aryan@mail.com", "BE");
var s2 = new Student_1.Student("Aryan", "Male", "aryan@mail.com", "BE");
var s3 = new Student_1.Student("Aryan", "Male", "aryan@mail.com", "BE");
var studarr = [s1, s2, new Student_1.Student("Priya", "Female", "priya@mail.com", "BE"), new Student_1.Student("Abhi", "Male", "abhi@mail.com", "BE")];
studarr.push(new Student_1.Student("Asha", "Female", "asha@mail.com", "BE"));
for (var _i = 0, studarr_1 = studarr; _i < studarr_1.length; _i++) {
    var s = studarr_1[_i];
    s.ListDetails();
    console.log("------------------------");
}
console.log(s3);
var p5 = new Student_1.Student("Raj", "Male", "raj@mail.com", "BE");
console.log(p5);
