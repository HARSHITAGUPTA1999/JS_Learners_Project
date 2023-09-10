//printing on console
console.log("welcome");


//normal way of creating functions
console.log('=====NORMAL FUNCTIONS======');
function greet1(){
    console.log("Hello! warm greetings !!");
}

function add(x,y){
    return x+y;
}

greet1();
console.log("sum is : " + add(5,10));


//arrow function
console.log('=====ARROW FUNCTIONS======');
const greet2 = (name) => {
    console.log("Hello! warm greetings " + name + " !!");
}

const addition = (x,y) => {
    return x+y;
}

greet2("harshita");
console.log("sum is : " + addition(20,10));


console.log('=====FLOW OF JS PROGRAM======');
//flow of the javascript program - synchronous ( line by line execution)
console.log("task 1 executed");


console.log("task 2 executed");


//now lets say an async operations comes - how will this be handled by js
setTimeout(() => {
    console.log("task 2.2 will be executed here");
}, 1000);


console.log("task 3 executed");







