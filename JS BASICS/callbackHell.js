console.log("callback hell example");

/*
for example: lets say you want to make a pizza. Following are the steps:
    1. get the flour - 2 sec
    2. make the dough - 2 sec
    3. add the cheese - 1 sec
    4. add toppings - 2 sec
    5. bake the pizza - 2 sec
    6. serve the pizza - 1 sec
*/

const getFlour = () => {
    setTimeout(() => {
        console.log("getting the flour from the market...");
        
        setTimeout(() => {
                console.log("getting the dough ready...");

                setTimeout(() => {
                    console.log("adding the cheese on the dough...");

                    setTimeout(() => {
                        console.log("adding the toppings now...");

                        setTimeout(() => {
                            console.log("pizza in baking...");

                            setTimeout(() => {
                                console.log("serving the pizza...");
                            }, 1000);
                        }, 2000);
                    }, 2000);
                }, 1000);
        }, 2000);
    }, 2000);
}


const orderPlaced = (call_back) => {
    console.log("order placed...");
    call_back();
}

orderPlaced(getFlour);


//as you can see the code is difficult to read and maintain with so many nested call backs. This is called callback hell. Can be handled with use of promises.