//Default Parameter Function
function greet1(name:string="seed1"):void{
    console.log("Welcome"+ name);
}

//Function Call
greet1();
greet1("Jack");

//Optional Parameter
function printTotal(marks:number[],grace?:number){
    let total:number=0;

    for(let m of marks){
         total+=m;
    }
    if(grace==undefined){
        console.log("Total Without Grace:"+ total);
    }else{
        console.log("Total With Grace:"+ (total+grace));
    }
}

//Function Call
//printTotal([50][50][50]);
let m:number[]=[50,50,50];
printTotal(m,20);

function f1(){
    console.log("1");
}
function f2(){
    console.log("2");
}
function f3(){
    f1();
    f2();
    console.log("3");
}f3();

function abc(num6:number,num5:number,num4?:number){
    console.log(num6);
    console.log(num5);
    console.log(num4);
}

abc(20,30);