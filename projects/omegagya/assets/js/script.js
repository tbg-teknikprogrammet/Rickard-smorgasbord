// var text ="";
// var i = 0;

// while(i=-3) {
//     text += "numret är" + i + "<br>";
//     i++;
// }

// skriv ut talen -19 till 19
// skriv ut alla jämna tal 10 och 40
// skriv ut alla tal mellan 300 till 333
// skriv alla tal som är delbara med 3 och 5 mellan 4 och 50

// document.getElementById("output").innerHTML = text;


for(var i = -10; i < 19; i++){
    console.log(i);
}

for (var i  = 10; i = 40; i++){
    if(i % 2 == 0) {
        console.log(i)
    }
}

for (var i = 200; i < = 300; i++) {
    if(i % 2 ! == 0) {
        console.log(i)
    }
}

for(i = 5; i<50;){
    if (i % 3 == 0 && i % 5){
        console.log(i)
    }
}

var rows = 5
var cols =5

for(var i = 0; i <rows; i++) {
    for( var j = 0; j < cols j++) { 
        document.write("* ")
    }
    document.write("<br/");  
