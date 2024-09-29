// Prompting user for input
const prompt = require("prompt-sync")({ sigint: true });
const speed= parseFloat(prompt("Input speed of the car:  "));
//(if-else if)Conditional statements that output a grade when a mark is input
if(speed<=70){console.log("Ok");}
if(speed>70){console.log(demerit())}

//Creates a function that calculates demerit ponts
function demerit(){
    let fast=70;
    let demerit=((speed-fast)/5);
    let demerit1=Math.floor(demerit);
    return demerit1;
}
function suspend(){
    if (demerit()>12){return `License suspended`;}
}
console.log(suspend());