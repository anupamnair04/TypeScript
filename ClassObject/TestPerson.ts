import {Person} from "./Person";

//Object Creation
let p1:Person = new Person("John","Male","john@mail.com");
let p2:Person = new Person("Walker","Male","walker@mail.com");
let p3:Person = new Person("Pal","Female","pal@mail.com");

//Array Of Objects
let people:Person[]=[p1,p2];
people.push(p3);
people.push(new Person("Kia","Female","kia@MediaList.com"));

for(let p of people){
    p.ListDetails();
    console.log("-------------------------");
}

//toString Method is Called Implicitly
console.log(p1);