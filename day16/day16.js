//disadvantages of promise chaining 

//why use async and await:-
//1. to avoid the promise chaining (multiple .then methods)
//2. to manage the async code workflow better then promises

//const pro = new Promise((res,rej)=>{
//    setTimeout(()=>{
//        res("promise resolved")
//    },3000)
//})
//function getData(){

//}
//getData()


//Async and Await 
//1. async func always returns a promise. 
//2. to manage the async code workflow better then promises
//3. it pauses the async func untill the promise returns a result 
//await : it only used inside the async function
//it always present infront of promise

//const pro = new Promise((res,rej)=>{
//    setTimeout(() => {
//        let payment = false;
//        if (payment)
//            res("Payment Done");
//        else
//            rej("Payment failed")
//    }, 3000);
//})

//async function getData() {
//    try {
//        const value = await pro;
//        console.log(value);
//        console.log("Dashboard Access given");
//    }
//    catch(error){
//        console.log(error);
//        console.log("Access denied");
//    }
//}
//getData();

//API key: access token, which gives you access to use the api

//fetch('hptts://jsonplaceholder.typicode.com/todos/1')
//      .then(response => response.json())
//      .then(data => console.log(data))

//async function fetchData(){
//    try{
//    const response= await fetch('https://jsonplaceholder.typicode.com/users');
//    const data = await response.json();
//    return data;
//    }catch(error){
//        console.error(error);
//    }
//}
//fetchData();
//.then(data => console.log)

async function getData(){
    const result = await fetchData();
    console.log(result)
}
getData()

async function fetchData(city){
    const API_Key="882e9a6325b7f851d5b0639d66ef37bf";
    try{
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_Key}&units=metric');
    const data = await response.json();

    console.log(city);
    console.log("Temp:",data.main.temp);
    console.log("Humidity:",data.main.humidity);

    }catch(error){
        console.error(error);
    }
}
fetchData("Gurugram")