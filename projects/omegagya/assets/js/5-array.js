// list a group of friends
var friend1 = "Måns"
var friend2 = "Sten"
var friend3 = "Claes"
var friend4 = "Mona"

//list a group of friends usin an array
var friends = ["Måns","Sten","Claes","Mona"] // strings, numbers, booleans; objects

var friends = ["Måns","Sten","Claes","Mona"];

console.log(friends[2]=" <3" + friends[3])

function newName() {
    friends[2]= "Göran";
}
newName();

console.log(friends[2]+" <3"+ friends[2]);


var colors = [];
var colors = new Array
var randomArray = ["string", 31, true, false];
console.log(randomArray.lenght);



// push(), pop(), shift(), unshift(), indexOf(), slice()

// push() - add an item at the ends of an array

colors = ["red, green, blue"];
console.log(colors);
colors.push("purple");
console.log(colors);


// pop() - removes an item at the end of the array

colors .pop();
console.log(colors);


// unshift - add an item in thne beggining of an array
colors.unshift("yellow");
console.log(colors);

// shift - re,moves an itenm in the begginijng aof an array
colors.shift();
console.log(colors);

// indexOf()
console.log(colors.indexOf("green")); //index of an itemin an array
console.log(colors.indexOf("cyan")); //if the value doesnt exist its says -1

//slice() - copy parts of an array
var fruits = ["banana", "orange", "lemon","Mango", "pear"];

// copy the 2nd and 3rd fruit
var citrus = fruits.slice(1, 2);
console.log(citrus);

var copyFruits = fruits.slice(fruits);
console.log(copyFruits);



//tests



var cars =["audi", "volvo", "ford", "ferrari", "landa", "LADA", "citroen"];
for(var i = 0; i< cars.length; i++){
    console.log(cars[i]);
} 

// JavaScript provides an easy built-in way of iteratin over an array: forEach, a method used on arrays and is a part of the array prototype
// Concept: yourArray.forEach(aFunction); Most often written with an anonymous function
// forEach is more common to use when iterating an array
var countries = ["Sweden", "Norway", "Finland", "Denmark", "Island"];
countries.forEach(function(country) {
    console.log(country); // the argument, country, holds each value in the array and loops through every single one 
});
 function countryList(country) {
    console.log("**************");
    console.log(country);
    console.log("**************");
    console.log("");
}
 countries.forEach(countryList);
 // Skillnaden mellan en for loop och forEach method är att i for-loopen hanterar vi ett nummer medan forEach är en inbyggd metod för
// en array, vilket loopar igenom varje värde i den specifika arrayen
// Om det vi vill loopa igenom _inte_ är en array, så fungerar alltså inte forEach
 /*
***************************************
Arrays - iteration - forEach: muntlig övning
***************************************
*/
 var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var color = ["red", "green", "blue", "orange"];
 number.forEach(function(color) { // color is not a good argument since we're not dealing with colors here
    if(color % 3 === 0) {
        console.log("Inside the forEach method: " + color);
    }
});
 // Testa att skriva en for loop för detta istället
for(var i = 0; i < number.length; i++) {
    if(number[i] % 3 === 0) {
        console.log("Inside the for loop: " + number[i]);
    }
}
 /*
***************************************
Arrays - Skriftlig övning
***************************************
*/
 // Write a function printReverse() that takes an array
// as an argument and prints out the elements in the array 
// in reverse order (don't actually reverse the array itself)
 function printReverse(myArr) {
    for(var i = myArr.length -1; i >= 0; i--) {
        console.log(myArr[i]);
    }
    // console.log(myArr.reverse());
}
 printReverse([1,2,3,4,5,6]);
 // Write a function isIdentical() which takes an array as an argument
// and returns true if all elements in the array are identical
 function isIdentical(array) {
    var first = ???;
}
 console.log(isIdentical([1,1,1,1,1])); // true
console.log(isIdentical([1,1,1,2,2])); // false 











