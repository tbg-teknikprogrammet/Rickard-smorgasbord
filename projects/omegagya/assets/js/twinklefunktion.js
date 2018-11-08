//föreldern sjunger
// console.log("blinka lilla stjärna där")
// console.log("blinka lilla stjäran där")
// console.log("hur jag undrar var du är")
// console.log("fjärrran lockar du min syn")
// console.log("likt en diamant i skyn")

// //barnet nynnar med
// console.log("blinka lilla stjärna där")
// console.log("blinka lilla stjäran där")
// console.log("hur jag undrar var du är")
// console.log("fjärrran lockar du min syn")
// console.log("likt en diamant i skyn")

// //barnet sjunger nu själv
// console.log("blinka lilla stjärna där")
// console.log("blinka lilla stjäran där")
// console.log("hur jag undrar var du är")
// console.log("fjärrran lockar du min syn")
// console.log("likt en diamant i skyn")

// this code is wet! write everything twice
//eftersträva att eer kod är dry dont repeat yourself

function twinkletwinkle() {
   console.log("blinka lilla stjärna där")
   console.log("blinka lilla stjäran där")
   console.log("hur jag undrar var du är")
   console.log("fjärrran lockar du min syn")
   console.log("likt en diamant i skyn")

}
//call a function
twinkletwinkle();
twinkletwinkle();
twinkletwinkle();

//deklarera en funktion
function doSomething() {
    console.log("H")
    console.log("xd")
}

doSomething();
//visar inehållet i funktionen
doSomething

//parameter och argument
function square(num, num1) {
    console.log(num*num1);
}

square(5,6);

function greet (person1, person2, person3, person4){
    console.log("hej, " + person1 + "!");
    console.log("hej, " + person2 + "!");
    console.log("hej, " + person3 + "!");
    console.log("hej, " + person4 + "!");
}

greet ("Rickard", "Boris", "Jonis", "Alfred");



function square(x){
    return x * x;
}

console.log ("4 squared is " + squared(4));

//return kan endast returnera ett värde per funktion (det första)
//kan bara returnera ett värde per funktion

var result = squared(10);
console.log



//test

function isEven(x) {
    if(x % 2 === 0) {
        return true;
    } 
    else{
        return false;
    }
}

Console.log(isEven(1945));


//test 2

function kebabToSnake(str){
    var MyString = str.replace(/-/g, "_");// replace makes a new copy of that string 
    return MyString;
}


kebabToSnake("Hej-jag-heter-Rickard");


// js scope

function localScope() {
    var showScope = 31;
    console.log(showScope);
}

localScope();
console.log(showScope);

var showScope = "i'm aglobalvarible"; // global varible === Accesiblein the entire script
console.log(showScope);

var showScopeY = 99; //Global varible
function localScopeY() {
    showScopeY = 100;
    console.log(showScopeY);
}

console.log(showScopeY); //Global varible
localScopeY();
console.log(showScopeY);



