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














