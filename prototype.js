var student = function(){
    this.name = "salman";
    this.age = 27;
    this.email = "salman@gmail.com";
}

student.prototype=function(){
    this.address = "Mumbai";
}
var stud = new student();
console.log(stud);