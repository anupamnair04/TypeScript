import {Person} from "./Person";
import {Student} from "./Student";

//Create Array Of Objects
let s1:Student = new Student("Aryan","Male","aryan@mail.com","BE");
let s2:Student = new Student("Aryan","Male","aryan@mail.com","BE");
let s3:Student = new Student("Aryan","Male","aryan@mail.com","BE");

let studarr:Student[]=[s1,s2,new Student("Priya","Female","priya@mail.com","BE"),new Student("Abhi","Male","abhi@mail.com","BE")]
    
studarr.push(new Student("Asha","Female","asha@mail.com","BE"));

for (let s of studarr){
    s.ListDetails();
    console.log("------------------------");
}
console.log(s3);

let p5:Person = new Student("Raj","Male","raj@mail.com","BE");
console.log(p5);