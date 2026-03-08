//substring
let str = " javascript is amazing!"
let sub = str.substring(-2,2);
console.log(sub)//output: j

//index
const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';
const indexOfFirst = paragraph.indexOf("dog");
console.log(indexOfFirst);// output: 40

//string literals
let firstname ="sneha";
let lastname= "thakran";
let fullname= `${firstname};this is my first name  ${lastname};this is my last name` 

console.log(fullname);
//output: sneha;this is my first name  thakran;this is my last name

//string literals
let university = "DU";
let program = "BCA";
console.log(`i study in ${university}; and i am persuing ${program}`);
//output:
//i study in DU; and i am persuing BCA

//spread operator
// it helps to destructure the array and string and gives access to each element.
//it is denoted with ...
//spread operator
let arr = [1,2,3,4,5]
let arr1 = [6,7,8,9,0]
let newarray = [...arr,...arr1];//combining two arr
console.log(newarray);
//output:
//[
 // 1, 2, 3, 4, 5,
 // 6, 7, 8, 9, 0
//]