// for creating a object in javascript

// var users = {name:"Salman Shaikh",age:27,email:"salmanshaikh007780@gmail.com"}

// print all the objects
// console.log(users);

// print only select keys
// console.log(users.name);

// for creating anonymous functions

// var person = function(){
//     console.log("this an anonymous function")
// }

// person()

// var person = function(a,b)
// {
//     var c = a + b;
//     console.log("Total of a + b:"+c);
// }

// person(10,20);

// arrow function

// var users = function(){
//     console.log("this an arrow function")
// }

// users()

// var users =()=>console.log("this an arrow function")


// users()

// var users =(a)=>console.log("this an arrow function:"+a)


// users(5)

var users =(a,b)=>{
    var c = a + b; 
    console.log("this an arrow function "+a+" and "+b+":"+c);
}

users(4,5)
var name = "Salman Shaikh";
module.exports.name=name;

