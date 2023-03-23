interface Noise{
    Noise():void;
}

//Provider Class
class Cat implements Noise{
    Noise():void{
        console.log("Cat Meows");
    }
}
class Car implements Noise{
    Noise():void{
        console.log("Car Run");
    }
}
class washinMachine implements Noise{
    Noise():void{
        console.log("washinMachine woosh");
    }
}

//Caller Code
let obj1:Cat = new Cat();
let obj2:Car = new Car();
let obj3:Noise =  new washinMachine();

let arr:Noise[]=[obj1,obj2,obj3];
arr.push(new washinMachine());

for(let ob of arr){
    ob.Noise();
}