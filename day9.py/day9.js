console.log(query,"query");
query.textContent="hellozz everyone!"
const query = document.querySelector("p");


 
//queryselectorall
const query2 = document.querySelectorAll("p");
console.log(query2,"query");

for(let i=0;i<query2.length;i++){
    query2[i].textContent="yoyo honeysingh"
}

//make even paragraphs blue,last line bold and odd para green.
const para = document.getElementsByTagName("p");
for (let i=0;i<para.length,i++){
    if (i%2===0){
        para [i].style.color="blue"
    }
    else,
    para [i].style.color="green"
}
para[para.length-1].style.fontWeight="bold"