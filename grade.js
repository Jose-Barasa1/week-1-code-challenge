// Prompting user for input
const prompt = require("prompt-sync")({ sigint: true });
const marks= parseFloat(prompt("Enter your mark: "));
//(if-else if)Conditional statements that output a grade when a mark is input
if (marks>79) {console.log("A");}
else if(marks>60&&marks<79){console.log( "B");}
else if(marks>49&&marks<69){console.log( "C");}
else if(marks>40&&marks<49){console.log( "D");}
else{console.log( 'E');}
