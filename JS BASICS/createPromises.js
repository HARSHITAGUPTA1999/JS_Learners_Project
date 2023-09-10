console.log("all about creating and managing your own promises");

/* example: all are async functions
1. createOrder(cart) - 3 sec
2. makePayment(orderId) - 2 sec
3. showOrderSummary(paymentInfo) - 0 sec

*/


cart = ["shirts","sweaters","socks"];

const promise = createOrder(cart);
// console.log(promise);

promise.then((orderId)=>{
    console.log("recieved order id : " + orderId);
    return makePayment(orderId);
})
.then((paymentInfo)=>{
    console.log(paymentInfo);
    return showOrderSummary(paymentInfo);
})
.then((summaryData)=>{
    console.log("summary data is : ", summaryData);
})
.catch((err)=>{
    console.log(err);
})


//async function - 3 sec 
function createOrder(cart){

    //creating a promise - using a promise constructor
    //function - 2 parameters : resolve and reject ( given by js only)
    const pr = new Promise(function(resolve,reject){
        const isValidCart = true;
        if(isValidCart){
            setTimeout(() => {
                 //resolve the promise
                const orderId = "SER123456T";
                resolve(orderId);
            }, 3000); 
        }else{
            //reject the promise
            const err = new Error("cart is not valid. Cant proceed further");
            reject(err);
        }
    });

    return pr;

}


function makePayment(orderId){

    return new Promise(function(resolve,reject){
        setTimeout(() => {
            const paymentInfo = "Payment is successfull for order id : " + orderId; 
            resolve(paymentInfo);
        },2000);
    })
    
}


function showOrderSummary(paymentInfo){
    const data = {
        mssg: "order summary success"
    }
    return data;
}