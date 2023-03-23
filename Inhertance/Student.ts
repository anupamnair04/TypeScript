import {Person} from "./Person";

//Sub Class
export class Student extends Person{
    qualification:string;

//Constructor
constructor(fn:string, gender:string, email:string, qual:string){
    super(fn,gender,email);
    this.qualification = qual;
}

//Method Overriding
ListDetails(): void {
    super.ListDetails;
    console.log("Qualification"+this.qualification);
}
}