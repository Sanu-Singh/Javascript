// console.log('Hllo')
// document.write("hell0")

//variables , constants and comments
// var x=50;
// var x=60;
// console.log(x);
// here var is rewriteable

// let y=50;
// // let y=45;
// y=60;
// console.log(y) // it value can be change but not by assigning
// it shows  y is already declared

// const z=45;

 // z=50; //on changing value its shows error
// console.log(z);

// Data types
// 1) Numbers 1,,3,4
// 2)Strings  "abc","34"
// 3)Boolean true/false 
// 4)NULL absenece of value
// let x=null;
// console.log(x)
// let p;
// console.log(p); // it give output as undefined


//Strings
// console.log("Hello world!")
// let firstname="Sanu";
// let lastname="Singh";
// console.log(firstname,lastname); // it automatically add space b/w first and lastname
// , give space by using in console.log

// concatenation
// let fullname=firstname+lastname;
// console.log(fullname);  // it doesn't provide any space;

// using template literals
// let fullname=`I want to be ${firstname} ${lastname}`
// console.log(fullname);

//Methods
// console.log(firstname.toUpperCase());
// console.log(firstname.toLowerCase());
  
//Index of
// let hobbies ='running';
// console.log(hobbies.indexOf('n')); //2
// it shows the 1st occurence
// console.log(hobbies.lastIndexOf('n'))
// it shows last occurence 

// trim method
// let hobbies="Running , Coding, Swimming     ";
// console.log(hobbies); // it print with spaces

// console.log(hobbies.trim()); // it remove unwanted spaces

//Includes method
// console.log(hobbies.includes("running"));  //casesensitive

//slice 
// console.log(hobbies.slice(0,5)); // it exclude last index ele

//split
// let colors='Blue , Brown, Red, Black';
// let arrcol=colors.split(',');
// console.log(arrcol);  // it provide space to every ,

// string is immutable
// let str="string";
// str[0]='C';
// console.log(str);
//once the value assign to sting cannot be changed


//string + num
// let num= 50;
// console.log(num+ " "+'Hello');


//Loose Equality (==) Vs Strict Equality Operator(===)

//Loose Equality ==
// let age="22";
// console.log(age==22); // true;

// //Strict Equality ===
// console.log(age===22); // focus on both value and type

//Type of conversion
// string to number
// let str= "55";
// console.log(str, typeof(str));

// let num=Number(str);
// console.log(num,typeof(num));  // now 55 in number 

// number to string
//  let num=55;
//  console.log(num, typeof(num));

//  let str=String(num);
//  console.log(str, typeof(str)); // now 55 is string

 
//Arrays

let food=['Briyani','Paneer','Cholle'];

// console.log(food);

//Access
// console.log(food[2]);

//Modifiy
// food[0]="Chicken";
// console.log(food); // Briyani is replace by chicken

//Methods of array

//join methods
// console.log(food.join('')) //it make food array to string
// console.log(food.join()) // by defalu it separate by ,

// index of 
// console.log(food.indexOf("Briyani"));

// concate
// let arr1=['Hii','Bye',"hello"];
// console.log(food.concat(arr1));
// console.log(food.length); // it give 3
// console.log((food.concat(arr1)).length) // it give 6

//push method
// food.push('Puri'); // add at last

// console.log(food);
// pop method
//  


//Boolean value and comparision operators
//  let bool=true; // boolean 
//  let str="true"; // string
//  console.log(typeof(bool), typeof(str));

//  //methods return boolean value
//  let email="sanusingh000@gmail.com";
//  console.log(email.includes('@'));
//  console.log(email.includes('e'));


//For Loops
// suppose we have to print hello for 10 time without loops
// console.log("hello");
// console.log("hello");
// console.log("hello");
// console.log("hello");
// it take lots of time so we used loops

// for(let i=1; i<=10; i++){
//     console.log("Hello",i);
// }

// let arr=['Mango','Orange','Pineapple','apple'];
// for(let i=0; i<arr.length; i++){
//     console.log(arr[i]);
// }

//while loop
// let arr=['Mango','Orange','Pineapple','apple'];
// let i=0;
// while(i<arr.length){
//   console.log(arr[i],i);
//   i++;

// }

// Do-while loop
// let j=0;
// do{
//  console.log('Hello',j);
// j++;
// }while(j<1); // here j is already less then 1 but loop run for 1 time



// if else 
// let num=90;
// if (num >80){
//     console.log("You are passed!");
// }else{
//     console.log("Failed!");
// }

//if else if
// let budget=1000;
// if(budget>6000){
//     console.log("Goa Trip Done!");
// }else if(budget>5000){
//     console.log("Mumbai Trip Done!");
// }else if(budget>3000){
//     console.log("Haridwar Trip Done!");
// }else{
//     console.log("🔔 Trip jaaoge")
// }

//Nested if else
// let num=22;
// if(num>20){
//     console.log("Ok allowed!");
//     if(num >28){
//         console.log("Drink allowed!")
//     }
// }

//Break and continue 

//continue: use to skip to next 
// for(let i=1; i<=5; i++){
//     if(i==4){
//         continue;
//     }
//     console.log(i);
// }


//Break= use to terminate the loop
// for(let i=1; i<=5; i++){
//     if(i==4){
//         break;
//     }
//     console.log(i);
// }
// it print till 3 when i=4 loop terminate

//ternary operator

// let age=20;
// if(age>18){
//     console.log("Vote");
// }else{
//     console.log("Not Vote");
// }

// single line i.e ternary operator

// let res=age>18 ? "Vote":"Not Vote";
// console.log(res);

//Switch 
let grade="B";
switch(grade){
    case "A":
    console.log("Grade A");
    break;
    case "B":
    console.log("Grade B");
    break;
    case "C":
    console.log("Grade C");
    break;
    case "D":
    console.log("Grade D");
    break;
    default:
        console.log("fail");
}