// ejercicio 1.............................................
console.log(hello);                                   
var hello = 'world';                                 

//var hello;
//console.log(hello);  // World                                 
//var hello = 'world';                                 

// ejercicio 2.............................................
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}

//var needle = 'haystack';
//test();
//function test(){
//    var needle = 'magnet';
//    console.log(needle); //magnet
//}

// ejercicio 3.............................................
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

//var brendan = 'super cool';
//function print(){
//    brendan = 'only okay';
//    console.log(brendan); //only okay
//}
//console.log(brendan); //super cool

// ejercicio 4.............................................
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}

//var food = 'chicken';
//console.log(food); //chicken
//eat();
//function eat(){   
//    food = 'half-chicken';
//    console.log(food);  //half-chicken
//    var food = 'gone';  //gone
//}

// ejercicio 5.............................................
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);

//mean(); // indef
//console.log(food);
//var mean = function() {
//    food = "chicken";
//    console.log(food);
//    var food = "fish";
//    console.log(food);
//console.log(food); // indef

// ejercicio 6.............................................
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

//console.log(genre);
//var genre = "disco"; // eleva var genre; // disco
//rewind();
//function rewind() {
//    genre = "rock";
//    console.log(genre);  //rock
//    var genre = "r&b";
//    console.log(genre); //r&b
//}
//console.log(genre);  //disco

// ejercicio 7.............................................
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

//dojo = "san jose";
//console.log(dojo);  //san jose
//learn();
//function learn() {
//    dojo = "seattle";
//    console.log(dojo);   //seattle
//    var dojo = "burbank";
//    console.log(dojo);   //burbank
//}
//console.log(dojo);  //san jose
