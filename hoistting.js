console.log(hello);
var hello = 'world';
// this will log, hello is undefined. var not initialized.


var needle = 'haystack';
test();
function test() {
    var needle = 'magnet';
    console.log(needle);
}
// this will not log either because  test was not defined before it was invoked. 
//correction: magnet was loged due because the function was hoisted above where test was invoked. 


var brendan = 'super cool';
function print() {
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

// super cool will be loged because the functions was never called. 

var food = 'chicken';
console.log(food);
eat();
function eat() {
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
/* this will log 'chicken' first
because it is logged before the eat
functions is invoked. then it will log 'half-chicken*/

mean();
console.log(food);
var mean = function () {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
// this will log undefined because it call the function mean before the variable was initialized. 
// correction. typeError becasue mean has not yet been declared as a function.


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
/* this will first console undefined since var genre is not
yet initialezed before it is logged. 
the function is hoisted to the top so the function
will console 'rock' and then 'r&b'
then, the last console log is ran and prints 'disco' */

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
/* dojo is assigned and then logged on second line
it logs 'san jose'
since the learn function is hoisted, it will read the function
and have it available when it's called on the third line. 
it will then log 'seattle'
then 'burbank'
finally, it will log 'san jose' once more
because it is outside of the functions scope. */


//BONUS
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students) {
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if (dojo.students > 50) {
        dojo.hiring = true;
    }
    else if (dojo.students <= 0) {
        dojo = "closed for now";
    }
    return dojo;
}
/* since this function makeDojo is hoisted, 
with the arguements, 'name' and 'students',
it will first pass with the arguements'chicago and 65 */

/* correction: with students at zero, it tries
to assign dojo to 'closed for now' and gives an typeError
because dojo is a const */