//const nameInput=document.getElementById("myinput").addEventListener('change',()=>{
 //   document.getElementById ("output").textContent ="change detected!"; 
//})

const nameInput = document.getElementById("myinput");
const courseInput=document.getElementById("course");
const form=document.getElementById("myform");
const output = document.getElementById("output");

courseInput.addEventListener("change",()=>{
    console.log(courseInput.value);
    output.textContent=nameInput.value
    output.textContent=courseInput.value
})
FormData.addEventListener("submit",()=>{
    constName=nameInput.value;
    const course=courseInput.value;
    output.textContent=name+course;
})

form.addEventListener("submit",(event)=>{
    event.preventDefault();
    const name=nameInput.value;
    const course=courseInput.value;
    console.log(name,course);
    output.textContent=name+" "+course;
})