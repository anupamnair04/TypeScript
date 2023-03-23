//Default Parameter Function
function greet1(name) {
    if (name === void 0) { name = "seed1"; }
    console.log("Welcome" + name);
}
//Function Call
greet1();
greet1("Jack");
//Optional Parameter
function printTotal(marks, grace) {
    var total = 0;
    for (var _i = 0, marks_1 = marks; _i < marks_1.length; _i++) {
        var m_1 = marks_1[_i];
        total += m_1;
    }
    if (grace == undefined) {
        console.log("Total Without Grace:" + total);
    }
    else {
        console.log("Total With Grace:" + (total + grace));
    }
}
//Function Call
//printTotal([50][50][50]);
var m = [50, 50, 50];
printTotal(m, 20);
function f1() {
    console.log("1");
}
function f2() {
    console.log("2");
}
function f3() {
    f1();
    f2();
    console.log("3");
}
f3();
function abc(num6, num5, num4) {
    console.log(num6);
    console.log(num5);
    console.log(num4);
}
abc(20, 30);