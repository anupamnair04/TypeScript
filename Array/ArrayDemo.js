var numbe = [10, 20, 30];
console.log("No of Elements:" + numbe.length);
console.log(numbe[0]);
//Traditional For Loop
console.log("Usig Traditional For Loop");
for (var i = 0; i < numbe.length; i++) {
    console.log(numbe[i]);
}
//Print Entire Array
console.log(numbe);
//Push Method used to add element into the Array
//For-Of Loop used to Iterate Sequentially over collection in a forward direction
var fruits = ["Mango", "Apple", "Grapes"];
fruits.push("Strawberry");
console.log(fruits);
console.log("After Sorting");
fruits.sort();
//Traditional For Loop
console.log("Usig Traditional For Loop");
for (var i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
//For Of Loop
for (var _i = 0, fruits_1 = fruits; _i < fruits_1.length; _i++) {
    var f = fruits_1[_i];
    console.log(f);
}
