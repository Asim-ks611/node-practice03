//DATA TYPES 1) PRIMITIVE. 2)Composite Types.
/*
✨ PRIMITIVE DATA TYPES:
🎇 1. NUMBERS
🎇 2. BIGINT(1234n)
🎇 3. STRING
🎇 4. BOOLEAN
🎇 5. NULL
🎇 6. UNDEFINED

✨ COMPOSITE/NON-PRIMITIVE DATA TYPES:
🎇 1. OBJECTS
🎇 2. ARRAYS
*/
///// 🟡 NULLISH COALESCING (??) 🟡/////
// Basically the nullish coalescing means that it allianced with nullish values
// Nullish Values : undefined, null
// Falsy Values : 0,false, NaN, (null and undefined)
// console.log(0 || 10); // 10
// console.log(undefined || 10); // 10
// console.log(null || 10); // 10
// console.log(NaN || 10); // 10
// console.log(false || 10); // 10
// console.log(true || 10); // true

// console.log(0 ?? 10); // 0
// console.log(undefined ?? 10); // 10
// console.log(null ?? 10); // 10
// console.log(NaN ?? 10); // NaN
// console.log(false ?? 10); // false
// console.log(true ?? 10); // true

//////////////////////////////////////////////////////////////////////

///////// 🟡 JAVASCRIPT ARITHEMATIC OPERATION AND TYPE-COERCION🟡 /////////////
/* 
console.log(isNaN("hello")) // true
console.log(isNaN("1")) //false , JS converted string into number

//// 1️⃣ SUBTRACTION /////
console.log(2-"2","2"-"2") // 0, 0
console.log(1-true) // 0

//// 2️⃣ MULTIPLICATION /////
console.log(2*"2","2"*"2") // 4, 4
console.log(true*2) // 2

//// 3️⃣ DIVISION /////
console.log(2/"2","2"/"2") // 1, 1

//// 4️⃣ ADDITION /////
console.log(2+"2","2"+"2") // 22, 22 : EXCEPTION WITH ADDITION (A number on addition to string will be treated as string in JS
console.log(true+"2")  // true2 : as true = 1 and on addition trated as "true"
console.log(true+2) // 3
 */
//////////////////////////////// //////////////////////////////// //////////////////////////////// ////////////////////////////////

/////////////////// 🟡HOISTING🟡 //////////////////

//// 1️⃣ FUNCTION HOISTING /////
// The advantages of hoisting is that it lets you use a function before you declare it in your code.
// To avoid hoisting, you can run javascript in strict mode using “use strict” on top of the code.
// catName("Tiger");
function catName(name){
    console.log("My cat's name is " + name); // "My cat's name is Tiger"
  }
  
  {
    var  newNum = 5
  // console.log(newNum) // 5 if no 'us strict' mode else 'not defined' 
  }  
  
  // console.log(abc); //undefined
  var abc = 5
   
  //// 2️⃣ VARIABLE HOISTING /////
  hoistedVariable = 3;
  // console.log(hoistedVariable); // outputs: 3 ,even when the variable is declared after it is initialized	
  var hoistedVariable
  
  // console.log(num); // Returns 'undefined' from hoisted var declaration (not 6)
  var num; // Declaration
  num = 6; // Initialization
  // console.log(num); // Returns 6 after the line with initialization is executed.
  
  // console.log(num1); // Returns 'undefined' from hoisted var declaration (not 6)
  var num1 = 6; // Initialization and declaration.
  // console.log(num1); // Returns 6 after the line with initialization is executed.
  
  ////3️⃣ LET AND CONST HOISTING ////
  //Variables declared with let and const are also hoisted but, unlike var, are not initialized with a default value.
  //An exception will be thrown if a variable declared with let or const is read before it is initialized.
  // console.log(num2); // Throws ReferenceError exception as the variable value is uninitialized
  let num2 = 6; // Initialization
  
  ////4️⃣ CLASS HOISTING /////
  // Classes defined using a class declaration are hoisted, which means that JavaScript has a reference to the class.
  //However the class is not initialized by default, so any code that uses it before the line in which it is initialized is executed will throw a ReferenceError.
  
  
  ////////////////// 🟡 JAVASCRIPT WITH BASIC ARITHEMATIC OPERATION🟡 //////////////////////////////////
  /* 
  console.log(isNaN("hello")) // true
  console.log(isNaN("1")) //false , JS converted string into number
  
  //// 1️⃣ SUBTRACTION /////
  console.log(2-"2","2"-"2") // 0, 0
  console.log(1-true) // 0
  
  //// 2️⃣ MULTIPLICATION /////
  console.log(2*"2","2"*"2") // 4, 4
  console.log(true*2) // 2
  
  //// 3️⃣ DIVISION /////
  console.log(2/"2","2"/"2") // 1, 1
  
  //// 4️⃣ ADDITION /////
  console.log(2+"2","2"+"2") // 22, 22 : EXCEPTION WITH ADDITION (A number on addition to string will be treated as string in JS
  console.log(true+"2")  // true2 : as true = 1 and on addition trated as "true"
  console.log(true+2) // 3
   */
  //////////////////////////////// //////////////////////////////// //////////////////////////////// ////////////////////////////////

  /////////////////////////// 🟡CALL METHOD🟡 /////////////////////////////
// IT INVOKES METHOD DIRECTLY
let person = {
    firstName : "Asim",
    lastName : "Shah",
}
function fullName(state){
    console.log(`${this.firstName} ${this.lastName} Belongs to ${state}`);
}
let students = {
    firstName: "Sachin",
    lastName : "Tendulakar",
}
// fullName.call(students,"delhi")
// fullName.call(person,"punjab")

//////////////////////// 🟡APPLY METHOD 🟡//////////////////////////////
// THE ONLY DIFFERENCE IS THE WAY TO PASS THE ARGUMENTS AS ARRAY LIST
//fullName.apply(person,["UttarPradesh"])

////////////////////// 🟡BIND METHOD🟡 ///////////////////////////////
// BIND DOESNT CALL THE METHOD DIRECTLY BUT IT RETURNS A FUNCTION 
let myFullName = fullName.bind(students,"Haryana")
// myFullName()



/////////////////////////////////////////////////////////////////////

/////////////////////----🟡 CLOSURES 🟡----/////////////////////////
//A closure is a function having access to the parent scope,
//*EVEN AFTER THE PARENT FUNCTION HAS CLOSED*.

////// 1.
// let count = ()=>{
//    for (var i = 0; i < 5; i++) {
//     ((x)=>{
//         setTimeout(() => {
//             console.log(x);
//         }, 1000*i) 
//     }) (i)
//    }
// }
// count()

////// 2. Create a counter function with private variable
function increment() {
    var count = 0; //private variable
    const add = () => {
      count = count + 1;
      return count;
    };
    return add;
  }
  let counter = increment()
  // console.log(counter());
  // console.log(counter());
  // console.log(counter());
  
  // for (var i = 0; i <= 5; i++) {
  //     function timer(x){
  //       setTimeout(() => {
  //         console.log(x);
  //       }, 1000 * x)
  //     }
  //     timer(i)
  // }
  
  //////// Creating function with private variable using Class ///////
  // class Counter{
  //   #count; ///PRIVATE FIELD
  //   constructor(){
  //     this.#count = 0
  //   }
  //   add(){ this.#count +=1}
  //   getCount(){return console.log(this.#count)}
  // }
  // let mycounter = new Counter()
  // mycounter.add()
  // mycounter.add()
  // mycounter.getCount()

  /////// CLOSURES WITH BIND //////
function f2() {
    for (var i = 0; i < 3; i++) {
        setTimeout(
            ((x)=>console.log(x)).bind(null,i)
        , 1000 * i);
    }
}
// f2()
  /////////////////////////////////////////////////////

  /////////////////🟡 ARRAY POLYFILL 🟡///////////////////  
class MyArray {
    constructor() {
        this.length = 0;
        this.data = {}
    }
    get(index){
        return this.data[index]
    }
    push(value){
        this.data[this.length] = value
        this.length++
        return this.length
    }
    pop(){
        delete this.data[this.length-1]
        this.length--
    }
    delete(index){
        for(let i=index;i<this.length;i++){
            this.data[i] = this.data[i+1]
        }
        delete this.data[this.length-1]
        this.length--
    }

}

// let newArray = new MyArray
// newArray.push(5)
// newArray.push(true)
// newArray.push("asim")
// newArray.push("shah")
// newArray.push(10)
// newArray.pop()
// newArray.delete(1)
// console.log(newArray)
// console.log(newArray.length)

/////////////////////////////////////////////////////////////

////////////////////// 🟡 CALLBACKS 🟡 ///////////////////////
const posts = [
    {title:"post 1",body : "body 1"},
    {title:"post 2",body : "body 2"},
    {title:"post 3",body : "body 3"},
]

function getPosts(){
    let output = ''
    setTimeout(() => {
        posts.forEach((post)=>{
            output+=`<li>${post.title}</li>`
        })
        document.getElementById('orderList').innerHTML = output
    }, 1000);
}
// getPosts()

function addPost(post,cb){
setTimeout(() => {
    posts.push(post)
    cb()
}, 2000);
}
// addPost({title:"post 4",body : "body 4"},getPosts)
///////////////////////////////////////////////////////////////

//////////////////// 🟡 PROMISES 🟡 //////////////////////////
// let ul =  document.getElementById('orderList');
function getPostsPromise(){
    let output = ''
    setTimeout(() => {
        posts.forEach((post)=>{
            output+=`<li>${post.title}</li>`
        })
       ul.innerHTML = output
    }, 2000);
}
// getPostsPromise()

function addPostPromise(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      error = false;
      if (!error) {
        resolve();
      } else {
        reject("Error: Something Went Wrong");
      }
    }, 2000);
  });
}
// addPostPromise({ title: "post 4", body: "body 4" }) /// no need to callback we will use .then as addPost returning a promise
//   .then(() => getPosts())
//   .catch((err) => console.log(err));

// function showMyName(name,time){
//     return new Promise((resolve)=>{
//         setTimeout(() => {
//             resolve(console.log(name))
//         }, time);
//     })
// }
//showMyName("Asim Shah",2000)

//// PROMISE METHODS ////
// let p1 =new Promise((resolve,reject)=>{setTimeout( function() {
//     resolve("Success p1!")
//   }, 2040)})
// let p2 = new Promise((resolve,reject)=>{setTimeout( function() {
//     resolve("Success p2!")
//   }, 2030)})
// let p3 =  new Promise((resolve,reject)=>{setTimeout( function() {
//     resolve("Success p3!")
//   }, 2020)})
// let p4 =  new Promise((resolve,reject)=>{setTimeout( function() {
//     reject("Rejected p4!")
//   }, 2010)})
// let p5 =  new Promise((resolve,reject)=>{setTimeout( function() {
//     // resolve("Success a5!")
//     resolve("Success p5")
//   }, 2050)})

// Promise.all([p1,p2,p3,p4,p5]).then(value=>console.log(value))
/* WITH .CATCH =>['Success p1!','Success p2!','Success p3!',undefined,'Success p5']
WITHOUT .CATCH => gives error
*/

// Promise.any([p1,p2,p3,p4,p5]).then(value=>console.log(value))
/* Success p3! */

// Promise.race([p1,p2,p3,p4,p5]).then(value=>console.log(value))
/* 'ERR_UNHANDLED_REJECTION' */

// Promise.allSettled([p1,p2,p3,p4,p5]).then(value=>console.log(value))
/*
 [
  { status: 'fulfilled', value: 'Success p1!' },
  { status: 'fulfilled', value: 'Success p2!' },
  { status: 'fulfilled', value: 'Success p3!' },
  { status: 'rejected', reason: 'Rejected p4!' },
  { status: 'fulfilled', value: 'Success p5' }
]
*/
/////////////////////////////////////////////////////////////////

//////////////// 🟡POLYFILL FOR PROMISE.ALL()🟡///////////////

function myPromiseAll(promises){
    let promiseArr = [];
    return new Promise((resolve,reject)=>{
        promises.forEach((p,i)=>{
            p.then(res=>{
            promiseArr.push({ status: 'fulfilled', value:res })
            if(i===promises.length-1){
                resolve(promiseArr)
            }
        }).catch((err)=>{
            promiseArr.push({ status: 'rejected', reason: err })
        })
    })
})}
// myPromiseAll([p1,p2,p3]).then(value=>console.log(value))
 
/*  //OUTPUT ::::
 [
  { status: 'fulfilled', value: "I'm Resolve" },
  { status: 'rejected', reason: "I'm Reject" },
  { status: 'fulfilled', value: "I'm Resolve" }
]
*/
//////////////////////////////////////////////////////////////////

//////////////////// 🟡 ASYNC AWAIT 🟡 /////////////////////////

async function getUser(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const usersArray = await response.json()
    console.log(usersArray);
    let userNames = ""
    usersArray.forEach(post=>{
        userNames+=`<li><span style="color:red;">Username: </span>${post.name}, <span style="color:red;">Email: </span>${post.email}</li>`
    })
    ul.innerHTML=userNames
}

// getUser()


///////////////////////////////////////////////////////////////

//////////////// 🟡COMPOSE AND PIPE🟡 //////////////////////////
// BY DEFAULT COMPOSE EXECUTE RIGHT TO LEFT AND PIPE LEFT TO RIGHT
// Also pipe and compose aren't native functions. We need to create in order to utilize them.

const addTwo = x => x+2
const double = x => x*2
const squares = x => x**2

const compose = (...functions) =>{
    return (args)=>{
        return functions.reduceRight((arg,fn)=>fn(arg),args)
    }
}
const pipe = (...functions) =>{
    return (args)=>{
        return functions.reduce((arg,fn)=>fn(arg),args)
    }
}
// console.log(compose(double,squares,addTwo)(2)); // 2+2->4^(2)->16*2 = 32
// console.log(pipe(double,squares,addTwo)(2)); // 2*2->4^(2)->16+2 = 18

////////////////////////////////////////////////////////////////

