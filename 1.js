"use strict";  // help to don't write wrong code. 


// console.logcan print something in console == 
// console.log("Abhishk sahgal");
// let value = prompt("Enter your value ");      //get input in string format

// ---------------------------------------------------------------------------------------------------------------

// == Define variable and use variable 
// var firstName = "Sahgal"  // var = keyword
// console.log(firstName);

// We can change variable value 
// firstName = "Abhishek";   // without var we can change value and with var we create new variable.  
// console.log(firstName);

// == Rules for naming variables 
// you can not start with number
// example
// 1value (invalid)
// value1 (valid)

// var value1 = 10;
// console.log(value1 ** 3);
// console.log(value1 ** (1/2));
// console.log(value1 / 3);

// you can use only underscore _ or doller symbol 
// first_name (valid)  snake case writing
// firstNname (valid)  camel case writing
// _firstname (valid)
// first$name (valid)
// $firstname (valid)

// we can not use spaces 
// first name (invalid)

// convention
// start with small letter and use camelcase 

// ---------------------------------------------------------------------------------------------------------------------------------------------------

// let keyword 
// == declare variable with let keyword 
// let name = "Abhishek";  // mosstly use let keyword in this time 
// console.log(name);

// -----------------------------------------------------------------------------------------------------------------------------------------------

// == declare constant 
// const pi = 3.14;
// pi = 3.19;   // we can not change value of constant 
// console.log(pi);

// -----------------------------------------------------------------------------------------------------------------------------------------------

// == string indexing

// let name = "Abhishek sahgal";
// console.log(name[3]);

// string of length  
// name.length
// console.log(name.length);

// last index : -1 
// console.log(name[name.length-5]);

// trim -- to remove space in a string

// let firstName = "        Abhishek          ";
// console.log(firstName.length);
// let newFirstname = firstName.trim();
// console.log(newFirstname.length)

// toUpperCase()
// let firstName = "Abhishek sahgal";
// console.log(firstName.toUpperCase());

// toLowerCase
// let firstName = "Abhishek Sahgal";
// console.log(firstName.toLowerCase());

// slice(start argument,end argument)  
// let newString = "Abhishek Sahgal";
// console.log(newString.slice(0,4));

// -----------------------------------------------------------------------------------------------------------------------------------

// typeof operator
// data types 
// string "sahgal"
// numbers 1 , 2 , 3
// booleans
// undefined
// null
// BigInt  
// Symbol

// let age = 25;
// let firstName = "Sahgal";
// console.log(typeof age);
// console.log(typeof firstName);

// convert number to string -- empity string "" add kar dene se vo number se stribg me change ho jaayega
// let age = 25;
// console.log(typeof(age + ""));

// convert string to a number -- string se pahele + add kar dene se vo string se number me change ho jaayega
// let naam  = "Sahgal";
// console.log(typeof (+naam))

// second method 
// let age = 24;
// age = String(age);
// console.log(typeof age);

// age = Number(age); 
// console.log(typeof age);

// string concatenation 
// let string1 = "20";
// let string2 = "30";
// let fullName = +string1 + +string2;
// console.log(fullName);
// console.log(typeof fullName)

// --------------------------------------------------------------------------------------------------------------------------

// template string 
// let age = 25;
// let firstName = "Abhishek";
// let aboutMe = "my name is " + firstName + " and my age is " + age ; // normal method
// console.log(aboutMe);

// let aboutMe = `my name is ${firstName} and my age is ${age}`;
// console.log(aboutMe);

// --------------------------------------------------------------------------------------------------------------------------------

// undefined
// let firstName;      
// console.log(typeof firstName);    // variable declare but nat a value assign this type of variable is called undefined 

// null 
// let myVariable = null;
// console.log(myVariable);
// myVariable = "Sahgal";               //store any value
// console.log(typeof myVariable);

// BigInt
// let myNumber = 123;
// let sameMyNumber = BigInt(123548416581433333333331686); // make BigInt
// let secondMyNumber = 123548416581433333333331686n // second method make BigInt
// console.log(myNumber);
// console.log(sameMyNumber);
// console.log(secondMyNumber);
// console.log(Number.MAX_SAFE_INTEGER);

// ----------------------------------------------------------------------------------------------------------------------------------------

//  truthy and falsy value 

// falsy value 
// false 
// null
// undefined
// ""
// 0

// and another value is truthy 

// ---------------------------------------------------------------------------------------------------------------------------------------------------

// if else condition
// simple if   
// if(condition){
//     statement;
// }

// if else 
// if(condition){
//     statement;
// }else{
//     code..... 
// }

// nested if 
// if(){

// }else{
//     if(){

//     }else{

//     }
// }

// else if 
// if(){

// }else if(){

// }else if(){

// }else{

// }

// switch statement 
// switch(variable name){
//     case 0:
//           satement; 
//     case 1:
//          statement;
//     case 2:
//          statement;
//     default:
//         statement;
// }

// -----------------------------------------------------------------------------------------------------------------------------------------------------------

// == vs ===
// == check equal 
// === check equal with their datatype

// ternary operator 

// let age = 5;            "true"    "false"
// let drink = age >= 5 ? "coffee" : "milk";
// console.log(drink);

// --------------------------------------------------------------------------------------------------------------------------------------------------------------

// loop 

// while loop 
// let  i = 0;
// while(i<=10){
//     console.log(i);
//     i++;
// } 

// for loop
// for(let i = 0; i<=9; i++){
//     console.log(i);
// }

// console.log("The value of i is " ,i);    // ye loop le bahar nahi valu ko leta hai. let ke place per var lene se bahar le leta hai. 

// for loop example 
// let tatal = 0;
// let num = 10;
// for(let i = 0; i<=num; i++){
//     tatal = tatal + i;
//     console.log(tatal);
// } 
// console.log(tatal);

// do while loop -- condition wrong hone per bhi ek baar code run ho jaayega. 
// let i = 0;
// do{
//     console.log(i);
//     i++;
// }while(i<=10);

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// break -- isse ye koi bhi chij ko break kar deta hai means uske code se bahar kar deta hai. 
// continue -- ye kisi bhi speccfic code ko skip karne ka kaam karta hai. 

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//                                                Arrays 
// array mutable hota hai.
// refrence type 

// create arrays
// definition - ordered collection of items 
// let fruits = ["apple","mango","grapes"];
// let numbers = [1,2,3];
// let mixed = ["apple",2 ,null ,5 , undefined];   // anything store in js array and also store arrays
// console.log(fruits);
// console.log(numbers);
// console.log(mixed);
// console.log(fruits[2]); // print array value with their index number 

// change value with their index number
// let fruits = ["apple","mango","grapes"];
// console.log(fruits);   // before change 
// fruits[1] = "papa";   
// console.log(fruits);    //  after change 

// push array  -- last me koi bhi item add karta hai.
// let fruits = ["apple","mango","grapes"];
// console.log(fruits);
// fruits.push("banana");
// console.log(fruits);

// pop array -- last se koi bhi item remove karta hai vaise ham remove item ko kisi variabe  me store kar sakte hai. aise push me bhi item ko return karta hai
// let fruits = ["apple","mango","grapes"];
// console.log(fruits);
// let storeValue = fruits.pop(); // store in any variale
// console.log("popped fruit is", storeValue);
// console.log(fruits);

// unshift -- stating se koi bhi item ko add karne ke liye same ye bhi item ko return krta hai means variable me store kar sakte hai
// let fruits = ["apple","mango","grapes"];
// fruits.unshift("sahgal");
// console.log(fruits)

// shift -- starting s koi bhi item ko remove kar sakta hai
// let fruits = ["apple","mango","grapes"];
// fruits.shift();
// console.log(fruits);

// shift and unshift push pop se slow hota hai kyu ki isko sare item koi memory me place koi switch karna padta hai 

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// primitive and refrence data types 
// primitive stack me store hota hai
// refrence heap me store hota hai aur iska address stack me store hota hai 

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// clone array 
// let array1 = ["abhay","priya","abhishek"];
// let array2 = array1.slice(0);
// second method 
// let array2 = [].concat(array1);
// new and third method 
// spread operator
// let array2 = [...array1];  //three dot ko spread operator bolthe hai.. 
// clone and add extra item 
// let array2 = [].concat(array1);
// let array2 = array1.slice(0).concat("vicky","papa");
// let array2 = [...array1, "vicky","papa","mummy"];
// let oneMoreArray = ["value1","value2","value3"];
// let array2 = [...array1 , ...oneMoreArray ]; 
// console.log(array2);

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// for loop in array 
// let  fruits = ["apple","mango","grapes","papya",]; 
// console.log(fruits);
// for(let i = 0; i<=fruits.length-1; i++){
//     console.log(fruits[i]);
// }

// for of loop  -- this loop is best for array
// const fruits = ["mango","banana","grapes"];
// const fruits2 = [];
// for(let fruit of fruits){
//     fruits2.push(fruit);
// }
// console.log(fruits2);

// for in loop -- isme array ka index deta hai 
// const fruits = ["mango","banana","grapes"];
// for(let index in fruits){
//     console.log(fruits[index]);
// }

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// use const with creating array
// const pi = 3.14;
// pi = 3.45;   // not change constant value 
// console.log(pi);

// heap memory 
// const fruits= ["apple","mango"];   // 0x11 - address
// fruits.push("banana");    // yaha address me koi change nahi ho raha lein new array create karne per address change ho jaata hai
// console.log(fruits);  // yaha per push ho jaata hai lekin new array nahi bane ga 
// array ke saare method use kar sakte hai 
// fruits = ["banana","papaya"];  //yaha error ho jayega kyuki yaha new address create ho jaayega 

// best for array in const not a let 

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// array destructuring 
// const myArray = ["value1","value2"];
// let myvar1 = myArray[0];
// let myvar2 = myArray[1];
// console.log(myvar1);
// console.log(myvar2);

// shotcut method 
// const myArray = ["value1","value2"];
// let [myvar1,myvar2] = myArray;  // myvar1 me array ki first value store ho jaa rahi hai second me array ki second value store ho jaa rahi hai 
// let [myvar1, ,myvar2] = myArray;  // second index ko skip kar raha hai
// console.log(myvar1);            // yaha per myvar1 and myvar2 normal variable ban chuke hai ham baaki ke kaam is variable ke saath kar sakthe hai 
// console.log(myvar2);

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- 

//                                                 objects 

// objects refrence type
// array are good but not a sufficient for real world data 
// objects store key value pairs 
// objects dont have index 

// create objects 
             // key    value           key  value
// const person = {name:"Abhishek sahgal" , age:18 , color:"black"};
// console.log(person);
// console.log(person.name);
// console.log(person.age);
// console.log(person.color);

// objects ke andar ham array ko bhi bana sakte hai 
// const person = {
//     name: "Abhishek Sahgal",
//     age: 20,
//     hobbies:["singing","dancing","guitar","read books"]
// }
// console.log(person);
// console.log(person.hobbies);

// to add key value pair to objects 
// const person = {
//     name: "Abhishek Sahgal",
//     age: 20,
//     hobbies:["singing","dancing","guitar","read books"]
// }
// person.gender = "male";
// console.log(person);

// js me objects ki key string me hi hoti hai isiliye ham isko aise bhi access kar sakte hai 
// const person = {
//     name: "Abhishek Sahgal",
//     age: 20,
//     hobbies:["singing","dancing","guitar","read books"]
// }
// console.log(person["name"]);
// console.log(person["age"]);

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// how to iterate objects 
// const person = {
//         name: "Abhishek Sahgal",
//         age: 20,
//         hobbies:["singing","dancing","guitar","read books"]
//     }

// for in loop 
// objects.key 

// for(let key in person){
//     // console.log(person[key]);
//     console.log(`${key} : ${person[key]}`);   //template string ke through
// }

// objects.key 
// console.log(Object.keys(person));

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// spread operator
// const newarray = [..."123456789"];  // three dott lagane se alag alag spread ho jaata hai 
// console.log(newarray); 

// spread in objects 
// const obj1 = {
//     key1: "value1",
//     key2: "value2"
// };
// const obj2 = {
//     key1: "valueunique",
//     key3: "value3",
//     key4: "value4"
// };

// const newobj = {...obj1,...obj2};
// console.log(newobj)   // kisi object me same name ke key nahi ho sakta hai.
// const newobj = {...obj1,...obj2 , key69 : "value69"};    // add new key and value
// console.log(newobj);

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// object destructring 

// const band = {
//     bandName: "led zepplin",
//     famousSong: "stairway to haven",
//     year : 1968,

// };

// const bandName = band.bandName;
// const famousSong = band.famousSong;
// console.log(bandName,famousSong);

// shotcut method 

// const {bandName , famousSong , year} = band;     // first me first value and second me second value store ho jaata hai 
// console.log(bandName,famousSong ,year);
// const {bandName:var1 , famousSong:var2 , year} = band;   // yaha var1 and var2 apna variable aise kar ke bana sakte hai     // first me first value and second me second value store ho jaata hai 
// console.log(var1,var2, year);   // jaise yaha year default hota hai 

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// objects insite array 

// const users = [
//     {userid:1,firstname : "abhishek" , gender:"male"},   // first user ki information store kar sakte hai
//     {userid:2 , firstname:"Sahgal" , gender: "male"},   // second user ki information store kar sakte hai
//     {userid:3, firstname:"abhay",gender:"female"}   // third user ki information store kar sakte hai
// ];

// console.log(users);
// console.log(users[0]);
// // loop
// for(let user of users){
//     console.log(user.userid,user.firstname);    
// };

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// nested destructring 

// const users = [
//     {userid:1,firstname : "abhishek" , gender:"male"},  
//     {userid:2 , firstname:"Sahgal" , gender: "male"},  
//     {userid:3, firstname:"abhay",gender:"female"}  
// ];
// const [user1,user2,user3] = users;
// console.log(user1,user2,user3)

// const [{firstname},user2,user3] = users;             // yaha per ek value ko lene ke liye karte hai 
// console.log(firstname,user2,user3); 


// const [{firstname:username , userid},user2,user3] = users;      //custom variable name
// console.log(username,userid); 

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//                                                     function

// function birthdaySong(){
//     console.log("Happy birthday to you........");
// };

// birthdaySong();

// function birthdaySong(){
//     return "happy birthday to you .............";     // ye value return kar sakta hai
// }

// const song = birthdaySong();   // yaha per is return value ko kisi variale me bhi store kar sakte hai 
// console.log(song);

// function sum(a,b,c){
//     console.log(a+b+c);
// };

// sum(5,5,30);
// sum(5,5);   //ek value na dene per ye output aata hai 

// function isEven(number){
//     return number%2 == 0;
// };

// console.log(isEven(6));

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// function expression   -- simple ek variable me function ko define kar dete hai 

// syntax 
// const/let/var variableName = function(){

// }

// const birthdaySong = function (){
//     console.log("Happy birthday to you........");
// };

// birthdaySong();

// const isEven = function(number){
//     return number%2 == 0;
// };

// console.log(isEven(6));

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// arrow function   -- most importat use in reactjs

// syntax 

// const/let/var variableName = () => {

// }

// const birthdaySong =() => {
//     console.log("Happy birthday to you........");
// };

// birthdaySong();

// const isEven =(number) => {
//     return number%2 == 0;
// };

// console.log(isEven(6));

// second method 
// const isEven = number => {     // single argument hone per isko ( ) lene ki jarurat nahi hoti hai 
//     return number%2 == 0;
// };

// console.log(isEven(6));

// third method     -- function me single line ke code hone per aise bhi kar sakte hai 

// const isEven = (number) => number % 2 == 0 ;

// console.log(isEven(10));

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// hosting

// hello();                // fuction decarale karne se pahle hi call kar sakte hai 
// function hello(){                    // lein ye keval function declaration ke saath hota hai expression aur arrow ke saath nahi
//     console.log("hello world");
// }

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// function inside function 

// const app = () => {
//     const myfunc = () => {
//         console.log("inside func");
//     };
//     console.log("inside app");
//     myfunc();

// }

// app();

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// var ka scope global hota hai matlab var se create variable ko kisi bhi block { } me use kar sakte hai  

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// default parameter   -- matlavb koi argument pass na karne per default parameter le sakta hai 

// function add(a,b){ 
//     if(typeof b === "undefined"){      // pahele aise handle karte the 
//         b=0;
//     }
//     console.log(a+b);
// }; 
 
// add(5,5);

// abb aise karte hai 
// function add(a,b=0){ 
//     console.log(a+b);
// }; 

// add(5,5);

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// rest parameter

// function myFunc(a,b,...c){
//     console.log("value of a is " ,a);
//     console.log("value of b is " ,b);
//     console.log("value of c is " ,c);
// }

// myFunc(5,6,7,8,9,10,11);   // 7,8,9,10,11 array ki rup me c me store ho jaye uske liye c ke aage three dott ... lagana hoga

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// callback function ---------- musko ye samja me nahi aaya tha video jaa ke firse deak lo us time mai pagal tha

// function myFunc(a){
//     console.log(a);           // kya a me koi function ko store kar sakte hai
//     console.log("hello world");
// }

// function myFunc2(){
//     console.log("inside my finction 2");

// }

// function myFunc(a){
//     console.log(a);    
// }

// myFunc(myFunc2);

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// function return function 

// function myFunc(){
//     function hello(){
//         console.log("hello world");
//     }
//     return hello;
// };

// let ans = myFunc();
// ans();

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// important array methods
// forEach 
// Map
// filter 
// reduce 

// map method 
// const numbers = [3,4,6,8,1];

// const square = function(number){
//     return number * number;
// }
// map function hamesa new array banayega 
// first time map method number me 3 rak dega jisse 9 output milega 
// second time map function 4 number me rak dega jisse 16 output milega 
// aur ye sab chij hamre new array squareNumber me store ho jaayega 

// const squareNumber = numbers.map(square);                 // map function input me callback function lega callback function hamesa kuch return karega
// console.log(squareNumber);

// agar ham callback function me ham return pass nahi karte hai uske place per kuch aur jaise console.log pass karte hai tab
// ye undefind pass karega kyuki new array me keval return wala hi store hota hai 

// const square = function(number){
//    console.log(number * number);
// }

// const squareNumber = numbers.map(square);               
// console.log(squareNumber);

// iski liye map function ke saath HashChangeEvent,e return use karna chiye 

// yaha per ham callback function ko map method me bhi rak sakte hai 
// const numbers = [3,4,6,8,1];
// const squareNumber = numbers.map(function(number){
//     return number * number;
// });   
// console.log(squareNumber);

// example 

// const user = [
//     {firstName:"Abhishek", age:18},
//     {firstName:"Abhay", age:58},
//     {firstName:"priya", age:16},
//     {firstName:"mohit", age:75},
// ];

// // users ke firstname chiye hame 
// const username = user.map(function(user){
//     return user.firstName;
// });
// console.log(username);

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// filter method 

// arrayname.filter() // ye array me se values ko filter karta hai  

// Even number ko filter karne ke liye code 
// const numbers = [3,4,6,8,1];
// const isEven = function(num){
//     return num%2==0;
// };

// const filterValue = numbers.filter(isEven);
// console.log(filterValue);

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// reduce method --- input me callback function ko leta hai

// const numbers = [3,4,6,8,1];

// // aim : sum of all numbers in array
// const result = numbers.reduce((a,b)=>{return a+b});
// console.log(result);

// a           b 
// 3           4     7 dono ka sum hoga   bol sakte hai return value jaata hai
// 7           6
// 13          8
// 21          1
// result 22 

// example 

// const userCart = [
//     {productId:1, productName:"mobile",prize:1200},
//     {productId:2, productName:"laptop",prize:2200},
//     {productId:3, productName:"tv",prize:38000},
// ];

// product 1 ,2,3 ke prize ka sum chiye 
// const result = userCart.reduce((a,b)=>{
//     return a + b.prize        // yaha per a simple isliye liye hai kyuki a tho return value hoga lekin b me poora object hoga
// },0);
// yaha per hame a ki value ko first time me hame 0 rakna hoga 
//  iske liye ham recude me ham initial value bhi pass kar sakte hai 
// arrayName.reduce(callbackFunction , initialValue);
// console.log(result);

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// sort method  --- ye original array ko change kar dega balki map , filter , forEach new array create kate hai 

// const numbers = [3,4,6,8,1];
// numbers.sort();       // ascii code per sort karta hai 
// console.log(numbers);   // js me number ka short string ko samaj kar sort karta hai

// const userName = ["abhay" , "priya" ,"abhishek","aadhya","Abhishek"];
// ye sahi se sort hoga 
// userName.sort();
// console.log(userName);

// sahi se sort karne ke liye number ko ye karte hai 
// const numbers = [3,4,6,8,1];
// numbers.sort((a,b)=>{ return a-b});
// console.log(numbers);

// 1200 , 410 
// a-b --- 790
// a-b --- Positive(greater than 0)  positive aaya tho hame b ki value ko pahele rak dena hai 
// 410 ,1200

// 5,9 
// 5,9 -- -4 
// a-b ---negative  yaha per a pahele rahega  

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// find method 

// const myArray = ["hello", "catt","dog","lion"]; 

// function isLength3(string){
//     return string.length === 3;
// }

// const result = myArray.find(isLength3);
// console.log(result);

// example 

// kisi me se kisi user ko find karne ke liye find method ka use karte hai  
// const user = [
//     {userId:1, userName:"abhishek"},
//     {userId:2, userName:"bvhay"},
//     {userId:3, userName:"priya"}
// ];

// const result = user.find((user)=>{ return user.userId === 2})
// console.log(result);

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// every method 

// const numbers = [1,2,5,9,3];

// is array me saare element even hai 

// const result = numbers.every((a)=> a%2==0);
// console.log(result);

// every method --> true / false 

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// some method 

// ek bhi number even hone per ye true return kar dega saare eeement ko check karke true ya false nahi dega 

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// fill method 
// value,start,end 

// const myArray = new Array(10).fill(-1);
// console.log(myArray);

// const myArray = [1,2,3,4,5,6,7,8,9];
// const result = myArray.fill(0,3,8);
// console.log(result);

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// splice method ---- iska use kisi array me se kisi value ko insert aur delete karne ke liye karte hai 

// start index , how many item delete , insert 

// const myArray = ["value1", "value2" , "value3"];

// delete 
// const storeValue = myArray.splice(1,1);
// console.log(myArray);

// console.log(storeValue);  // ye delete value ko return bhi karta hai

// insert 
// myArray.splice(1,0,"inserted item");
// console.log(myArray);

// delete aur insert ek saath kaise hota hai

// const deleteItem = myArray.splice(1,2,"inserted item1","inserted item2");
// console.log(myArray);

// console.log(deleteItem);

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// iterables 
// jisper ham for of loop laga sake 
// jaise string and array 

// array like object 
// jisko pass length property hoti hai 
// aur jisko index se access kar sakte hai 
// example = string 

// const firstName = "abhishek";
// console.log(firstName.length);
// console.log(firstName[3]);

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//                                             sets (it is iterable)
// store data 
// sets also have its own methods 
// no index based access 
// order is not guranteed 
// unique item only (no duplicate allowed)
// different data type ko bhi store kar sakte hai 

// const numbers = new Set();   syntax 

// const numbers = new Set([1,2,3]);
// console.log(numbers);  

// empey set 
// const numbers = new Set();
// numbers.add(2);
// numbers.add(5);
// numbers.add(6);
// numbers.add(7);
// numbers.add(7);    // no same data add ignore this value 
// numbers.add(["item1","item2"]);
// numbers.add(["item1","item2"]);   // array ke same value store ho jaate hai kyuki iska address alag hota hai 
// console.log(numbers);

// set me koi value hai ya nahi iske liye ek method hai 

// const result = numbers.has(1);   // true / false return karta hai 
// console.log(result);

// check set is iterables 
// for(let number of numbers){
//     console.log(number);
// }

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*------------------------------------------------------------------------------------------------------------

// map 
// map is an iterable 

// store data in ordererd fasion 
// store key value pair /
// duplicate keys not allowed like object 
// differance between maps and object 

// objects can only have string or symbol as key 

// in map you can use everything as key like array , number, String 

// const person = {
//     firstname : "Abhishek",
//     age:7
// }
// console.log(person.firstname);   // simmple object 

// map me ham koi bhi data type ko key bana sakte hai 
// lekin object keval string type ke value ko key bana sakte hai 

// const person = new Map();
// person.set("firstName","Abhishek");
// person.set("age",18);    //string key 
// person.set(1,"one");             // number yaha per key hai 
// console.log(person);

// how to access key and value 
// console.log(person.firstName);    // isko nahi use kar sakte hai 
// console.log(person["firstName"]);    // isko nahi use kar sakte hai 
// console.log(person.get("firstName"));
// console.log(person.get(1));
// console.log(person.keys());   // iske through ham loop chalasakte hai 

// for(let key of person.keys()){
//     console.log(key);
// }

// for(let key of person){        // ye array ke form me dega 
//     console.log(key);
// }

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// optional chaning 

// const user = {
    // firstname:"Abhishek",
    // address:{houseNumber:"12345"}
// };

// console.log(user.firstname);
// console.log(user.address);
// // console.log(user.address.houseNumber);   // isper error aa jaata hai vo error ko hatane ke liye ek kaam karenge
// console.log(user.address?.houseNumber);   // ? lagane se error nahi aayega uske badle undefined aa jaayega 

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//                                                   methods 

// function inside object 

// const person = {
//     firstname: "Abhishek",
//     age: 18,
//     about:function(){
//         // console.log(`person name is ${firstname} and age is ${age}`);  // normal method me error bataye ga
//         console.log(`person name is ${this.firstname} and age is ${this.age}`);
//     }
// };
// // this yaha per vo method hai jisme vo hai 
// // jaie yaha per person yaha per this hai 
// person.about();

// naya chij 

// function personInfo(){
//     console.log(`person name is ${this.firstname} and age is ${this.age}`);
// };

// const person1 = {
//     firstname:"Abhishek",
//     age:18,
//     about:personInfo   // yaha per call nahi kar rahe yaha per keval assign kar rahe hai 
// }

// const person2 = {
//     firstname:"Priya",
//     age:134,
//     about:personInfo
// }
// const person3 = {
//     firstname:"Abhay",
//     age:26,
//     about:personInfo
// };

// person3.about()
// person1.about()
// person2.about()

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// call, apply, and bind method 

// function hello(){
//     console.log("Hello world");
// };

// hello.call();  // kisi person ko .call karke bhi kar sakte hai 

// const user1 = {
//     firstname:"abhishek",
//     age:18,
//     about:function(){
//         console.log(this.firstname,this.age,)
//     }
// }
// const user1 = {
//     firstname:"abhishek",
//     age:18,
//     about:function(hobby,favMus){
//         console.log(this.firstname,this.age,hobby,favMus)
//     }
// }
// const user2 = {
//     firstname:"Abhay",
//     age:28,
    
// }
// user1.about();

// user2 me koi about function nahi hai lekin use karne ke liye ye kar sakte hai 

// user1.about.call(user2)   // call per ham this bata sakte hai 
// user1.about.call()   // koi this na hone per undefind show krega  

// user1.about.call(user2,"guitar","mozart");  // koi bhi value ko perint kar sakte hai

// apply
// user1.about.call(user2,["guitar","bach"]);  // aaray me bass kar do tho apply  ho gaya

// bind   -- ye hame function return karta hai 
// const func = user1.about.bind(user1,"guitar","bach")
// func();

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// arrow functions and this 
// arrow function ka this nahi hota hai ye apne surroudings se leta hai 

// const user1 = {
//     firstname:"abhishek",
//     age:18,
//     about:() => {
//         console.log(this.firstname,this.age)
//     }
// }

// user1.about();  // yaha undefind undefind aayega  
// yaha er user1 this nahi  hoga 
// arrow function ka this ek leval up window hoga 
// arrow functions ka this nahi change kar sakte hai 

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//                                          object oriented programing 

// const user = {
//     firstname:"Abhishek",
//     lastname:"sahgal",
//     email:"ticckusahgal123@gmail.com",
//     age:2,
//     address:"house number,colony,pincode,state",
//     about:function(){
//         return `${this.firstname} is ${this.age} years old. `
//      },
//      is18:function(){
//         return this.age>=18;
//      }
// }     // ab iski jarurat nahi hai 

// const aboutuser = user.about();
// console.log(aboutuser);

// in future hame aise 1 million user chiye tab ye karenge 
// iske liye ham ek function banayege 
// vo function as a input lega firstname , lastname , email ...... 

// function(that function create objects)
// 2 add key value pair 
// 3 object ko return karega  

// function createUser(fistname,lastname,email,age,address){
//     const user = {};
//     user.firstname = fistname;
//     user.lastname = lastname;
//     user.email = email;
//     user.age = age;
//     user.address = address;
//     user.about = function(){
//         return `${this.firstname} is ${this.age} years old. `
//      };
//      user.is18 = function(){
//         return this.age>=18;
//      }
//      return user;
// }

// const user1 = createUser("Abhishek","sahgal","ticcku@gamil.com",18,"lucknow");
// console.log(user1);

// console.log(user1.is18());     // method me call karke check kar lete hai 
// console.log(user1.about()); 


// isme bauth kami hai 


// function createUser(fistname,lastname,email,age,address){
//     const user = {};
//     user.firstname = fistname;
//     user.lastname = lastname;
//     user.email = email;
//     user.age = age;
//     user.address = address;
//     user.about = function(){
//         return `${this.firstname} is ${this.age} years old. `
//      };
//      user.is18 = function(){
//         return this.age>=18;
//      }
//      return user;
// }

// const user1 = createUser("Abhishek","sahgal","ticcku@gamil.com",18,"lucknow");
// const user2 = createUser("priya","sahgal","ticcku@gamil.com",18,"lucknow");
// const user3 = createUser("Abhay","sahgal","ticcku@gamil.com",18,"lucknow");
// console.log(user1);
// console.log(user2);
// console.log(user3);

// kami -- yaha per jitne bhi user banenge utne hi method create honge 

// iske solution ke liye ye karte hai 

// const usermethods = {
//     about: function(){
//         return `${this.firstname} is ${this.age} years old. `
//      },
//     is18: function(){
//         return this.age>=18;
//      }
// }

// function createUser(fistname,lastname,email,age,address){
//     const user = {};
//     user.firstname = fistname;
//     user.lastname = lastname;
//     user.email = email;
//     user.age = age;
//     user.address = address;
//     // yaha per iski referance store kar sakta hu  baar baar nahi hoga isko call kar lega
//     user.about = usermethods.about;
//     user.is18 = usermethods.is18;
//      return user;
// }

// const user1 = createUser("Abhishek","sahgal","ticcku@gamil.com",18,"lucknow");
// const user2 = createUser("priya","sahgal","ticcku@gamil.com",18,"lucknow");
// const user3 = createUser("Abhay","sahgal","ticcku@gamil.com",18,"lucknow");
// console.log(user1.about());
// console.log(user3.about());  ab jitni baar emthod call karunga uthi baar bane ga nahi 


// ab isme bhi ek problem hai 


// const usermethods = {
//     about: function(){
//         return `${this.firstname} is ${this.age} years old. `
//      },
//     is18: function(){
//         return this.age>=18;
//      },
//      sing:function(){
//         return "la la la ";
//      }
// }

// function createUser(fistname,lastname,email,age,address){
//     // niche jo samje hai __proto__ vo yaha per use karenge apne soluton ke liye 
//     const user = Object.create(usermethods);
//     user.firstname = fistname;
//     user.lastname = lastname;
//     user.email = email;
//     user.age = age;
//     user.address = address;
//     user.about = usermethods.about;
//     user.is18 = usermethods.is18;
//     // ab uper mehod baneye hai tho yaha per batana hoga 
//     user.sing = usermethods.sing;
//     // ab aise hame 1000 method banyenge tho  yaha per bhi karna hoga aur bhul bhi jaa sakte hai
//     // tho iske liye ye kar sakte hai 
//      return user;
// }

// const user1 = createUser("Abhishek","sahgal","ticcku@gamil.com",18,"lucknow");
// const user2 = createUser("priya","sahgal","ticcku@gamil.com",18,"lucknow");
// const user3 = createUser("Abhay","sahgal","ticcku@gamil.com",18,"lucknow");

// ab mai soochta hu user ke pass ek aur method hona chiye 

// console.log(user1.sing())
// console.log(user3.about())

// second problem ko duur karne ke liye ham 
// prototype ka use karte hai kjo niche pade hai 
// yaha hame createUser hame bhi koi khali object diya hoga 
// tho hame usermethods ki jarurat nahi hogi 
// const usermethods = {
//     about: function(){
//         return `${this.firstname} is ${this.age} years old. `
//      },
//     is18: function(){
//         return this.age>=18;
//      },
//      sing:function(){
//         return "la la la ";
//      }
// }

// function createUser(fistname,lastname,email,age,address){
//     // niche jo samje hai __proto__ vo yaha per use karenge apne soluton ke liye 
//     // const user = Object.create(usermethods);  ab hame __proto__ ye pass kara hoga
//     const user = Object.create(createUser.prototype);  
//     user.firstname = fistname;
//     user.lastname = lastname;
//     user.email = email;
//     user.age = age;
//     user.address = address;
//      return user;
// }

// createUser.prototype.about = function(){
//     return `${this.firstname} is ${this.age} years old. `

// };
// createUser.prototype.is18 = function(){
//      return this.age>=18;

// };
// createUser.prototype.sing= function(){
//        return "la la la ";

// };


// const user1 = createUser("Abhishek","sahgal","ticcku@gamil.com",18,"lucknow");
// const user2 = createUser("priya","sahgal","ticcku@gamil.com",18,"lucknow");
// const user3 = createUser("Abhay","sahgal","ticcku@gamil.com",18,"lucknow");

// // ab mai soochta hu user ke pass ek aur method hona chiye 

// console.log(user1.sing())
// console.log(user3.about())


// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// const obj1 = {
//     key1:"value1",
//     key2:"value2"
// }
// const obj2 = {
//     key3:"value3"
// }

// console.log(obj1.key1);  // sahi 
// console.log(obj1.key2);  // sahi 
// console.log(obj2.key3);  // sahi 
// console.log(obj2.key1);  // galat 

// isko sahi karne ke liye 

// obj2 ke pass na mile tho vo obj1 se le le 

// const obj1 = {
//     key1:"value1",
//     key2:"value2"
// }
// tho is tarah se objecct create karenge 
// const obj2 = Object.create(obj1);
//     obj2.key3 = "value3";

// console.log(obj2.key1);  // object1 se value le le raha hai 

// object2 ka __proto__ ham yaha obj1 set kar diye hai 
// isko aise deak sakte hai 
// console.log(obj2.__proto__) ;
// javascript ko jo chij apne block me nahi milta hai vo apne __proto__ me jaakar check karta hai 

// offical ecmascript documnetation 

// __proto__ , [[prototype]]  // same hai dono 

// prototype ye bilkul different hai 

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//                                                  prototype

// function hello(){
//     console.log("hello world");
// }

// javascript fuction ===> function + object // ye dono chij hota hai 

// console.log(hello.name);   // ye hame function ka name deta hai 

// you can add your own properties 

// hello.myownproperty = "very unique value";    // jaisse ham same object me koi value ko store karte hai 
// console.log(hello.myownproperty);

// name peroperty ==> tells function name 

// function provides more usefull properties 

// function hame dete hai free space matlab hame 
// ek blank  {} object dete hai 
// {}   ===>  is callled prototype 

// console.log(hello.prototype);  // ye constructor deta hai

// only function provides prototype properties 

// ab prototype me store karne k liye ye karte hai 
// hello.prototype.keyunique="value unique";
// console.log(hello.prototype);
// hello.prototype.sing = function(){
//      console.log("la la la")
// }
// console.log(hello.prototype);
// hello.prototype.sing();

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//                                                new keyword 

// function createUser(firstname,age){
    // this.firstname = firstname;
    // this.age = age;
// }

// const user1 = new createUser("Abhishek",18);
// console.log(user1);   // ye hamara object ban jaat hai 

// new keyword 
// 1=> empty object  -- this = {}
// 2=> return this 
// 3 =>  ye khud ye proto wla kaam kar deta hai 

// -------------------------------------------------------------------------------------

// constructor function 
// function CreateUser(fistname,lastname,email,age,address){  
//     this.firstname = fistname;
//     this.lastname = lastname;
//     this.email = email;
//     this.age = age;
//     this.address = address;
// }

// CreateUser.prototype.about = function(){
//     return `${this.firstname} is ${this.age} years old. `

// };
// CreateUser.prototype.is18 = function(){
//      return this.age>=18;

// };
// CreateUser.prototype.sing= function(){
//        return "la la la ";

// };


// const user1 = new CreateUser("Abhishek","sahgal","ticcku@gamil.com",18,"lucknow");
// const user2 = new CreateUser("priya","sahgal","ticcku@gamil.com",18,"lucknow");
// const user3 = new CreateUser("Abhay","sahgal","ticcku@gamil.com",18,"lucknow");

// // ab mai soochta hu user ke pass ek aur method hona chiye 

// console.log(user1.sing())
// console.log(user3.about())

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//                                            class keyword 

// 2015 me class aaya 
// class kare fake 

// class CreateUser{
//     constructor(firstname,lastname,email,age,address){
//             this.firstname = firstname;
//             this.lastname = lastname;
//             this.email = email;
//             this.age = age;
//             this.address = address;
//     }
//     about(){
//     return `${this.firstname} is ${this.age} years old. `
        
//     };
//     is18(){
//      return this.age>=18;

//     };
//     sing(){
//        return "la la la ";

//     };
// };

// const user1 = new CreateUser("Abhishek","sahgal","ticcku@gamil.com",18,"lucknow");
// // new keyword se hi call karna hoga 

// console.log(user1.firstname);
// console.log(user1.sing());
// console.log(user1);

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// extends

// class Animal {
//     constructor(name,age){
//         this.name = name;
//         this,age = age;
//     }
//     eat(){
//         return `${this.name} is eating`;
//     };
//     isSuperCute(){
//         return this.age <= 1;
    
//     };
    

// }
// const animal1 = new Animal("cat",1);
// console.log(animal1);
// console.log(animal1.eat());
// console.log(animal1.isSuperCute());

//dog class 

// class Dog{
//     constructor(name,age){
//         this.name = name;
//         this,age = age;
//     }
//     eat(){
//         return `${this.name} is eating`;
//     };
//     isSuperCute(){
//         return this.age <= 1;
    
//     };
// }

// const tommy = new Dog("tom",3);
// console.log(tommy);

// bilkul ye same code hai 
// iske place per ye kar sakte hai 

// class Dog extends Animal{

// }

// const tommy = new Dog("tom",3);
// console.log(tommy);

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// closures 

// function can return function 

// function outerFunction(){
//     function innerFunction(){
//         console.log("Hello world")
//     }
//     return innerFunction;
// }

// const ans = outerFunction();
// ans();