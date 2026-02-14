//comparison operator//
let a=10;
let b=20;
console.log(a< b);
let c="50"
console.log(a<c); 
console.log("apple"<"banana");
console.log("null"=="undefined");
console.log("null"==="undefined");
console.log(null<0);
console.log(null>0);
console.log(null>10);
console.log("12"<7);
//conditional statements//
const readlineSync=require("readline-sync");
const age=readlineSync.question("enter your age");
if(age>16)
{
    console.log("u are an adult");

}else{
    console.log(" u are not an adult");
}
const marks=readlineSync.question("enter your marks");
if(marks>90){
    console.log("grade A");
}
else if(90>marks && marks>80)
{
    console.log("grade B");
} 
else if(80>marks && marks>60)
    {
        console.log("grade C" );
    }
    else {
    console.log("grade D");
}
//ternary operator
const work=readlineSync.question("enter your working hours");
const result=work<10?"it is an grate comapny":"it is not an grate company";
console.log(result);
//nested ternery operator
const reading=readlineSync.question("enter the no of hours u study");
const success=reading<6?"it's gonna be hard":reading<10?"just a bit more":"u gonna naild it";
console.log(success);

