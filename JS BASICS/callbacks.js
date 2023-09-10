console.log("all about call backs ");

console.log("=====SYNCRONOUS MODE=====");
//a function calling another function in its body
console.log("====using normal function call=====");

function sA(){
    console.log("task A is completed");
    sB();
}

function sB(){
    console.log("task B is completed");
}

sA();



console.log("====using call back function=====");
//callback function - a fuction passed as an argument/parameter to another function 

function s_testA(call_back){
    console.log("testing for func A completed");
    call_back();
}

function s_testB(){
    console.log("testing for func B completed");
}

s_testA(s_testB);





//lets say you want to execute the functions in following order: A - C ( ASYNC OPERATION : takes 2 sec to execute ) - B ( B DEPENDENT ON C)

console.log("=====ASYNCRONOUS MODE=====");
//a function calling another function in its body

console.log("====using normal function call=====");

function A(time){
    console.log("task A is completed");
    if(time == '2ms'){
        C();
    }else{
        console.log("errrroorr");
    }
    console.log("===normal");
    
}

function B(){
    console.log("task B is completed");

}

function C(){
    //this code takes some time to execute
        console.log("task C completed");
        B();
}

//calling the function
A('2ms');


//now what if you did not know the waiting time --> use callback
console.log("====using call back function=====");

function testA(call_back){
    console.log("testing for A is completed");
    call_back(testB);
    console.log("====test"); 
}

function testB(){
    console.log("testing for B is completed");

}

function testC(call_back){
    //this code takes some time to execute
    setTimeout(() => {
       console.log("task C completed"); 
       call_back();
    }, 2000);
      
}

//calling the function
testA(testC);


//so when you pass a callback function as a parameter it becomes the responsibility of testA to execute the callback func testC after completing exectuion for itself first.

//secondly - normal fucntions cant be used for calling other functions in async operations because you dont know how much time will the async operation take ( eg: api call will take), so you cant define a condition for it. 