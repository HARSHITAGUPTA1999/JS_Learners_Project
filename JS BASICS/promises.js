console.log("all about promises");

//what is a promise - it is an object which represents the eventual completion of an async operations

//now fetching data from api is an asyn operation - always returns a promise

//a promise will always be resolved / rejected that too only once. 

const promise = fetch('https://dummyjson.com/users');

console.log(promise);

//promise chaining  - used to handle the callback hell situation
console.log('======PROMISE CHAINING=====');

promise.then((res)=>{
    console.log("res", res);  //gives raw text
    // console.log(res.json()); //converitng the raw text to json so that we can work with it

    return res.json();   //if you dont return data --> it will cause data issues in your application

})
.then((data)=>{
    console.log("data", data.users);  //finally you can see your data now
})
.catch((error)=>{
    console.log("error: ", error);
})



//another example for promise chaining
cartDetails = ["shirts", "tshirts", "socks", "jeans"];

//create order is an async function - so it will definately return a promise
createOrder(cartDetails)
.then((orderId)=>{
    return makePayment(orderId);
}) 
.then((orderSummary)=>{
    return orderSummary(orderDetails);
})