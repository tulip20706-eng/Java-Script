//push function
let fruits = ["apple","cherry","banana"];
let newlength = fruits.push("banana");
console.log(newlength)
console.log(fruits)//output: banana apple cherry banabna ;4

//pop
let fruits1 = ["apple","cherry","banana"];
let removed = fruits.pop();
console.log(removed)
console.log(fruits1)//output: banana

//shift function
let fruits2=["apple","cherry","banana"];
let removed1 = fruits2.shift();
console.log(removed1)
console.log(fruits2)//output: apple

//unshift
let fruits3=["apple","cherry","banana"];
let removed2 = fruits2.unshift(mango);
console.log(removed2)
console.log(fruits3)//output: 4

//question
let arr3 = ["apple","banana","grapes","mango"]
let reversedArr = []
while(arr.length>0){
    let removedElement=arr.pop()
    reversedArr.push(removedElement)
}
console.log(reversedArr)
console.log(arr3)

//q1
let arr=["apple","banana","grapes","mango"]
let res=[]

while(arr.length>0){
res.push(arr.pop());
}
console.log(res)

//q2 
let arrtwo = [-7,6,8,-4,88,-32,89]
let posint=[]

while(arrtwo.length>0){
    let val = arrtwo.shift();
    if(val>=0){
        posint.push(val);
    }
}
console.log(posint);

//q3
function palindrome(){
let arr3 = [1,2,3,4,5]
let tep=[]
let orignal=[]
for(let i=0;i<arr.length;i++){
    orignal.push(arr[i]);
}
console.log(orignal);
while (arr3.length>0){
    temp.push(arr3.pop());
}
for(let i=0;i<orignal.length;i++){
    if(orignal[i]!==temp[i]);
}
if(orignal==temp){
    console,log("yes its a palindrome")
}
return "palindrome"
}
console.log("palindrome")

let message = "Hello, welcome to JavaScript programming!";
console.log(message.length); // Output: 36

//2. string slice
let str = "JavaScript is fun";
let slicedStr = str.slice(0, 10);
console.log(slicedStr); // Output: "JavaScript"

//3 substring
let str1 = "Hello, World!";
let substr1 = str1.substring(7, 12);
console.log(substr1); // Output: "World"    

//4 indexOf
const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';
const indexOfFirst = paragraph.indexOf("dog");
console.log(indexOfFirst); // Output: 40

// substr
let str2 = "JavaScript is awesome";
let substr2 = str2.substr(0, 10);
console.log(substr2); // Output: "JavaScript"   

//case change
let name = "John Doe";
let upperCaseName = name.toUpperCase();  
let lowerCaseName = name.toLowerCase(); 
console.log(upperCaseName);
console.log(lowerCaseName); 

//concat
let greet1 = "Hello, ";
let greet2 = "how are you?";
let fullGreet = greet1.concat(greet2);
console.log(fullGreet); // Output: "Hello, how are you?"

//trim
let str3 = "   Hello World!   ";
let trimmedStr = str3.trim();
console.log(trimmedStr); // Output: "Hello World!"

//split
let str4 = "apple,banana,cherry";
let fruitsArray = str4.split(",");
console.log(fruitsArray); // Output: ["apple", "banana", "cherry"]