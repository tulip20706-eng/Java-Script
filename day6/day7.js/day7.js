//execution context
var a =10;
console.log(a);
function demo(){
    let b=20
    console.log(b);
}
demo();



let user={
    name:"sneha",
    address:{
        city:"ggn",
        state:"haryana",
    },
    age:"18",
    favcolor:["blue","black","pink"],
    demo:function(){
        return"welcome"
    }

};
console.log(user);
console.log(user.name,user.age,user.address.city,user.demo());
console.log("my name is " + user.name+".my favcolor is " +user.favcolor[0]);

//string literal
console.log(`my name is ${user.name}.my favcolor is ${user.favcolor[0]}`);

//object method
 
const car ={
    make:"mahindra",
    model:"thar"
};

Object.seal(car)//we cant add a new key and value pair but we can change and update existing value
Object.seal(car);
car.model="xuv"
car.color="black";
console.log(car);