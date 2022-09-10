// method 1
// function add()
// {
//     console.log("This is addition module");
// }

// var a = 20;

// module.exports.addition = add;
// module.exports.a= a;


// method 2
module.exports={
    add:function(){
        console.log("This is addition module");
    },
    a:20
}