abstract class Animal{
    abstract Noise():void;
}

class Pig extends Animal{
    Noise(): void {
        console.log("Pig Grunts");
    }
}

class Dog extends Animal{
    Noise(): void {
        console.log("Dog Barks");
    }
}

class Tiger extends Animal{
    Noise(): void {
        console.log("Tiger Roars");
    }
}

let arr:Animal[]=[new Pig(),new Dog()];

arr.push(new Tiger());

for(let a of arr){
    a.Noise();
}