// callback hell

//setTimeout(() => {
//    console.log("1");
//    setTimeout(() => {
//        console.log("2");
//        setTimeout(() => {
//            console.log("3");
//            setTimeout(() => {
//                console.log("4");
//            }, 1000);
//        }, 1000);
//    }, 1000);
//}, 1000);


// promise
//function printAfterDelay(num, delay) {
//    return new Promise((resolve) => {
//        setTimeout(() => {
//            console.log(num);
//            resolve();
//        }, delay);
//    });
//}

//promise is introduced to solve callback hell problem
// stages 
//1. pending
//2. fullfilled 
//3. rejected

//printAfterDelay(1, 1000)
//    .then(() => printAfterDelay(2, 1000))
//    .then(() => printAfterDelay(3, 1000))
//    .then(() => printAfterDelay(4, 1000));

// promise consuers
//1. .then(): when promise resolved it will go to .then
//2. .catch(): when promise rejected it will go to .catch

function pro() {
    return new Promise((resolve, rejected) => {
        let payment = "True";
        if (payment == "True") {
            resolve("Dashboard Accessed");
        } else {
            rejected("Dashboard Access Denied");
        }
    })
}

pro().then((message) => {
    console.log(message);
}).catch((error) => {
    console.error(error);
});