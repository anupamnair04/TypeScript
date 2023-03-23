let num:number[]=[10,20,30];
console.log("No of Elements:"+num.length);
console.log(num[0]);

//Traditional For Loop
console.log("Usig Traditional For Loop");
for(let i=0; i<num.length; i++){
    console.log(num[i]);
}

//Print Entire Array
console.log(num);

//Push Method used to add element into the Array
//For-Of Loop used to Iterate Sequentially over collection in a forward direction
let fruits:string[]=["Mango","Apple","Grapes"];
fruits.push("Strawberry");
console.log(fruits);
console.log("After Sorting");
fruits.sort();

//Traditional For Loop
console.log("Usig Traditional For Loop");
for(let i=0; i<fruits.length; i++){
    console.log(fruits[i]);
}

//For Of Loop
for(let f of fruits){
    console.log(f);
}