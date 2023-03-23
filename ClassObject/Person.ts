export class Person{

    //Data Members
    fullName:string;
    gender:string;
    email:string;

    //Constructor
    constructor(fn:string, gender:string, email:string){
        this.fullName = fn;
        this.gender = gender;
        this.email = email;
    }

    //Member Function
    ListDetails():void{
        console.log("Name = "+this.fullName);
        console.log("Gender = "+this.gender);
        console.log("Email = "+this.email);
    }
}