// const date1= new Date('9-12-1999');
// const date2= new Date('9-09-2005');
// if(date1.getTime()>date2.getTime()){
//     console.log("First date is very big");
// }else{
//     console.log("Second date is Big");
// }


//Example of Java Script template string 
// const nm = 'shakil'
// const age = 20;
// const output=`My name is ${nm}
// My age is ${age}
// I want to learn Programming`
// console.log(output);

// JavaScript Turnary Operator

// normal example
// const num1=10;
// if(num1==10){
//     console.log('true');
// }else{
//     console.log('false')
// }

// (num1==10)?console.log('true'):console.log('false');
// finding big number from three numbers by turnary operator

// const a=10;
// const b=50;
// const c=30;
// (a>b && a>c)? console.log('A is big'):(b>c && b>a)?console.log('B is Big'):console.log('C is Big');

// array spreading 
// const numbers=[10,50,60,80,55,402,63];
// const newNumbers=[105,106,107];
// console.log(...numbers,...newNumbers);
// const arr1=[20,30,40];
// const arr2=[...arr1];

// arr1.push(50);
// arr2.push(60);
// console.log(arr1);
// console.log(arr2);

const arr = [1,2,3,4,5,6,7];
const [first,second,third,...remaining]=arr;
console.log(first);
console.log(second);
console.log(third);
console.log(remaining);