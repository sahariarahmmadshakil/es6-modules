// // const date1= new Date('9-12-1999');
// // const date2= new Date('9-09-2005');
// // if(date1.getTime()>date2.getTime()){
// //     console.log("First date is very big");
// // }else{
// //     console.log("Second date is Big");
// // }


// // Example of Java Script template string 
// // const nm = 'shakil'
// // const age = 20;
// // const output=`My name is ${nm}
// // My age is ${age}
// // I want to learn Programming`
// // console.log(output);

// // JavaScript Turnary Operator

// // normal example
// // const num1=10;
// // if(num1==10){
// //     console.log('true');
// // }else{
// //     console.log('false')
// // }

// // (num1==10)?console.log('true'):console.log('false');
// // finding big number from three numbers by turnary operator

// // const a=10;
// // const b=50;
// // const c=30;
// // (a>b && a>c)? console.log('A is big'):(b>c && b>a)?console.log('B is Big'):console.log('C is Big');

// // array spreading 
// // const numbers=[10,50,60,80,55,402,63];
// // const newNumbers=[105,106,107];
// // console.log(...numbers,...newNumbers);
// // const arr1=[20,30,40];
// // const arr2=[...arr1];

// // arr1.push(50);
// // arr2.push(60);
// // console.log(arr1);
// // console.log(arr2);

// // const arr = [1,2,3,4,5,6,7];
// // const [first,second,third,...remaining]=arr;
// // console.log(first);
// // console.log(second);
// // console.log(third);
// // console.log(remaining);

// // object spreading

// // creating an object 
// // const element = {
// //     name:'mobile',
// //     brand: "samsung",
// //     model: 's8+',
// //     price:20000
// // };

// // const priceCount=element['price'];
// // console.log(priceCount);
// // const dam='price';
// // const damValue=element[dam];
// // console.log(damValue);
// // const bname=Object.keys(element);
// // const binfo=Object.values(element);
// // // console.log(bname);
// // // console.log(binfo);
// // for(let i = 0;i<bname.length;i++){
// //     let newElement=[];
// //     newElement=bname[i];
// //     console.log(newElement);
// // }

// // const element = {
// //     name:'mobile',
// //     brand: "samsung",
// //     model: 's8+',
// //     price:20000,
// //     waranty: '2years',
// //     color:["red","blue","green","offwhite"]
// // };

// // const {color}=element;
// // const [firstColor]=color;
// // console.log(firstColor);
// // const element2={...element}
// // element.battery='2500mpr';
// //  const {name,brand,model:changeModelName,...badbaki}=element;
// //  console.log(element);
// //  console.log(element2);

// // const student={
// //     name:'shakil',
// //     age:'25',
// //     gender: 'male',
// //     dep: 'cse',
// //     takenCourse:['calculas','stracture','algarithm']
// // }
// // const {takenCourse}=student;
// // const[first]=takenCourse;
// // console.log(first)

// // accesing object 
// // const person = {
// //     name: 'shakil',
// //     age: 23,
// //     contact: {
// //         phone: '01634676787',
// //         email: 'info.sashakil@gmail.com'

// //     },
// //     education: {
// //         versity: 'eastern University',
// //         subject: [
// //             {
// //                 sub1: 'bangla', marks: 40
// //             },
// //             {
// //                 sub2: 'calculas', marks: 50
// //             },
// //             {
// //                 sub3: 'stastics', marks: 60
// //             }
// //         ]
// //     }
// // }
// // const age=person.age;
// // const secondRules=person['education']
// // const thirdRules = 'education'
// const output = person[thirdRules];
// console.log(output)

// console.log(person.education.subject[0]);


// // most important optional chaining 

// const bou={
//     name: 'munia',
//     age:19,
//     contact:{
//         phone:016363636,
//         email:'ajaiara@email.com'
//     },
//     ovvas:{
//         ragi:'true',
//         jinisVangchur: 'false',
//         dress:{
//             sharee: 'tamon pore na',
//             threePice:'sob somai pore',
//             jins: 'majhe majhe pore'
//         }
//     }
// }
// console.log(bou?.ovvas?.ghoree?.paijama);

// function with deafult peramitter 

// function add(x=0,y=0){
//     console.log(x,y)
//     const total = x+y;
//     return total;
// }

// console.log(add(10));
 // annonymus function 



// normal(); //this is called westing in java script 
// function normal(){
//     console.log('isss mama jita khela');
// }

// arrow function
// declear 

const sum =(a,b)=> a+b;
console.log(sum(20,30));
const name =()=>console.log('shakil');
const name2=myName=>{
    return myName;
}
console.log(name2('Munia'))

const total = (n1,n2,n3)=>{
    if(n1>n2 && n1>n3){
        return ('N1 is Big');
    }
    else if(n2>n1 && n2>n3){
        return ('N2 is Big');
    }else{
        return ('N3 is big')
    }
    
}

console.log(total(500,30,80));