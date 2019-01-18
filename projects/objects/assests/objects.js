// create an array of movie
// each movie have a title, rating and hasWatched properties
// Iterate thought the array with a forEach and print out 
//something that looks like:
//this is the output from console.log
//   - you have seen ......... with - 5 stars
//    - you have seen ......... with - 4 stars
//    - you have seen ......... with - 1.8 stars
//    - you have seen ......... with - 19 stars

var array = [
{
    title: "Greger Gregson",
    rating: "19 stars",
    watched: true
},
{
    title: "Adam",
    rating: "100",
    watched: true
},
{
    title: "no, no, no, yes",
    rating: "23",
    watched: false
},
{
    title: "Emanuels Resa",
    rating: "3",
    watched: true
},
{
    title: "1942",
    rating: "73",
    watched: false
}
];

array.forEach(function(element) {
    console.log(element)
});
