
//map method
let arr = [1,2,3,4,5,6]

let result = arr.map((x)=>x) 
console.log;(result);

//filter method
let scores = [12,22,7,15,32,5,4,27,11,16];
let highscores = 
scores.filter((scores) => {
    if(scores>=15){
        console.log(scores,"pass")
    }
    else{
        console.log(scores,"fail")
    }
    });

    //reduce method
    let number = [1,2,3,4,5,];
    //let sum = number.reduce((acc,current)=>acc+current);
    console.log(sum)
    //acc=1,index:0
    //curren: rest of the element apart from index:0
