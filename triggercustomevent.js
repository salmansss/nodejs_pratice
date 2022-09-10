const events = require("events");
const event = new events.EventEmitter();

// event.on('click',(n1)=>console.log(n1));
// event.emit('click',"First event code done here");

// event.on('click',(n1,n2)=>console.log(n1*n2));
// event.emit('click',4,5);

const first_event = function(n1,n2){
    console.log(n1*n2);
    event.emit('click2');
    event.emit('click3');
}

const second_event = function(){
    console.log("Second event");
}

const third_event = function(){
    console.log("Third event");
}

event.on('click2',second_event);
event.on('click3',third_event);
event.on('click',first_event);
event.emit('click',4,5);




// code javascript

// $("#button").on('click',function(){
//     console.log("First event");
// });